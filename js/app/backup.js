/* Backup & restore modal: export/import JSON, snapshots, resets. */
Object.assign(ScienceApp.prototype, {
  /* ---------------- BACKUP & RESTORE MODAL FUNCTIONS ---------------- */
  openBackupModal() {
    this.updateHeaderStats();
    this.renderSnapshotsList();
    document.getElementById("backupModal").classList.remove("hidden");
  },

  closeBackupModal() {
    document.getElementById("backupModal").classList.add("hidden");
  },

  exportBackupFile() {
    const backupPayload = {
      app: "Cambridge Primary Science Year 1 Quick Test",
      version: "2.0",
      exportedAt: new Date().toISOString(),
      state: this.state
    };
    const blob = new Blob([JSON.stringify(backupPayload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const dateStr = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `cambridge_science_y1_backup_${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showToast("💾 Backup (.json) ဖိုင်ကို ဒေါင်းလုဒ်ဆွဲပြီးပါပြီ!");
  },

  importBackupFile(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        const importedState = parsed.state || parsed;
        if (!importedState.questions || !Array.isArray(importedState.questions)) {
          throw new Error("Invalid backup file structure");
        }
        this.state = importedState;
        this.persistState();
        this.renderAll();
        this.closeBackupModal();
        this.showToast("✅ Backup ဖိုင်မှ မေးခွန်းနှင့် အမှတ်များအားလုံး ပြန်လည်ထည့်သွင်းပြီးပါပြီ!");
      } catch (err) {
        this.showToast("⚠️ Backup ဖိုင် မှားယွင်းနေပါသည်။ (.json ဖိုင်အမှန်ကို ရွေးပါ)");
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  },

  createSnapshot() {
    const nameInput = document.getElementById("snapshotNameInput");
    const label = (nameInput.value || "").trim() || `Save Point (${new Date().toLocaleTimeString()})`;
    const snapshots = this.storage.getSnapshots();
    snapshots.unshift({
      id: "snap_" + Date.now(),
      label,
      createdAt: new Date().toLocaleString(),
      questionCount: this.state.questions.length,
      stateCopy: JSON.parse(JSON.stringify(this.state))
    });
    this.storage.saveSnapshots(snapshots.slice(0, 15));
    nameInput.value = "";
    this.renderSnapshotsList();
    this.showToast("⏱️ Local Restore Point မှတ်သားပြီးပါပြီ!");
  },

  restoreSnapshot(snapId) {
    const snapshots = this.storage.getSnapshots();
    const found = snapshots.find((s) => s.id === snapId);
    if (!found) return;
    this.state = JSON.parse(JSON.stringify(found.stateCopy));
    this.persistState();
    this.renderAll();
    this.closeBackupModal();
    this.showToast(`✅ "${found.label}" သို့ ပြန်လည်ရယူပြီးပါပြီ!`);
  },

  deleteSnapshot(snapId) {
    const snapshots = this.storage.getSnapshots().filter((s) => s.id !== snapId);
    this.storage.saveSnapshots(snapshots);
    this.renderSnapshotsList();
  },

  renderSnapshotsList() {
    const container = document.getElementById("snapshotsListContainer");
    if (!container) return;
    const snapshots = this.storage.getSnapshots();
    if (snapshots.length === 0) {
      container.innerHTML = `<div class="text-xs text-slate-400 py-3 text-center mm-text">မှတ်သားထားသော Save Point မရှိသေးပါ။ အပေါ်မှ "+ Save Point မှတ်မည်" ကိုနှိပ်၍ မှတ်ထားနိုင်ပါသည်။</div>`;
      return;
    }
    container.innerHTML = snapshots.map((s) => `
      <div class="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-slate-200 text-xs">
        <div>
          <span class="font-bold text-slate-800">${s.label}</span>
          <span class="text-slate-400 ml-2">${s.createdAt} • ${s.questionCount} Qs</span>
        </div>
        <div class="flex items-center gap-1.5">
          <button onclick="app.restoreSnapshot('${s.id}')" class="px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold">
            Restore
          </button>
          <button onclick="app.deleteSnapshot('${s.id}')" class="px-2 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold">
            ✕
          </button>
        </div>
      </div>
    `).join("");
  },

  resetStudentProgressOnly() {
    this.state.progress = this.getDefaultProgressObject();
    this.state.totalPoints = 0;
    this.state.teacherUnlockAll = false;
    this.persistState();
    this.renderAll();
    this.closeBackupModal();
    this.showToast("🔄 ကျောင်းသားအမှတ်နှင့် ကြယ်များကို အသစ်ပြန်စပေးလိုက်ပါပြီ (မေးခွန်းအသစ်များ မပျက်ပါ)။");
  },

  resetFactoryDefaults() {
    this.state = {
      questions: JSON.parse(JSON.stringify(DEFAULT_QUESTIONS)),
      progress: this.getDefaultProgressObject(),
      totalPoints: 0,
      teacherUnlockAll: false,
      lastUpdated: new Date().toISOString()
    };
    this.persistState();
    this.renderAll();
    this.closeBackupModal();
    this.showToast("✨ မူလ Cambridge Year 1 မေးခွန်းနှင့် အဆင့်များအတိုင်း ပြန်လည်သတ်မှတ်ပြီးပါပြီ။");
  }
});
