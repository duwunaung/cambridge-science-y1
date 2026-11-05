/*************************************************************************
 * 5. MAIN APPLICATION CONTROLLER
 * Core state + level locking live here; the other features are added to
 * ScienceApp.prototype by the files in js/app/ (loaded after this one).
 *************************************************************************/
class ScienceApp {
  constructor() {
    this.storage = new BackupStorageEngine();
    this.sfx = new SoundEffects();
    this.tempUploadedImageData = null;

    // Active Quiz Session State
    this.activeQuiz = {
      unitId: "u1",
      level: "focus",
      questions: [],
      currentIndex: 0,
      correctCount: 0,
      pointsEarned: 0,
      answeredCurrent: false
    };

    this.initState();
    this.populateArtSelector();
    this.renderAll();
  }

  getDefaultProgressObject() {
    const prog = {};
    UNITS_META.forEach((u) => {
      prog[u.id] = {
        focus: { stars: 0, bestScore: 0, completed: false },
        practice: { stars: 0, bestScore: 0, completed: false },
        challenge: { stars: 0, bestScore: 0, completed: false },
        bonus: { stars: 0, bestScore: 0, completed: false }
      };
    });
    return prog;
  }

  initState() {
    const saved = this.storage.loadState();
    if (saved && saved.questions && saved.progress) {
      this.state = saved;
      // Auto-merge / upgrade default questions so all 162 built-in questions are available
      // while preserving any custom questions added by the teacher!
      const customQuestions = this.state.questions.filter((q) => q.isCustom);
      const defaultClone = JSON.parse(JSON.stringify(DEFAULT_QUESTIONS));
      this.state.questions = [...customQuestions, ...defaultClone];

      if (!this.state.quizMode) this.state.quizMode = "all";
      if (!Array.isArray(this.state.customHtmlApps)) {
        this.state.customHtmlApps = [
          {
            id: "sample_u1_bonus",
            unitId: "u1",
            slot: "bonus",
            lockRule: "after_practice",
            title: SAMPLE_HTML_TEMPLATES.living_sort.title,
            htmlCode: SAMPLE_HTML_TEMPLATES.living_sort.code,
            createdAt: new Date().toLocaleDateString()
          },
          {
            id: "sample_u6_bonus",
            unitId: "u6",
            slot: "bonus",
            lockRule: "after_practice",
            title: SAMPLE_HTML_TEMPLATES.magnet_lab.title,
            htmlCode: SAMPLE_HTML_TEMPLATES.magnet_lab.code,
            createdAt: new Date().toLocaleDateString()
          }
        ];
      }

      // Ensure all 6 units exist in progress with bonus slot
      const defProg = this.getDefaultProgressObject();
      UNITS_META.forEach((u) => {
        if (!this.state.progress[u.id]) {
          this.state.progress[u.id] = defProg[u.id];
        } else if (!this.state.progress[u.id].bonus) {
          this.state.progress[u.id].bonus = { stars: 0, bestScore: 0, completed: false };
        }
      });
      this.storage.saveState(this.state);
    } else {
      this.state = {
        questions: JSON.parse(JSON.stringify(DEFAULT_QUESTIONS)),
        customHtmlApps: [
          {
            id: "sample_u1_bonus",
            unitId: "u1",
            slot: "bonus",
            lockRule: "after_practice",
            title: SAMPLE_HTML_TEMPLATES.living_sort.title,
            htmlCode: SAMPLE_HTML_TEMPLATES.living_sort.code,
            createdAt: new Date().toLocaleDateString()
          },
          {
            id: "sample_u6_bonus",
            unitId: "u6",
            slot: "bonus",
            lockRule: "after_practice",
            title: SAMPLE_HTML_TEMPLATES.magnet_lab.title,
            htmlCode: SAMPLE_HTML_TEMPLATES.magnet_lab.code,
            createdAt: new Date().toLocaleDateString()
          }
        ],
        progress: this.getDefaultProgressObject(),
        totalPoints: 0,
        teacherUnlockAll: false,
        quizMode: "all",
        lastUpdated: new Date().toISOString()
      };
      this.storage.saveState(this.state);
    }

    // Listen for postMessage from Custom Pasted HTML Apps!
    window.addEventListener("message", (event) => {
      const data = event.data;
      if (data && data.type === "QUIZ_COMPLETE") {
        const stars = Math.min(3, Math.max(1, parseInt(data.stars || 3, 10)));
        const score = parseInt(data.score || 100, 10);
        this.completeHtmlAppLevel(stars, score);
      }
    });
  }

  changeQuizMode(modeVal) {
    this.state.quizMode = modeVal;
    this.persistState();
    this.renderUnitsMap();
    const modeLabels = {
      all: "🎯 မေးခွန်းအားလုံး ဖြေဆိုမည့်ပုံစံ (9 Questions per Level)",
      quick5: "⚡ ကျပန်း (၅) ပုဒ် အမြန်ဖြေဆိုမည့်ပုံစံ (Quick 5 Random)",
      practice_free: "📖 အမှတ်မတွက်ဘဲ လွတ်လပ်စွာ လေ့ကျင့်မည့်ပုံစံ (Practice Mode)"
    };
    this.showToast(modeLabels[modeVal] || "Quiz mode updated");
  }

  reloadStateFromStorage() {
    this.initState();
    this.renderAll();
  }

  persistState() {
    const ts = this.storage.saveState(this.state);
    const badge = document.getElementById("lastSavedTimestamp");
    if (badge) {
      const d = new Date(ts);
      badge.textContent = `နောက်ဆုံး အလိုအလျောက် သိမ်းဆည်းချိန်: ${d.toLocaleTimeString()}`;
    }
  }

  /* ---------------- LEVEL LOCKING & PROGRESSION LOGIC ---------------- */
  isLevelUnlocked(unitId, levelKey) {
    if (this.state.teacherUnlockAll) return true;

    const unitIndex = UNITS_META.findIndex((u) => u.id === unitId);
    // Check if Unit itself is unlocked:
    // Unit 1 is always unlocked. Unit N requires Unit N-1's Focus & Practice completed (or at least 2 stars in previous unit)
    if (unitIndex > 0) {
      const prevUnitId = UNITS_META[unitIndex - 1].id;
      const prevProg = this.state.progress[prevUnitId];
      const prevPassed = prevProg.focus.completed && prevProg.practice.completed;
      if (!prevPassed) return false;
    }

    const unitProg = this.state.progress[unitId];
    if (levelKey === "focus") return true;
    if (levelKey === "practice") return unitProg.focus.completed;
    if (levelKey === "challenge") return unitProg.practice.completed;
    if (levelKey === "bonus") {
      const appObj = this.getCustomHtmlAppFor(unitId, "bonus");
      if (appObj && appObj.lockRule === "always_open") return true;
      return unitProg.focus.completed && unitProg.practice.completed;
    }
    return false;
  }

  getCustomHtmlAppFor(unitId, slotKey) {
    if (!this.state.customHtmlApps) return null;
    return this.state.customHtmlApps.find((a) => a.unitId === unitId && a.slot === slotKey) || null;
  }

  calculateStarsFromPercentage(pct) {
    if (pct === 100) return 3;
    if (pct >= 70) return 2;
    if (pct >= 50) return 1;
    return 0;
  }

  getQuestionsFor(unitId, levelKey) {
    return this.state.questions.filter((q) => q.unitId === unitId && q.level === levelKey);
  }
}
