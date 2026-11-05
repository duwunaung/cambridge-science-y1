/* Teacher Studio: bulk text / JSON question importer. */
Object.assign(ScienceApp.prototype, {
  /* ---------------- BULK TEXT / JSON QUESTION IMPORTER ---------------- */
  fillSampleBulkText() {
    document.getElementById("bulkPasteTextarea").value = `Q: Which part of a plant grows underground and absorbs water?
MM: မြေကြီးအောက်တွင် ပေါက်ပြီး ရေစုပ်ယူပေးသော အပင်အစိတ်အပိုင်းမှာ အဘယ်နည်း။
*A) Roots (အမြစ်)
B) Flower (အပွင့်)
C) Leaf (အရွက်)
D) Fruit (အသီး)
EXP: Roots hold the plant in soil and take in water. (အမြစ်သည် မြေကြီးထဲမှ ရေကို စုပ်ယူပေးသည်။)

Q: Why is a cooking pot made from metal instead of paper?
MM: ဟင်းချက်အိုးကို စက္ကူအစား သတ္တု (Metal) ဖြင့် ဘာကြောင့် ပြုလုပ်သနည်း။
A) Because paper is stronger than metal
*B) Because metal is strong, hard, and does not burn or tear like paper
C) Because metal is soft like fabric
EXP: Metal is strong and heat-resistant. (သတ္တုသည် မာကျောခိုင်ခံ့သောကြောင့် ဖြစ်သည်။)`;
  },

  importBulkPastedQuestions() {
    const raw = document.getElementById("bulkPasteTextarea").value.trim();
    if (!raw) {
      this.showToast("⚠️ မေးခွန်းစာသား သို့မဟုတ် JSON ကို အရင် Paste ချပေးပါ။");
      return;
    }
    const unitId = document.getElementById("bulkUnitSelect").value;
    const level = document.getElementById("bulkLevelSelect").value;
    const defaultArtByUnit = {
      u1: "plant_parts",
      u2: "sound_drum_guitar",
      u3: "materials_collection",
      u4: "earth_planet",
      u5: "human_body_parts",
      u6: "forces_magnet"
    };

    let addedCount = 0;

    // Try JSON format first if it starts with '['
    if (raw.startsWith("[")) {
      try {
        const arr = JSON.parse(raw);
        arr.forEach((item, idx) => {
          if (item.questionEn && Array.isArray(item.options) && item.options.length >= 2) {
            this.state.questions.unshift({
              id: "bulk_json_" + Date.now() + "_" + idx,
              unitId: item.unitId || unitId,
              level: item.level || level,
              topic: item.topic || "AI Imported Question",
              questionEn: item.questionEn,
              questionMm: item.questionMm || "",
              artKey: item.artKey || defaultArtByUnit[unitId],
              caption: item.caption || "Cambridge Primary Science",
              options: item.options,
              correctIndex: Number.isInteger(item.correctIndex) ? item.correctIndex : 0,
              explanation: item.explanation || "Well done!",
              isCustom: true
            });
            addedCount++;
          }
        });
      } catch (e) {
        this.showToast("⚠️ JSON ပုံစံ မှားယွင်းနေပါသည်။");
        return;
      }
    } else {
      // Parse Simple Text blocks separated by blank lines or Q:
      const blocks = raw.split(/\n\s*\n/);
      blocks.forEach((block, idx) => {
        const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
        let qEn = "", qMm = "", exp = "";
        const opts = [];
        let correctIdx = 0;

        lines.forEach((line) => {
          if (/^(Q|Question|\d+[\.\)])\s*[:\-]?\s*/i.test(line) && !qEn) {
            qEn = line.replace(/^(Q|Question|\d+[\.\)])\s*[:\-]?\s*/i, "").trim();
          } else if (/^MM\s*:\s*/i.test(line)) {
            qMm = line.replace(/^MM\s*:\s*/i, "").trim();
          } else if (/^EXP\s*:\s*/i.test(line)) {
            exp = line.replace(/^EXP\s*:\s*/i, "").trim();
          } else if (/^(\*?[A-Da-d][\)\.]|\*)\s*/.test(line)) {
            const isStarred = line.startsWith("*");
            const cleanOpt = line.replace(/^(\*?[A-Da-d][\)\.]|\*)\s*/, "").trim();
            if (cleanOpt) {
              if (isStarred) correctIdx = opts.length;
              opts.push(cleanOpt);
            }
          }
        });

        if (qEn && opts.length >= 2) {
          this.state.questions.unshift({
            id: "bulk_txt_" + Date.now() + "_" + idx,
            unitId,
            level,
            topic: "Bulk Imported Question",
            questionEn: qEn,
            questionMm: qMm,
            artKey: defaultArtByUnit[unitId] || "plant_parts",
            caption: "Cambridge Primary Science",
            options: opts,
            correctIndex: correctIdx,
            explanation: exp || "Great job!",
            isCustom: true
          });
          addedCount++;
        }
      });
    }

    if (addedCount > 0) {
      this.persistState();
      this.renderAll();
      document.getElementById("bulkPasteTextarea").value = "";
      this.showToast(`🎉 မေးခွန်းအသစ် (${addedCount}) ပုဒ်ကို တစ်ခါတည်း ထည့်သွင်းပြီးပါပြီ!`);
    } else {
      this.showToast("⚠️ မေးခွန်းပုံစံ မတွေ့ရှိပါ။ '📝 နမူနာပုံစံ ဖြည့်ကြည့်ရန်' ကိုနှိပ်၍ စစ်ဆေးကြည့်ပါ။");
    }
  }
});
