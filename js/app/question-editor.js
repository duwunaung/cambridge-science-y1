/* Teacher Studio: add / edit / delete questions. */
Object.assign(ScienceApp.prototype, {
  /* ---------------- TEACHER STUDIO: ADD / EDIT / DELETE QUESTIONS ---------------- */
  populateArtSelector() {
    const select = document.getElementById("qArtSelect");
    if (!select) return;
    select.innerHTML = Object.keys(SCIENCE_ART).map((key) => `
      <option value="${key}">${SCIENCE_ART[key].label}</option>
    `).join("");
    this.previewSelectedArt();
  },

  previewSelectedArt() {
    const previewBox = document.getElementById("formArtPreview");
    if (!previewBox) return;
    if (this.tempUploadedImageData) {
      previewBox.innerHTML = `<img src="${this.tempUploadedImageData}" class="w-full h-full object-contain" />`;
      document.getElementById("clearUploadedImgBtn").classList.remove("hidden");
    } else {
      const key = document.getElementById("qArtSelect").value || "plant_parts";
      previewBox.innerHTML = (SCIENCE_ART[key] || SCIENCE_ART.plant_parts).svg;
      document.getElementById("clearUploadedImgBtn").classList.add("hidden");
    }
  },

  handleImageUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      this.tempUploadedImageData = e.target.result;
      this.previewSelectedArt();
      this.showToast("🖼️ ပုံတင်သွင်းပြီးပါပြီ (Image ready)");
    };
    reader.readAsDataURL(file);
  },

  clearUploadedImage() {
    this.tempUploadedImageData = null;
    document.getElementById("qImageUpload").value = "";
    this.previewSelectedArt();
  },

  saveCustomQuestion(event) {
    event.preventDefault();
    const editId = document.getElementById("editQuestionId").value;
    const unitId = document.getElementById("qUnitSelect").value;
    const level = document.getElementById("qLevelSelect").value;
    const topic = document.getElementById("qTopicInput").value.trim() || "Custom Science Question";
    const questionEn = document.getElementById("qTextEn").value.trim();
    const questionMm = document.getElementById("qTextMm").value.trim();
    const artKey = document.getElementById("qArtSelect").value;
    const caption = document.getElementById("qCaptionInput").value.trim();
    const explanation = document.getElementById("qExplanation").value.trim();

    const rawOpts = [
      document.getElementById("qOpt0").value.trim(),
      document.getElementById("qOpt1").value.trim(),
      document.getElementById("qOpt2").value.trim(),
      document.getElementById("qOpt3").value.trim()
    ];

    const radioChecked = document.querySelector('input[name="correctOpt"]:checked');
    const selectedRadioIdx = radioChecked ? parseInt(radioChecked.value, 10) : 0;

    // Filter non-empty options and remap correctIndex safely
    const finalOptions = [];
    let finalCorrectIdx = 0;
    rawOpts.forEach((optText, idx) => {
      if (optText !== "") {
        if (idx === selectedRadioIdx) {
          finalCorrectIdx = finalOptions.length;
        }
        finalOptions.push(optText);
      }
    });

    if (finalOptions.length < 2) {
      this.showToast("⚠️ အနည်းဆုံး အဖြေရွေးချယ်စရာ (၂) ခု ထည့်သွင်းပေးပါ။");
      return;
    }

    const qObj = {
      id: editId || "custom_" + Date.now(),
      unitId,
      level,
      topic,
      questionEn,
      questionMm,
      artKey,
      customImage: this.tempUploadedImageData || null,
      caption: caption || topic,
      options: finalOptions,
      correctIndex: finalCorrectIdx,
      explanation: explanation || "Well done!",
      isCustom: true
    };

    if (editId) {
      const idx = this.state.questions.findIndex((q) => q.id === editId);
      if (idx !== -1) {
        this.state.questions[idx] = qObj;
      }
      this.showToast("✅ မေးခွန်းကို ပြင်ဆင်သိမ်းဆည်းပြီးပါပြီ!");
    } else {
      this.state.questions.unshift(qObj);
      this.showToast("✅ မေးခွန်းအသစ်ကို မေးခွန်းဘဏ်သို့ ထည့်သွင်းပြီးပါပြီ!");
    }

    this.persistState();
    this.resetQuestionForm();
    this.renderAll();
  },

  editQuestion(qId) {
    const q = this.state.questions.find((item) => item.id === qId);
    if (!q) return;

    document.getElementById("editQuestionId").value = q.id;
    document.getElementById("qUnitSelect").value = q.unitId;
    document.getElementById("qLevelSelect").value = q.level;
    document.getElementById("qTopicInput").value = q.topic || "";
    document.getElementById("qTextEn").value = q.questionEn || "";
    document.getElementById("qTextMm").value = q.questionMm || "";
    document.getElementById("qArtSelect").value = q.artKey || "plant_parts";
    document.getElementById("qCaptionInput").value = q.caption || "";
    document.getElementById("qExplanation").value = q.explanation || "";

    this.tempUploadedImageData = q.customImage || null;
    this.previewSelectedArt();

    for (let i = 0; i < 4; i++) {
      document.getElementById(`qOpt${i}`).value = q.options[i] || "";
    }
    const radios = document.querySelectorAll('input[name="correctOpt"]');
    if (radios[q.correctIndex]) radios[q.correctIndex].checked = true;

    document.getElementById("formModalTitle").innerHTML = `<span>✏️</span> <span>မေးခွန်း ပြင်ဆင်နေသည် (Editing)</span>`;
    document.getElementById("cancelEditBtn").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  deleteQuestion(qId) {
    if (this.state.questions.length <= 6) {
      this.showToast("⚠️ မေးခွန်းအားလုံးကို ဖျက်၍မရပါ။");
      return;
    }
    this.state.questions = this.state.questions.filter((q) => q.id !== qId);
    this.persistState();
    this.renderAll();
    this.showToast("🗑️ မေးခွန်းကို ဖျက်သိမ်းပြီးပါပြီ။");
  },

  resetQuestionForm() {
    document.getElementById("questionForm").reset();
    document.getElementById("editQuestionId").value = "";
    this.tempUploadedImageData = null;
    this.previewSelectedArt();
    document.getElementById("formModalTitle").innerHTML = `<span>➕</span> <span>မေးခွန်းအသစ် ထည့်သွင်းရန်</span>`;
    document.getElementById("cancelEditBtn").classList.add("hidden");
  },

  renderTeacherQuestionList() {
    const listEl = document.getElementById("teacherQuestionsList");
    if (!listEl) return;

    const uFilter = document.getElementById("filterUnit").value;
    const lFilter = document.getElementById("filterLevel").value;

    const filtered = this.state.questions.filter((q) => {
      const matchU = uFilter === "all" || q.unitId === uFilter;
      const matchL = lFilter === "all" || q.level === lFilter;
      return matchU && matchL;
    });

    document.getElementById("bankTotalCount").textContent = filtered.length;

    if (filtered.length === 0) {
      listEl.innerHTML = `<div class="text-center py-12 text-slate-400 text-sm mm-text">ရွေးချယ်ထားသော အဆင့်တွင် မေးခွန်းမရှိသေးပါ။ ဘယ်ဘက်ဖောင်မှ အသစ်ထည့်နိုင်ပါသည်။</div>`;
      return;
    }

    listEl.innerHTML = filtered.map((q) => {
      const uMeta = UNITS_META.find((u) => u.id === q.unitId);
      return `
        <div class="p-3.5 rounded-2xl border-2 ${q.isCustom ? "border-emerald-200 bg-emerald-50/40" : "border-slate-200 bg-slate-50/60"} flex items-start gap-3.5 justify-between">
          <div class="flex items-start gap-3">
            <div class="w-16 h-16 rounded-xl bg-white border border-slate-200 flex items-center justify-center overflow-hidden shrink-0 p-1">
              ${this.getIllustrationHtml(q)}
            </div>
            <div class="space-y-1">
              <div class="flex flex-wrap items-center gap-1.5">
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-sky-100 text-sky-800">Unit ${uMeta ? uMeta.number : ""}</span>
                <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">${q.level}</span>
                ${q.isCustom ? `<span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">Custom Added</span>` : ""}
              </div>
              <div class="font-bold text-sm text-slate-800">${q.questionEn}</div>
              ${q.questionMm ? `<div class="text-xs text-slate-600 mm-text">${q.questionMm}</div>` : ""}
              <div class="text-xs text-emerald-700 font-semibold mm-text">
                ✓ အဖြေမှန်: ${q.options[q.correctIndex]}
              </div>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row items-center gap-1.5 shrink-0">
            <button onclick="app.editQuestion('${q.id}')" class="px-2.5 py-1.5 rounded-lg bg-white hover:bg-sky-50 text-sky-700 border border-slate-200 text-xs font-bold">
              ✏️ Edit
            </button>
            <button onclick="app.deleteQuestion('${q.id}')" class="px-2.5 py-1.5 rounded-lg bg-white hover:bg-rose-50 text-rose-600 border border-slate-200 text-xs font-bold">
              🗑️
            </button>
          </div>
        </div>
      `;
    }).join("");
  }
});
