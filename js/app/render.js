/* UI rendering (header, unit map) and view navigation. */
Object.assign(ScienceApp.prototype, {
  /* ---------------- UI RENDERING ---------------- */
  renderAll() {
    this.updateHeaderStats();
    this.renderUnitsMap();
    this.renderTeacherQuestionList();
    this.renderSavedHtmlAppsList();
    this.updateTeacherUnlockUI();
  },

  updateHeaderStats() {
    let totalStars = 0;
    const bonusAppsCount = (this.state.customHtmlApps || []).filter((a) => a.slot === "bonus").length;
    const maxStars = (UNITS_META.length * 3 * 3) + (bonusAppsCount * 3);
    UNITS_META.forEach((u) => {
      const p = this.state.progress[u.id];
      if (p) {
        totalStars += (p.focus.stars || 0) + (p.practice.stars || 0) + (p.challenge.stars || 0) + (p.bonus ? (p.bonus.stars || 0) : 0);
      }
    });
    document.getElementById("headerTotalStars").textContent = totalStars;
    document.getElementById("headerMaxStars").textContent = maxStars;
    document.getElementById("headerTotalPoints").textContent = this.state.totalPoints || 0;

    const totalQBanner = document.getElementById("bannerTotalQuestionsCount");
    if (totalQBanner) totalQBanner.textContent = this.state.questions.length;

    const modeSel = document.getElementById("quizModeSelect");
    if (modeSel && this.state.quizMode) {
      modeSel.value = this.state.quizMode;
    }

    // Custom question count in Backup Modal
    const customCount = this.state.questions.filter((q) => q.isCustom).length;
    const htmlCount = (this.state.customHtmlApps || []).length;
    const badge = document.getElementById("customQCountBadge");
    if (badge) badge.textContent = `${customCount} Custom Qs • ${htmlCount} HTML Apps`;
  },

  updateTeacherUnlockUI() {
    const btn = document.getElementById("toggleUnlockAllBtn");
    const txt = document.getElementById("lockModeStatusText");
    if (this.state.teacherUnlockAll) {
      btn.innerHTML = "🔒 ကျောင်းသားโหมด ပြန်ပိတ်မည်";
      btn.className = "btn-3d bg-rose-500 hover:bg-rose-400 text-white px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap mm-text";
      txt.textContent = "ဆရာ့โหมด (Level အားလုံး သော့ဖွင့်ထားသည်)";
    } else {
      btn.innerHTML = "🔓 အားလုံးသော့ဖွင့်မည်";
      btn.className = "btn-3d bg-amber-400 hover:bg-amber-300 text-slate-900 px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap mm-text";
      txt.textContent = "ကျောင်းသားโหมด (အဆင့်လိုက်သော့ခတ်ထားသည်)";
    }
  },

  toggleTeacherUnlockAll() {
    this.state.teacherUnlockAll = !this.state.teacherUnlockAll;
    this.persistState();
    this.renderAll();
    this.showToast(
      this.state.teacherUnlockAll
        ? "🔓 Level အားလုံးကို သော့ဖွင့်ပေးလိုက်ပါပြီ (Teacher Mode)"
        : "🔒 အဆင့်လိုက် သော့ခတ်စနစ် (Student Mode) သို့ ပြောင်းလိုက်ပါပြီ"
    );
  },

  renderStarIcons(count, sizeClass = "text-base") {
    let html = "";
    for (let i = 1; i <= 3; i++) {
      if (i <= count) {
        html += `<span class="${sizeClass} text-amber-400 drop-shadow-sm">⭐</span>`;
      } else {
        html += `<span class="${sizeClass} text-slate-300 opacity-60">☆</span>`;
      }
    }
    return html;
  },

  renderUnitsMap() {
    const container = document.getElementById("unitsGrid");
    if (!container) return;

    const levelsMeta = [
      { key: "focus", labelEn: "1. Focus", labelMm: "အခြေခံ", badgeColor: "bg-sky-100 text-sky-800" },
      { key: "practice", labelEn: "2. Practice", labelMm: "လေ့ကျင့်ခန်း", badgeColor: "bg-indigo-100 text-indigo-800" },
      { key: "challenge", labelEn: "3. Challenge", labelMm: "စိန်ခေါ်မှု", badgeColor: "bg-purple-100 text-purple-800" }
    ];

    container.innerHTML = UNITS_META.map((unit, idx) => {
      const uProg = this.state.progress[unit.id];
      const unitStars = (uProg.focus.stars || 0) + (uProg.practice.stars || 0) + (uProg.challenge.stars || 0);
      const unitUnlocked = this.isLevelUnlocked(unit.id, "focus");

      const levelButtonsHtml = levelsMeta.map((lvl) => {
        const unlocked = this.isLevelUnlocked(unit.id, lvl.key);
        const lProg = uProg[lvl.key];
        const qCount = this.getQuestionsFor(unit.id, lvl.key).length;
        const attachedHtmlApp = this.getCustomHtmlAppFor(unit.id, lvl.key);

        if (unlocked || (attachedHtmlApp && attachedHtmlApp.lockRule === "always_open")) {
          return `
            <div class="space-y-1">
              <button onclick="app.startQuiz('${unit.id}', '${lvl.key}')"
                class="w-full flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-sky-50 border-2 border-slate-200 hover:border-sky-400 transition group shadow-sm">
                <div class="flex items-center gap-2.5 text-left">
                  <div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm group-hover:scale-110 transition">
                    ${lProg.completed ? "✅" : "▶️"}
                  </div>
                  <div>
                    <div class="font-bold text-sm text-slate-800 flex items-center gap-1.5">
                      <span>${lvl.labelEn}</span>
                      <span class="text-xs font-normal text-slate-500 mm-text">(${lvl.labelMm})</span>
                    </div>
                    <div class="text-[11px] text-slate-500">
                      ${qCount} Questions ${lProg.bestScore > 0 ? `• Best: <strong class="text-emerald-600">${lProg.bestScore}%</strong>` : ""}
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-0.5 bg-slate-50 px-2.5 py-1 rounded-xl border border-slate-200">
                  ${this.renderStarIcons(lProg.stars, "text-sm")}
                </div>
              </button>
              ${attachedHtmlApp ? `
                <button onclick="app.launchCustomHtmlApp('${attachedHtmlApp.id}')"
                  class="w-full flex items-center justify-between px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-300 text-indigo-900 text-xs font-bold transition mm-text">
                  <span>⚡ HTML App: ${attachedHtmlApp.title}</span>
                  <span class="px-2 py-0.5 rounded bg-indigo-600 text-white text-[10px]">Play HTML ➡️</span>
                </button>
              ` : ""}
            </div>
          `;
        } else {
          return `
            <div class="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-100/80 border-2 border-dashed border-slate-300 text-slate-400 cursor-not-allowed">
              <div class="flex items-center gap-2.5 text-left">
                <div class="w-8 h-8 rounded-xl bg-slate-200 text-slate-500 flex items-center justify-center text-sm">
                  🔒
                </div>
                <div>
                  <div class="font-bold text-sm text-slate-500 flex items-center gap-1.5">
                    <span>${lvl.labelEn}</span>
                    <span class="text-xs font-normal mm-text">(${lvl.labelMm})</span>
                  </div>
                  <div class="text-[11px] text-slate-400 mm-text">ရှေ့အဆင့် အောင်မြင်မှ ပွင့်ပါမည်</div>
                </div>
              </div>
              <div class="flex items-center gap-0.5 opacity-40">
                ${this.renderStarIcons(0, "text-sm")}
              </div>
            </div>
          `;
        }
      }).join("");

      // Check for Bonus 4th Level Custom HTML App
      const bonusHtmlApp = this.getCustomHtmlAppFor(unit.id, "bonus");
      const bonusUnlocked = this.isLevelUnlocked(unit.id, "bonus");
      const bonusProg = uProg.bonus || { stars: 0, bestScore: 0, completed: false };
      let bonusCardHtml = "";
      if (bonusHtmlApp) {
        if (bonusUnlocked) {
          bonusCardHtml = `
            <button onclick="app.launchCustomHtmlApp('${bonusHtmlApp.id}')"
              class="w-full flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-amber-50 hover:from-indigo-100 hover:to-amber-100 border-2 border-indigo-300 transition group shadow-sm">
              <div class="flex items-center gap-2.5 text-left">
                <div class="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm group-hover:scale-110 transition">
                  ⚡
                </div>
                <div>
                  <div class="font-extrabold text-xs sm:text-sm text-indigo-950 flex items-center gap-1.5 mm-text">
                    <span>${bonusHtmlApp.title}</span>
                  </div>
                  <div class="text-[11px] text-indigo-700 font-semibold mm-text">
                    Custom HTML Lab • ခုလည်းကြည့်လို့ရ / နောက်လည်းကြည့်လို့ရ
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-0.5 bg-white px-2.5 py-1 rounded-xl border border-indigo-200">
                ${this.renderStarIcons(bonusProg.stars, "text-sm")}
              </div>
            </button>
          `;
        } else {
          bonusCardHtml = `
            <div class="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-100/80 border-2 border-dashed border-indigo-200 text-slate-400 cursor-not-allowed">
              <div class="flex items-center gap-2.5 text-left">
                <div class="w-8 h-8 rounded-xl bg-slate-200 text-slate-500 flex items-center justify-center text-sm">🔒</div>
                <div>
                  <div class="font-bold text-xs sm:text-sm text-slate-500 mm-text">${bonusHtmlApp.title}</div>
                  <div class="text-[11px] text-slate-400 mm-text">Focus နှင့် Practice အောင်မြင်မှ HTML ဂိမ်း ပွင့်ပါမည်</div>
                </div>
              </div>
              <div class="flex items-center gap-0.5 opacity-40">
                ${this.renderStarIcons(0, "text-sm")}
              </div>
            </div>
          `;
        }
      }

      return `
        <div class="game-card rounded-3xl bg-white shadow-lg border-4 ${unitUnlocked ? unit.borderLight : "border-slate-200 opacity-90"} overflow-hidden flex flex-col justify-between">
          <div>
            <!-- Unit Banner Header -->
            <div class="bg-gradient-to-r ${unit.colorFrom} ${unit.colorTo} p-4 text-white flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl shadow-inner border border-white/30">
                  ${unit.icon}
                </div>
                <div>
                  <div class="text-[11px] font-bold uppercase tracking-wider opacity-90">Unit ${unit.number}</div>
                  <h3 class="text-lg font-extrabold leading-tight">${unit.titleEn}</h3>
                  <div class="text-xs font-bold text-white/90 mm-text">${unit.titleMm}</div>
                </div>
              </div>
              <div class="bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-2xl text-right border border-white/20">
                <div class="text-xs font-extrabold">⭐ ${unitStars + (bonusProg.stars || 0)} / ${bonusHtmlApp ? 12 : 9}</div>
              </div>
            </div>

            <!-- Topics list -->
            <div class="px-4 py-2.5 ${unit.bgLight} border-b ${unit.borderLight} text-[11px] font-semibold text-slate-600">
              ${unit.topics}
            </div>

            <!-- 3 Levels Stack + Bonus HTML Slot -->
            <div class="p-4 space-y-2.5">
              ${levelButtonsHtml}
              ${bonusCardHtml}
            </div>
          </div>

          <!-- Card Footer: Quick Add Question or HTML for this Unit -->
          <div class="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
            <button onclick="app.openHtmlInjectorForUnit('${unit.id}')" class="text-indigo-600 hover:text-indigo-800 font-extrabold hover:underline mm-text flex items-center gap-1">
              <span>⚡</span> <span>HTML Code ထည့်ရန်</span>
            </button>
            <button onclick="app.openTeacherStudioForUnit('${unit.id}')" class="text-sky-600 hover:text-sky-800 font-bold hover:underline mm-text">
              + မေးခွန်းထပ်ထည့်ရန်
            </button>
          </div>
        </div>
      `;
    }).join("");
  },

  /* ---------------- NAVIGATION SWITCHERS ---------------- */
  showMap() {
    document.getElementById("viewMap").classList.remove("hidden");
    document.getElementById("viewQuiz").classList.add("hidden");
    document.getElementById("viewHtmlPlayer").classList.add("hidden");
    document.getElementById("viewTeacher").classList.add("hidden");

    document.getElementById("navMapBtn").className = "px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 bg-white text-sky-700 shadow-sm";
    document.getElementById("navHtmlStudioBtn").className = "px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 text-slate-600 hover:text-slate-900";
    document.getElementById("navTeacherBtn").className = "px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 text-slate-600 hover:text-slate-900";
    this.renderAll();
  },

  showTeacherStudio(defaultTab = "html") {
    document.getElementById("viewMap").classList.add("hidden");
    document.getElementById("viewQuiz").classList.add("hidden");
    document.getElementById("viewHtmlPlayer").classList.add("hidden");
    document.getElementById("viewTeacher").classList.remove("hidden");

    document.getElementById("navMapBtn").className = "px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 text-slate-600 hover:text-slate-900";
    if (defaultTab === "html") {
      document.getElementById("navHtmlStudioBtn").className = "px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 bg-white text-indigo-700 shadow-sm";
      document.getElementById("navTeacherBtn").className = "px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 text-slate-600 hover:text-slate-900";
    } else {
      document.getElementById("navTeacherBtn").className = "px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 bg-white text-indigo-700 shadow-sm";
      document.getElementById("navHtmlStudioBtn").className = "px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 text-slate-600 hover:text-slate-900";
    }

    this.switchStudioTab(defaultTab);
    this.previewSelectedArt();
    this.renderTeacherQuestionList();
    this.renderSavedHtmlAppsList();
  },

  switchStudioTab(tabKey) {
    const tabs = ["html", "bulk", "manual"];
    tabs.forEach((k) => {
      const panel = document.getElementById(`studioTab${k.charAt(0).toUpperCase() + k.slice(1)}`);
      if (panel) {
        if (k === tabKey) panel.classList.remove("hidden");
        else panel.classList.add("hidden");
      }
    });

    const activeCls = "px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 bg-indigo-600 text-white shadow-sm mm-text";
    const inactiveCls = "px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 bg-slate-100 text-slate-700 hover:bg-slate-200 mm-text";

    document.getElementById("tabBtnHtmlInjector").className = tabKey === "html" ? activeCls : inactiveCls;
    document.getElementById("tabBtnBulkPaste").className = tabKey === "bulk" ? activeCls : inactiveCls;
    document.getElementById("tabBtnManualBank").className = tabKey === "manual" ? activeCls : inactiveCls;

    if (tabKey === "html") {
      const codeBox = document.getElementById("htmlCodeTextarea");
      if (codeBox && !codeBox.value.trim()) {
        this.loadSampleHtmlTemplate("living_sort", true);
      } else {
        this.previewHtmlInStudio();
      }
    }
  },

  openHtmlInjectorForUnit(unitId) {
    this.showTeacherStudio("html");
    document.getElementById("htmlUnitSelect").value = unitId;
  },

  openTeacherStudioForUnit(unitId) {
    this.showTeacherStudio("manual");
    document.getElementById("qUnitSelect").value = unitId;
    document.getElementById("filterUnit").value = unitId;
    this.renderTeacherQuestionList();
  }
});
