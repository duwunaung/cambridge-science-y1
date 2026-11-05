/* Interactive quiz engine: start, render, answer, score, results. */
Object.assign(ScienceApp.prototype, {
  /* ---------------- INTERACTIVE QUIZ ENGINE ---------------- */
  startQuiz(unitId, levelKey) {
    if (!this.isLevelUnlocked(unitId, levelKey) && this.state.quizMode !== "practice_free") {
      this.showToast("🔒 ရှေ့အဆင့်ကို အနည်းဆုံး ကြယ် (၁) လုံးရအောင် အရင်ဖြေဆိုပေးပါ။");
      return;
    }

    const fullPool = this.getQuestionsFor(unitId, levelKey);
    if (!fullPool || fullPool.length === 0) {
      this.showToast("ဤအဆင့်တွင် မေးခွန်းမရှိသေးပါ။ ဆရာ့မေးခွန်းဘဏ်မှ ထည့်သွင်းနိုင်ပါသည်။");
      return;
    }

    let selectedPool = [...fullPool];
    if (this.state.quizMode === "quick5" && selectedPool.length > 5) {
      // Shuffle and pick 5 random questions
      for (let i = selectedPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [selectedPool[i], selectedPool[j]] = [selectedPool[j], selectedPool[i]];
      }
      selectedPool = selectedPool.slice(0, 5);
    }

    this.activeQuiz = {
      unitId,
      level: levelKey,
      questions: selectedPool,
      currentIndex: 0,
      correctCount: 0,
      pointsEarned: 0,
      answeredCurrent: false
    };

    document.getElementById("viewMap").classList.add("hidden");
    document.getElementById("viewTeacher").classList.add("hidden");
    document.getElementById("viewQuiz").classList.remove("hidden");

    this.renderCurrentQuestion();
  },

  getIllustrationHtml(q) {
    if (q.customImage) {
      return `<img src="${q.customImage}" alt="Question Visual" class="max-h-[200px] max-w-full object-contain rounded-xl shadow-sm" />`;
    }
    const artObj = SCIENCE_ART[q.artKey] || SCIENCE_ART.plant_parts;
    return artObj.svg;
  },

  renderCurrentQuestion() {
    const aq = this.activeQuiz;
    const q = aq.questions[aq.currentIndex];
    const unitMeta = UNITS_META.find((u) => u.id === aq.unitId);

    const levelLabels = {
      focus: "Level 1: Focus (အခြေခံ)",
      practice: "Level 2: Practice (လေ့ကျင့်ခန်း)",
      challenge: "Level 3: Challenge (စိန်ခေါ်မှု)"
    };

    document.getElementById("quizUnitBadge").textContent = `Unit ${unitMeta.number}: ${unitMeta.titleEn}`;
    document.getElementById("quizLevelBadge").textContent = levelLabels[aq.level] || aq.level;
    document.getElementById("quizLiveScore").textContent = aq.pointsEarned;
    document.getElementById("quizCurrentIndex").textContent = aq.currentIndex + 1;
    document.getElementById("quizTotalCount").textContent = aq.questions.length;

    const progressPct = ((aq.currentIndex + 1) / aq.questions.length) * 100;
    document.getElementById("quizProgressBar").style.width = `${progressPct}%`;

    // Render visual illustration
    document.getElementById("quizIllustrationContainer").innerHTML = this.getIllustrationHtml(q);
    document.getElementById("quizImageCaption").textContent = q.caption || q.topic || "Cambridge Primary Science";

    // Question Texts
    document.getElementById("quizTopicTag").textContent = q.topic || unitMeta.titleEn;
    document.getElementById("quizQuestionEn").textContent = q.questionEn;

    const mmBox = document.getElementById("quizQuestionMm");
    if (q.questionMm && q.questionMm.trim() !== "") {
      mmBox.classList.remove("hidden");
      mmBox.innerHTML = `<span class="text-base leading-none mt-0.5">💡</span><span>${q.questionMm}</span>`;
    } else {
      mmBox.classList.add("hidden");
    }

    // Render Option Buttons
    const optContainer = document.getElementById("quizOptionsContainer");
    const letters = ["A", "B", "C", "D"];
    optContainer.innerHTML = q.options.map((optText, idx) => `
      <button id="quizOptBtn_${idx}" onclick="app.selectAnswer(${idx})"
        class="btn-3d text-left p-3.5 rounded-2xl border-2 border-slate-200 bg-white hover:bg-sky-50 hover:border-sky-300 transition flex items-center gap-3 group">
        <span class="w-8 h-8 rounded-xl bg-sky-100 text-sky-800 font-extrabold text-sm flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition">
          ${letters[idx] || idx + 1}
        </span>
        <span class="text-sm sm:text-base font-bold text-slate-700 mm-text">${optText}</span>
      </button>
    `).join("");

    // Hide feedback drawer
    document.getElementById("quizFeedbackBox").classList.add("hidden");
    aq.answeredCurrent = false;
  },

  selectAnswer(selectedIndex) {
    const aq = this.activeQuiz;
    if (aq.answeredCurrent) return;
    aq.answeredCurrent = true;

    const q = aq.questions[aq.currentIndex];
    const isCorrect = selectedIndex === q.correctIndex;

    if (isCorrect) {
      aq.correctCount += 1;
      aq.pointsEarned += 10;
      this.sfx.playCorrect();
    } else {
      this.sfx.playWrong();
    }

    document.getElementById("quizLiveScore").textContent = aq.pointsEarned;

    // Style option buttons
    q.options.forEach((_, idx) => {
      const btn = document.getElementById(`quizOptBtn_${idx}`);
      if (!btn) return;
      btn.disabled = true;
      if (idx === q.correctIndex) {
        btn.className = "text-left p-3.5 rounded-2xl border-3 border-emerald-500 bg-emerald-50 text-emerald-900 flex items-center gap-3 shadow-sm";
      } else if (idx === selectedIndex && !isCorrect) {
        btn.className = "text-left p-3.5 rounded-2xl border-3 border-rose-500 bg-rose-50 text-rose-900 flex items-center gap-3 opacity-90";
      } else {
        btn.className = "text-left p-3.5 rounded-2xl border-2 border-slate-200 bg-slate-50 text-slate-400 flex items-center gap-3 opacity-60";
      }
    });

    // Show Feedback Box
    const fbBox = document.getElementById("quizFeedbackBox");
    const fbIcon = document.getElementById("quizFeedbackIcon");
    const fbTitle = document.getElementById("quizFeedbackTitle");
    const fbExp = document.getElementById("quizFeedbackExplanation");
    const nextBtn = document.getElementById("quizNextBtn");

    fbBox.classList.remove("hidden");
    if (isCorrect) {
      fbBox.className = "mt-5 rounded-2xl p-4 border-2 bg-emerald-50 border-emerald-300 animate-pop";
      fbIcon.textContent = "🌟";
      fbTitle.textContent = "မှန်ကန်ပါသည်! Super Scientist! (+10 pts)";
      fbTitle.className = "font-extrabold text-sm sm:text-base text-emerald-800 mm-text";
    } else {
      fbBox.className = "mt-5 rounded-2xl p-4 border-2 bg-rose-50 border-rose-300 animate-pop";
      fbIcon.textContent = "💡";
      fbTitle.textContent = `အဖြေမှန်မှာ - "${q.options[q.correctIndex]}" ဖြစ်ပါသည်။`;
      fbTitle.className = "font-extrabold text-sm sm:text-base text-rose-800 mm-text";
    }

    fbExp.textContent = q.explanation || "Keep practising Cambridge Primary Science!";
    nextBtn.innerHTML = aq.currentIndex + 1 < aq.questions.length
      ? `<span>နောက်တစ်ပုဒ် (Next Question)</span> <span>➡️</span>`
      : `<span>ရလဒ်ကြည့်မည် (See Results & Stars)</span> <span>🏆</span>`;
  },

  nextQuestion() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    const aq = this.activeQuiz;
    if (aq.currentIndex + 1 < aq.questions.length) {
      aq.currentIndex += 1;
      this.renderCurrentQuestion();
    } else {
      this.finishQuizLevel();
    }
  },

  speakCurrentQuestion() {
    if (!window.speechSynthesis) {
      this.showToast("⚠️ ဤ Browser တွင် အသံထွက်စနစ် မပံ့ပိုးပါ။");
      return;
    }
    const aq = this.activeQuiz;
    const q = aq.questions[aq.currentIndex];
    if (!q) return;
    window.speechSynthesis.cancel();
    const cleanOpts = q.options.map((o, idx) => `Option ${["A", "B", "C", "D"][idx]}: ${o.replace(/\([^)]*\)/g, "").trim()}`).join(". ");
    const utter = new SpeechSynthesisUtterance(`${q.questionEn} ... ${cleanOpts}`);
    utter.lang = "en-US";
    utter.rate = 0.88;
    window.speechSynthesis.speak(utter);
  },

  finishQuizLevel() {
    const aq = this.activeQuiz;
    const totalQ = aq.questions.length;
    const pct = Math.round((aq.correctCount / totalQ) * 100);
    const starsEarned = this.calculateStarsFromPercentage(pct);

    // Save progress if higher
    const uProg = this.state.progress[aq.unitId][aq.level];
    if (starsEarned > uProg.stars) uProg.stars = starsEarned;
    if (pct > uProg.bestScore) uProg.bestScore = pct;
    if (starsEarned >= 1) uProg.completed = true;

    this.state.totalPoints = (this.state.totalPoints || 0) + aq.pointsEarned;
    this.persistState();
    this.updateHeaderStats();

    this.sfx.playFanfare(starsEarned);

    // Populate Result Modal
    const unitMeta = UNITS_META.find((u) => u.id === aq.unitId);
    document.getElementById("resultBadgeTop").textContent = `Unit ${unitMeta.number}: ${unitMeta.titleEn} • ${aq.level.toUpperCase()}`;

    const heading = document.getElementById("resultHeading");
    if (starsEarned === 3) {
      heading.textContent = "🎉 အမှတ်ပြည့် ကြယ်သုံးလုံး ရရှိပါသည်!";
    } else if (starsEarned === 2) {
      heading.textContent = "👏 အလွန်ကောင်းပါသည်! ကြယ်နှစ်လုံး ရရှိပါသည်!";
    } else if (starsEarned === 1) {
      heading.textContent = "👍 အောင်မြင်ပါသည်! နောက်တစ်ဆင့် သော့ပွင့်သွားပါပြီ!";
    } else {
      heading.textContent = "💪 နောက်တစ်ကြိမ် ထပ်ကြိုးစားကြည့်ပါဦး!";
    }

    // Render 3 big stars
    let starsHtml = "";
    for (let i = 1; i <= 3; i++) {
      if (i <= starsEarned) {
        starsHtml += `<div class="w-16 h-16 rounded-2xl bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-4xl shadow-md star-anim">⭐</div>`;
      } else {
        starsHtml += `<div class="w-16 h-16 rounded-2xl bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-4xl text-slate-300">☆</div>`;
      }
    }
    document.getElementById("resultStarsRow").innerHTML = starsHtml;
    document.getElementById("resultAccuracyText").textContent = `${pct}% (${aq.correctCount}/${totalQ})`;
    document.getElementById("resultPointsText").textContent = `+${aq.pointsEarned} pts`;

    const msgEl = document.getElementById("resultUnlockMessage");
    const nextBtn = document.getElementById("resultNextLevelBtn");

    if (starsEarned >= 1) {
      msgEl.textContent = "ဂုဏ်ယူပါသည်! နောက်တစ်ဆင့်ကို ဆက်လက်ဖြေဆိုနိုင်ပါပြီ။ ကြယ်သုံးလုံးအပြည့်ရရန်လည်း ပြန်ဖြေနိုင်ပါသည်။";
      nextBtn.classList.remove("hidden");
    } else {
      msgEl.textContent = "နောက်တစ်ဆင့် သော့ပွင့်ရန် အနည်းဆုံး 50% (⭐ ၁ လုံး) ရရှိရပါမည်။ ပြန်လည်ဖြေဆိုကြည့်ပါ။";
      nextBtn.classList.add("hidden");
    }

    document.getElementById("levelResultModal").classList.remove("hidden");
  },

  retryCurrentQuiz() {
    document.getElementById("levelResultModal").classList.add("hidden");
    this.startQuiz(this.activeQuiz.unitId, this.activeQuiz.level);
  },

  goToNextLevelFromModal() {
    document.getElementById("levelResultModal").classList.add("hidden");
    const { unitId, level } = this.activeQuiz;
    if (level === "focus") {
      this.startQuiz(unitId, "practice");
    } else if (level === "practice") {
      this.startQuiz(unitId, "challenge");
    } else {
      // Move to next unit's focus if available
      const idx = UNITS_META.findIndex((u) => u.id === unitId);
      if (idx + 1 < UNITS_META.length) {
        this.startQuiz(UNITS_META[idx + 1].id, "focus");
      } else {
        this.showMap();
      }
    }
  },

  closeResultModalToMap() {
    document.getElementById("levelResultModal").classList.add("hidden");
    this.showMap();
  }
});
