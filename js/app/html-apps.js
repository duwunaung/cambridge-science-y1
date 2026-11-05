/* Teacher Studio: custom HTML mini-app injector, live preview and player. */
Object.assign(ScienceApp.prototype, {
  /* ---------------- CUSTOM HTML / CLOUD APP INJECTOR & PLAYER ---------------- */
  loadSampleHtmlTemplate(templateKey, silent = false) {
    const tpl = SAMPLE_HTML_TEMPLATES[templateKey];
    if (!tpl) return;
    document.getElementById("htmlUnitSelect").value = tpl.unitId;
    document.getElementById("htmlSlotSelect").value = tpl.slot;
    document.getElementById("htmlAppTitle").value = tpl.title;
    document.getElementById("htmlCodeTextarea").value = tpl.code;
    this.previewHtmlInStudio();
    if (!silent) {
      this.showToast(`⚡ "${tpl.title}" နမူနာ HTML ကုဒ်ကို ထည့်သွင်းပေးထားပါပြီ!`);
    }
  },

  scheduleLiveHtmlPreview() {
    clearTimeout(this.htmlPreviewTimer);
    this.htmlPreviewTimer = setTimeout(() => {
      this.previewHtmlInStudio();
    }, 450);
  },

  previewHtmlInStudio() {
    const code = document.getElementById("htmlCodeTextarea").value;
    const iframe = document.getElementById("studioLivePreviewIframe");
    if (!iframe) return;
    iframe.srcdoc = code || `<div style="font-family:sans-serif;padding:24px;color:#64748b;text-align:center;">HTML Code ကို Paste ချလိုက်သည်နှင့် ဤနေရာတွင် ချက်ချင်း ပေါ်လာပါမည်။</div>`;
  },

  uploadHtmlFileToEditor(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById("htmlCodeTextarea").value = e.target.result;
      const titleIn = document.getElementById("htmlAppTitle");
      if (!titleIn.value.trim()) {
        titleIn.value = file.name.replace(/\.(html|htm|txt)$/i, "");
      }
      this.previewHtmlInStudio();
      this.showToast("📂 HTML ဖိုင်ကို ဖတ်ယူပြီး Live Preview ပြသထားပါပြီ!");
    };
    reader.readAsText(file);
    event.target.value = "";
  },

  saveCustomHtmlApp(event) {
    event.preventDefault();
    const unitId = document.getElementById("htmlUnitSelect").value;
    const slot = document.getElementById("htmlSlotSelect").value;
    const lockRule = document.getElementById("htmlLockRuleSelect").value;
    const title = document.getElementById("htmlAppTitle").value.trim() || "Interactive Science HTML Lab";
    const htmlCode = document.getElementById("htmlCodeTextarea").value;

    if (!htmlCode.trim()) {
      this.showToast("⚠️ HTML Code ထည့်သွင်းပေးပါ။");
      return;
    }

    if (!Array.isArray(this.state.customHtmlApps)) {
      this.state.customHtmlApps = [];
    }

    // Replace existing app for the same unitId + slot or add new
    const existingIdx = this.state.customHtmlApps.findIndex((a) => a.unitId === unitId && a.slot === slot);
    const appRecord = {
      id: existingIdx !== -1 ? this.state.customHtmlApps[existingIdx].id : "htmlapp_" + Date.now(),
      unitId,
      slot,
      lockRule,
      title,
      htmlCode,
      createdAt: new Date().toLocaleDateString()
    };

    if (existingIdx !== -1) {
      this.state.customHtmlApps[existingIdx] = appRecord;
    } else {
      this.state.customHtmlApps.unshift(appRecord);
    }

    this.persistState();
    this.renderAll();
    this.showToast(`✅ "${title}" HTML App ကို သိမ်းဆည်းပြီးပါပြီ! ခုလည်းကြည့်လို့ရသလို နောက်လည်း အမြဲကြည့်နိုင်ပါပြီ။`);
  },

  launchCustomHtmlApp(appId) {
    const appObj = (this.state.customHtmlApps || []).find((a) => a.id === appId);
    if (!appObj) return;

    const unlocked = this.isLevelUnlocked(appObj.unitId, appObj.slot) || appObj.lockRule === "always_open";
    if (!unlocked && this.state.quizMode !== "practice_free") {
      this.showToast("🔒 ရှေ့အဆင့်များကို အောင်မြင်အောင် အရင်ဖြေဆိုပါ (သို့မဟုတ် အပေါ်မှ '🔓 အားလုံးသော့ဖွင့်မည်' ကိုနှိပ်ပါ)။");
      return;
    }

    this.activeHtmlApp = appObj;
    this.activeQuiz = {
      unitId: appObj.unitId,
      level: appObj.slot,
      questions: [1],
      currentIndex: 0,
      correctCount: 1,
      pointsEarned: 30,
      answeredCurrent: true
    };

    const uMeta = UNITS_META.find((u) => u.id === appObj.unitId);
    document.getElementById("htmlPlayerUnitBadge").textContent = `Unit ${uMeta ? uMeta.number : ""}: ${uMeta ? uMeta.titleEn : ""}`;
    document.getElementById("htmlPlayerSlotBadge").textContent = `Level: ${appObj.slot.toUpperCase()}`;
    document.getElementById("htmlPlayerTitle").textContent = appObj.title;

    document.getElementById("viewMap").classList.add("hidden");
    document.getElementById("viewQuiz").classList.add("hidden");
    document.getElementById("viewTeacher").classList.add("hidden");
    document.getElementById("viewHtmlPlayer").classList.remove("hidden");

    const iframe = document.getElementById("customHtmlIframe");
    iframe.srcdoc = appObj.htmlCode;
  },

  reloadHtmlPlayerIframe() {
    if (!this.activeHtmlApp) return;
    const iframe = document.getElementById("customHtmlIframe");
    iframe.srcdoc = this.activeHtmlApp.htmlCode;
  },

  completeHtmlAppLevel(stars = 3, pctScore = 100) {
    if (!this.activeHtmlApp) return;
    const { unitId, slot } = this.activeHtmlApp;
    if (!this.state.progress[unitId][slot]) {
      this.state.progress[unitId][slot] = { stars: 0, bestScore: 0, completed: false };
    }
    const slotProg = this.state.progress[unitId][slot];
    if (stars > slotProg.stars) slotProg.stars = stars;
    if (pctScore > slotProg.bestScore) slotProg.bestScore = pctScore;
    if (stars >= 1) slotProg.completed = true;

    const pts = stars * 15;
    this.state.totalPoints = (this.state.totalPoints || 0) + pts;
    this.persistState();
    this.updateHeaderStats();
    this.sfx.playFanfare(stars);

    // Show Result Modal
    const unitMeta = UNITS_META.find((u) => u.id === unitId);
    document.getElementById("resultBadgeTop").textContent = `Unit ${unitMeta.number}: ${unitMeta.titleEn} • ${slot.toUpperCase()} HTML LAB`;
    document.getElementById("resultHeading").textContent = stars === 3
      ? "🎉 HTML Lab အမှတ်ပြည့် ကြယ် (၃) လုံး ရရှိပါသည်!"
      : `👏 HTML Lab အောင်မြင်ပါသည်! ကြယ် (${stars}) လုံး ရရှိပါသည်!`;

    let starsHtml = "";
    for (let i = 1; i <= 3; i++) {
      starsHtml += i <= stars
        ? `<div class="w-16 h-16 rounded-2xl bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-4xl shadow-md star-anim">⭐</div>`
        : `<div class="w-16 h-16 rounded-2xl bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-4xl text-slate-300">☆</div>`;
    }
    document.getElementById("resultStarsRow").innerHTML = starsHtml;
    document.getElementById("resultAccuracyText").textContent = `${pctScore}%`;
    document.getElementById("resultPointsText").textContent = `+${pts} pts`;
    document.getElementById("resultUnlockMessage").textContent = "ဂုဏ်ယူပါသည်! နောက်တစ်ဆင့် သော့ပွင့်သွားပါပြီ။";
    document.getElementById("resultNextLevelBtn").classList.remove("hidden");
    document.getElementById("levelResultModal").classList.remove("hidden");
  },

  editSavedHtmlApp(appId) {
    const appObj = (this.state.customHtmlApps || []).find((a) => a.id === appId);
    if (!appObj) return;
    this.switchStudioTab("html");
    document.getElementById("htmlUnitSelect").value = appObj.unitId;
    document.getElementById("htmlSlotSelect").value = appObj.slot;
    document.getElementById("htmlLockRuleSelect").value = appObj.lockRule || "after_practice";
    document.getElementById("htmlAppTitle").value = appObj.title;
    document.getElementById("htmlCodeTextarea").value = appObj.htmlCode;
    this.previewHtmlInStudio();
    this.showToast(`✏️ "${appObj.title}" ကို ပြင်ဆင်ရန် တင်ပေးထားပါပြီ။`);
  },

  deleteSavedHtmlApp(appId) {
    this.state.customHtmlApps = (this.state.customHtmlApps || []).filter((a) => a.id !== appId);
    this.persistState();
    this.renderAll();
    this.showToast("🗑️ HTML App ကို ဖျက်သိမ်းပြီးပါပြီ။");
  },

  renderSavedHtmlAppsList() {
    const container = document.getElementById("savedHtmlAppsList");
    const countEl = document.getElementById("savedHtmlAppsCount");
    if (!container) return;
    const list = this.state.customHtmlApps || [];
    if (countEl) countEl.textContent = list.length;

    if (list.length === 0) {
      container.innerHTML = `<div class="text-xs text-slate-400 py-6 text-center mm-text">သိမ်းဆည်းထားသော HTML App မရှိသေးပါ။ ဘယ်ဘက်တွင် Paste ချပြီး သိမ်းဆည်းနိုင်ပါသည်။</div>`;
      return;
    }

    container.innerHTML = list.map((item) => {
      const uMeta = UNITS_META.find((u) => u.id === item.unitId);
      return `
        <div class="p-3 rounded-2xl border-2 border-indigo-100 bg-indigo-50/40 flex items-center justify-between gap-2">
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-600 text-white">Unit ${uMeta ? uMeta.number : ""}</span>
              <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">${item.slot}</span>
              <span class="text-[10px] text-slate-500">${item.lockRule === "always_open" ? "🔓 Always Open" : "🔒 Level Locked"}</span>
            </div>
            <div class="font-extrabold text-xs sm:text-sm text-slate-800 mt-1 mm-text">${item.title}</div>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <button onclick="app.launchCustomHtmlApp('${item.id}')" class="px-2.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-extrabold mm-text">
              ▶️ ဖွင့်ကြည့်မည်
            </button>
            <button onclick="app.editSavedHtmlApp('${item.id}')" class="px-2 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold">
              ✏️
            </button>
            <button onclick="app.deleteSavedHtmlApp('${item.id}')" class="px-2 py-1.5 rounded-xl bg-white border border-slate-200 text-rose-600 text-xs font-bold">
              🗑️
            </button>
          </div>
        </div>
      `;
    }).join("");
  },

  copyAiHtmlPrompt() {
    const promptText = `Create a complete, self-contained single-file HTML5 interactive science quiz/game (with inline CSS and JavaScript in one <!DOCTYPE html> file) for Cambridge Primary Science Year 1 (7-year-old kids, colourful UI, English with Burmese hints).
IMPORTANT: When the student finishes the activity or clicks the final Complete button, execute this exact JavaScript line so my main platform unlocks the next level and awards 3 stars:
window.parent.postMessage({ type: 'QUIZ_COMPLETE', stars: 3, score: 100 }, '*');`;
    this.copyTextToClipboard(promptText, "📋 AI HTML Prompt ကို ကူးယူပြီးပါပြီ! Claude သို့မဟုတ် Gemini တွင် Paste ချနိုင်ပါပြီ။");
  },

  copyAiBulkQuestionsPrompt() {
    const promptText = `Generate 10 multiple-choice questions for Cambridge Primary Science Year 1 in this exact plain text format so I can bulk-paste them into my app:

Q: [English Question]
MM: [Burmese translation/hint]
*A) [Correct Answer]
B) [Wrong Option 1]
C) [Wrong Option 2]
D) [Wrong Option 3]
EXP: [Short explanation in English and Burmese]`;
    this.copyTextToClipboard(promptText, "📋 Bulk Question AI Prompt ကို ကူးယူပြီးပါပြီ!");
  },

  copyTextToClipboard(text, successMsg) {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      this.showToast(successMsg);
    } catch (err) {
      this.showToast("⚠️ Copy ကူး၍မရပါ။");
    }
    document.body.removeChild(ta);
  }
});
