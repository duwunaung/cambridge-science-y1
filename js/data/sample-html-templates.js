// Pre-built Sample Single-File HTML/CSS/JS Mini-Apps so the teacher can test 1-click HTML Paste!
const SAMPLE_HTML_TEMPLATES = {
  living_sort: {
    unitId: "u1",
    slot: "bonus",
    title: "🌱 Living vs Non-Living Interactive Sorting Lab",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  body { font-family: 'Segoe UI', sans-serif; background: linear-gradient(135deg,#ecfdf5,#fef9c3); margin: 0; padding: 20px; text-align: center; color: #1e293b; }
  h2 { margin: 0 0 6px; color: #047857; }
  p { margin: 0 0 15px; font-size: 14px; color: #475569; }
  .items { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 18px; }
  .card { background: #fff; border: 3px solid #38bdf8; border-radius: 16px; padding: 10px 16px; font-size: 16px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 0 #cbd5e1; transition: 0.15s; }
  .card.selected { border-color: #f59e0b; background: #fef3c7; transform: scale(1.06); }
  .card.done { opacity: 0.35; pointer-events: none; border-color: #94a3b8; }
  .bins { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; max-width: 640px; margin: 0 auto; }
  .bin { background: rgba(255,255,255,0.9); border: 4px dashed #10b981; border-radius: 20px; padding: 16px; min-height: 150px; cursor: pointer; transition: 0.2s; }
  .bin.nonliving { border-color: #6366f1; }
  .bin:hover { transform: translateY(-3px); }
  .sorted-tag { display: inline-block; margin: 4px; padding: 5px 10px; border-radius: 10px; background: #dcfce7; font-size: 13px; font-weight: bold; }
  .status { margin-top: 15px; font-weight: bold; font-size: 16px; color: #0369a1; }
  .finish-btn { margin-top: 14px; background: #10b981; color: white; border: none; padding: 12px 24px; border-radius: 14px; font-size: 16px; font-weight: bold; cursor: pointer; display: none; box-shadow: 0 4px 0 #047857; }
</style>
</head>
<body>
  <h2>🌱 Cambridge Year 1: Living vs Non-Living Lab</h2>
  <p>အောက်မှ ပစ္စည်းတစ်ခုကို အရင်နှိပ်ပါ၊ ထို့နောက် သက်ဆိုင်ရာ ခြင်းတောင်း (Living သို့မဟုတ် Non-living) ကို နှိပ်ထည့်ပါ!</p>
  <div class="items" id="itemPool"></div>
  <div class="bins">
<div class="bin" onclick="dropInto('living')">
  <h3>🦁 Living Things (သက်ရှိ)</h3>
  <div id="livingBox"></div>
</div>
<div class="bin nonliving" onclick="dropInto('nonliving')">
  <h3>🪨 Non-Living Things (သက်မဲ့)</h3>
  <div id="nonlivingBox"></div>
</div>
  </div>
  <div class="status" id="statusText">Score: 0 / 6</div>
  <button class="finish-btn" id="finishBtn" onclick="sendWin()">⭐⭐⭐ အမှတ်ပြည့်ရယူပြီး နောက်တစ်ဆင့် သော့ဖွင့်မည်!</button>

<script>
  const DATA = [
{ id: 1, name: "🦁 Lion (ခြင်္သေ့)", type: "living" },
{ id: 2, name: "🪨 Rock (ကျောက်တုံး)", type: "nonliving" },
{ id: 3, name: "🌻 Sunflower (နေကြာပင်)", type: "living" },
{ id: 4, name: "🪑 Wooden Chair (ထိုင်ခုံ)", type: "nonliving" },
{ id: 5, name: "🦋 Butterfly (လိပ်ပြာ)", type: "living" },
{ id: 6, name: "💧 Water Bottle (ရေဘူး)", type: "nonliving" }
  ];
  let selected = null, score = 0, completed = 0;
  const pool = document.getElementById('itemPool');
  DATA.forEach(item => {
const el = document.createElement('div');
el.className = 'card';
el.id = 'item_' + item.id;
el.textContent = item.name;
el.onclick = () => {
  document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selected = item;
};
pool.appendChild(el);
  });

  function dropInto(targetType) {
if (!selected) {
  document.getElementById('statusText').textContent = "👆 အပေါ်မှ ပုံကတ်ပြားတစ်ခုကို အရင်နှိပ်ရွေးပေးပါ!";
  return;
}
const cardEl = document.getElementById('item_' + selected.id);
if (selected.type === targetType) {
  score++;
  completed++;
  cardEl.classList.remove('selected');
  cardEl.classList.add('done');
  const tag = document.createElement('span');
  tag.className = 'sorted-tag';
  tag.textContent = '✅ ' + selected.name;
  document.getElementById(targetType + 'Box').appendChild(tag);
  document.getElementById('statusText').textContent = "🌟 မှန်ကန်ပါသည်! Score: " + score + " / 6";
  selected = null;
  if (completed === DATA.length) {
    document.getElementById('finishBtn').style.display = 'inline-block';
  }
} else {
  document.getElementById('statusText').textContent = "💡 ပြန်စဉ်းစားကြည့်ပါဦး! ၎င်းသည် " + (selected.type === 'living' ? 'သက်ရှိ (Living)' : 'သက်မဲ့ (Non-living)') + " ဖြစ်ပါသည်။";
}
  }

  function sendWin() {
window.parent.postMessage({ type: 'QUIZ_COMPLETE', stars: 3, score: 100 }, '*');
  }
<\/script>
</body>
</html>`
  },
  magnet_lab: {
    unitId: "u6",
    slot: "bonus",
    title: "🧲 Horseshoe Magnet Interactive Test Lab",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  body { font-family: 'Segoe UI', sans-serif; background: linear-gradient(135deg,#eff6ff,#fef2f2); margin: 0; padding: 20px; text-align: center; }
  h2 { color: #b91c1c; margin: 0 0 6px; }
  .magnet-zone { background: #fff; border: 4px solid #ef4444; border-radius: 24px; max-width: 540px; margin: 12px auto; padding: 18px; box-shadow: 0 8px 20px rgba(0,0,0,0.06); }
  .grid { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: 14px; }
  .obj-btn { background: #fff; border: 2px solid #cbd5e1; border-radius: 14px; padding: 12px 16px; font-size: 15px; font-weight: bold; cursor: pointer; transition: 0.2s; }
  .obj-btn:hover { border-color: #ef4444; transform: translateY(-2px); }
  .obj-btn.pulled { background: #dcfce7; border-color: #16a34a; color: #166534; }
  .obj-btn.ignored { background: #fee2e2; border-color: #ef4444; color: #991b1b; }
  .win-btn { margin-top: 16px; background: #f59e0b; color: #1e293b; border: none; padding: 12px 24px; border-radius: 14px; font-weight: bold; font-size: 15px; cursor: pointer; display: none; }
</style>
</head>
<body>
  <h2>🧲 Unit 6.5: Magnets Can Pull!</h2>
  <p>သံလိုက်ဆွဲငင်မည့် သတ္တုပစ္စည်း (Magnetic Materials) (၄) ခုကို ရှာဖွေနှိပ်ပါ!</p>
  <div class="magnet-zone">
<div style="font-size:48px;">🧲</div>
<div id="msg" style="font-weight:bold; color:#334155; margin-top:6px;">Found: 0 / 4 Magnetic Items</div>
<div class="grid" id="grid"></div>
<button id="winBtn" class="win-btn" onclick="window.parent.postMessage({ type: 'QUIZ_COMPLETE', stars: 3, score: 100 }, '*')">
  ⭐⭐⭐ Complete Magnet Lab & Claim 3 Stars!
</button>
  </div>
<script>
  const ITEMS = [
{ name: "🔩 Steel Nail (သံချောင်း)", mag: true },
{ name: "🎈 Rubber Balloon (ပူဖောင်း)", mag: false },
{ name: "🔑 Metal Key (သံသော့)", mag: true },
{ name: "🪵 Wooden Stick (သစ်သား)", mag: false },
{ name: "📎 Steel Paperclip (စက္ကူညှပ်)", mag: true },
{ name: "📰 Newspaper (သတင်းစာ)", mag: false },
{ name: "✂️ Steel Scissors (ကတ်ကြေး)", mag: true }
  ];
  let found = 0;
  const g = document.getElementById('grid');
  ITEMS.forEach(it => {
const b = document.createElement('button');
b.className = 'obj-btn';
b.textContent = it.name;
b.onclick = () => {
  if (b.disabled) return;
  b.disabled = true;
  if (it.mag) {
    found++;
    b.classList.add('pulled');
    b.textContent = "🧲 Pulled! " + it.name;
    document.getElementById('msg').textContent = "✅ Magnetic! Found: " + found + " / 4";
    if (found === 4) document.getElementById('winBtn').style.display = 'inline-block';
  } else {
    b.classList.add('ignored');
    document.getElementById('msg').textContent = "❌ Non-magnetic! Magnet does not pull " + it.name;
  }
};
g.appendChild(b);
  });
<\/script>
</body>
</html>`
  }
};
