/*************************************************************************
 * 1. RICH BUILT-IN SVG ILLUSTRATIONS LIBRARY (28+ Cambridge Year 1 Visuals)
 *************************************************************************/
const SCIENCE_ART = {
  plant_parts: {
    label: "1. Plant Parts (အပင်အစိတ်အပိုင်းများ)",
    svg: `<svg viewBox="0 0 220 200" class="w-full h-full">
      <!-- Sky & Soil -->
      <rect x="0" y="0" width="220" height="140" fill="#e0f2fe" rx="12"/>
      <rect x="0" y="135" width="220" height="65" fill="#854d0e" rx="8"/>
      <!-- Roots -->
      <path d="M110 135 Q110 165 90 185 M110 140 Q125 170 140 185 M110 145 Q105 175 112 192 M102 155 Q85 165 75 175 M118 155 Q135 162 150 172" stroke="#fef08a" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <!-- Stem -->
      <path d="M110 138 Q108 95 110 55" stroke="#16a34a" stroke-width="8" fill="none" stroke-linecap="round"/>
      <!-- Leaves -->
      <path d="M108 110 Q70 95 65 115 Q80 130 108 115 Z" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
      <path d="M112 95 Q150 80 155 100 Q140 115 112 100 Z" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
      <!-- Flower Petals -->
      <g transform="translate(110,48)">
        <circle cx="0" cy="-22" r="12" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
        <circle cx="21" cy="-7" r="12" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
        <circle cx="13" cy="18" r="12" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
        <circle cx="-13" cy="18" r="12" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
        <circle cx="-21" cy="-7" r="12" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
        <circle cx="0" cy="0" r="14" fill="#78350f"/>
      </g>
      <!-- Labels -->
      <text x="155" y="45" font-size="11" font-weight="bold" fill="#0369a1">Flower</text>
      <text x="158" y="95" font-size="11" font-weight="bold" fill="#15803d">Leaf</text>
      <text x="58" y="88" font-size="11" font-weight="bold" fill="#15803d">Stem</text>
      <text x="148" y="165" font-size="11" font-weight="bold" fill="#fef08a">Roots</text>
    </svg>`
  },
  living_lion: {
    label: "2. Living Thing: Lion (ခြင်္သေ့ - သက်ရှိ)",
    svg: `<svg viewBox="0 0 200 180" class="w-full h-full">
      <rect width="200" height="180" fill="#fef9c3" rx="16"/>
      <circle cx="100" cy="85" r="52" fill="#b45309"/>
      <circle cx="100" cy="85" r="36" fill="#f59e0b"/>
      <circle cx="75" cy="58" r="10" fill="#d97706"/>
      <circle cx="125" cy="58" r="10" fill="#d97706"/>
      <circle cx="87" cy="78" r="5" fill="#1e293b"/>
      <circle cx="113" cy="78" r="5" fill="#1e293b"/>
      <polygon points="94,90 106,90 100,98" fill="#78350f"/>
      <path d="M100 98 Q90 108 82 102 M100 98 Q110 108 118 102" stroke="#78350f" stroke-width="3" fill="none" stroke-linecap="round"/>
      <text x="100" y="162" text-anchor="middle" font-size="14" font-weight="bold" fill="#92400e">Lion (Living)</text>
    </svg>`
  },
  living_vs_nonliving: {
    label: "3. Living vs Non-living (သက်ရှိ နှင့် သက်မဲ့)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <rect x="8" y="10" width="98" height="160" fill="#dcfce7" stroke="#22c55e" stroke-width="2" rx="12"/>
      <rect x="114" y="10" width="98" height="160" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2" rx="12"/>
      <!-- Tree & Butterfly -->
      <rect x="50" y="95" width="14" height="35" fill="#854d0e"/>
      <circle cx="57" cy="75" r="28" fill="#22c55e"/>
      <!-- Chair/Rock -->
      <ellipse cx="163" cy="105" rx="30" ry="20" fill="#64748b"/>
      <rect x="148" y="45" width="30" height="35" fill="#38bdf8" rx="4"/>
      <text x="57" y="152" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">Living</text>
      <text x="163" y="152" text-anchor="middle" font-size="12" font-weight="bold" fill="#475569">Non-living</text>
    </svg>`
  },
  plant_light_dark: {
    label: "4. Plants in Light vs Dark (အလင်း နှင့် အမှောင်ရှိ အပင်)",
    svg: `<svg viewBox="0 0 220 185" class="w-full h-full">
      <!-- Light Side -->
      <rect x="6" y="8" width="100" height="168" fill="#fef9c3" stroke="#facc15" stroke-width="2" rx="12"/>
      <circle cx="30" cy="32" r="14" fill="#f59e0b"/>
      <polygon points="38,130 74,130 68,162 44,162" fill="#b45309"/>
      <path d="M56 130 L56 80" stroke="#15803d" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="38" cy="95" rx="16" ry="9" fill="#16a34a" transform="rotate(-20 38 95)"/>
      <ellipse cx="74" cy="95" rx="16" ry="9" fill="#16a34a" transform="rotate(20 74 95)"/>
      <ellipse cx="42" cy="75" rx="15" ry="8" fill="#22c55e" transform="rotate(-15 42 75)"/>
      <ellipse cx="70" cy="75" rx="15" ry="8" fill="#22c55e" transform="rotate(15 70 75)"/>
      <text x="56" y="172" text-anchor="middle" font-size="10" font-weight="bold" fill="#854d0e">A: In Light (Green)</text>

      <!-- Dark Side -->
      <rect x="114" y="8" width="100" height="168" fill="#1e293b" stroke="#475569" stroke-width="2" rx="12"/>
      <polygon points="146,130 182,130 176,162 152,162" fill="#b45309"/>
      <!-- Tall bendy yellow stem & small yellow leaves -->
      <path d="M164 130 Q182 95 160 65 Q148 45 168 28" stroke="#fde047" stroke-width="4" fill="none" stroke-linecap="round"/>
      <ellipse cx="155" cy="52" rx="7" ry="4" fill="#facc15"/>
      <ellipse cx="173" cy="30" rx="7" ry="4" fill="#facc15"/>
      <text x="164" y="172" text-anchor="middle" font-size="10" font-weight="bold" fill="#fde047">B: In Dark (Yellow)</text>
    </svg>`
  },
  plant_wilted_water: {
    label: "5. Plant Needs Water / Wilted (ရေငတ်နေသောအပင်)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <!-- Wilted -->
      <rect x="8" y="10" width="98" height="160" fill="#fffbeb" stroke="#fcd34d" rx="12"/>
      <polygon points="38,125 76,125 70,158 44,158" fill="#92400e"/>
      <path d="M57 125 Q58 80 82 95 Q92 105 90 118" stroke="#65a30d" stroke-width="5" fill="none" stroke-linecap="round"/>
      <ellipse cx="75" cy="100" rx="11" ry="5" fill="#84cc16" transform="rotate(45 75 100)"/>
      <text x="57" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">No Water (Wilts)</text>
      <!-- Healthy Watered -->
      <rect x="114" y="10" width="98" height="160" fill="#ecfdf5" stroke="#6ee7b7" rx="12"/>
      <polygon points="144,125 182,125 176,158 150,158" fill="#92400e"/>
      <path d="M163 125 L163 65" stroke="#16a34a" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="147" cy="90" rx="14" ry="7" fill="#22c55e" transform="rotate(-20 147 90)"/>
      <ellipse cx="179" cy="90" rx="14" ry="7" fill="#22c55e" transform="rotate(20 179 90)"/>
      <circle cx="185" cy="42" r="4" fill="#0ea5e9"/>
      <circle cx="175" cy="50" r="4" fill="#0ea5e9"/>
      <circle cx="163" cy="45" r="4" fill="#0ea5e9"/>
      <text x="163" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">With Water</text>
    </svg>`
  },
  plant_growth_order: {
    label: "6. Plant Growth Stages (အပင်ကြီးထွားပုံ အဆင့်ဆင့်)",
    svg: `<svg viewBox="0 0 220 170" class="w-full h-full">
      <rect width="220" height="170" fill="#f8fafc" rx="12"/>
      <rect x="0" y="110" width="220" height="60" fill="#78350f" rx="6"/>
      <!-- 1 Seed with root -->
      <ellipse cx="32" cy="112" rx="8" ry="5" fill="#d97706"/>
      <path d="M32 117 Q35 130 30 140" stroke="#fef08a" stroke-width="2.5" fill="none"/>
      <text x="32" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">Stage 1</text>
      <!-- 2 Small sprout -->
      <path d="M84 110 L84 85" stroke="#22c55e" stroke-width="3.5"/>
      <ellipse cx="77" cy="85" rx="7" ry="4" fill="#22c55e"/>
      <ellipse cx="91" cy="85" rx="7" ry="4" fill="#22c55e"/>
      <path d="M84 110 L80 142 M84 115 L90 138" stroke="#fef08a" stroke-width="2"/>
      <text x="84" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">Stage 2</text>
      <!-- 3 Taller stem & leaves -->
      <path d="M138 110 L138 62" stroke="#16a34a" stroke-width="4.5"/>
      <ellipse cx="127" cy="82" rx="10" ry="5" fill="#16a34a"/>
      <ellipse cx="149" cy="76" rx="10" ry="5" fill="#16a34a"/>
      <path d="M138 110 L132 148 M138 115 L146 145" stroke="#fef08a" stroke-width="2.5"/>
      <text x="138" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">Stage 3</text>
      <!-- 4 Full sunflower -->
      <path d="M190 110 L190 50" stroke="#15803d" stroke-width="5"/>
      <circle cx="190" cy="45" r="14" fill="#facc15"/>
      <circle cx="190" cy="45" r="7" fill="#78350f"/>
      <text x="190" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">Stage 4</text>
    </svg>`
  },
  sound_drum_guitar: {
    label: "7. Sound Sources: Drum & Instruments (တူရိယာ အသံပင်ရင်းများ)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <rect width="220" height="180" fill="#fdf4ff" rx="14"/>
      <!-- Drum -->
      <rect x="55" y="75" width="110" height="65" fill="#ef4444" stroke="#991b1b" stroke-width="3" rx="8"/>
      <ellipse cx="110" cy="75" rx="55" ry="16" fill="#fef3c7" stroke="#991b1b" stroke-width="3"/>
      <path d="M65 88 L85 138 M85 88 L105 138 M110 90 L130 138 M135 88 L155 138" stroke="#facc15" stroke-width="3"/>
      <!-- Drumsticks -->
      <line x1="45" y1="35" x2="95" y2="70" stroke="#78350f" stroke-width="5" stroke-linecap="round"/>
      <circle cx="97" cy="71" r="6" fill="#d97706"/>
      <line x1="175" y1="35" x2="125" y2="70" stroke="#78350f" stroke-width="5" stroke-linecap="round"/>
      <circle cx="123" cy="71" r="6" fill="#d97706"/>
      <!-- Sound waves -->
      <path d="M35 65 Q20 85 35 105 M185 65 Q200 85 185 105" stroke="#a855f7" stroke-width="3" fill="none" stroke-linecap="round"/>
      <text x="110" y="165" text-anchor="middle" font-size="13" font-weight="bold" fill="#7e22ce">Sound Source (Drum)</text>
    </svg>`
  },
  sound_loud_volcano: {
    label: "8. Loud vs Quiet: Volcano & Ant (မီးတောင် နှင့် ပုရွက်ဆိတ်)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <!-- Volcano -->
      <rect x="8" y="10" width="98" height="160" fill="#fee2e2" rx="12"/>
      <polygon points="20,145 45,75 70,75 95,145" fill="#57534e"/>
      <path d="M45 75 Q57 95 70 75" fill="#ef4444"/>
      <circle cx="57" cy="45" r="20" fill="#f97316"/>
      <circle cx="42" cy="52" r="14" fill="#fb923c"/>
      <circle cx="72" cy="52" r="14" fill="#fb923c"/>
      <text x="57" y="162" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">Volcano (LOUD!)</text>
      <!-- Ant -->
      <rect x="114" y="10" width="98" height="160" fill="#f0fdf4" rx="12"/>
      <circle cx="148" cy="100" r="8" fill="#292524"/>
      <circle cx="163" cy="100" r="10" fill="#292524"/>
      <circle cx="182" cy="100" r="13" fill="#292524"/>
      <path d="M155 108 L148 122 M163 110 L163 124 M172 108 L180 122" stroke="#292524" stroke-width="2.5"/>
      <text x="163" y="162" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">Ant (Very Quiet)</text>
    </svg>`
  },
  sound_ear_safety: {
    label: "9. Sound Moves & Ear Safety (နားအကာအကွယ် နှင့် အသံ)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <rect width="220" height="180" fill="#eff6ff" rx="14"/>
      <!-- Head with Earmuffs -->
      <path d="M70 95 A40 40 0 0 1 150 95" stroke="#1d4ed8" stroke-width="8" fill="none"/>
      <circle cx="110" cy="105" r="34" fill="#fed7aa"/>
      <rect x="58" y="85" width="16" height="32" rx="8" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
      <rect x="146" y="85" width="16" height="32" rx="8" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
      <circle cx="98" cy="100" r="4" fill="#1e293b"/>
      <circle cx="122" cy="100" r="4" fill="#1e293b"/>
      <path d="M98 116 Q110 126 122 116" stroke="#1e293b" stroke-width="3" fill="none" stroke-linecap="round"/>
      <text x="110" y="162" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">Protecting Ears from Loud Sound</text>
    </svg>`
  },
  sound_distance: {
    label: "10. Sound Near vs Far (အသံ အနီး နှင့် အဝေး)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <rect width="220" height="180" fill="#f8fafc" rx="14"/>
      <!-- Siren / Speaker -->
      <rect x="18" y="70" width="32" height="48" fill="#334155" rx="4"/>
      <polygon points="50,76 72,60 72,128 50,112" fill="#0ea5e9"/>
      <path d="M80 78 Q92 94 80 110 M92 68 Q110 94 92 120 M105 58 Q128 94 105 130" stroke="#f59e0b" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- Near Child -->
      <circle cx="132" cy="85" r="12" fill="#fdba74"/>
      <rect x="124" y="98" width="16" height="28" fill="#ef4444" rx="4"/>
      <text x="132" y="142" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">Near (Loud)</text>
      <!-- Far Child -->
      <circle cx="192" cy="85" r="9" fill="#fdba74"/>
      <rect x="186" y="95" width="12" height="22" fill="#22c55e" rx="3"/>
      <text x="192" y="142" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">Far (Quiet)</text>
    </svg>`
  },
  materials_collection: {
    label: "11. Materials: Wood, Metal, Plastic, Glass (ပစ္စည်းအမျိုးအစားများ)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <rect width="220" height="180" fill="#f8fafc" rx="12"/>
      <!-- Wood Log -->
      <rect x="18" y="25" width="75" height="36" fill="#92400e" rx="6"/>
      <ellipse cx="93" cy="43" rx="10" ry="18" fill="#fde68a" stroke="#78350f" stroke-width="2"/>
      <text x="55" y="76" text-anchor="middle" font-size="11" font-weight="bold" fill="#78350f">Wood</text>
      <!-- Metal Keys/Can -->
      <rect x="135" y="20" width="45" height="45" fill="#94a3b8" stroke="#475569" stroke-width="2" rx="4"/>
      <text x="157" y="78" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">Metal</text>
      <!-- Glass Window/Bottle -->
      <rect x="30" y="98" width="52" height="50" fill="#bae6fd" stroke="#0284c7" stroke-width="3"/>
      <line x1="56" y1="98" x2="56" y2="148" stroke="#0284c7" stroke-width="2"/>
      <line x1="30" y1="123" x2="82" y2="123" stroke="#0284c7" stroke-width="2"/>
      <text x="56" y="165" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">Glass</text>
      <!-- Rubber Balloon -->
      <ellipse cx="157" cy="120" rx="22" ry="26" fill="#ec4899"/>
      <path d="M157 146 Q162 155 155 162" stroke="#9d174d" stroke-width="2" fill="none"/>
      <text x="157" y="168" text-anchor="middle" font-size="11" font-weight="bold" fill="#be185d">Rubber</text>
    </svg>`
  },
  material_properties: {
    label: "12. Properties: Mirror, Bridge, Cushion (ပစ္စည်းများ၏ ဂုဏ်သတ္တိ)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <rect width="220" height="180" fill="#fffbeb" rx="14"/>
      <!-- Shiny Mirror -->
      <ellipse cx="55" cy="68" rx="26" ry="34" fill="#bae6fd" stroke="#eab308" stroke-width="5"/>
      <rect x="50" y="102" width="10" height="28" fill="#eab308" rx="4"/>
      <line x1="42" y1="50" x2="62" y2="80" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
      <text x="55" y="148" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">Shiny & Smooth</text>
      <!-- Soft Cushion -->
      <rect x="122" y="45" width="68" height="68" rx="16" fill="#c084fc" stroke="#7e22ce" stroke-width="3"/>
      <text x="156" y="148" text-anchor="middle" font-size="11" font-weight="bold" fill="#6b21a8">Soft & Flexible</text>
    </svg>`
  },
  material_recycling: {
    label: "13. Sorting & Recycling Bins (ပစ္စည်းများ အုပ်စုခွဲခြင်း)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <rect width="220" height="180" fill="#f0fdf4" rx="14"/>
      <!-- Bin 1 -->
      <polygon points="20,65 68,65 62,145 26,145" fill="#0284c7"/>
      <text x="44" y="110" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">PAPER</text>
      <!-- Bin 2 -->
      <polygon points="86,65 134,65 128,145 92,145" fill="#eab308"/>
      <text x="110" y="110" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">PLASTIC</text>
      <!-- Bin 3 -->
      <polygon points="152,65 200,65 194,145 158,145" fill="#16a34a"/>
      <text x="176" y="110" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">GLASS</text>
      <text x="110" y="38" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">Sorting & Recycling Materials</text>
    </svg>`
  },
  material_changing: {
    label: "14. Changing Materials: Bend, Twist, Stretch (ပုံသဏ္ဌာန်ပြောင်းလဲခြင်း)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <rect width="220" height="180" fill="#eff6ff" rx="14"/>
      <!-- Bent Pipe -->
      <path d="M30 120 Q70 35 110 120" stroke="#64748b" stroke-width="14" fill="none" stroke-linecap="round"/>
      <text x="70" y="148" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">Bend (ကွေးခြင်း)</text>
      <!-- Compressed Can -->
      <polygon points="145,55 190,62 180,90 192,118 142,120 155,88" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
      <text x="168" y="148" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">Compress (ဖိချေခြင်း)</text>
    </svg>`
  },
  earth_planet: {
    label: "15. Planet Earth from Space (အာကာသမှ မြင်ရသော ကမ္ဘာမြေ)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <rect width="220" height="180" fill="#0f172a" rx="14"/>
      <circle cx="35" cy="35" r="2" fill="#fff"/>
      <circle cx="185" cy="45" r="2.5" fill="#fde047"/>
      <circle cx="190" cy="140" r="2" fill="#fff"/>
      <!-- Earth Globe -->
      <circle cx="110" cy="90" r="62" fill="#0284c7" stroke="#38bdf8" stroke-width="3"/>
      <!-- Green Land Continents -->
      <path d="M75 50 Q98 42 110 65 Q122 85 102 115 Q82 128 70 98 Z" fill="#22c55e"/>
      <path d="M128 65 Q155 72 152 105 Q140 132 125 112 Z" fill="#16a34a"/>
      <!-- White Clouds -->
      <path d="M65 75 Q85 70 95 78" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity="0.85"/>
      <path d="M115 48 Q135 45 145 55" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity="0.85"/>
      <text x="110" y="170" text-anchor="middle" font-size="12" font-weight="bold" fill="#bae6fd">Blue = Water (Sea) • Green = Land</text>
    </svg>`
  },
  earth_sun_day_night: {
    label: "16. Sun, Flashlight Day & Night Model (နေ့နှင့်ည စမ်းသပ်ချက်)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <rect width="220" height="180" fill="#1e293b" rx="14"/>
      <!-- Flashlight -->
      <rect x="18" y="78" width="38" height="24" fill="#f59e0b" rx="4"/>
      <polygon points="56,74 68,68 68,112 56,106" fill="#d97706"/>
      <!-- Light Beam -->
      <polygon points="68,70 140,35 140,145 68,110" fill="#fef08a" opacity="0.45"/>
      <!-- Globe (Half lit, Half dark) -->
      <path d="M145 40 A50 50 0 0 0 145 140 Z" fill="#fde047"/>
      <path d="M145 40 A50 50 0 0 1 145 140 Z" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
      <text x="120" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#854d0e">DAY</text>
      <text x="170" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#f8fafc">NIGHT</text>
      <text x="42" y="128" text-anchor="middle" font-size="10" font-weight="bold" fill="#fde047">Flashlight = Sun</text>
    </svg>`
  },
  earth_rocks: {
    label: "17. Rocks: Granite, Chalk, Sandstone (ကျောက်အမျိုးအစားများ)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <rect width="220" height="180" fill="#f5f5f4" rx="14"/>
      <!-- Granite (speckled hard) -->
      <polygon points="22,115 35,68 78,62 95,95 82,125" fill="#a8a29e" stroke="#44403c" stroke-width="2"/>
      <circle cx="48" cy="85" r="3" fill="#1c1917"/>
      <circle cx="65" cy="78" r="3.5" fill="#f5f5f4"/>
      <circle cx="72" cy="98" r="3" fill="#1c1917"/>
      <circle cx="55" cy="105" r="3" fill="#dc2626"/>
      <text x="58" y="148" text-anchor="middle" font-size="11" font-weight="bold" fill="#292524">Granite (Hard)</text>
      <!-- Chalk (white soft) -->
      <polygon points="128,118 138,72 182,70 196,105 178,125" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <text x="162" y="148" text-anchor="middle" font-size="11" font-weight="bold" fill="#475569">Chalk (Soft, White)</text>
    </svg>`
  },
  earth_soil_worm: {
    label: "18. Soil, Roots & Earthworm (မြေဆီလွှာ နှင့် တီကောင်)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <rect x="0" y="0" width="220" height="55" fill="#bae6fd" rx="12"/>
      <rect x="0" y="55" width="220" height="125" fill="#713f12" rx="12"/>
      <!-- Carrot in soil -->
      <path d="M75 55 L65 20 M75 55 L75 15 M75 55 L85 20" stroke="#16a34a" stroke-width="4" stroke-linecap="round"/>
      <polygon points="60,55 90,55 75,145" fill="#f97316"/>
      <!-- Earthworm -->
      <path d="M125 110 Q145 92 165 112 Q185 130 198 110" stroke="#f472b6" stroke-width="8" fill="none" stroke-linecap="round"/>
      <!-- Small rocks & dead leaf -->
      <circle cx="35" cy="135" r="9" fill="#a8a29e"/>
      <circle cx="145" cy="152" r="7" fill="#d6d3d1"/>
      <text x="160" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#fef08a">Earthworm in Soil</text>
    </svg>`
  },
  human_body_parts: {
    label: "19. Human Body Parts (လူ့ခန္ဓာကိုယ် အစိတ်အပိုင်းများ)",
    svg: `<svg viewBox="0 0 220 185" class="w-full h-full">
      <rect width="220" height="185" fill="#eff6ff" rx="14"/>
      <!-- Child Figure -->
      <circle cx="110" cy="38" r="18" fill="#fdba74"/>
      <path d="M92 32 Q110 15 128 32" fill="#1e293b"/>
      <rect x="92" y="58" width="36" height="52" rx="8" fill="#3b82f6"/>
      <!-- Arms & Elbows -->
      <line x1="92" y1="65" x2="62" y2="98" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
      <line x1="128" y1="65" x2="158" y2="98" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
      <!-- Legs & Knees -->
      <line x1="100" y1="110" x2="96" y2="162" stroke="#fdba74" stroke-width="10" stroke-linecap="round"/>
      <line x1="120" y1="110" x2="124" y2="162" stroke="#fdba74" stroke-width="10" stroke-linecap="round"/>
      <!-- Labels -->
      <text x="42" y="65" font-size="10" font-weight="bold" fill="#1d4ed8">Shoulder</text>
      <text x="172" y="98" font-size="10" font-weight="bold" fill="#1d4ed8">Elbow</text>
      <text x="52" y="140" font-size="10" font-weight="bold" fill="#1d4ed8">Knee</text>
      <text x="155" y="168" font-size="10" font-weight="bold" fill="#1d4ed8">Foot</text>
    </svg>`
  },
  human_five_senses: {
    label: "20. Five Senses: Eyes, Ears, Nose, Tongue, Skin (အာရုံငါးပါး)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <rect width="220" height="180" fill="#fdf2f8" rx="14"/>
      <!-- Eye -->
      <ellipse cx="55" cy="52" rx="24" ry="14" fill="#fff" stroke="#1e293b" stroke-width="2.5"/>
      <circle cx="55" cy="52" r="8" fill="#0284c7"/>
      <circle cx="55" cy="52" r="4" fill="#0f172a"/>
      <text x="55" y="80" text-anchor="middle" font-size="10" font-weight="bold" fill="#334155">Sight (Eye)</text>
      <!-- Ear -->
      <path d="M155 35 Q178 35 175 55 Q172 72 155 68" stroke="#ea580c" stroke-width="5" fill="#fed7aa" stroke-linecap="round"/>
      <text x="162" y="82" text-anchor="middle" font-size="10" font-weight="bold" fill="#334155">Hearing (Ear)</text>
      <!-- Nose & Hand/Skin -->
      <path d="M55 105 L45 132 L65 132" stroke="#ea580c" stroke-width="4" fill="#fed7aa" stroke-linecap="round"/>
      <text x="55" y="152" text-anchor="middle" font-size="10" font-weight="bold" fill="#334155">Smell (Nose)</text>
      <!-- Hand -->
      <circle cx="162" cy="125" r="16" fill="#fdba74"/>
      <text x="162" y="155" text-anchor="middle" font-size="10" font-weight="bold" fill="#334155">Touch (Skin)</text>
    </svg>`
  },
  human_healthy_food: {
    label: "21. Staying Alive: Water, Air & Healthy Food (အစာ၊ ရေ၊ လေ)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <rect width="220" height="180" fill="#ecfdf5" rx="14"/>
      <!-- Apple -->
      <circle cx="55" cy="95" r="24" fill="#ef4444"/>
      <path d="M55 71 Q62 58 70 65" stroke="#16a34a" stroke-width="4" fill="none"/>
      <text x="55" y="138" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">Healthy Fruit</text>
      <!-- Water Glass -->
      <polygon points="100,68 132,68 128,120 104,120" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/>
      <text x="116" y="138" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">Clean Water</text>
      <!-- Air / Cloud -->
      <circle cx="175" cy="92" r="18" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2"/>
      <text x="175" y="96" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">AIR</text>
      <text x="175" y="138" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">Fresh Air</text>
    </svg>`
  },
  forces_push_pull: {
    label: "22. Forces: Push & Pull (တွန်းအား နှင့် ဆွဲအား)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <rect width="220" height="180" fill="#fefce8" rx="14"/>
      <!-- Box being pushed -->
      <rect x="65" y="75" width="55" height="55" fill="#d97706" stroke="#78350f" stroke-width="2.5" rx="6"/>
      <!-- Push Arrow -->
      <line x1="18" y1="102" x2="55" y2="102" stroke="#dc2626" stroke-width="6" stroke-linecap="round"/>
      <polygon points="52,92 64,102 52,112" fill="#dc2626"/>
      <text x="40" y="84" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">PUSH</text>
      <!-- Pull Rope & Arrow -->
      <line x1="120" y1="102" x2="188" y2="102" stroke="#0284c7" stroke-width="5" stroke-dasharray="5,3"/>
      <polygon points="185,92 200,102 185,112" fill="#0284c7"/>
      <text x="165" y="84" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">PULL</text>
    </svg>`
  },
  forces_float_sink: {
    label: "23. Floating & Sinking Tank (ရေပေါ်ပေါ်ခြင်း နှင့် နစ်မြုပ်ခြင်း)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <rect width="220" height="180" fill="#f8fafc" rx="14"/>
      <!-- Water Tank -->
      <rect x="20" y="55" width="180" height="105" fill="#bae6fd" stroke="#0284c7" stroke-width="3" rx="6"/>
      <path d="M20 65 Q65 58 110 65 Q155 72 200 65" stroke="#0284c7" stroke-width="3" fill="none"/>
      <!-- Floating Beach Ball -->
      <circle cx="68" cy="52" r="22" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
      <path d="M46 52 Q68 62 90 52" stroke="#facc15" stroke-width="4" fill="none"/>
      <text x="68" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">Beach Ball (Floats)</text>
      <!-- Sinking Metal Spoon / Rock -->
      <ellipse cx="152" cy="145" rx="22" ry="10" fill="#64748b" stroke="#334155" stroke-width="2"/>
      <text x="152" y="128" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">Metal/Rock (Sinks)</text>
    </svg>`
  },
  forces_magnet: {
    label: "24. Horseshoe Magnet & Nails (သံလိုက် နှင့် သံချောင်း)",
    svg: `<svg viewBox="0 0 220 180" class="w-full h-full">
      <rect width="220" height="180" fill="#fef2f2" rx="14"/>
      <!-- Horseshoe Magnet -->
      <path d="M75 95 V55 A35 35 0 0 1 145 55 V95" stroke="#dc2626" stroke-width="22" fill="none"/>
      <rect x="64" y="80" width="22" height="22" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
      <rect x="134" y="80" width="22" height="22" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
      <text x="75" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">N</text>
      <text x="145" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">S</text>
      <!-- Magnetic pull lines -->
      <path d="M75 110 L75 130 M145 110 L145 130" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4,4"/>
      <!-- Metal Nail & Key -->
      <line x1="55" y1="145" x2="98" y2="145" stroke="#475569" stroke-width="6" stroke-linecap="round"/>
      <circle cx="145" cy="145" r="9" fill="none" stroke="#475569" stroke-width="4"/>
      <line x1="154" y1="145" x2="178" y2="145" stroke="#475569" stroke-width="4"/>
      <text x="110" y="170" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">Magnet pulls Metal (Iron/Steel)</text>
    </svg>`
  }
};
