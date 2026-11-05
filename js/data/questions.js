const DEFAULT_QUESTIONS = [
  // =========================================================================
  // UNIT 1: LIVING THINGS (27 Questions: 9 Focus, 9 Practice, 9 Challenge)
  // =========================================================================
  // --- Unit 1: Focus (9 Questions) ---
  {
    id: "u1_f1", unitId: "u1", level: "focus", topic: "1.1 Animals and plants alive!",
    questionEn: "Which of these things is ALIVE (a living thing)?",
    questionMm: "အောက်ပါတို့ထဲမှ မည်သည်က သက်ရှိ (အသက်ရှင်သောအရာ) ဖြစ်သနည်း။",
    artKey: "living_lion", caption: "Workbook p.2-3: Living things",
    options: ["A lion (ခြင်္သေ့)", "A wooden chair (သစ်သားထိုင်ခုံ)", "A plastic bottle (ပလတ်စတစ်ဘူး)", "A rock (ကျောက်တုံး)"],
    correctIndex: 0,
    explanation: "A lion is an animal, so it is alive! Chairs, bottles, and rocks are non-living. (ခြင်္သေ့သည် သက်ရှိတိရစ္ဆာန်ဖြစ်ပါသည်။)"
  },
  {
    id: "u1_f2", unitId: "u1", level: "focus", topic: "1.1 Animals and plants alive!",
    questionEn: "Look at the pet shop room. Which of these is a LIVING thing?",
    questionMm: "အိမ်မွေးတိရစ္ဆာန်ဆိုင်ခန်းထဲတွင် မည်သည့်အရာသည် သက်ရှိ (Living thing) ဖြစ်သနည်း။",
    artKey: "living_vs_nonliving", caption: "Workbook p.2: Pet shop scene",
    options: ["A pet rabbit and tortoise (ယုန် နှင့် လိပ်)", "A bag of cat food (ကြောင်စာအိတ်)", "A glass fish tank (ငါးကန်ဖန်ပုံး)", "A wooden shelf (သစ်သားစင်)"],
    correctIndex: 0,
    explanation: "Rabbits, tortoises, fish, boys, and potted plants are alive! Cat food bags and shelves are not alive. (ယုန်နှင့် လိပ်တို့သည် သက်ရှိများဖြစ်ကြသည်။)"
  },
  {
    id: "u1_f3", unitId: "u1", level: "focus", topic: "1.1 Animals and plants alive!",
    questionEn: "Is a big green tree a living thing or a non-living thing?",
    questionMm: "သစ်ပင်ကြီးတစ်ပင်သည် သက်ရှိ (Living) လား၊ သက်မဲ့ (Non-living) လား။",
    artKey: "living_vs_nonliving", caption: "Workbook p.3: Tree is a plant",
    options: ["Living thing (သက်ရှိ)", "Non-living thing (သက်မဲ့)"],
    correctIndex: 0,
    explanation: "All plants and trees grow and need water and light, so they are living things! (သစ်ပင်နှင့် အပင်အားလုံးသည် သက်ရှိများ ဖြစ်ကြသည်။)"
  },
  {
    id: "u1_f4", unitId: "u1", level: "focus", topic: "1.1 Animals and plants alive!",
    questionEn: "Which of these is a NON-LIVING thing (never alive)?",
    questionMm: "အောက်ပါတို့ထဲမှ မည်သည်က သက်မဲ့ (Non-living thing) ဖြစ်သနည်း။",
    artKey: "living_vs_nonliving", caption: "Workbook p.3: Sun and Water",
    options: ["The Sun and a bottle of water (နေမင်း နှင့် ရေဘူး)", "A colourful butterfly (လိပ်ပြာ)", "A swimming fish (ရေကူးနေသောငါး)", "A tall sunflower plant (နေကြာပင်)"],
    correctIndex: 0,
    explanation: "The Sun, water, rocks, and chairs are non-living things. (နေနှင့် ရေတို့သည် သက်မဲ့များ ဖြစ်ကြသည်။)"
  },
  {
    id: "u1_f5", unitId: "u1", level: "focus", topic: "1.2 Parts of a plant",
    questionEn: "Look at the plant picture. Which part grows underground in the soil?",
    questionMm: "အပင်ပုံကိုကြည့်ပါ။ မြေကြီးအောက်တွင် ပေါက်သော အစိတ်အပိုင်းမှာ အဘယ်နည်း။",
    artKey: "plant_parts", caption: "Workbook p.5: Parts of a plant",
    options: ["Flower (အပွင့်)", "Root (အမြစ်)", "Leaf (အရွက်)", "Stem (ပင်စည်)"],
    correctIndex: 1,
    explanation: "The roots grow underground in the soil and hold the plant in place. (အမြစ်သည် မြေကြီးအောက်တွင် ပေါက်ပါသည်။)"
  },
  {
    id: "u1_f6", unitId: "u1", level: "focus", topic: "1.2 Parts of a plant",
    questionEn: "Which part of the plant stands upright in the middle and holds up the leaves and flowers?",
    questionMm: "အရွက်များနှင့် အပွင့်များကို ထောက်မပေးထားသော အပင်၏ အလယ်ရိုးတံကို မည်သို့ခေါ်သနည်း။",
    artKey: "plant_parts", caption: "Workbook p.5: Plant stem",
    options: ["Stem (ပင်စည်)", "Root (အမြစ်)", "Soil (မြေကြီး)", "Seed (မျိုးစေ့)"],
    correctIndex: 0,
    explanation: "The stem holds up the leaves and flowers above the ground. (ပင်စည် Stem သည် အရွက်နှင့် အပွင့်များကို ထောက်မပေးထားသည်။)"
  },
  {
    id: "u1_f7", unitId: "u1", level: "focus", topic: "1.2 Parts of a plant",
    questionEn: "Which part of the plant is flat and green, and grows on the stem to catch sunlight?",
    questionMm: "နေရောင်ခြည်ရရှိရန် ပင်စည်ပေါ်တွင် ပေါက်သော အစိမ်းရောင်အပြားလေးများကို မည်သို့ခေါ်သနည်း။",
    artKey: "plant_parts", caption: "Workbook p.5: Plant leaves",
    options: ["Leaf (အရွက်)", "Root (အမြစ်)", "Pot (ပန်းအိုး)", "Worm (တီကောင်)"],
    correctIndex: 0,
    explanation: "Leaves are flat and green and grow from the stem. (အရွက် Leaf သည် စိမ်းလန်းပြီး နေရောင်ခြည်ကို ဖမ်းယူပေးသည်။)"
  },
  {
    id: "u1_f8", unitId: "u1", level: "focus", topic: "1.3 Plants and light",
    questionEn: "Look at Plant A and Plant B. Which plant was grown in the LIGHT?",
    questionMm: "အပင် A နှင့် B ကိုကြည့်ပါ။ မည်သည့်အပင်သည် အလင်းရောင်ကောင်းစွာ ရရှိသနည်း။",
    artKey: "plant_light_dark", caption: "Workbook p.8: Plants in light and dark",
    options: ["Plant A (Green leaves, short strong stem)", "Plant B (Yellow small leaves, tall bendy stem)"],
    correctIndex: 0,
    explanation: "Plants grown in light have healthy green leaves. Plants in the dark turn yellow and tall. (အလင်းရသောအပင်သည် စိမ်းလန်းပါသည်။)"
  },
  {
    id: "u1_f9", unitId: "u1", level: "focus", topic: "1.4 Plants need water",
    questionEn: "What do all plants need to drink through their roots so they stay healthy and do not wilt?",
    questionMm: "အပင်များ မညှိုးနွမ်းဘဲ ရှင်သန်ကြီးထွားရန် အမြစ်မှတစ်ဆင့် မည်သည့်အရာကို စုပ်ယူရသနည်း။",
    artKey: "plant_wilted_water", caption: "Workbook p.11: Plants need water",
    options: ["Water (ရေ)", "Milk (နို့)", "Plastic (ပလတ်စတစ်)", "Sand (သဲ)"],
    correctIndex: 0,
    explanation: "Plants need water to grow and stay healthy! (အပင်များ ရှင်သန်ရန် ရေ လိုအပ်ပါသည်။)"
  },

  // --- Unit 1: Practice (9 Questions) ---
  {
    id: "u1_p1", unitId: "u1", level: "practice", topic: "1.1 Animals and plants alive!",
    questionEn: "Which group contains ONLY non-living things?",
    questionMm: "သက်မဲ့ပစ္စည်းများသာ ပါဝင်သော အုပ်စုကို ရွေးပါ။",
    artKey: "living_vs_nonliving", caption: "Workbook p.3: Sorting Living & Non-living",
    options: ["Water, Chair, Rock, Sun", "Tree, Butterfly, Lion", "Fish, Rabbit, Tortoise", "Sunflower, Cat, Boy"],
    correctIndex: 0,
    explanation: "Water, a chair, a rock, and the Sun are non-living things. Plants and animals are living. (ရေ၊ ထိုင်ခုံ၊ ကျောက်တုံးနှင့် နေတို့သည် သက်မဲ့များဖြစ်သည်။)"
  },
  {
    id: "u1_p2", unitId: "u1", level: "practice", topic: "1.1 Animals and plants alive!",
    questionEn: "Which group contains ONLY living things?",
    questionMm: "သက်ရှိများသာ ပါဝင်သော အုပ်စုကို ရွေးပါ။",
    artKey: "living_lion", caption: "Workbook p.2-3: Living things group",
    options: ["Lion, Tree, Butterfly, Fish", "Lion, Chair, Water, Sun", "Rock, Ball, Lamp post, Cloud", "Plastic bottle, Cat food bag, Shelf"],
    correctIndex: 0,
    explanation: "Lions, trees, butterflies, and fish are all living plants and animals! (ခြင်္သေ့၊ သစ်ပင်၊ လိပ်ပြာနှင့် ငါးတို့သည် သက်ရှိများဖြစ်သည်။)"
  },
  {
    id: "u1_p3", unitId: "u1", level: "practice", topic: "1.2 Parts of a plant",
    questionEn: "Look at a tomato plant and a bean plant. Even though they look different, which four parts do both plants have?",
    questionMm: "ခရမ်းချဉ်သီးပင်နှင့် ပဲပင်တို့တွင် ပုံသဏ္ဌာန်မတူသော်လည်း တူညီစွာပါရှိသော အစိတ်အပိုင်း (၄) ခုမှာ အဘယ်နည်း။",
    artKey: "plant_parts", caption: "Workbook p.6: Tomato and bean plants",
    options: ["Roots, stem, leaves, and flowers", "Eyes, ears, nose, and mouth", "Wheels, pedals, chain, and seat", "Plastic, glass, metal, and rock"],
    correctIndex: 0,
    explanation: "Most plants have roots, a stem, leaves, and flowers! (အပင်အများစုတွင် အမြစ်၊ ပင်စည်၊ အရွက် နှင့် အပွင့်များ ရှိကြသည်။)"
  },
  {
    id: "u1_p4", unitId: "u1", level: "practice", topic: "1.3 Plants and light",
    questionEn: "What happens to a plant when it grows in the DARK?",
    questionMm: "အပင်တစ်ပင်ကို အမှောင်ထဲတွင် ထားပါက မည်သို့ဖြစ်မည်နည်း။",
    artKey: "plant_light_dark", caption: "Workbook p.9: Plants in the dark",
    options: ["It has small yellow leaves and a tall stem", "It has big green leaves and a short stem", "It grows big colourful flowers immediately", "It turns into a rock"],
    correctIndex: 0,
    explanation: "In the dark, a plant grows a tall stem trying to find light, and its leaves are small and yellow. (အမှောင်ထဲတွင် အရွက်ဝါပြီး ပင်စည်ရှည်ထွက်လာတတ်သည်။)"
  },
  {
    id: "u1_p5", unitId: "u1", level: "practice", topic: "1.3 Plants and light",
    questionEn: "Which three labels belong in the box 'Plants with light'?",
    questionMm: "'အလင်းရောင်ရသော အပင် (Plants with light)' အကွက်ထဲတွင် မည်သည့်အချက် (၃) ချက်ကို ထည့်ရမည်နည်း။",
    artKey: "plant_light_dark", caption: "Workbook p.9: Sorting plant features",
    options: ["Big leaves, green leaves, short stem", "Small leaves, yellow leaves, tall stem", "No leaves, brown roots, broken pot", "Blue leaves, metal stem, plastic flower"],
    correctIndex: 0,
    explanation: "Plants with light grow big leaves, green leaves, and a strong short stem. (အလင်းရသောအပင်သည် အရွက်ကြီးပြီး စိမ်းလန်းကာ ပင်စည်တိုပြီး သန်မာသည်။)"
  },
  {
    id: "u1_p6", unitId: "u1", level: "practice", topic: "1.4 Plants need water",
    questionEn: "A plant is not given water for a whole week. What happens to the plant?",
    questionMm: "အပင်တစ်ပင်ကို တစ်ပတ်လုံး ရေမလောင်းဘဲ ထားပါက မည်သို့ဖြစ်သွားမည်နည်း။",
    artKey: "plant_wilted_water", caption: "Workbook p.11-13: Plants need water",
    options: ["The plant wilts (droops down)", "The plant grows twice as fast", "The plant makes plastic leaves", "Nothing changes"],
    correctIndex: 0,
    explanation: "Without water, a plant wilts and droops down. Plants need water to stay upright and grow. (ရေမရပါက အပင်ညှိုးနွမ်းသွားပါမည်။)"
  },
  {
    id: "u1_p7", unitId: "u1", level: "practice", topic: "1.4 Plants need water",
    questionEn: "If a wilted plant is given fresh water again, what will it look like the next day?",
    questionMm: "ညှိုးနေသောအပင်ကို ရေပြန်လောင်းပေးလိုက်သောအခါ မည်သို့ပြန်ဖြစ်လာမည်နည်း။",
    artKey: "plant_wilted_water", caption: "Workbook p.11: Watering a wilted plant",
    options: ["It stands upright and looks healthy again", "It disappears into the soil", "It turns into a stone", "Its leaves fall off immediately"],
    correctIndex: 0,
    explanation: "When given water, a wilted plant takes in water through its roots and stands upright again! (ရေပြန်ရသောအခါ အပင်ပြန်လည် လန်းဆန်းမတ်မတ်ရပ်လာပါသည်။)"
  },
  {
    id: "u1_p8", unitId: "u1", level: "practice", topic: "1.4 Plants need water",
    questionEn: "Look at the rain table: Day 1 = Rain, Day 2 = No rain, Day 3 = No rain, Day 4 = Rain. On which day will the plant look droopy and wilted?",
    questionMm: "Day 1 တွင် မိုးရွာပြီး Day 2 နှင့် Day 3 တို့တွင် မိုးလုံးဝမရွာသောအခါ Day 3 ၌ အပင်မည်သို့ဖြစ်နေမည်နည်း။",
    artKey: "plant_wilted_water", caption: "Workbook p.12: Rain schedule and plants",
    options: ["On Day 3 (after two days with no rain, it droops)", "On Day 1 (when it has fresh rain)", "On Day 4 (when rain waters it again)", "Never"],
    correctIndex: 0,
    explanation: "After days with no rain (Day 3, Day 5, Day 6), the plant droops and wilts. On rainy days (Day 1 and Day 4), it stands tall and healthy! (မိုးမရွာသောရက်များတွင် အပင်ညှိုးကျသွားပါသည်။)"
  },
  {
    id: "u1_p9", unitId: "u1", level: "practice", topic: "1.2 Parts of a plant",
    questionEn: "Which part of a plant is often brightly coloured and grows last?",
    questionMm: "အရောင်အသွေးလှပပြီး အပင်တွင် နောက်ဆုံးမှ ပွင့်ထွက်လာသော အစိတ်အပိုင်းမှာ အဘယ်နည်း။",
    artKey: "plant_parts", caption: "Workbook p.5-7: Flowers on a plant",
    options: ["The flower (အပွင့်)", "The underground root (အမြစ်)", "The brown soil (မြေကြီး)", "The seed coat (အစေ့ခွံ)"],
    correctIndex: 0,
    explanation: "The flower is the colourful part at the top that grows after the roots, stem, and leaves. (အပွင့်သည် နောက်ဆုံးမှ ပွင့်လာသော အစိတ်အပိုင်းဖြစ်သည်။)"
  },

  // --- Unit 1: Challenge (9 Questions) ---
  {
    id: "u1_c1", unitId: "u1", level: "challenge", topic: "1.2 Parts of a plant",
    questionEn: "When a seed starts to grow, what is the correct order of plant growth?",
    questionMm: "မျိုးစေ့မှ အပင်ပေါက်လာသောအခါ မှန်ကန်သော ကြီးထွားမှုအစဉ်ကို ရွေးပါ။",
    artKey: "plant_growth_order", caption: "Workbook p.6-7: Order of plant growth",
    options: [
      "Root grows first ➔ then Stem & Leaves ➔ Flowers grow last",
      "Flower grows first ➔ then Leaves ➔ Root grows last",
      "Leaves grow first ➔ then Flower ➔ Stem grows last",
      "All parts pop out at the exact same second"
    ],
    correctIndex: 0,
    explanation: "First the root grows down, then the stem and leaves grow up, and flowers are the last thing to grow! (အမြစ်အရင်ထွက်ပြီး ပင်စည်၊ အရွက်နှင့် နောက်ဆုံးမှ အပွင့်ပွင့်ပါသည်။)"
  },
  {
    id: "u1_c2", unitId: "u1", level: "challenge", topic: "1.3 Plants and light",
    questionEn: "What will happen to a plant if it has NO leaves at all?",
    questionMm: "အပင်တစ်ပင်တွင် အရွက်များ လုံးဝမရှိတော့ပါက မည်သို့ဖြစ်မည်နည်း။",
    artKey: "plant_parts", caption: "Workbook p.10: Challenge Question 4",
    options: ["The plant will not grow", "The plant will grow much taller and stronger", "The plant will not need water anymore", "The roots will turn into flowers"],
    correctIndex: 0,
    explanation: "Leaves help the plant use light to grow. Without leaves, the plant will not grow. (အရွက်မရှိပါက အပင်ဆက်မကြီးထွားနိုင်ပါ။)"
  },
  {
    id: "u1_c3", unitId: "u1", level: "challenge", topic: "1.4 Plants need water",
    questionEn: "On Day 4 a plant was 5 bricks tall. On Days 5 and 6 we stopped watering it and its height dropped to 3 bricks. Why?",
    questionMm: "ရေမလောင်းသည့် ရက်များတွင် အပင်၏အမြင့် ဘာကြောင့် နိမ့်ကျသွားသနည်း။",
    artKey: "plant_wilted_water", caption: "Workbook p.13-14: Plant height in bricks",
    options: ["The plant wilted (bent over) because it had no water", "Someone cut the stem with scissors", "The bricks grew bigger", "The sun melted the soil"],
    correctIndex: 0,
    explanation: "The plant wilted and drooped down because it had no water! (ရေမရသဖြင့် အပင်ညှိုးပြီး ကိုင်းကျသွားသောကြောင့် ဖြစ်သည်။)"
  },
  {
    id: "u1_c4", unitId: "u1", level: "challenge", topic: "1.1 Animals and plants alive!",
    questionEn: "Choose the sentence that is TRUE about a cat and water:",
    questionMm: "ကြောင်နှင့် ရေအကြောင်း မှန်ကန်သော ဝါကျကို ရွေးချယ်ပါ။",
    artKey: "living_vs_nonliving", caption: "Workbook p.4: Challenge sentences",
    options: ["A cat can move and is alive; water does not need food and is not alive", "A rock is alive and a fish is not alive", "Water is alive and needs food every day", "A ball is alive because it rolls"],
    correctIndex: 0,
    explanation: "A cat can move, needs food, and is alive. Water does not need food and is not alive! (ကြောင်သည် သက်ရှိဖြစ်၍ ရွေ့လျားနိုင်ပြီး ရေသည် အစာမလိုသော သက်မဲ့ဖြစ်သည်။)"
  },
  {
    id: "u1_c5", unitId: "u1", level: "challenge", topic: "1.1 Animals and plants alive!",
    questionEn: "Look at the park picture with a big oak tree and a metal street lamp post. Which sentence is scientifically correct?",
    questionMm: "ပန်းခြံထဲရှိ သစ်ပင်ကြီးနှင့် လမ်းမီးတိုင်တို့အကြောင်း မည်သည့်အချက်က မှန်ကန်သနည်း။",
    artKey: "living_vs_nonliving", caption: "Workbook p.4: Tree vs Lamp post",
    options: ["The tree is a living thing that grows; the lamp post is non-living", "Both the tree and the lamp post are living things because both are tall", "The clouds and lamp post are alive", "The tree is not alive because it cannot walk"],
    correctIndex: 0,
    explanation: "Even though trees don't walk like animals, they grow, make leaves, and are living things! Lamp posts and clouds are non-living. (သစ်ပင်သည် ကြီးထွားနိုင်သော သက်ရှိဖြစ်ပြီး မီးတိုင်မှာ သက်မဲ့ဖြစ်သည်။)"
  },
  {
    id: "u1_c6", unitId: "u1", level: "challenge", topic: "1.2 Parts of a plant",
    questionEn: "In the 4 pictures of a growing sunflower, why is there a root and a stem in every picture, but a flower ONLY in the last picture?",
    questionMm: "နေကြာပင် ကြီးထွားပုံ အဆင့် (၄) ပုံတွင် အမြစ်နှင့် ပင်စည်ကို ပုံတိုင်း၌တွေ့ရပြီး အပွင့်ကို နောက်ဆုံးပုံမှသာ ဘာကြောင့်တွေ့ရသနည်း။",
    artKey: "plant_growth_order", caption: "Workbook p.7: Question 4",
    options: ["Because roots grow first, then the stem, and flowers are the last thing to grow", "Because the flowers fell off in the baby pictures", "Because you cannot draw a picture without a stem", "Because flowers grow underground first"],
    correctIndex: 0,
    explanation: "Roots grow first, then the stem, and flowers are the last thing to grow on an adult plant! (အမြစ်နှင့် ပင်စည်က အရင်ပေါက်ပြီး အပွင့်က နောက်ဆုံးမှ ပွင့်သောကြောင့်ဖြစ်သည်။)"
  },
  {
    id: "u1_c7", unitId: "u1", level: "challenge", topic: "1.3 Plants and light",
    questionEn: "Plant A has dark green leaves and a short stem. Plant B has pale yellow small leaves and a tall curved stem. What can you conclude?",
    questionMm: "အပင် A (အရွက်စိမ်း၊ ပင်စည်တို) နှင့် အပင် B (အရွက်ဝါသေး၊ ပင်စည်ရှည်ကွေး) တို့ကို ကြည့်ပြီး မည်သို့ကောက်ချက်ချနိုင်သနည်း။",
    artKey: "plant_light_dark", caption: "Workbook p.10: Comparing Plant A and B",
    options: ["Plant A was grown in the light; Plant B was grown in the dark", "Plant A was grown in the dark; Plant B was grown in the light", "Plant B was given too much sunlight", "Plant A has no roots"],
    correctIndex: 0,
    explanation: "Plant A was grown in the light (healthy green leaves). Plant B was grown in the dark (tall stem searching for light, yellow leaves). (အပင် A သည် အလင်းရောင်တွင်ပေါက်ပြီး အပင် B သည် အမှောင်ထဲတွင် ပေါက်သောအပင်ဖြစ်သည်။)"
  },
  {
    id: "u1_c8", unitId: "u1", level: "challenge", topic: "1.4 Plants need water",
    questionEn: "Look at the brick height chart: Day 1 = 2 bricks, Day 2 = 3 bricks, Day 3 = 4 bricks, Day 4 = 5 bricks. How many bricks did the watered plant grow each day?",
    questionMm: "ရေမှန်မှန်လောင်းသော ရက်များ (Day 1 မှ Day 4) တွင် အပင်သည် တစ်ရက်လျှင် အုတ်ခဲ ဘယ်နှစ်တုံးစီ မြင့်တက်လာသနည်း။",
    artKey: "plant_wilted_water", caption: "Workbook p.13: Measuring plant height in bricks",
    options: ["It grew 1 brick taller each day when watered", "It shrank by 2 bricks each day", "It stayed 2 bricks tall on all days", "It grew 10 bricks taller each day"],
    correctIndex: 0,
    explanation: "From 2 ➔ 3 ➔ 4 ➔ 5 bricks, the plant grew 1 brick taller every day while it had water! (ရေရရှိသဖြင့် တစ်ရက်လျှင် အုတ်ခဲ ၁ တုံးစာ ပိုမြင့်လာပါသည်။)"
  },
  {
    id: "u1_c9", unitId: "u1", level: "challenge", topic: "1.4 Plants need water",
    questionEn: "What two things must a scientist give a potted plant so it grows green, tall, and strong?",
    questionMm: "ပန်းအိုးထဲရှိ အပင်တစ်ပင် စိမ်းလန်းသန်မာစွာ ကြီးထွားရန် မည်သည့်အရာ (၂) ခု ပေးရမည်နည်း။",
    artKey: "plant_parts", caption: "Workbook Unit 1 Summary",
    options: ["Light and Water (အလင်းရောင် နှင့် ရေ)", "Darkness and Sand (အမှောင် နှင့် သဲ)", "Plastic and Metal (ပလတ်စတစ် နှင့် သတ္တု)", "Loud music and Ice"],
    correctIndex: 0,
    explanation: "Plants need light and water to grow healthy and strong! (အပင်များ သန်မာစွာကြီးထွားရန် အလင်းရောင်နှင့် ရေ လိုအပ်ပါသည်။)"
  },

  // =========================================================================
  // UNIT 2: SOUND (27 Questions: 9 Focus, 9 Practice, 9 Challenge)
  // =========================================================================
  // --- Unit 2: Focus (9 Questions) ---
  {
    id: "u2_f1", unitId: "u2", level: "focus", topic: "2.1 Sound sources",
    questionEn: "Which of these is a SOUND SOURCE in the music room?",
    questionMm: "ဂီတအခန်းထဲတွင် မည်သည့်အရာသည် အသံထွက်ရာပင်ရင်း (Sound source) ဖြစ်သနည်း။",
    artKey: "sound_drum_guitar", caption: "Workbook p.15: Sound sources",
    options: ["A girl playing the drums (ဗုံတီးနေခြင်း)", "A picture on the wall (နံရံပေါ်မှ ပန်းချီကား)", "A wooden table (သစ်သားစားပွဲ)", "A silent book (စာအုပ်)"],
    correctIndex: 0,
    explanation: "Drums, violins, guitars, and singing people make sound, so they are sound sources. (ဗုံတီးခြင်းသည် အသံထွက်ပေါ်ရာ ပင်ရင်းဖြစ်သည်။)"
  },
  {
    id: "u2_f2", unitId: "u2", level: "focus", topic: "2.1 Sound sources",
    questionEn: "In the classroom picture, a bird is singing outside the window and a teacher is talking. Are they sound sources?",
    questionMm: "သီချင်းဆိုနေသော ငှက်နှင့် စကားပြောနေသော ဆရာတို့သည် အသံထွက်ရာပင်ရင်း (Sound sources) ဟုတ်ပါသလား။",
    artKey: "sound_drum_guitar", caption: "Workbook p.15: People and birds making sound",
    options: ["Yes, both are sound sources because they make sounds", "No, only machines can be sound sources", "Only the window glass is a sound source", "Neither makes any sound"],
    correctIndex: 0,
    explanation: "Anything that makes a sound—like a singing bird, a talking teacher, or a ringing bell—is a sound source! (အသံထွက်ပေါ်စေသော အရာတိုင်းသည် Sound source ဖြစ်သည်။)"
  },
  {
    id: "u2_f3", unitId: "u2", level: "focus", topic: "2.1 Sound sources",
    questionEn: "Which musical instrument makes a sound when you pluck its strings?",
    questionMm: "ကြိုးလေးများကို လက်ဖြင့်တီးခတ်သောအခါ အသံထွက်သော တူရိယာမှာ အဘယ်နည်း။",
    artKey: "sound_drum_guitar", caption: "Workbook p.15: Musical instruments",
    options: ["A guitar or violin (ဂစ်တာ သို့မဟုတ် တယော)", "A wooden chair (ထိုင်ခုံ)", "A paper book (စာအုပ်)", "A cotton pillow (ခေါင်းအုံး)"],
    correctIndex: 0,
    explanation: "Guitars and violins are musical sound sources. (ဂစ်တာနှင့် တယောတို့သည် အသံထွက်သော တူရိယာများ ဖြစ်ကြသည်။)"
  },
  {
    id: "u2_f4", unitId: "u2", level: "focus", topic: "2.2 Loud and quiet",
    questionEn: "What kind of sound does an erupting volcano or a bulldozer make?",
    questionMm: "မီးတောင်ပေါက်ကွဲခြင်း သို့မဟုတ် မြေထိုးစက်သည် မည်သို့သောအသံ ထွက်သနည်း။",
    artKey: "sound_loud_volcano", caption: "Workbook p.18: Loud and quiet sounds",
    options: ["A very LOUD sound (အလွန်ကျယ်သောအသံ)", "A very QUIET sound (အလွန်တိုးသောအသံ)"],
    correctIndex: 0,
    explanation: "Volcanoes and bulldozers make very loud sounds! Ants and blowing bubbles make very quiet sounds. (မီးတောင်နှင့် စက်ကြီးများသည် အလွန်ကျယ်လောင်သောအသံ ထွက်သည်။)"
  },
  {
    id: "u2_f5", unitId: "u2", level: "focus", topic: "2.2 Loud and quiet",
    questionEn: "Look at the girl blowing soap bubbles and the tiny ant walking. What kind of sound do they make?",
    questionMm: "ဆပ်ပြာပူဖောင်းမှုတ်နေသော မိန်းကလေးနှင့် လမ်းလျှောက်နေသော ပုရွက်ဆိတ်တို့သည် မည်သို့သောအသံ ထွက်သနည်း။",
    artKey: "sound_loud_volcano", caption: "Workbook p.18: Bubbles and ant",
    options: ["A very QUIET sound (အလွန်တိုးညင်းသောအသံ)", "A roaring LOUD sound (အလွန်ကျယ်သောအသံ)"],
    correctIndex: 0,
    explanation: "Blowing soap bubbles and a walking ant make very quiet sounds! (ပူဖောင်းမှုတ်ခြင်းနှင့် ပုရွက်ဆိတ်တို့သည် အလွန်တိုးသောအသံသာ ထွက်သည်။)"
  },
  {
    id: "u2_f6", unitId: "u2", level: "focus", topic: "2.2 Loud and quiet",
    questionEn: "What kind of sound does a small bird chirping in a tree make compared to a volcano?",
    questionMm: "သစ်ပင်ပေါ်မှ ငှက်ကလေးတွန်သံသည် မီးတောင်ပေါက်ကွဲသံနှင့် နှိုင်းယှဉ်လျှင် မည်သို့ရှိသနည်း။",
    artKey: "sound_loud_volcano", caption: "Workbook p.18: Bird song",
    options: ["Quiet / gentle sound (တိုးညင်းသာယာသောအသံ)", "Louder than a volcano (မီးတောင်ထက် ပိုကျယ်သောအသံ)"],
    correctIndex: 0,
    explanation: "A little bird makes a gentle, quiet sound compared to heavy machinery or a volcano. (ငှက်ကလေး၏ အသံသည် တိုးညင်းသာယာပါသည်။)"
  },
  {
    id: "u2_f7", unitId: "u2", level: "focus", topic: "2.3 Sound moves",
    questionEn: "Very loud sounds can hurt our ears. How can the road worker using a pneumatic drill keep his ears SAFE?",
    questionMm: "ကျယ်လောင်သော လမ်းဖောက်စက်သံမှ နားကိုမထိခိုက်အောင် မည်သို့ကာကွယ်ရမည်နည်း။",
    artKey: "sound_ear_safety", caption: "Workbook p.21: Keeping ears safe",
    options: ["Wear ear defenders / cover his ears", "Stand right next to a huge loudspeaker", "Turn headphone music to maximum volume", "Put rocks in his pockets"],
    correctIndex: 0,
    explanation: "Wearing ear protection or covering your ears keeps them safe from loud noises. (နားအကာအကွယ် ဝတ်ဆင်ခြင်းဖြင့် ကာကွယ်နိုင်သည်။)"
  },
  {
    id: "u2_f8", unitId: "u2", level: "focus", topic: "2.3 Sound moves",
    questionEn: "Look at the girl standing right in front of a vibrating giant loudspeaker without ear protection. Is she being safe?",
    questionMm: "အသံချဲ့စက်ကြီးရှေ့တည့်တည့်တွင် နားအကာအကွယ်မပါဘဲ ရပ်နေသော မိန်းကလေးသည် ဘေးကင်းပါသလား။",
    artKey: "sound_ear_safety", caption: "Workbook p.21: Loudspeaker danger",
    options: ["No, the loud sound can hurt her ears", "Yes, loud speakers are very quiet", "Yes, because sound cannot move"],
    correctIndex: 0,
    explanation: "Standing close to a loud speaker without ear protection is NOT safe because very loud sounds can damage our ears. (အသံချဲ့စက်ကြီးအနီးတွင် ရပ်နေခြင်းသည် နားကို ထိခိုက်စေနိုင်ပါသည်။)"
  },
  {
    id: "u2_f9", unitId: "u2", level: "focus", topic: "2.3 Sound moves",
    questionEn: "If someone blows a loud trumpet right next to a boy, what should the boy do to protect his ears?",
    questionMm: "အနီးကပ် ခရာအကျယ်ကြီး မှုတ်နေချိန်တွင် နားမနာစေရန် မည်သို့ပြုလုပ်သင့်သနည်း။",
    artKey: "sound_ear_safety", caption: "Workbook p.21: Covering ears with hands",
    options: ["Cover his ears with his hands and move further away", "Put his ear inside the trumpet", "Shout louder than the trumpet"],
    correctIndex: 0,
    explanation: "Covering your ears with your hands or moving away protects your ears from loud sounds. (နားကို လက်ဖြင့်ပိတ်ထားခြင်း သို့မဟုတ် ဝေးရာသို့သွားခြင်းဖြင့် ကာကွယ်ရမည်။)"
  },

  // --- Unit 2: Practice (9 Questions) ---
  {
    id: "u2_p1", unitId: "u2", level: "practice", topic: "2.1 Sound sources",
    questionEn: "Some sounds are nice to listen to, and some sounds are not nice. Which sound do most people find NOT nice?",
    questionMm: "လူအများစု နားထောင်ရန် မနှစ်သက်သော (ဆူညံသော) အသံမှာ အဘယ်နည်း။",
    artKey: "sound_loud_volcano", caption: "Workbook p.16: Nice sounds vs not nice sounds",
    options: ["Loud thunder and a noisy road drill (မိုးခြိမ်းသံနှင့် လမ်းဖောက်စက်သံ)", "Gentle bird song (ငှက်ကလေးတွန်သံ)", "Soft violin music (တယောသံ)", "A happy baby laughing"],
    correctIndex: 0,
    explanation: "Loud thunder and road drills make harsh noises that most people do not like. (မိုးခြိမ်းသံနှင့် လမ်းဖောက်စက်သံတို့သည် နားခံရခက်သော အသံများဖြစ်သည်။)"
  },
  {
    id: "u2_p2", unitId: "u2", level: "practice", topic: "2.1 Sound sources",
    questionEn: "Which sound source is usually found OUTDOORS only?",
    questionMm: "အောက်ပါတို့ထဲမှ မည်သည့်အသံပင်ရင်းကို အိမ်အပြင်ဘက် (Outdoors) တွင်သာ တွေ့ရသနည်း။",
    artKey: "sound_loud_volcano", caption: "Workbook p.16-17: Indoor & outdoor sounds",
    options: ["Thunder & heavy tractor (မိုးခြိမ်းသံနှင့် ထွန်စက်)", "A bedside alarm clock (နှိုးစက်နာရီ)", "A kitchen kettle boiling (ရေနွေးအိုး)", "A bathroom tap dripping (ရေဘုံပိုင်)"],
    correctIndex: 0,
    explanation: "Thunder and big tractors are outdoor sound sources. (မိုးခြိမ်းသံနှင့် ထွန်စက်သံသည် အပြင်ဘက်တွင် ထွက်ပေါ်သောအသံများ ဖြစ်သည်။)"
  },
  {
    id: "u2_p3", unitId: "u2", level: "practice", topic: "2.1 Sound sources",
    questionEn: "Which sound source can be heard BOTH indoors and outdoors?",
    questionMm: "အိမ်တွင်းရော အိမ်ပြင်မှာပါ နှစ်နေရာလုံး ကြားရလေ့ရှိသော အသံပင်ရင်းမှာ အဘယ်နည်း။",
    artKey: "sound_drum_guitar", caption: "Workbook p.17: Indoor and outdoor sources",
    options: ["People talking or a mobile phone ringing (လူစကားပြောသံ / ဖုန်းမြည်သံ)", "A giant ocean ship horn", "An erupting volcano", "A farm combine harvester"],
    correctIndex: 0,
    explanation: "People talking, babies crying, or phones ringing can be found both indoors and outdoors! (လူစကားပြောသံနှင့် ဖုန်းမြည်သံကို အိမ်တွင်းရော အိမ်ပြင်မှာပါ တွေ့နိုင်သည်။)"
  },
  {
    id: "u2_p4", unitId: "u2", level: "practice", topic: "2.2 Loud and quiet",
    questionEn: "When do we need a QUIET sound?",
    questionMm: "မည်သည့်အချိန်တွင် တိုးညင်းသောအသံ (Quiet sound) လိုအပ်သနည်း။",
    artKey: "sound_ear_safety", caption: "Workbook p.19: Loud vs Quiet situations",
    options: ["When a baby is sleeping or someone is reading", "When a fire engine warns traffic", "When a teacher blows a whistle on the sports field", "When shouting to a friend far away"],
    correctIndex: 0,
    explanation: "We need quiet sounds when a baby is sleeping or when reading a book. (ကလေးအိပ်နေချိန်နှင့် စာဖတ်နေချိန်တွင် တိတ်ဆိတ်ရန် လိုအပ်သည်။)"
  },
  {
    id: "u2_p5", unitId: "u2", level: "practice", topic: "2.2 Loud and quiet",
    questionEn: "Why does a fire engine have a very LOUD siren?",
    questionMm: "မီးသတ်ကားတွင် အလွန်ကျယ်လောင်သော အချက်ပေးဥသြသံ (Siren) ဘာကြောင့် တပ်ဆင်ထားသနည်း။",
    artKey: "sound_distance", caption: "Workbook p.19: You need loud sounds here",
    options: ["So people far away can hear it and clear the road", "To help babies fall asleep", "So nobody knows it is coming", "Because fire engines cannot move without sound"],
    correctIndex: 0,
    explanation: "Fire engines, sports whistles, and shouting across a playground need LOUD sounds so people far away can hear them! (အဝေးမှ လူများကြားပြီး လမ်းဖယ်ပေးနိုင်ရန် ကျယ်လောင်သောအသံ လိုအပ်သည်။)"
  },
  {
    id: "u2_p6", unitId: "u2", level: "practice", topic: "2.2 Loud and quiet",
    questionEn: "A teacher is on a big playground and wants all the children to stop playing and listen. What kind of sound does she need?",
    questionMm: "ကစားကွင်းအကျယ်ကြီးထဲတွင် ကလေးအားလုံး ကြားနိုင်ရန် ဆရာမက မည်သို့သောအသံကို သုံးရမည်နည်း။",
    artKey: "sound_distance", caption: "Workbook p.19: Whistle on playground",
    options: ["A loud whistle sound (ကျယ်လောင်သော ဝီစီသံ)", "A tiny whisper (တိုးတိုးလေး ပြောသံ)", "Blowing soap bubbles", "Dropping a feather"],
    correctIndex: 0,
    explanation: "A loud whistle travels across the playground so all children can hear it. (ကွင်းပြင်ကျယ်တွင် အားလုံးကြားနိုင်ရန် ကျယ်လောင်သော ဝီစီသံ လိုအပ်သည်။)"
  },
  {
    id: "u2_p7", unitId: "u2", level: "practice", topic: "2.3 Sound moves",
    questionEn: "When a sound source is FAR AWAY from you, how does it sound?",
    questionMm: "အသံထွက်ရာပင်ရင်းသည် မိမိနှင့် အဝေးကြီးတွင် ရှိနေသောအခါ အသံမည်သို့ဖြစ်သွားသနည်း။",
    artKey: "sound_distance", caption: "Workbook p.22: Near and far sounds",
    options: ["The sound is QUIET (တိုးသွားသည်)", "The sound is LOUDER (ပိုကျယ်လာသည်)", "The sound stops moving completely", "The sound turns into light"],
    correctIndex: 0,
    explanation: "When a sound source is far away, the sound is quiet. When you are near, it is loud. (အသံပင်ရင်းနှင့် ဝေးသွားလျှင် အသံတိုးသွားပါသည်။)"
  },
  {
    id: "u2_p8", unitId: "u2", level: "practice", topic: "2.3 Sound moves",
    questionEn: "Complete the sentence: 'When a sound source is NEAR, the sound is ______.'",
    questionMm: "ဝါကျဖြည့်ပါ - 'အသံထွက်ရာပင်ရင်းသည် အနီးတွင်ရှိသောအခါ အသံသည် ______ ဖြစ်သည်။'",
    artKey: "sound_distance", caption: "Workbook p.22: Practice Question 2",
    options: ["Loud (ကျယ်သည်)", "Quiet (တိုးသည်)", "Silent (အသံတိတ်သည်)", "Invisible"],
    correctIndex: 0,
    explanation: "When a sound source is near, the sound is loud! (အသံပင်ရင်းနှင့် နီးသောအခါ အသံကျယ်ပါသည်။)"
  },
  {
    id: "u2_p9", unitId: "u2", level: "practice", topic: "2.3 Sound moves",
    questionEn: "Two children are listening to music on headphones. Girl A has soft music and is smiling. Boy B has very loud music and looks in pain. Who is keeping their ears safe?",
    questionMm: "နားကြပ်ဖြင့် သီချင်းနားထောင်နေသော ကလေးနှစ်ဦးတွင် မည်သူက နားကို ဘေးကင်းအောင် သုံးနေသနည်း။",
    artKey: "sound_ear_safety", caption: "Workbook p.21: Headphone volume safety",
    options: ["Girl A, who keeps the headphone volume quiet and safe", "Boy B, who turns the volume up until his ears hurt", "Neither of them"],
    correctIndex: 0,
    explanation: "Listening to headphones at a gentle, quiet volume keeps your ears safe! (နားကြပ်ကို အသံအနေတော်ဖြင့် နားထောင်ခြင်းသည် ဘေးကင်းပါသည်။)"
  },

  // --- Unit 2: Challenge (9 Questions) ---
  {
    id: "u2_c1", unitId: "u2", level: "challenge", topic: "2.2 Loud and quiet",
    questionEn: "Compare these 5 sound sources: Volcano, Train, Tap with lots of water, Dripping tap, Closing curtains. Which one is the QUIETEST?",
    questionMm: "မီးတောင်၊ မီးရထား၊ ရေအများကြီးကျသံ၊ ရေစက်ကျသံ၊ လိုက်ကာဆွဲသံ တို့ထဲတွင် မည်သည်က အတိုးညင်းဆုံး (Quietest) ဖြစ်သနည်း။",
    artKey: "sound_loud_volcano", caption: "Workbook p.20: Ordering loudness",
    options: ["Closing soft fabric curtains (လိုက်ကာဆွဲသံ)", "An erupting volcano (မီးတောင်)", "A moving train (မီးရထား)", "A tap with lots of water rushing out"],
    correctIndex: 0,
    explanation: "Closing curtains makes the quietest sound, while the volcano is the loudest! (လိုက်ကာဆွဲသံသည် အတိုးဆုံးဖြစ်ပြီး မီးတောင်သံသည် အကျယ်ဆုံးဖြစ်သည်။)"
  },
  {
    id: "u2_c2", unitId: "u2", level: "challenge", topic: "2.2 Loud and quiet",
    questionEn: "In the loudness table (Volcano, Train, Curtains, Dripping tap, Rushing tap), which one is the LOUDEST sound source?",
    questionMm: "Workbook စာမျက်နှာ ၂၀ ရှိ ဇယားတွင် အကျယ်လောင်ဆုံး (Loudest) အသံပင်ရင်းမှာ အဘယ်နည်း။",
    artKey: "sound_loud_volcano", caption: "Workbook p.20: Loudest sound source",
    options: ["The erupting volcano (မီးတောင်ပေါက်ကွဲသံ)", "The dripping tap (ရေစက်ကျသံ)", "Closing the curtains (လိုက်ကာဆွဲသံ)", "A quiet whisper"],
    correctIndex: 0,
    explanation: "An erupting volcano is the loudest sound source in the table! (မီးတောင်ပေါက်ကွဲသံသည် အကျယ်လောင်ဆုံး ဖြစ်ပါသည်။)"
  },
  {
    id: "u2_c3", unitId: "u2", level: "challenge", topic: "2.2 Loud and quiet",
    questionEn: "Compare a tap dripping one drop at a time with a tap that has lots of water rushing out. Which one is louder?",
    questionMm: "ရေတစ်စက်ချင်းကျနေသော ဘုံပိုင်ခေါင်းနှင့် ရေအများကြီး ফွင့်ချထားသော ဘုံပိုင်ခေါင်းတွင် မည်သည်က ပိုကျယ်သနည်း။",
    artKey: "sound_distance", caption: "Workbook p.20: Dripping tap vs Rushing tap",
    options: ["The tap with lots of water coming out is louder (quiet), while the dripping tap is very quiet", "The single drop is louder than a waterfall", "Both make zero sound"],
    correctIndex: 0,
    explanation: "A tap with lots of water rushing out makes more sound than a tiny dripping tap. (ရေအများကြီးကျနေသောအသံက တစ်စက်ချင်းကျသောအသံထက် ပိုကျယ်ပါသည်။)"
  },
  {
    id: "u2_c4", unitId: "u2", level: "challenge", topic: "2.3 Sound moves",
    questionEn: "Why do sounds get louder as you walk closer to the sound source?",
    questionMm: "အသံပင်ရင်းအနားသို့ တိုးသွားသောအခါ အသံဘာကြောင့် ပိုကျယ်လာသနည်း။",
    artKey: "sound_distance", caption: "Workbook p.22: How sound moves",
    options: ["Because sound moves from the source to your ears and is stronger when near", "Because your ears grow bigger when you walk", "Because the air disappears", "Because light pushes the sound"],
    correctIndex: 0,
    explanation: "Sound travels from the source to our ears. When you are near, more sound reaches your ears! (အသံသည် ပင်ရင်းမှ နားဆီသို့ ရွေ့လျားသောကြောင့် အနီးတွင် ပိုကျယ်ပါသည်။)"
  },
  {
    id: "u2_c5", unitId: "u2", level: "challenge", topic: "2.3 Sound moves",
    questionEn: "Which body part do we use to detect sound as it moves through the air?",
    questionMm: "လေထဲမှ ရွေ့လျားလာသော အသံကို ခန္ဓာကိုယ်၏ မည်သည့်အစိတ်အပိုင်းဖြင့် ကြားနိုင်သနည်း။",
    artKey: "sound_ear_safety", caption: "Workbook p.22: Word puzzle concepts",
    options: ["Our ears (နား)", "Our eyes (မျက်စိ)", "Our nose (နှာခေါင်း)", "Our knees (ဒူးခေါင်း)"],
    correctIndex: 0,
    explanation: "We hear sounds with our ears when sound moves from the source into our ears. (ကျွန်ုပ်တို့သည် နားဖြင့် အသံကို ကြားရပါသည်။)"
  },
  {
    id: "u2_c6", unitId: "u2", level: "challenge", topic: "2.3 Sound moves",
    questionEn: "If a police car with a siren drives away from you down the street, how does the sound change?",
    questionMm: "ဥသြဆွဲနေသော ရဲကားတစ်စီးသည် မိမိအနားမှ အဝေးသို့ မောင်းထွက်သွားသောအခါ အသံမည်သို့ ပြောင်းလဲသွားမည်နည်း။",
    artKey: "sound_distance", caption: "Workbook p.22: Sound changes with distance",
    options: ["The sound changes from loud to quiet as it gets further away", "The sound changes from quiet to louder as it gets further away", "The sound stays the exact same loudness forever"],
    correctIndex: 0,
    explanation: "Sound sources are quieter when you are far away, so the siren gets quieter as it drives away. (အဝေးသို့ ရောက်သွားလေလေ အသံတိုးသွားလေလေ ဖြစ်သည်။)"
  },
  {
    id: "u2_c7", unitId: "u2", level: "challenge", topic: "2.1 Sound sources",
    questionEn: "A drum is sitting untouched on the floor. Is it making a sound right now, and how do we make it a sound source?",
    questionMm: "ကြမ်းပြင်ပေါ်တွင် ဒီအတိုင်းချထားသော ဗုံတစ်လုံးသည် အသံထွက်နေပါသလား။ အသံထွက်ရန် မည်သို့လုပ်ရမည်နည်း။",
    artKey: "sound_drum_guitar", caption: "Workbook p.15: Making sound with instruments",
    options: ["It is silent until we hit it with drumsticks or hands", "It plays loud music by itself without anyone touching it", "It only makes sound when put in water"],
    correctIndex: 0,
    explanation: "An instrument makes a sound when we hit, blow, or pluck it! (ဗုံကို တုတ် သို့မဟုတ် လက်ဖြင့် တီးခတ်မှသာ အသံထွက်ပေါ်လာပါသည်။)"
  },
  {
    id: "u2_c8", unitId: "u2", level: "challenge", topic: "2.3 Sound moves",
    questionEn: "A girl is listening to a tiny bee buzzing. Why does she cup her hand behind her ear?",
    questionMm: "ပျားကလေးဝဲနေသော တိုးညင်းသည့်အသံကို ပိုကြားရစေရန် မိန်းကလေးက သူမ၏နားနောက်တွင် လက်ဝါးဖြင့် ဘာကြောင့်အုပ်ထားသနည်း။",
    artKey: "sound_ear_safety", caption: "Workbook p.21: Listening to quiet sounds",
    options: ["To help catch more sound moving into her ear", "Because the bee is louder than a volcano", "To block out all sound", "To keep her fingers warm"],
    correctIndex: 0,
    explanation: "Cupping your hand behind your ear helps collect quiet sounds moving through the air! (နားနောက်တွင် လက်ဝါးကာထားခြင်းဖြင့် တိုးညင်းသောအသံများကို ပိုမိုဖမ်းယူကြားနိုင်သည်။)"
  },
  {
    id: "u2_c9", unitId: "u2", level: "challenge", topic: "2.3 Sound moves",
    questionEn: "Which word completes this scientific rule: 'Sound ______ from a sound source to our ears.'",
    questionMm: "သိပ္ပံနိယာမကို ဖြည့်စွက်ပါ - 'အသံသည် အသံထွက်ရာပင်ရင်းမှ ကျွန်ုပ်တို့၏ နားဆီသို့ ______ သည်။'",
    artKey: "sound_distance", caption: "Workbook p.21-22: Sound moves",
    options: ["moves / travels (ရွေ့လျားသည်)", "freezes (အေးခဲသည်)", "sinks (နစ်မြုပ်သည်)", "melts (အရည်ပျော်သည်)"],
    correctIndex: 0,
    explanation: "Sound moves (travels) through the air from the sound source to our ears! (အသံသည် ပင်ရင်းမှ နားဆီသို့ ရွေ့လျားပါသည်။)"
  },

  // =========================================================================
  // UNIT 3: MATERIALS IN MY WORLD (27 Questions: 9 Focus, 9 Practice, 9 Challenge)
  // =========================================================================
  // --- Unit 3: Focus (9 Questions) ---
  {
    id: "u3_f1", unitId: "u3", level: "focus", topic: "3.1 Different materials",
    questionEn: "What material are keys, cans, and spoons usually made of?",
    questionMm: "သော့တံ၊ သံဘူး နှင့် ဇွန်းတို့ကို မည်သည့်ပစ္စည်း (Material) ဖြင့် ပြုလုပ်ထားသနည်း။",
    artKey: "materials_collection", caption: "Workbook p.23-24: Identifying materials",
    options: ["Metal (သတ္တု)", "Paper (စက္ကူ)", "Fabric (ပိတ်စ/အဝတ်)", "Rubber (ရာဘာ)"],
    correctIndex: 0,
    explanation: "Keys, cans, and metal spoons are made of strong, shiny metal. (သော့နှင့် သံဘူးတို့ကို သတ္တုဖြင့် ပြုလုပ်ထားသည်။)"
  },
  {
    id: "u3_f2", unitId: "u3", level: "focus", topic: "3.1 Different materials",
    questionEn: "Look at the window pane and the clear bottle. What material are they made of?",
    questionMm: "ပြတင်းပေါက်မှန်နှင့် ဖန်ပုလင်းတို့ကို မည်သည့်ပစ္စည်းဖြင့် ပြုလုပ်ထားသနည်း။",
    artKey: "materials_collection", caption: "Workbook p.23: Glass window and bottle",
    options: ["Glass (ဖန်/မှန်)", "Wood (သစ်သား)", "Fabric (ပိတ်စ)", "Paper (စက္ကူ)"],
    correctIndex: 0,
    explanation: "Windows and glass bottles are made of transparent glass. (ပြတင်းပေါက်မှန်နှင့် ပုလင်းတို့ကို ဖန်သားဖြင့် ပြုလုပ်ထားသည်။)"
  },
  {
    id: "u3_f3", unitId: "u3", level: "focus", topic: "3.1 Different materials",
    questionEn: "What material is a tree log or a wooden table made of?",
    questionMm: "သစ်တုံးနှင့် စားပွဲခုံတို့ကို မည်သည့်ပစ္စည်းဖြင့် ပြုလုပ်ထားသနည်း။",
    artKey: "materials_collection", caption: "Workbook p.23: Wood",
    options: ["Wood (သစ်သား)", "Rubber (ရာဘာ)", "Glass (ဖန်)", "Paper (စက္ကူ)"],
    correctIndex: 0,
    explanation: "Tree logs and wooden furniture are made of wood! (သစ်တုံးနှင့် သစ်သားစားပွဲတို့သည် Wood သစ်သားဖြစ်သည်။)"
  },
  {
    id: "u3_f4", unitId: "u3", level: "focus", topic: "3.2 Properties of materials",
    questionEn: "Look at the fabric cushion. Which word best describes the cushion?",
    questionMm: "အဝတ်ခေါင်းအုံး (Cushion) ၏ ဂုဏ်သတ္တိကို အမှန်ကန်ဆုံး ဖော်ပြသောစကားလုံးမှာ အဘယ်နည်း။",
    artKey: "material_properties", caption: "Workbook p.26-27: Properties of materials",
    options: ["Soft (နူးညံ့သော)", "Hard (မာကျောသော)", "Rigid (တောင့်တင်းသော)", "Rough rock (ကြမ်းတမ်းသော)"],
    correctIndex: 0,
    explanation: "A fabric cushion is soft and comfortable! Stones and metal bridges are hard and strong. (အဝတ်ခေါင်းအုံးသည် နူးညံ့ပါသည်။)"
  },
  {
    id: "u3_f5", unitId: "u3", level: "focus", topic: "3.2 Properties of materials",
    questionEn: "A girl looks at her face in a mirror. Is the glass mirror SMOOTH or ROUGH?",
    questionMm: "မှန် (Mirror) ၏ မျက်နှာပြင်သည် ချောမွေ့သလား (Smooth) သို့မဟုတ် ကြမ်းတမ်းသလား (Rough)။",
    artKey: "material_properties", caption: "Workbook p.26: Mirror property",
    options: ["Smooth and shiny (ချောမွေ့ပြီး ပြောင်လက်သော)", "Rough and bumpy (ကြမ်းတမ်းသော)", "Soft and furry (နူးညံ့ပြီး အမွှေးထူသော)"],
    correctIndex: 0,
    explanation: "A mirror is smooth and shiny so you can see your reflection! (မှန်မျက်နှာပြင်သည် ချောမွေ့ပြီး ပြောင်လက်ပါသည်။)"
  },
  {
    id: "u3_f6", unitId: "u3", level: "focus", topic: "3.2 Properties of materials",
    questionEn: "Look at the stone floor tiles and the big rock. Are they HARD or SOFT?",
    questionMm: "ကျောက်ပြားကြမ်းခင်းနှင့် ကျောက်တုံးကြီးတို့သည် မာကျောသလား (Hard)၊ ပျော့ပျောင်းသလား (Soft)။",
    artKey: "material_properties", caption: "Workbook p.26-27: Rock and stone floor",
    options: ["Hard (မာကျောသော)", "Soft (ပျော့ပျောင်းသော)", "Weak (အားနည်းသော)"],
    correctIndex: 0,
    explanation: "Rocks and stone floors are very hard! (ကျောက်တုံးနှင့် ကျောက်ပြားကြမ်းခင်းတို့သည် မာကျောပါသည်။)"
  },
  {
    id: "u3_f7", unitId: "u3", level: "focus", topic: "3.3 Sorting materials",
    questionEn: "Which recycling bin should an empty PLASTIC milk bottle go into?",
    questionMm: "ပလတ်စတစ် နို့ဘူးခွံကို မည်သည့် အမှိုက်ပုံးထဲသို့ ထည့်ရမည်နည်း။",
    artKey: "material_recycling", caption: "Workbook p.31: Recycling bins",
    options: ["The Plastic recycling bin (ပလတ်စတစ်ပုံး)", "The Paper newspaper bin (စက္ကူပုံး)", "The Metal cans bin (သတ္တုပုံး)", "The Glass bottle bin (ဖန်ပုလင်းပုံး)"],
    correctIndex: 0,
    explanation: "Plastic milk bottles are sorted into the plastic recycling bin. (ပလတ်စတစ်ဘူးကို ပလတ်စတစ် သီးသန့်ပုံးထဲ ထည့်ရမည်။)"
  },
  {
    id: "u3_f8", unitId: "u3", level: "focus", topic: "3.3 Sorting materials",
    questionEn: "Where should old newspapers and comic books be put for recycling?",
    questionMm: "သတင်းစာဟောင်းများနှင့် စာအုပ်အဟောင်းများကို မည်သည့် रीसाइक्लिंग (Recycling) ပုံးထဲ ထည့်ရမည်နည်း။",
    artKey: "material_recycling", caption: "Workbook p.31: Paper recycling bin",
    options: ["Into the PAPER recycling bin (စက္ကူပုံး)", "Into the GLASS recycling bin (ဖန်ပုံး)", "Into the METAL recycling bin (သတ္တုပုံး)"],
    correctIndex: 0,
    explanation: "Newspapers are made of paper, so they go into the paper recycling bin! (သတင်းစာများသည် စက္ကူဖြစ်သဖြင့် Paper ပုံးထဲ ထည့်ရမည်။)"
  },
  {
    id: "u3_f9", unitId: "u3", level: "focus", topic: "3.4 Changing materials",
    questionEn: "When you pull a rubber band or a balloon to make it longer, what action are you doing?",
    questionMm: "သားရေကွင်း သို့မဟုတ် ပူဖောင်းကို ရှည်ထွက်လာအောင် ဆွဲဆန့်ခြင်းကို အင်္ဂလိပ်လို မည်သို့ခေါ်သနည်း။",
    artKey: "material_changing", caption: "Workbook p.34: Stretch",
    options: ["Stretch (ဆွဲဆန့်ခြင်း)", "Melt (အရည်ပျော်ခြင်း)", "Freeze (အေးခဲခြင်း)", "Burn (မီးရှို့ခြင်း)"],
    correctIndex: 0,
    explanation: "Pulling rubber to make it longer is called stretching! (ဆွဲဆန့်ခြင်းကို Stretch ဟုခေါ်ပါသည်။)"
  },

  // --- Unit 3: Practice (9 Questions) ---
  {
    id: "u3_p1", unitId: "u3", level: "practice", topic: "3.1 Different materials",
    questionEn: "What material are party balloons made from?",
    questionMm: "ပူဖောင်း (Balloon) များကို မည်သည့်ပစ္စည်းဖြင့် ပြုလုပ်ထားသနည်း။",
    artKey: "materials_collection", caption: "Workbook p.24: Balloons",
    options: ["Rubber (ရာဘာ)", "Rock (ကျောက်တုံး)", "Wood (သစ်သား)", "Metal (သတ္တု)"],
    correctIndex: 0,
    explanation: "Balloons are made from rubber so they can stretch when blown up! (ပူဖောင်းကို ဆွဲဆန့်နိုင်သော ရာဘာဖြင့် ပြုလုပ်ထားသည်။)"
  },
  {
    id: "u3_p2", unitId: "u3", level: "practice", topic: "3.1 Different materials",
    questionEn: "Look at the warm winter hat, scarf, and clothes. What material are they made from?",
    questionMm: "ဦးထုပ်၊ လည်စည်းပဝါ နှင့် အဝတ်အထည်များကို မည်သည့်ပစ္စည်းဖြင့် ပြုလုပ်ထားသနည်း။",
    artKey: "material_properties", caption: "Workbook p.24-25: Clothes and hat",
    options: ["Fabric (ပိတ်စ / ချည်ထည်)", "Metal (သတ္တု)", "Rock (ကျောက်တုံး)", "Glass (ဖန်)"],
    correctIndex: 0,
    explanation: "Hats, scarves, T-shirts, and trousers are made from soft fabric! (အဝတ်အထည်များကို ပိတ်စ Fabric ဖြင့် ပြုလုပ်ထားသည်။)"
  },
  {
    id: "u3_p3", unitId: "u3", level: "practice", topic: "3.1 Different materials",
    questionEn: "What material are toy building blocks (Lego bricks) and water bottles made from?",
    questionMm: "ကစားစရာ အရုပ်ဆက်ဘလောက်တုံးများနှင့် ရေသန့်ဘူးများကို မည်သည့်ပစ္စည်းဖြင့် ပြုလုပ်ထားသနည်း။",
    artKey: "materials_collection", caption: "Workbook p.24-25: Plastic blocks and bottles",
    options: ["Plastic (ပလတ်စတစ်)", "Paper (စက္ကူ)", "Fabric (ပိတ်စ)", "Soil (မြေကြီး)"],
    correctIndex: 0,
    explanation: "Toy building bricks and water bottles are made from plastic. (ကစားစရာဘလောက်တုံးများနှင့် ရေဘူးများကို ပလတ်စတစ်ဖြင့် ပြုလုပ်ထားသည်။)"
  },
  {
    id: "u3_p4", unitId: "u3", level: "practice", topic: "3.2 Properties of materials",
    questionEn: "Which two words correctly describe a GLASS bottle?",
    questionMm: "ဖန်ပုလင်း (Glass bottle) တစ်လုံး၏ ဂုဏ်သတ္တိနှစ်ခုကို ရွေးပါ။",
    artKey: "materials_collection", caption: "Workbook p.28: Glass properties",
    options: ["Shiny and smooth (ပြောင်လက်ပြီး ချောမွေ့သော)", "Soft and rough (ပျော့ပြီး ကြမ်းတမ်းသော)", "Weak and furry (ပျော့ပြီး အမွှေးထူသော)", "Flexible and stretchy (ကွေးညွှတ်ဆွဲဆန့်နိုင်သော)"],
    correctIndex: 0,
    explanation: "Glass is hard, shiny, and smooth. (ဖန်သားသည် မာကျောပြီး ပြောင်လက်ချောမွေ့ပါသည်။)"
  },
  {
    id: "u3_p5", unitId: "u3", level: "practice", topic: "3.2 Properties of materials",
    questionEn: "Look at a torn piece of writing paper. Which two words describe PAPER?",
    questionMm: "စာရွက် (Paper) ၏ ဂုဏ်သတ္တိနှစ်ခုကို မှန်ကန်စွာ ဖော်ပြသောအဖြေမှာ အဘယ်နည်း။",
    artKey: "material_recycling", caption: "Workbook p.27-28: Paper properties",
    options: ["Smooth and weak (ချောမွေ့ပြီး စုတ်ပြဲလွယ်/အားနည်းသော)", "Rough and strong like rock (ကျောက်တုံးကဲ့သို့ ကြမ်းပြီးမာသော)", "Hard and rigid like steel (သံမဏိကဲ့သို့ မာကျောသော)"],
    correctIndex: 0,
    explanation: "Paper is smooth to write on, and weak because it tears easily. (စက္ကူသည် ချောမွေ့ပြီး စုတ်ပြဲလွယ်ပါသည်။)"
  },
  {
    id: "u3_p6", unitId: "u3", level: "practice", topic: "3.3 Sorting materials",
    questionEn: "We sort materials into two groups: HARD and SOFT. Which materials belong in the HARD group?",
    questionMm: "ပစ္စည်းများကို အမာ (Hard) နှင့် အပျော့ (Soft) ခွဲခြားရာတွင် မာကျောသောအုပ်စု၌ မည်သည်တို့ ပါဝင်သနည်း။",
    artKey: "materials_collection", caption: "Workbook p.32: Sorting hard and soft",
    options: ["Metal, Glass, Rock, and hard Plastic", "Fabric T-shirt and Cotton wool", "Soft cushion and Tissue paper", "Fluffy towel and Wool scarf"],
    correctIndex: 0,
    explanation: "Metal, glass, rock, and hard plastic belong in the HARD group. Fabric and rubber/cotton are softer and flexible. (သတ္တု၊ ဖန်၊ ကျောက်တုံးနှင့် ပလတ်စတစ်အမာတို့သည် Hard အုပ်စုဝင်ဖြစ်သည်။)"
  },
  {
    id: "u3_p7", unitId: "u3", level: "practice", topic: "3.4 Changing materials",
    questionEn: "Look at the metal pipe and the crushed can. When we curve a straight pipe, what have we done?",
    questionMm: "ဖြောင့်တန်းနေသော ပိုက်တစ်ချောင်းကို ကွေးလိုက်သောအခါ မည်သို့ခေါ်သနည်း။",
    artKey: "material_changing", caption: "Workbook p.34-35: Bend, twist, stretch, compress",
    options: ["The pipe has been BENT (ကွေးလိုက်သည်)", "The pipe has been MELTED (အရည်ပျော်သွားသည်)", "The pipe has been FROZEN (ခဲသွားသည်)", "The pipe has been BURNED (လောင်ကျွမ်းသွားသည်)"],
    correctIndex: 0,
    explanation: "Curving a pipe is called bending. Crushing a can is called compressing! (ပိုက်ကွေးခြင်းကို Bent ဟုခေါ်ပြီး သံဘူးဖိချေခြင်းကို Compress ဟုခေါ်သည်။)"
  },
  {
    id: "u3_p8", unitId: "u3", level: "practice", topic: "3.4 Changing materials",
    questionEn: "Look at the coiled rope and the wrung-out paper. When we turn the two ends in opposite directions, what has happened?",
    questionMm: "ကြိုး သို့မဟုတ် စက္ကူကို အစွန်းနှစ်ဖက်မှ ဆန့်ကျင်ဘက်သို့ လိမ်လိုက်ခြင်းကို မည်သို့ခေါ်သနည်း။",
    artKey: "material_changing", caption: "Workbook p.35: Twisted rope and paper",
    options: ["It has been TWISTED (လိမ်ထားသည်)", "It has been MELTED (အရည်ပျော်သည်)", "It has been GROWN (ကြီးထွားသည်)"],
    correctIndex: 0,
    explanation: "Turning ends in opposite ways is called twisting (twisted)! (လိမ်ခြင်းကို Twist / Twisted ဟုခေါ်ပါသည်။)"
  },
  {
    id: "u3_p9", unitId: "u3", level: "practice", topic: "3.4 Changing materials",
    questionEn: "When a hand pushes into a soft balloon or squashes a strawberry fruit, what word describes this action?",
    questionMm: "ပူဖောင်း သို့မဟုတ် စတော်ဘယ်ရီသီးကို လက်ဖြင့် ဖိညှစ်ချေလိုက်ခြင်းကို မည်သို့ခေါ်သနည်း။",
    artKey: "material_changing", caption: "Workbook p.35: Compressed balloon and fruit",
    options: ["Compressed (ဖိညှစ်/ဖိချေထားသည်)", "Stretched longer (ဆွဲဆန့်ထားသည်)", "Frozen solid (အေးခဲထားသည်)"],
    correctIndex: 0,
    explanation: "Squashing or pressing something smaller is called compressing (compressed)! (ဖိညှစ်ခြင်း/ဖိချေခြင်းကို Compress ဟုခေါ်သည်။)"
  },

  // --- Unit 3: Challenge (9 Questions) ---
  {
    id: "u3_c1", unitId: "u3", level: "challenge", topic: "3.2 Properties of materials",
    questionEn: "Complete the sentence: 'A bridge is made from METAL because this material is ______.'",
    questionMm: "တံတားတစ်စင်းကို သတ္တု (Metal) ဖြင့် တည်ဆောက်ရခြင်းမှာ သတ္တုသည် ______ ဖြစ်သောကြောင့်ဖြစ်သည်။",
    artKey: "material_properties", caption: "Workbook p.29-30: Choosing materials",
    options: ["Strong and rigid (ခိုင်ခံ့ပြီး တောင့်တင်းသော)", "Soft and weak (ပျော့ပျောင်းပြီး အားနည်းသော)", "Easy to tear like paper (စက္ကူကဲ့သို့ စုတ်ဖြဲလွယ်သော)", "Stretchy like a balloon (ပူဖောင်းကဲ့သို့ ဆွဲဆန့်နိုင်သော)"],
    correctIndex: 0,
    explanation: "Bridges must hold heavy things, so they are made from metal or rock because they are strong and rigid. (တံတားများသည် ခိုင်ခံ့တောင့်တင်းရန် လိုအပ်ပါသည်။)"
  },
  {
    id: "u3_c2", unitId: "u3", level: "challenge", topic: "3.2 Properties of materials",
    questionEn: "Why is a T-shirt made from FABRIC instead of glass or rock?",
    questionMm: "အင်္ကျီ (T-shirt) ကို ဖန် သို့မဟုတ် ကျောက်တုံးအစား ပိတ်စ (Fabric) ဖြင့် ဘာကြောင့်ချုပ်လုပ်သနည်း။",
    artKey: "material_properties", caption: "Workbook p.29: T-shirt material",
    options: ["Because fabric is soft and flexible to wear", "Because fabric is rigid and breaks easily", "Because fabric is heavier than rock", "Because fabric cannot be bent"],
    correctIndex: 0,
    explanation: "Fabric is soft and flexible so it moves comfortably with our body. (ပိတ်စသည် နူးညံ့ပြီး ကွေးညွှတ်လွယ်သဖြင့် ဝတ်ဆင်ရသက်သောင့်သက်သာရှိသည်။)"
  },
  {
    id: "u3_c3", unitId: "u3", level: "challenge", topic: "3.2 Properties of materials",
    questionEn: "Complete the sentence: 'The castle is made from ROCK because this material is ______.'",
    questionMm: "ရဲတိုက်ကြီး (Castle) ကို ကျောက်တုံး (Rock) များဖြင့် တည်ဆောက်ရခြင်းမှာ ကျောက်တုံးသည် ______ ဖြစ်သောကြောင့်ဖြစ်သည်။",
    artKey: "earth_rocks", caption: "Workbook p.25 & 30: Castle made from rock",
    options: ["Strong and hard (ခိုင်ခံ့ပြီး မာကျောသော)", "Soft and weak (ပျော့ပြီး အားနည်းသော)", "Flexible and stretchy (ကွေးညွှတ်ဆွဲဆန့်နိုင်သော)"],
    correctIndex: 0,
    explanation: "Castles and stone walls are built from rock because rock is strong and hard! (ရဲတိုက်ကြီးများကို ခိုင်ခံ့မာကျောသော ကျောက်တုံးများဖြင့် တည်ဆောက်ကြသည်။)"
  },
  {
    id: "u3_c4", unitId: "u3", level: "challenge", topic: "3.2 Properties of materials",
    questionEn: "Complete the sentence: 'The mirror is made from GLASS because this material is ______.'",
    questionMm: "ကြည့်မှန် (Mirror) ကို ဖန်သား (Glass) ဖြင့် ပြုလုပ်ရခြင်းမှာ ______ ဖြစ်သောကြောင့်ဖြစ်သည်။",
    artKey: "material_properties", caption: "Workbook p.29: Mirror made from glass",
    options: ["Shiny and smooth (ပြောင်လက်ပြီး ချောမွေ့သော)", "Dull and rough (မွဲခြောက်ပြီး ကြမ်းတမ်းသော)", "Soft and stretchy (ပျော့ပြီး ဆွဲဆန့်နိုင်သော)"],
    correctIndex: 0,
    explanation: "Mirrors are made from glass with a silver backing because it is shiny and smooth! (မှန်သည် ပြောင်လက်ချောမွေ့သောကြောင့် ပုံရိပ်မြင်ရခြင်းဖြစ်သည်။)"
  },
  {
    id: "u3_c5", unitId: "u3", level: "challenge", topic: "3.3 Sorting materials",
    questionEn: "Look at these three items: a tissue box tissue, a newspaper, and a rubber balloon. What property do ALL THREE share?",
    questionMm: "တစ်ရှူးစက္ကူ၊ သတင်းစာ နှင့် ရာဘာပူဖောင်း သုံးခုလုံးတွင် တူညီစွာရှိသော ဂုဏ်သတ္တိမှာ အဘယ်နည်း။",
    artKey: "materials_collection", caption: "Workbook p.33: Challenge Question 4e",
    options: ["All of these are FLEXIBLE (ကွေးညွှတ်လွယ်သော)", "All of these are HARD and RIGID (မာကျောတောင့်တင်းသော)", "All of these are made of METAL (သတ္တုဖြင့် လုပ်ထားသော)"],
    correctIndex: 0,
    explanation: "Tissue, newspaper, and rubber balloons can all bend easily, so all of them are flexible! (သုံးခုလုံးသည် အလွယ်တကူ ကွေးညွှတ်နိုင်သော Flexible ပစ္စည်းများဖြစ်သည်။)"
  },
  {
    id: "u3_c6", unitId: "u3", level: "challenge", topic: "3.3 Sorting materials",
    questionEn: "Look at these three items: a metal spoon, a brick, and a glass bottle. What property do ALL THREE share?",
    questionMm: "သတ္တုဇွန်း၊ အုတ်ခဲ နှင့် ဖန်ပုလင်း သုံးခုလုံးတွင် တူညီစွာရှိသော ဂုဏ်သတ္တိမှာ အဘယ်နည်း။",
    artKey: "materials_collection", caption: "Workbook p.33: Challenge Question 4f",
    options: ["All of these are RIGID and HARD (တောင့်တင်းပြီး မာကျောသော)", "All of these are SOFT and FLEXIBLE (ပျော့ပျောင်းပြီး ကွေးလွယ်သော)", "All of these are made of PAPER"],
    correctIndex: 0,
    explanation: "A metal spoon, a brick, and a glass bottle cannot be bent easily by hand—they are all rigid and hard! (သုံးခုလုံးသည် မာကျောပြီး တောင့်တင်းသော Rigid ပစ္စည်းများဖြစ်သည်။)"
  },
  {
    id: "u3_c7", unitId: "u3", level: "challenge", topic: "3.4 Changing materials",
    questionEn: "Zara tests materials with her hands. Which materials CAN she easily bend and compress?",
    questionMm: "လက်ဖြင့် အလွယ်တကူ ကွေးနိုင်၊ ဖိညှစ်နိုင်သော ပစ္စည်းများမှာ အဘယ်နည်း။",
    artKey: "material_changing", caption: "Workbook p.36: Zara testing materials",
    options: ["Paper, Fabric, and Rubber (စက္ကူ၊ ပိတ်စ နှင့် ရာဘာ)", "Glass bottle and Wooden table (ဖန်ပုလင်း နှင့် သစ်သားစားပွဲ)", "Granite rock and Brick wall (ကျောက်တုံး နှင့် အုတ်နံရံ)", "Thick metal key and Stone floor"],
    correctIndex: 0,
    explanation: "Zara can bend and compress paper, fabric, and rubber, but she cannot bend glass or wood with her hands. (စက္ကူ၊ ပိတ်စနှင့် ရာဘာတို့ကို လက်ဖြင့် ကွေးနိုင်ဖိနိုင်ပါသည်။)"
  },
  {
    id: "u3_c8", unitId: "u3", level: "challenge", topic: "3.4 Changing materials",
    questionEn: "Why can Zara NOT compress or bend a glass bottle or a wooden table leg with her hands?",
    questionMm: "ဖန်ပုလင်း သို့မဟုတ် သစ်သားစားပွဲခြေထောက်ကို လက်ဖြင့် ဘာကြောင့် မကွေးနိုင်၊ မဖိညှစ်နိုင်သနည်း။",
    artKey: "materials_collection", caption: "Workbook p.36: Rigid materials",
    options: ["Because wood and glass are hard and rigid materials", "Because wood and glass are softer than cotton", "Because glass is made of rubber"],
    correctIndex: 0,
    explanation: "Wood, glass, rock, and thick metal are hard and rigid, so they do not bend or compress when pushed by hand. (သစ်သားနှင့် ဖန်သားတို့သည် မာကျောတောင့်တင်းသောကြောင့် လက်ဖြင့် မကွေးနိုင်ပါ။)"
  },
  {
    id: "u3_c9", unitId: "u3", level: "challenge", topic: "3.1 Different materials",
    questionEn: "An object can be made of more than one material. What two materials are used to make a window and its frame?",
    questionMm: "ပြတင်းပေါက်တစ်ခု ပြုလုပ်ရာတွင် အသုံးပြုလေ့ရှိသော ပစ္စည်း (၂) မျိုးမှာ အဘယ်နည်း။",
    artKey: "materials_collection", caption: "Workbook Unit 3: Combining materials",
    options: ["Glass (so light comes through) and Wood/Metal/Plastic (for a strong frame)", "Paper and Cotton wool", "Water and Soil", "Rubber and Strawberries"],
    correctIndex: 0,
    explanation: "Clear glass lets light through, while wood, metal, or rigid plastic makes a strong frame! (အလင်းဖောက်နိုင်သော မှန်နှင့် ခိုင်ခံ့သော သစ်သား/သတ္တုဘောင်ကို တွဲဖက်သုံးကြသည်။)"
  },

  // =========================================================================
  // UNIT 4: THE EARTH (27 Questions: 9 Focus, 9 Practice, 9 Challenge)
  // =========================================================================
  // --- Unit 4: Focus (9 Questions) ---
  {
    id: "u4_f1", unitId: "u4", level: "focus", topic: "4.1 Planet Earth",
    questionEn: "What shape does Planet Earth look like when an astronaut sees it from space?",
    questionMm: "အာကာသယာဉ်မှူးတစ်ဦးသည် အာကာသထဲမှ ကမ္ဘာမြေကို ကြည့်သောအခါ မည်သည့်ပုံသဏ္ဌာန် မြင်ရသနည်း။",
    artKey: "earth_planet", caption: "Workbook p.37-39: Planet Earth",
    options: ["Like a very large ball / sphere (ဘောလုံးကြီးတစ်လုံးပုံစံ)", "Like a flat square box (လေးထောင့်သေတ္တာပုံစံ)", "Like a triangle pyramid (တြိဂံပုံစံ)", "Like a thin banana (ငှက်ပျောသီးပုံစံ)"],
    correctIndex: 0,
    explanation: "The Earth is a planet and looks like a huge round ball from space! (ကမ္ဘာမြေသည် အလွန်ကြီးမားသော ဘောလုံးကြီးနှင့် တူပါသည်။)"
  },
  {
    id: "u4_f2", unitId: "u4", level: "focus", topic: "4.1 Planet Earth",
    questionEn: "What can an astronaut see on Planet Earth when looking from space?",
    questionMm: "အာကာသထဲမှ ကမ္ဘာမြေကို ကြည့်လျှင် အာကာသယာဉ်မှူးသည် မည်သည့်အရာများကို မြင်တွေ့နိုင်သနည်း။",
    artKey: "earth_planet", caption: "Workbook p.37: Earth from space",
    options: ["Land, seas (oceans), lakes, rivers, and white clouds", "Only one giant desert with no water", "Only metal buildings covering the whole ball", "Nothing, because Earth is invisible"],
    correctIndex: 0,
    explanation: "From space, an astronaut can see land, blue seas, lakes, rivers, and white clouds! (အာကာသမှကြည့်လျှင် ကုန်းမြေ၊ ပင်လယ်သမုဒ္ဒရာ၊ ရေအိုင်နှင့် တိမ်များကို မြင်ရသည်။)"
  },
  {
    id: "u4_f3", unitId: "u4", level: "focus", topic: "4.2 Heat and light from the Sun",
    questionEn: "What two important things do we get from the Sun?",
    questionMm: "နေမင်းကြီး (The Sun) ဆီမှ ကျွန်ုပ်တို့ ရရှိသော အရေးကြီးသည့် အရာ (၂) ခုမှာ အဘယ်နည်း။",
    artKey: "earth_sun_day_night", caption: "Workbook p.40-42: Heat and light from the Sun",
    options: ["Heat and Light (အပူ နှင့် အလင်း)", "Snow and Ice (နှင်း နှင့် ရေခဲ)", "Rocks and Soil (ကျောက်တုံး နှင့် မြေကြီး)", "Plastic and Metal (ပလတ်စတစ် နှင့် သတ္တု)"],
    correctIndex: 0,
    explanation: "The Sun gives us light so we can see, and heat to keep Earth warm! (နေမင်းကြီးက အလင်းရောင်နှင့် အပူဓာတ်ကို ပေးပါသည်။)"
  },
  {
    id: "u4_f4", unitId: "u4", level: "focus", topic: "4.2 Heat and light from the Sun",
    questionEn: "Look at the picture on page 40. Which activity is helped by LIGHT from the Sun?",
    questionMm: "နေမင်းကြီး၏ အလင်းရောင် (Sunlight) က မည်သည့်လုပ်ဆောင်ချက်ကို အကူအညီပေးသနည်း။",
    artKey: "earth_sun_day_night", caption: "Workbook p.40: Does light from the Sun help?",
    options: ["Playing football, taking photos of flowers, and looking at a rock with a magnifier", "Listening to music with eyes closed in a dark room", "A mouse sleeping deep underground in a dark burrow"],
    correctIndex: 0,
    explanation: "Sunlight helps us see to play football, take photographs, and examine things, and helps flowers grow! It does not help us hear music or reach deep underground burrows. (နေရောင်ခြည်သည် မြင်တွေ့ရန်နှင့် အပင်များကြီးထွားရန် ကူညီပေးသည်။)"
  },
  {
    id: "u4_f5", unitId: "u4", level: "focus", topic: "4.2 Heat and light from the Sun",
    questionEn: "Why should you NEVER look directly at the bright Sun?",
    questionMm: "တောက်ပနေသော နေမင်းကြီးကို မျက်စိဖြင့် တိုက်ရိုက် ဘာကြောင့် မကြည့်သင့်သနည်း။",
    artKey: "earth_sun_day_night", caption: "Workbook p.42: Sun safety",
    options: ["Because bright light from the Sun can hurt our eyes", "Because the Sun will turn off", "Because the Sun is too cold"],
    correctIndex: 0,
    explanation: "Light from the Sun is very strong and can hurt our eyes! (နေရောင်ခြည်ကို တိုက်ရိုက်ကြည့်လျှင် မျက်စိကို ထိခိုက်စေနိုင်ပါသည်။)"
  },
  {
    id: "u4_f6", unitId: "u4", level: "focus", topic: "4.3 Rocks",
    questionEn: "Are rocks strong and rigid, or weak and flexible?",
    questionMm: "ကျောက်တုံးများ (Rocks) သည် ခိုင်ခံ့တောင့်တင်းသလား၊ သို့မဟုတ် ပျော့ပျောင်းကွေးညွှတ်လွယ်သလား။",
    artKey: "earth_rocks", caption: "Workbook p.44: Properties of rocks",
    options: ["Both rocks are strong and rigid (ခိုင်ခံ့ပြီး တောင့်တင်းသည်)", "Both rocks are weak and flexible (ပျော့ပြီး ကွေးလွယ်သည်)"],
    correctIndex: 0,
    explanation: "Rocks are strong and rigid materials found on Earth! (ကျောက်တုံးများသည် ခိုင်ခံ့ပြီး တောင့်တင်းကြသည်။)"
  },
  {
    id: "u4_f7", unitId: "u4", level: "focus", topic: "4.3 Rocks",
    questionEn: "Look at Granite (speckled rock with black/white/grey bits) and Sandstone. How are all rocks the same?",
    questionMm: "နှမ်းဖတ်ကျောက် (Granite) နှင့် သဲကျောက် (Sandstone) တို့တွင် တူညီသောအချက်မှာ အဘယ်နည်း။",
    artKey: "earth_rocks", caption: "Workbook p.44: Comparing rocks",
    options: ["They are natural, rigid materials that make up Earth's land", "They are soft like cotton wool", "They are living things that eat food"],
    correctIndex: 0,
    explanation: "All rocks are rigid natural materials from the Earth. (ကျောက်တုံးအားလုံးသည် ကမ္ဘာမြေပေါ်ရှိ သဘာဝအမာခံပစ္စည်းများ ဖြစ်ကြသည်။)"
  },
  {
    id: "u4_f8", unitId: "u4", level: "focus", topic: "4.4 Soil",
    questionEn: "Look at the carrot growing in the garden. Why do plants need SOIL?",
    questionMm: "အပင်များ ရှင်သန်ကြီးထွားရန် မြေဆီလွှာ (Soil) ကို ဘာကြောင့် လိုအပ်သနည်း။",
    artKey: "earth_soil_worm", caption: "Workbook p.47: Plants need soil",
    options: ["Plants need soil for their roots to grow and get water/nutrients", "Plants only use soil to hide from birds", "Soil is just useless dirt with nothing in it", "Plants do not need soil or water"],
    correctIndex: 0,
    explanation: "Plants need soil to grow! Soil holds their roots and has water and living things in it. (အပင်များ အမြစ်တွယ်ပြီး ကြီးထွားရန် မြေဆီလွှာလိုအပ်ပါသည်။)"
  },
  {
    id: "u4_f9", unitId: "u4", level: "focus", topic: "4.4 Soil",
    questionEn: "Is soil ONLY made of tiny pieces of rock, or does it also have living things and dead leaves in it?",
    questionMm: "မြေဆီလွှာ (Soil) သည် ကျောက်မှုန့်သက်သက်သာ ဖြစ်သလား၊ သို့မဟုတ် သက်ရှိကောင်လေးများနှင့် သစ်ရွက်ဆွေးများလည်း ပါဝင်သလား။",
    artKey: "earth_soil_worm", caption: "Workbook p.47: What is soil?",
    options: ["Soil has living things (like worms) and dead plants in it, as well as bits of rock", "Soil is just pure rock with nothing else", "Soil is made of plastic"],
    correctIndex: 0,
    explanation: "Soil is not just dirt or rock—it has living things growing and living in it! (မြေဆီလွှာထဲတွင် ကျောက်မှုန့်များအပြင် တီကောင်ကဲ့သို့ သက်ရှိများနှင့် သစ်ရွက်ဆွေးများ ပါဝင်သည်။)"
  },

  // --- Unit 4: Practice (9 Questions) ---
  {
    id: "u4_p1", unitId: "u4", level: "practice", topic: "4.1 Planet Earth",
    questionEn: "What is the surface of Planet Earth covered with?",
    questionMm: "ကမ္ဘာ့မျက်နှာပြင်ကို မည်သည့်အရာများဖြင့် ဖုံးလွှမ်းထားသနည်း။",
    artKey: "earth_planet", caption: "Workbook p.38-39: Land and water on Earth",
    options: ["Land and Water (seas, lakes, rivers)", "Only hot lava everywhere", "Only dry sand with no water", "Solid metal plates"],
    correctIndex: 0,
    explanation: "The surface of the Earth is made of land, and much of it is covered with water (seas and lakes). (ကမ္ဘာ့မျက်နှာပြင်တွင် ကုန်းမြေနှင့် ရေပြင်များ ရှိပါသည်။)"
  },
  {
    id: "u4_p2", unitId: "u4", level: "practice", topic: "4.1 Planet Earth",
    questionEn: "On a globe or map of Planet Earth, what is the huge area of salty water surrounding the continents called?",
    questionMm: "ကမ္ဘာ့မြေပုံပေါ်တွင် ကုန်းမြေကြီးများကို ဝန်းရံထားသော ကျယ်ပြောလှသည့် ရေပြင်ကြီးကို မည်သို့ခေါ်သနည်း။",
    artKey: "earth_planet", caption: "Workbook p.38: Land covered by a sea",
    options: ["A sea / ocean (ပင်လယ် / သမုဒ္ဒရာ)", "A tiny puddle (ရေအိုင်ငယ်)", "A swimming pool (ရေကူးကန်)"],
    correctIndex: 0,
    explanation: "Large areas of Earth's surface are covered by seas (oceans), and smaller inland areas of water are lakes! (ကမ္ဘာ့ရေပြင်ကျယ်ကြီးကို ပင်လယ် Sea ဟုခေါ်ပြီး ကုန်းတွင်းရေပြင်ကို ရေအိုင် Lake ဟုခေါ်သည်။)"
  },
  {
    id: "u4_p3", unitId: "u4", level: "practice", topic: "4.2 Heat and light from the Sun",
    questionEn: "Complete the sentence: 'Without heat from the Sun, Planet Earth would be very ______.'",
    questionMm: "ဝါကျဖြည့်ပါ - 'နေမင်းကြီးဆီမှ အပူဓာတ်သာ မရရှိပါက ကမ္ဘာမြေကြီးသည် အလွန် ______ နေလိမ့်မည်။'",
    artKey: "earth_sun_day_night", caption: "Workbook p.42: Practice Question 2e",
    options: ["Cold (အေးစက်နေမည်)", "Warm (နွေးထွေးနေမည်)", "Bright (လင်းထိန်နေမည်)", "Loud (ဆူညံနေမည်)"],
    correctIndex: 0,
    explanation: "The Sun gives us heat to keep us warm. Without heat from the Sun we would be very cold! (နေမှ အပူမရပါက အလွန်အေးစက်နေပါမည်။)"
  },
  {
    id: "u4_p4", unitId: "u4", level: "practice", topic: "4.2 Heat and light from the Sun",
    questionEn: "Why is it dark at night-time?",
    questionMm: "ညအချိန်တွင် ဘာကြောင့် မှောင်မည်းနေသနည်း။",
    artKey: "earth_sun_day_night", caption: "Workbook p.42: Question 2c",
    options: ["Because at night there is no light from the Sun reaching our side of Earth", "Because the Sun freezes into ice at night", "Because clouds eat the Sun"],
    correctIndex: 0,
    explanation: "At night there is no light from the Sun on our side of the Earth! (ညအချိန်တွင် ကျွန်ုပ်တို့ဘက်ခြမ်းသို့ နေရောင်ခြည် မကျရောက်သောကြောင့် မှောင်နေခြင်းဖြစ်သည်။)"
  },
  {
    id: "u4_p5", unitId: "u4", level: "practice", topic: "4.3 Rocks",
    questionEn: "Sofia looks at three rocks: Granite (very hard with coloured bits), Chalk (soft, white), and Limestone (hard, grey). Which rock is SOFT and WHITE?",
    questionMm: "ဖြူဖွေးပြီး ပျော့သော (စာသင်ပုန်းတွင် ရေးနိုင်သော) ကျောက်အမျိုးအစားမှာ အဘယ်နည်း။",
    artKey: "earth_rocks", caption: "Workbook p.45: Naming rocks",
    options: ["Chalk (မြေဖြူကျောက်)", "Granite (နှမ်းဖတ်ကျောက်)", "Coal (ကျောက်မီးသွေး)", "Limestone (ထုံးကျောက်)"],
    correctIndex: 0,
    explanation: "Chalk is a soft, white rock. Granite is a very hard rock with different coloured bits. (Chalk သည် ဖြူပြီး ပျော့သော ကျောက်ဖြစ်သည်။)"
  },
  {
    id: "u4_p6", unitId: "u4", level: "practice", topic: "4.3 Rocks",
    questionEn: "Which rock is VERY HARD and has different coloured bits (speckles) inside it?",
    questionMm: "အလွန်မာကျောပြီး အရောင်စုံအစက်အပြောက်လေးများ ပါဝင်သော ကျောက်မှာ အဘယ်နည်း။",
    artKey: "earth_rocks", caption: "Workbook p.45: Granite description",
    options: ["Granite (နှမ်းဖတ်ကျောက်)", "Chalk (မြေဖြူကျောက်)", "Sandstone (သဲကျောက်)", "Mud"],
    correctIndex: 0,
    explanation: "Granite is very hard with different coloured bits! (Granite နှမ်းဖတ်ကျောက်သည် အလွန်မာပြီး အရောင်စုံအစက်လေးများ ပါရှိသည်။)"
  },
  {
    id: "u4_p7", unitId: "u4", level: "practice", topic: "4.3 Rocks",
    questionEn: "Which rock in Sofia's test is HARD and plain GREY?",
    questionMm: "Sofia ၏ စမ်းသပ်ချက်ထဲတွင် မာကျောပြီး မီးခိုးရောင် (Grey) ရှိသော ကျောက်မှာ အဘယ်နည်း။",
    artKey: "earth_rocks", caption: "Workbook p.45: Limestone description",
    options: ["Limestone (ထုံးကျောက်)", "Chalk (မြေဖြူကျောက်)", "Coal (အမည်းရောင် ကျောက်မီးသွေး)"],
    correctIndex: 0,
    explanation: "Limestone is a hard, grey rock! (Limestone ထုံးကျောက်သည် မာကျောပြီး မီးခိုးရောင်ရှိသည်။)"
  },
  {
    id: "u4_p8", unitId: "u4", level: "practice", topic: "4.4 Soil",
    questionEn: "Which of these things would you naturally find living or resting inside healthy garden SOIL?",
    questionMm: "ဥယျာဉ်မြေဆီလွှာ (Soil) ထဲတွင် သဘာဝအတိုင်း တွေ့ရှိနိုင်သောအရာမှာ အဘယ်နည်း။",
    artKey: "earth_soil_worm", caption: "Workbook p.48: What is inside soil?",
    options: ["Earthworms, beetles, centipedes, plant roots, small rocks, and dead leaves", "The Sun and clouds", "Televisions and bicycles", "Stars and moons"],
    correctIndex: 0,
    explanation: "Healthy soil contains small rocks, plant roots, dead leaves, and living things like earthworms, centipedes, and beetles. (မြေဆီလွှာထဲတွင် တီကောင်၊ ပိုးတောင်မာ၊ အမြစ်၊ ကျောက်စရစ်နှင့် သစ်ရွက်ဆွေးများ ပါဝင်သည်။)"
  },
  {
    id: "u4_p9", unitId: "u4", level: "practice", topic: "4.4 Soil",
    questionEn: "Look at the 8 pictures around the soil on page 48. Which one is NOT found in the soil?",
    questionMm: "အောက်ပါတို့ထဲမှ မည်သည့်အရာသည် မြေကြီးထဲတွင် မရှိသနည်း။",
    artKey: "earth_sun_day_night", caption: "Workbook p.48: Sun is in space, not soil",
    options: ["The Sun (နေမင်းကြီး)", "An earthworm (တီကောင်)", "Plant roots (အပင်အမြစ်)", "Small rocks and dead leaves (ကျောက်စရစ်နှင့် သစ်ရွက်ဆွေး)"],
    correctIndex: 0,
    explanation: "The Sun is high up in space! Earthworms, roots, beetles, centipedes, rocks, and dead leaves are found in soil. (နေမင်းကြီးသည် အာကာသထဲတွင်သာ ရှိပါသည်။)"
  },

  // --- Unit 4: Challenge (9 Questions) ---
  {
    id: "u4_c1", unitId: "u4", level: "challenge", topic: "4.1 Planet Earth",
    questionEn: "Why is Planet Earth so special compared to other planets?",
    questionMm: "ကမ္ဘာမြေကြီးသည် အခြားဂြိုဟ်များနှင့် မတူဘဲ ဘာကြောင့် ထူးခြားသနည်း။",
    artKey: "earth_planet", caption: "Workbook p.39: Challenge Question 3",
    options: ["Earth is home to lots of living things (the only planet with life on it)", "Earth is made of pure gold", "Earth is square shaped", "Earth has no water or air"],
    correctIndex: 0,
    explanation: "Earth is a planet with land, water, and air, making it home to lots of living things! (ကမ္ဘာမြေသည် သက်ရှိများ ရှင်သန်နေထိုင်ရာ တစ်ခုတည်းသော ဂြိုဟ်ဖြစ်သည်။)"
  },
  {
    id: "u4_c2", unitId: "u4", level: "challenge", topic: "4.2 Heat and light from the Sun",
    questionEn: "Marcus shines a flashlight (the Sun) onto a balloon (Earth). The side facing the flashlight is bright. What time is it on the dark side of the Earth?",
    questionMm: "ဓာတ်မီး (နေ) အလင်းရောင် မကျရောက်သော ကမ္ဘာ့အခြမ်းတွင် မည်သည့်အချိန် ဖြစ်နေမည်နည်း။",
    artKey: "earth_sun_day_night", caption: "Workbook p.43: Day and night model",
    options: ["Night-time (ညအချိန်)", "Daytime (နေ့အချိန်)", "Summer time only", "Lunch time"],
    correctIndex: 0,
    explanation: "The side of Earth facing the Sun has daytime. The side away from the Sun has no light, so it is night-time! (နေရောင်မရသော အခြမ်းသည် ညအချိန်ဖြစ်သည်။)"
  },
  {
    id: "u4_c3", unitId: "u4", level: "challenge", topic: "4.2 Heat and light from the Sun",
    questionEn: "In the flashlight and balloon model, Marcus is holding the flashlight (the Sun). Which side of the Earth balloon can Marcus see?",
    questionMm: "ဓာတ်မီးကိုင်ထားသော Marcus (နေမင်းကြီးဘက်) က ကမ္ဘာ့ပူဖောင်း၏ မည်သည့်အခြမ်းကိုသာ မြင်ရသနည်း။",
    artKey: "earth_sun_day_night", caption: "Workbook p.43: Question 4",
    options: ["He can only see the DAY side of the Earth", "He can only see the NIGHT side of the Earth", "He can see inside the balloon"],
    correctIndex: 0,
    explanation: "Because Marcus is holding the flashlight, his light shines on the front of the balloon—so he sees the DAY side of the Earth! (ဓာတ်မီးထိုးထားသည့်ဘက်မှ ကြည့်လျှင် လင်းနေသော နေ့ဘက်ခြမ်း Day side ကိုသာ မြင်ရပါသည်။)"
  },
  {
    id: "u4_c4", unitId: "u4", level: "challenge", topic: "4.3 Rocks",
    questionEn: "Marcus scratches 4 rocks (Coal, Sandstone, Limestone, Granite) with a wooden stick. Lots of sand comes off Sandstone, while Granite breaks the stick! Which rock is the HARDEST and which is the SOFTEST?",
    questionMm: "သစ်သားချောင်းဖြင့် ခြစ်ကြည့်ရာတွင် အမာဆုံးကျောက် (Hardest) နှင့် အပျော့ဆုံးကျောက် (Softest) တို့မှာ အဘယ်နည်း။",
    artKey: "earth_rocks", caption: "Workbook p.46: Scratch test on rocks",
    options: ["Hardest = Granite (broke the stick); Softest = Sandstone (lots of sand came off)", "Hardest = Sandstone; Softest = Granite", "Hardest = Chalk; Softest = Coal"],
    correctIndex: 0,
    explanation: "Granite was not scratched and broke the stick because it is the hardest! Sandstone lost lots of sand because it is the softest. (Granite သည် အမာဆုံးဖြစ်ပြီး သဲများကွာကျလာသော Sandstone သည် အပျော့ဆုံးဖြစ်သည်။)"
  },
  {
    id: "u4_c5", unitId: "u4", level: "challenge", topic: "4.3 Rocks",
    questionEn: "In Marcus's scratch test, what happened when he scratched black COAL with the wooden stick?",
    questionMm: "ကျောက်မီးသွေး (Coal) ကို သစ်သားချောင်းဖြင့် ခြစ်ကြည့်သောအခါ မည်သို့ဖြစ်သွားသနည်း။",
    artKey: "earth_rocks", caption: "Workbook p.46: Coal scratch result",
    options: ["The coal was not scratched, and the wooden stick was badly scratched (so coal is harder than wood)", "The coal melted into water", "The coal turned into white chalk"],
    correctIndex: 0,
    explanation: "The coal was not scratched and the wooden stick was badly scratched because coal is harder than the wooden stick. (ကျောက်မီးသွေးက သစ်သားချောင်းထက် ပိုမာသဖြင့် သစ်သားချောင်းသာ ပွန်းပဲ့သွားသည်။)"
  },
  {
    id: "u4_c6", unitId: "u4", level: "challenge", topic: "4.3 Rocks",
    questionEn: "Why did Sandstone NOT damage the wooden stick at all?",
    questionMm: "သဲကျောက် (Sandstone) သည် သစ်သားချောင်းကို ဘာကြောင့် မပျက်စီးစေသနည်း။",
    artKey: "earth_rocks", caption: "Workbook p.46: Question 5d",
    options: ["Because sandstone is a soft rock and its grains rub off easily", "Because sandstone is harder than diamond", "Because sandstone is made of metal"],
    correctIndex: 0,
    explanation: "Sandstone did not damage the stick because it is soft! (သဲကျောက်သည် ပျော့သောကြောင့် သစ်သားချောင်းကို မထိခိုက်စေပါ။)"
  },
  {
    id: "u4_c7", unitId: "u4", level: "challenge", topic: "4.4 Soil",
    questionEn: "Park soil has only rocks and a bone. School garden soil has earthworms, beetles, dead leaves, and rocks. Which soil is BETTER for growing plants?",
    questionMm: "ပန်းခြံမြေနှင့် ကျောင်းဥယျာဉ်မြေ နှစ်ခုတွင် မည်သည့်မြေက အပင်စိုက်ရန် ပိုကောင်းသနည်း။",
    artKey: "earth_soil_worm", caption: "Workbook p.49: Comparing two soils",
    options: ["The school garden soil, because it has living things and dead leaves", "The park soil, because plants only eat bones", "Neither soil can grow plants", "Rocks alone are better than soil"],
    correctIndex: 0,
    explanation: "The garden soil is better because it has living things (earthworms, beetles) and dead leaves that make the soil rich! (တီကောင်နှင့် သစ်ရွက်ဆွေးများပါသော ဥယျာဉ်မြေသည် အပင်အတွက် ပိုကောင်းပါသည်။)"
  },
  {
    id: "u4_c8", unitId: "u4", level: "challenge", topic: "4.4 Soil",
    questionEn: "How do earthworms and dead leaves help make garden soil good for plants?",
    questionMm: "တီကောင်များနှင့် သစ်ရွက်ဆွေးများက မြေဆီလွှာကို မည်သို့ အကျိုးပြုသနည်း။",
    artKey: "earth_soil_worm", caption: "Workbook p.49: Rich garden soil",
    options: ["Dead leaves rot into plant food (nutrients) and earthworms mix and loosen the soil", "Earthworms eat all the healthy plant roots", "Dead leaves turn the soil into solid rock"],
    correctIndex: 0,
    explanation: "Earthworms burrow and mix the soil, and dead leaves break down to make rich soil for roots! (သစ်ရွက်ဆွေးများက မြေသြဇာဖြစ်စေပြီး တီကောင်များက မြေကြီးကို ပွအောင် কူညီပေးသည်။)"
  },
  {
    id: "u4_c9", unitId: "u4", level: "challenge", topic: "4.2 Heat and light from the Sun",
    questionEn: "If there were NO Sun in the sky, what would happen to the plants and animals on Earth?",
    questionMm: "အကယ်၍ နေမင်းကြီးသာ လုံးဝမရှိတော့ပါက ကမ္ဘာပေါ်ရှိ အပင်နှင့် သတ္တဝါများ မည်သို့ဖြစ်သွားမည်နည်း။",
    artKey: "earth_sun_day_night", caption: "Workbook Unit 4 Summary",
    options: ["Earth would be freezing cold and dark, so plants and animals could not stay alive", "Plants would grow bigger in the freezing dark", "It would be hot daytime forever"],
    correctIndex: 0,
    explanation: "Living things on Earth depend on heat and light from the Sun to survive! (နေမင်းကြီး၏ အပူနှင့်အလင်းမရှိပါက သက်ရှိများ အသက်မရှင်နိုင်ပါ။)"
  },

  // =========================================================================
  // UNIT 5: HUMANS (27 Questions: 9 Focus, 9 Practice, 9 Challenge)
  // =========================================================================
  // --- Unit 5: Focus (9 Questions) ---
  {
    id: "u5_f1", unitId: "u5", level: "focus", topic: "5.1 Our bodies",
    questionEn: "Look at the human body picture. Which body part is in the middle of your arm so your arm can bend?",
    questionMm: "လက်မောင်းကွေးနိုင်ရန် လက်မောင်းအလယ်တွင် ရှိသော အစိတ်အပိုင်းမှာ အဘယ်နည်း။",
    artKey: "human_body_parts", caption: "Workbook p.50-51: Our bodies",
    options: ["Elbow (တံတောင်ဆစ်)", "Knee (ဒူးခေါင်း)", "Toe (ခြေချောင်း)", "Shoulder (ပခုံး)"],
    correctIndex: 0,
    explanation: "Your elbow is on your arm! Your knee is on your leg. (လက်မောင်းတွင် တံတောင်ဆစ် Elbow ရှိပြီး ခြေထောက်တွင် ဒူးခေါင်း Knee ရှိသည်။)"
  },
  {
    id: "u5_f2", unitId: "u5", level: "focus", topic: "5.1 Our bodies",
    questionEn: "Which body part is in the middle of your leg and bends when you walk or run?",
    questionMm: "လမ်းလျှောက်ရာတွင် ကွေးညွှတ်နိုင်သော ခြေထောက်အလယ်ရှိ အစိတ်အပိုင်းကို မည်သို့ခေါ်သနည်း။",
    artKey: "human_body_parts", caption: "Workbook p.50: Knee",
    options: ["Knee (ဒူးခေါင်း)", "Elbow (တံတောင်ဆစ်)", "Finger (လက်ချောင်း)", "Chin (မေးစေ့)"],
    correctIndex: 0,
    explanation: "The knee is the joint in the middle of your leg! (ခြေထောက်အလယ်ရှိ အဆစ်မှာ ဒူးခေါင်း Knee ဖြစ်သည်။)"
  },
  {
    id: "u5_f3", unitId: "u5", level: "focus", topic: "5.1 Our bodies",
    questionEn: "What are the five small parts at the end of your hand called, and the five small parts at the end of your foot?",
    questionMm: "လက်ဖဝါးအဖျားရှိ အချောင်းလေး (၅) ချောင်းနှင့် ခြေဖဝါးအဖျားရှိ အချောင်းလေး (၅) ချောင်းကို မည်သို့ခေါ်သနည်း။",
    artKey: "human_body_parts", caption: "Workbook p.50: Fingers and toes",
    options: ["Fingers on the hand, and Toes on the foot (လက်ချောင်း နှင့် ခြေချောင်း)", "Elbows on the hand, and Knees on the foot", "Shoulders and Hips"],
    correctIndex: 0,
    explanation: "We have fingers on our hands and toes on our feet! (လက်တွင် Fingers လက်ချောင်းများရှိပြီး ခြေထောက်တွင် Toes ခြေချောင်းများရှိသည်။)"
  },
  {
    id: "u5_f4", unitId: "u5", level: "focus", topic: "5.2 Our amazing senses",
    questionEn: "Which of these things can you SMELL with your nose?",
    questionMm: "နှာခေါင်းဖြင့် အနံ့ခံနိုင်သော (Smell) အရာများကို ရွေးပါ။",
    artKey: "human_five_senses", caption: "Workbook p.54: Things we smell and hear",
    options: ["Hot coffee, banana, orange, and chocolate", "A ringing mobile phone sound", "A drum beat sound", "A tambourine jingle"],
    correctIndex: 0,
    explanation: "We can smell coffee, bananas, oranges, and chocolate with our nose! We hear phones and drums with our ears. (ကော်ဖီ၊ ငှက်ပျောသီးနှင့် လိမ္မော်သီးတို့ကို အနံ့ခံနိုင်သည်။)"
  },
  {
    id: "u5_f5", unitId: "u5", level: "focus", topic: "5.2 Our amazing senses",
    questionEn: "Look at page 54. Which of these things do you HEAR with your ears?",
    questionMm: "နားဖြင့် ကြားနိုင်သော (Hear) အရာများကို ရွေးချယ်ပါ။",
    artKey: "sound_drum_guitar", caption: "Workbook p.54: Mobile phone, tambourine, drum",
    options: ["A ringing mobile phone, a tambourine, and a drum", "The smell of a banana", "The colour of a rainbow", "The taste of chocolate"],
    correctIndex: 0,
    explanation: "Mobile phones, tambourines, and drums make sounds that we hear with our ears! (ဖုန်းမြည်သံ၊ ချူတပ်ဗုံနှင့် ဗုံသံတို့ကို နားဖြင့် ကြားနိုင်သည်။)"
  },
  {
    id: "u5_f6", unitId: "u5", level: "focus", topic: "5.2 Our amazing senses",
    questionEn: "How many main senses do humans have? (Sight, Hearing, Smell, Taste, Touch)",
    questionMm: "လူသားများတွင် အဓိက အာရုံခံစားမှု (Senses) ဘယ်နှစ်ပါး ရှိသနည်း။",
    artKey: "human_five_senses", caption: "Workbook p.55: Our 5 amazing senses",
    options: ["5 senses (အာရုံ ၅ ပါး)", "2 senses (အာရုံ ၂ ပါး)", "10 senses (အာရုံ ၁၀ ပါး)"],
    correctIndex: 0,
    explanation: "Humans have 5 amazing senses: sight, hearing, smell, taste, and touch! (မြင်ခြင်း၊ ကြားခြင်း၊ နံခြင်း၊ အရသာခံခြင်း၊ ထိတွေ့ခြင်း ဟူ၍ အာရုံ ၅ ပါးရှိသည်။)"
  },
  {
    id: "u5_f7", unitId: "u5", level: "focus", topic: "5.3 Similar and different",
    questionEn: "If your friend is taller than you and has a different hair colour, are you both still humans?",
    questionMm: "သူငယ်ချင်းတစ်ဦးသည် မိမိထက် အရပ်ပိုရှည်ပြီး ဆံပင်အရောင်မတူသော်လည်း နှစ်ဦးစလုံး လူသားများ ဖြစ်ကြပါသလား။",
    artKey: "human_body_parts", caption: "Workbook p.58: Similar and different friends",
    options: ["Yes, humans are similar in body parts but can differ in height and hair colour", "No, all humans must look like identical twins"],
    correctIndex: 0,
    explanation: "All humans belong to the same group, even though we have differences in height, hair colour, and eye colour! (လူသားအချင်းချင်း အရပ်နှင့် ဆံပင်အရောင် ကွဲပြားနိုင်ပါသည်။)"
  },
  {
    id: "u5_f8", unitId: "u5", level: "focus", topic: "5.4 Staying alive",
    questionEn: "What three things do ALL humans and animals need to stay ALIVE?",
    questionMm: "လူနှင့် တိရစ္ဆာန်အားလုံး အသက်ရှင်နေထိုင်ရန် မရှိမဖြစ်လိုအပ်သော အရာ (၃) ခုမှာ အဘယ်နည်း။",
    artKey: "human_healthy_food", caption: "Workbook p.61-63: Staying alive",
    options: ["Food, Water, and Air (အစာ၊ ရေ နှင့် လေ)", "Toys, Television, and Sweets (အရုပ်၊ တီဗီ နှင့် သကြားလုံး)", "Cars, Bicycles, and Boats", "Gold, Silver, and Rocks"],
    correctIndex: 0,
    explanation: "All humans and animals need food, clean water, and air to stay alive! (သက်ရှိအားလုံး အသက်ရှင်ရန် အစာ၊ ရေ နှင့် လေ လိုအပ်ပါသည်။)"
  },
  {
    id: "u5_f9", unitId: "u5", level: "focus", topic: "5.4 Staying alive",
    questionEn: "Udom and Kanya are on a boat holiday (page 61). Which items on the boat do they need to stay ALIVE?",
    questionMm: "လှေပေါ်တွင် အပန်းဖြေနေသော Udom နှင့် Kanya တို့ အသက်ရှင်ရန် လှေပေါ်ရှိ မည်သည့်အရာများ လိုအပ်သနည်း။",
    artKey: "human_healthy_food", caption: "Workbook p.61: Boat holiday picture",
    options: ["Water bottles, rice, pineapple/fruit, and air cylinders for diving", "The sunken wooden boat at the bottom of the sea", "The iron anchor under the water", "The comic books on the table"],
    correctIndex: 0,
    explanation: "They need water, food (rice, fruit, sandwiches), and air to stay alive! (ရေ၊ ထမင်း/အသီးအနှံနှင့် လေတို့သည် အသက်ရှင်ရန် လိုအပ်သောအရာများဖြစ်သည်။)"
  },

  // --- Unit 5: Practice (9 Questions) ---
  {
    id: "u5_p1", unitId: "u5", level: "practice", topic: "5.1 Our bodies",
    questionEn: "In the hospital clinic picture (page 51-52): Girl A has a bandage on her foot, Man B has a bandage on his knee, and Boy D has a patch over his eye. What did Woman C and Girl E hurt?",
    questionMm: "ဆေးခန်းပုံ (စာမျက်နှာ ၅၁) တွင် အမျိုးသမီး C (လက်ဖဝါးပတ်တီးစည်းထားသူ) နှင့် မိန်းကလေး E (လက်ချောင်းပတ်တီးစည်းထားသူ) တို့သည် မည်သည့်နေရာ ထိခိုက်မိသနည်း။",
    artKey: "human_body_parts", caption: "Workbook p.51-52: Hospital clinic patients",
    options: ["Woman C hurt her HAND, and Girl E hurt her FINGER", "Woman C hurt her FOOT, and Girl E hurt her KNEE", "Both hurt their toes"],
    correctIndex: 0,
    explanation: "The doctor is bandaging Woman C's hand, and Girl E has a bandage on her finger! (အမျိုးသမီး C သည် လက် Hand နှင့် မိန်းကလေး E သည် လက်ချောင်း Finger ထိခိုက်မိထားသည်။)"
  },
  {
    id: "u5_p2", unitId: "u5", level: "practice", topic: "5.1 Our bodies",
    questionEn: "Which body part is between your neck and your tummy (stomach)?",
    questionMm: "လည်ပင်းနှင့် ဗိုက် (Tummy) ကြားတွင် ရှိသော ရင်ဘတ်အစိတ်အပိုင်းကို အင်္ဂလိပ်လို မည်သို့ခေါ်သနည်း။",
    artKey: "human_body_parts", caption: "Workbook p.50: Chest and tummy",
    options: ["Chest (ရင်ဘတ်)", "Knee (ဒူးခေါင်း)", "Toe (ခြေချောင်း)", "Ankle (ခြေမျက်စိ)"],
    correctIndex: 0,
    explanation: "Your chest is below your neck and shoulders, and above your tummy! (ရင်ဘတ်ကို Chest ဟုခေါ်ပြီး ဗိုက်ကို Tummy ဟုခေါ်သည်။)"
  },
  {
    id: "u5_p3", unitId: "u5", level: "practice", topic: "5.2 Our amazing senses",
    questionEn: "Match the sense to the body part: What do we use to TOUCH and feel if something is hot, cold, rough, or smooth?",
    questionMm: "ပူခြင်း၊ အေးခြင်း၊ ကြမ်းခြင်း၊ ချောခြင်းတို့ကို ထိတွေ့ခံစားရန် (Touch) မည်သည့်အစိတ်အပိုင်းကို သုံးသနည်း။",
    artKey: "human_five_senses", caption: "Workbook p.55-56: Five senses",
    options: ["Our skin / hands (အရေပြား / လက်)", "Our eyes (မျက်စိ)", "Our ears (နား)", "Our hair (ဆံပင်)"],
    correctIndex: 0,
    explanation: "We touch and feel with our skin! Sight = eyes, Hearing = ears, Taste = mouth/tongue, Smell = nose. (အရေပြားဖြင့် ထိတွေ့ခံစားနိုင်ပါသည်။)"
  },
  {
    id: "u5_p4", unitId: "u5", level: "practice", topic: "5.2 Our amazing senses",
    questionEn: "Complete the sentences: 'You SEE with your ______, and you TASTE with your ______.'",
    questionMm: "ကွက်လပ်ဖြည့်ပါ - 'သင်သည် ______ ဖြင့် မြင်နိုင်ပြီး၊ ______ ဖြင့် အရသာခံနိုင်သည်။'",
    artKey: "human_five_senses", caption: "Workbook p.56: Question 3b & 3c",
    options: ["eyes ... mouth / tongue (မျက်စိ ... ပါးစပ်/လျှာ)", "ears ... nose (နား ... နှာခေါင်း)", "skin ... knees (အရေပြား ... ဒူးခေါင်း)"],
    correctIndex: 0,
    explanation: "You see with your eyes (sense of sight) and taste with your mouth/tongue (sense of taste)! (မျက်စိဖြင့် မြင်ပြီး ပါးစပ်/လျှာဖြင့် အရသာခံပါသည်။)"
  },
  {
    id: "u5_p5", unitId: "u5", level: "practice", topic: "5.3 Similar and different",
    questionEn: "Look at the girl with long curly hair and the boy with short dark hair on page 59. Which statements are YES (true)?",
    questionMm: "စာမျက်နှာ ၅၉ ရှိ မိန်းကလေးနှင့် ယောက်ျားလေးပုံကို ကြည့်ပါ။ မည်သည့်အချက်များက မှန်ကန်သနည်း။",
    artKey: "human_body_parts", caption: "Workbook p.59: Comparing two children",
    options: ["They both have arms and eyes, and they have different skin colour", "They have the exact same hair and are both boys", "Neither of them has eyes"],
    correctIndex: 0,
    explanation: "They both have arms and eyes (similar), and they have different hair and skin colour (different). One is a girl and one is a boy. (နှစ်ဦးစလုံးတွင် လက်နှင့်မျက်စိရှိကြပြီး ဆံပင်နှင့် အသားအရောင် ကွဲပြားကြသည်။)"
  },
  {
    id: "u5_p6", unitId: "u5", level: "practice", topic: "5.3 Similar and different",
    questionEn: "Look at your classmates. How are all humans SIMILAR?",
    questionMm: "လူသားအားလုံး တူညီကြသောအချက် (Similar) မှာ အဘယ်နည်း။",
    artKey: "human_body_parts", caption: "Workbook p.58-59: Similar and different",
    options: ["We all have human body parts like eyes, arms, legs, and skin", "We are all the exact same height in bricks", "We all have the exact same hair colour", "We all wear the exact same shoes"],
    correctIndex: 0,
    explanation: "Humans are similar because we share the same body parts (eyes, arms, legs), even though our height and hair colour can be different. (အရပ်နှင့် ဆံပင်အရောင် ကွဲပြားနိုင်သော်လည်း ခန္ဓာကိုယ်အစိတ်အပိုင်းများ တူညီကြသည်။)"
  },
  {
    id: "u5_p7", unitId: "u5", level: "practice", topic: "5.4 Staying alive",
    questionEn: "Which group of foods is HEALTHY for humans to eat regularly?",
    questionMm: "လူသားများ ကျန်းမာစေရန် စားသုံးသင့်သော အစားအစာအုပ်စု (Healthy food) ကို ရွေးပါ။",
    artKey: "human_healthy_food", caption: "Workbook p.62: Healthy vs Unhealthy food",
    options: ["Fruit, Vegetables, Eggs, and Noodles/Rice", "Lots of sugary sweets and lollipops all day", "Only chocolate cake and fizzy soda", "Only candy and ice cream"],
    correctIndex: 0,
    explanation: "Fruit, vegetables, eggs, and rice/noodles help us grow strong and healthy. Too many sweets and cakes are unhealthy. (အသီးအနှံ၊ ဟင်းသီးဟင်းရွက်နှင့် ကြက်ဥတို့သည် ကျန်းမာရေးနှင့် ညီညွတ်သည်။)"
  },
  {
    id: "u5_p8", unitId: "u5", level: "practice", topic: "5.4 Staying alive",
    questionEn: "Look at the food table on page 62: Fruit, Vegetables, Cake, Eggs, Noodles, Sweets. Which two foods are NOT healthy if eaten too much?",
    questionMm: "စာမျက်နှာ ၆၂ ရှိ အစားအစာများထဲမှ အများကြီးစားလျှင် ကျန်းမာရေးနှင့် မညီညွတ်သော (Not healthy) အစာ (၂) မျိုးမှာ အဘယ်နည်း။",
    artKey: "human_healthy_food", caption: "Workbook p.62: Cake and Sweets",
    options: ["Cake and Sweets (ကိတ်မုန့် နှင့် သကြားလုံး)", "Fruit and Vegetables (သစ်သီး နှင့် ဟင်းသီးဟင်းရွက်)", "Eggs and Noodles (ကြက်ဥ နှင့် ခေါက်ဆွဲ)"],
    correctIndex: 0,
    explanation: "Cake and sugary sweets are not healthy foods. Fruit, vegetables, eggs, and noodles are healthy! (ကိတ်မုန့်နှင့် သကြားလုံးများသည် အချိုလွန်ကဲသဖြင့် ကျန်းမာရေးနှင့် မညီညွတ်ပါ။)"
  },
  {
    id: "u5_p9", unitId: "u5", level: "practice", topic: "5.2 Our amazing senses",
    questionEn: "Which sense helps you know if an apple is sweet or a lemon is sour?",
    questionMm: "ပန်းသီးက ချိုသလား၊ သံပရိုသီးက ချဉ်သလား ဆိုသည်ကို မည်သည့်အာရုံဖြင့် သိနိုင်သနည်း။",
    artKey: "human_five_senses", caption: "Workbook p.55: Sense of taste",
    options: ["Sense of TASTE with your tongue/mouth (အရသာခံအာရုံ)", "Sense of HEARING with your ears", "Sense of SIGHT with your eyes"],
    correctIndex: 0,
    explanation: "Our sense of taste (mouth/tongue) tells us if food is sweet, sour, or salty! (ပါးစပ်နှင့် လျှာရှိ အရသာခံအာရုံ Taste ဖြင့် ချို၊ ချဉ်၊ ငန်ကို သိနိုင်သည်။)"
  },

  // --- Unit 5: Challenge (9 Questions) ---
  {
    id: "u5_c1", unitId: "u5", level: "challenge", topic: "5.1 Our bodies",
    questionEn: "Four children measure their feet using bricks: Amna = 8 bricks, Bill = 7 bricks, Arun = 5 bricks, Fen = 6 bricks. Who has the LONGEST feet and SHORTEST feet?",
    questionMm: "Amna (၈ တုံး)၊ Bill (၇ တုံး)၊ Arun (၅ တုံး)၊ Fen (၆ တုံး) တို့တွင် မည်သူက ခြေဖဝါးအရှည်ဆုံးနှင့် အတိုဆုံးဖြစ်သနည်း။",
    artKey: "human_body_parts", caption: "Workbook p.53: Measuring feet with bricks",
    options: ["Longest = Amna (8 bricks), Shortest = Arun (5 bricks)", "Longest = Arun (5 bricks), Shortest = Amna (8 bricks)", "Longest = Bill, Shortest = Fen", "All four have the same foot size"],
    correctIndex: 0,
    explanation: "8 bricks is the most, so Amna has the longest feet. 5 bricks is the least, so Arun has the shortest feet! (၈ တုံးရှိသော Amna က အရှည်ဆုံးဖြစ်ပြီး ၅ တုံးရှိသော Arun က အတိုဆုံးဖြစ်သည်။)"
  },
  {
    id: "u5_c2", unitId: "u5", level: "challenge", topic: "5.1 Our bodies",
    questionEn: "Using the foot measurement table (Amna = 8, Bill = 7, Fen = 6, Arun = 5 bricks), how many bricks longer is Amna's foot than Arun's foot?",
    questionMm: "Amna ၏ ခြေဖဝါး (၈ တုံး) သည် Arun ၏ ခြေဖဝါး (၅ တုံး) ထက် အုတ်ခဲ ဘယ်နှစ်တုံး ပိုရှည်သနည်း။",
    artKey: "human_body_parts", caption: "Workbook p.53: Comparing brick counts",
    options: ["3 bricks longer (8 - 5 = 3)", "1 brick longer", "10 bricks longer"],
    correctIndex: 0,
    explanation: "8 bricks minus 5 bricks equals 3 bricks longer! (၈ တုံး ထဲမှ ၅ တုံး နုတ်လျှင် ၃ တုံး ပိုရှည်ပါသည်။)"
  },
  {
    id: "u5_c3", unitId: "u5", level: "challenge", topic: "5.2 Our amazing senses",
    questionEn: "Alex wears a blindfold and touches 3 objects. Prediction A: Orange (Result: Lemon). Prediction B: Book (Result: Book). Prediction C: Pencil (Result: Pen). How many predictions were RIGHT?",
    questionMm: "မျက်စိစည်းပြီး စမ်းကြည့်ရာတွင် B (စာအုပ်) တစ်ခုသာ မှန်ပြီး A နှင့် C လွဲသွားပါက ခန့်မှန်းချက် ဘယ်နှစ်ခု မှန်သနည်း။",
    artKey: "human_five_senses", caption: "Workbook p.57: Investigating touch predictions",
    options: ["1 prediction was right (Book), and 2 were wrong", "All 3 predictions were right", "0 predictions were right", "2 predictions were right"],
    correctIndex: 0,
    explanation: "Only column B (Book = Book) matched! Orange/Lemon and Pencil/Pen have similar shapes when touched blindfolded, so 1 was right and 2 were wrong. (စာအုပ်တစ်ခုသာ တူညီသဖြင့် ၁ ခုမှန်ပြီး ၂ ခုမှားပါသည်။)"
  },
  {
    id: "u5_c4", unitId: "u5", level: "challenge", topic: "5.2 Our amazing senses",
    questionEn: "Why did blindfolded Alex mistake the lemon for an orange, and the pen for a pencil?",
    questionMm: "မျက်စိစည်းထားသော Alex သည် သံပရိုသီးကို လိမ္မော်သီးဟုလည်းကောင်း၊ ဘောပင်ကို ခဲတံဟုလည်းကောင်း ဘာကြောင့် မှားယွင်းခန့်မှန်းမိသနည်း။",
    artKey: "human_five_senses", caption: "Workbook p.57: Touch investigation",
    options: ["Because they feel very similar in shape and texture when you only use touch without sight", "Because lemons and books are identical", "Because pens are made of oranges"],
    correctIndex: 0,
    explanation: "Without sight, our sense of touch feels shape and texture—a lemon feels round and dimpled like an orange! (မျက်စိမမြင်ရဘဲ လက်ဖြင့်သာ စမ်းကြည့်သောအခါ ပုံသဏ္ဌာန်ဆင်တူနေသောကြောင့် ဖြစ်သည်။)"
  },
  {
    id: "u5_c5", unitId: "u5", level: "challenge", topic: "5.3 Similar and different",
    questionEn: "Look at the 5 children on page 60: Umar (tall, black hair), Chi (short, fair hair), Dan (tall, fair hair), Obi (short, black hair), Sam (short, black hair). Which children go into the 'TALL' group?",
    questionMm: "စာမျက်နှာ ၆၀ ရှိ ကလေး (၅) ဦးတွင် အရပ်ရှည်သောအုပ်စု (Tall group) ထဲသို့ မည်သူတို့ ပါဝင်မည်နည်း။",
    artKey: "human_body_parts", caption: "Workbook p.60: Grouping Umar, Chi, Dan, Obi, Sam",
    options: ["Umar and Dan (အရပ်ရှည်သော Umar နှင့် Dan)", "Chi, Obi, and Sam (အရပ်ပုသော ၃ ဦး)", "Only Chi"],
    correctIndex: 0,
    explanation: "Umar and Dan are tall! Chi, Obi, and Sam are in the short group. (Umar နှင့် Dan တို့သည် အရပ်ရှည်သော Tall အုပ်စုတွင် ပါဝင်သည်။)"
  },
  {
    id: "u5_c6", unitId: "u5", level: "challenge", topic: "5.3 Similar and different",
    questionEn: "In the same group on page 60 (Umar, Chi, Dan, Obi, Sam), which children belong in the 'FAIR HAIR' (light hair) group?",
    questionMm: "စာမျက်နှာ ၆၀ ပုံတွင် ဆံပင်အရောင်ဖျော့သော (Fair hair) အုပ်စု၌ မည်သူတို့ ပါဝင်သနည်း။",
    artKey: "human_body_parts", caption: "Workbook p.60: Fair hair vs Black hair",
    options: ["Chi and Dan (ဆံပင်ရွှေဝါရောင်ဖျော့ရှိသော Chi နှင့် Dan)", "Umar, Obi, and Sam (ဆံပင်အမည်းရောင်ရှိသူများ)", "None of them"],
    correctIndex: 0,
    explanation: "Chi and Dan have fair hair! Umar, Obi, and Sam have black hair. Notice each person can be in more than one group! (Chi နှင့် Dan တို့သည် Fair hair အုပ်စုဝင်ဖြစ်ပြီး Umar, Obi, Sam တို့သည် Black hair အုပ်စုဝင်ဖြစ်သည်။)"
  },
  {
    id: "u5_c7", unitId: "u5", level: "challenge", topic: "5.4 Staying alive",
    questionEn: "What happens to a human if they eat the wrong (unhealthy) food all the time?",
    questionMm: "ကျန်းမာရေးနှင့် မညီညွတ်သော အစားအစာများကိုသာ အမြဲစားပါက မည်သို့ဖြစ်မည်နည်း။",
    artKey: "human_healthy_food", caption: "Workbook p.63: Staying healthy",
    options: ["They will become unhealthy", "They will be able to fly", "They will not need air to breathe", "Their bones will turn into metal"],
    correctIndex: 0,
    explanation: "If you eat the wrong food, you will become unhealthy. Eating healthy food keeps us strong! (မသင့်တော်သော အစာများသာစားလျှင် ကျန်းမာရေးချို့တဲ့နိုင်ပါသည်။)"
  },
  {
    id: "u5_c8", unitId: "u5", level: "challenge", topic: "5.4 Staying alive",
    questionEn: "Why do scuba divers carry metal tanks on their backs when swimming deep underwater (page 61)?",
    questionMm: "ရေငုပ်သမားများသည် ရေအောက်သို့ ငုပ်သောအခါ ကျောပေါ်တွင် လေဘူး (Air tanks) များကို ဘာကြောင့် သယ်ဆောင်သွားရသနည်း။",
    artKey: "human_healthy_food", caption: "Workbook p.61: Diving air tanks",
    options: ["Because humans need air to breathe and stay alive underwater", "Because the tanks are filled with chocolate", "To make them float high above the boat"],
    correctIndex: 0,
    explanation: "Humans cannot breathe water like fish—we need air at all times to stay alive! (လူသားများသည် အသက်ရှင်ရန် လေ Air လိုအပ်သဖြင့် ရေအောက်တွင် လေဘူးသယ်ရခြင်းဖြစ်သည်။)"
  },
  {
    id: "u5_c9", unitId: "u5", level: "challenge", topic: "5.2 Our amazing senses",
    questionEn: "How do our senses of SMELL and SIGHT work together to keep us safe when eating?",
    questionMm: "အစားအစာ စားသုံးရာတွင် အနံ့ခံအာရုံနှင့် အမြင်အာရုံတို့က ကျွန်ုပ်တို့ ဘေးကင်းစေရန် မည်သို့ ကူညီပေးသနည်း။",
    artKey: "human_five_senses", caption: "Workbook Unit 5 Summary",
    options: ["They help us see and smell if food is fresh or rotten/spoiled before we eat it", "They make rotten food turn into gold", "Senses do not help us with food"],
    correctIndex: 0,
    explanation: "Our senses warn us if food looks or smells bad so we don't eat spoiled food! (အစားအစာ လတ်ဆတ်မှု ရှိမရှိကို အမြင်နှင့် အနံ့အာရုံတို့ဖြင့် စစ်ဆေးနိုင်သည်။)"
  },

  // =========================================================================
  // UNIT 6: FORCES (27 Questions: 9 Focus, 9 Practice, 9 Challenge)
  // =========================================================================
  // --- Unit 6: Focus (9 Questions) ---
  {
    id: "u6_f1", unitId: "u6", level: "focus", topic: "6.1 Moving things",
    questionEn: "Look at the playground picture (page 64). Which children are MOVING?",
    questionMm: "ကစားကွင်းပုံ (စာမျက်နှာ ၆၄) တွင် မည်သည့်ကလေးများက ရွေ့လျားနေသနည်း (Moving)။",
    artKey: "forces_push_pull", caption: "Workbook p.64: Playground moving things",
    options: ["The girl swinging, boy kicking a football, child on the slide, and boy riding a bike", "The boy lying still on the grass listening to music", "The two girls sitting still on the park bench", "The wooden fence around the park"],
    correctIndex: 0,
    explanation: "Swinging, sliding, cycling, jumping, and kicking a ball are all moving! Sitting or lying still is not moving. (ဒန်းစီးခြင်း၊ လျှောစီးခြင်း၊ စက်ဘီးစီးခြင်းနှင့် ဘောလုံးကန်ခြင်းတို့သည် ရွေ့လျားနေကြသည်။)"
  },
  {
    id: "u6_f2", unitId: "u6", level: "focus", topic: "6.2 Push and pull forces",
    questionEn: "When you kick a football or close a drawer away from you, what force are you using?",
    questionMm: "ဘောလုံးကို ကန်လိုက်သောအခါ သို့မဟုတ် အံဆွဲကို ပိတ်လိုက်သောအခါ မည်သည့်အားကို သုံးသနည်း။",
    artKey: "forces_push_pull", caption: "Workbook p.67-69: Push and pull forces",
    options: ["A PUSH force (တွန်းအား)", "A PULL force (ဆွဲအား)", "A MAGNETIC force (သံလိုက်အား)", "A MELTING force"],
    correctIndex: 0,
    explanation: "Kicking a ball away from you or closing a drawer is a PUSH force! (မိမိထံမှ ဝေးရာသို့ ရွေ့စေခြင်းသည် တွန်းအား Push ဖြစ်သည်။)"
  },
  {
    id: "u6_f3", unitId: "u6", level: "focus", topic: "6.2 Push and pull forces",
    questionEn: "When you take the cap off a pen or pull a toy car on a string towards you, what force are you using?",
    questionMm: "ဘောပင်အဖုံးကို ဆွဲချွတ်သောအခါ သို့မဟုတ် ကားရုပ်လေးကို ကြိုးဖြင့်ဆွဲယူသောအခါ မည်သည့်အားကို သုံးသနည်း။",
    artKey: "forces_push_pull", caption: "Workbook p.67 & 71: Pulling forces",
    options: ["A PULL force (ဆွဲအား)", "A PUSH force (တွန်းအား)", "No force at all"],
    correctIndex: 0,
    explanation: "Pulling a pen cap off or pulling a toy on a string uses a PULL force! (ဘောပင်အဖုံးချွတ်ခြင်းနှင့် ကြိုးဆွဲခြင်းသည် ဆွဲအား Pull ဖြစ်သည်။)"
  },
  {
    id: "u6_f4", unitId: "u6", level: "focus", topic: "6.2 Push and pull forces",
    questionEn: "Can a supermarket shopping trolley be moved using BOTH push and pull forces?",
    questionMm: "ဈေးဝယ်တွန်းလှည်း (Shopping trolley) ကို တွန်းအား (Push) ရော ဆွဲအား (Pull) ပါ နှစ်မျိုးလုံးဖြင့် ရွှေ့နိုင်ပါသလား။",
    artKey: "forces_push_pull", caption: "Workbook p.67: Shopping trolley",
    options: ["Yes, you can push it forward or pull it back towards you", "No, shopping trolleys can never move", "It only moves by magnets"],
    correctIndex: 0,
    explanation: "You can push a shopping trolley forward or pull it towards you! (ဈေးဝယ်လှည်းကို ရှေ့သို့တွန်းနိုင်သလို အနောက်သို့လည်း ပြန်ဆွဲနိုင်ပါသည်။)"
  },
  {
    id: "u6_f5", unitId: "u6", level: "focus", topic: "6.3 Making things move",
    questionEn: "Look at page 71: A girl gently pushes a tiny toy car with one finger, while a boy pushes his friend on roller skates with both hands. Which is the BIGGEST push?",
    questionMm: "လက်တစ်ချောင်းတည်းဖြင့် ကားရုပ်လေးကို တွန်းခြင်းနှင့် စကိတ်စီးနေသော သူငယ်ချင်းကို လက်နှစ်ဖက်ဖြင့် တွန်းခြင်းတွင် မည်သည်က အကြီးမားဆုံး တွန်းအား (Biggest push) ဖြစ်သနည်း။",
    artKey: "forces_push_pull", caption: "Workbook p.71: Little push vs Big push",
    options: ["Pushing the friend on roller skates is the biggest push", "Pushing the tiny toy doll stroller with one finger", "Pushing a feather"],
    correctIndex: 0,
    explanation: "Heavy things like a person on roller skates need a BIG push force! Tiny toys only need a little push. (လူတစ်ဦးကို ရွေ့စေရန် အားကြီးကြီး Big push လိုအပ်ပါသည်။)"
  },
  {
    id: "u6_f6", unitId: "u6", level: "focus", topic: "6.4 Floating and sinking",
    questionEn: "Look at the water tank. Which object FLOATS on top of the water?",
    questionMm: "ရေကန်ပုံကို ကြည့်ပါ။ မည်သည့်ပစ္စည်းသည် ရေပေါ်တွင် ပေါလောပေါ် (Float) သနည်း။",
    artKey: "forces_float_sink", caption: "Workbook p.74-76: Floating and sinking",
    options: ["A beach ball / balloon / apple (ဘောလုံး / ပူဖောင်း / ပန်းသီး)", "A heavy metal spoon (သတ္တုဇွန်း)", "A metal key (သတ္တုသော့)", "A solid rock or metal coin (ကျောက်တုံး / အကြွေစေ့)"],
    correctIndex: 0,
    explanation: "A beach ball, balloon, and apple float on water! Heavy metal spoons, keys, coins, and rocks sink. (ဘောလုံး၊ ပူဖောင်းနှင့် ပန်းသီးတို့သည် ရေပေါ်ပေါ်ပြီး သတ္တုဇွန်းနှင့် ကျောက်တုံးတို့သည် နစ်မြုပ်သည်။)"
  },
  {
    id: "u6_f7", unitId: "u6", level: "focus", topic: "6.4 Floating and sinking",
    questionEn: "If you drop a metal key, a metal coin, and a rock into a bowl of water, what will happen to them?",
    questionMm: "သတ္တုသော့၊ အကြွေစေ့ နှင့် ကျောက်တုံးတို့ကို ရေဇလုံထဲသို့ ချလိုက်ပါက မည်သို့ဖြစ်မည်နည်း။",
    artKey: "forces_float_sink", caption: "Workbook p.74: Objects that sink",
    options: ["They will SINK to the bottom (ရေအောက်သို့ နစ်မြုပ်သွားမည်)", "They will FLOAT high on the water (ရေပေါ် ပေါလောပေါ်မည်)", "They will fly into the air"],
    correctIndex: 0,
    explanation: "Metal keys, coins, spoons, and rocks sink to the bottom of the water! (သတ္တုသော့၊ အကြွေစေ့နှင့် ကျောက်တုံးတို့သည် ရေထဲတွင် နစ်မြုပ်ပါသည်။)"
  },
  {
    id: "u6_f8", unitId: "u6", level: "focus", topic: "6.5 Magnets can pull",
    questionEn: "Which of these objects will a MAGNET pull towards it (magnetic material)?",
    questionMm: "သံလိုက် (Magnet) သည် အောက်ပါတို့ထဲမှ မည်သည့်ပစ္စည်းကို ဆွဲငင်နိုင်သနည်း။",
    artKey: "forces_magnet", caption: "Workbook p.77-78: Magnetic materials",
    options: ["A metal nail and steel keys (သံချောင်း နှင့် သော့)", "A wooden stick (သစ်သားချောင်း)", "A piece of paper (စက္ကူစ)", "A cotton T-shirt (ချည်သားအင်္ကျီ)"],
    correctIndex: 0,
    explanation: "Magnets pull magnetic metals like iron and steel (metal nails, keys, paperclips). Wood, paper, plastic, and cotton are non-magnetic. (သံလိုက်သည် သံနှင့် သံမဏိပစ္စည်းများကို ဆွဲငင်ပါသည်။)"
  },
  {
    id: "u6_f9", unitId: "u6", level: "focus", topic: "6.5 Magnets can pull",
    questionEn: "Look at the sorting circles on page 77: Metal keys, Brick, Wood branch, Cotton shirt, Paper, Metal nail. Which items go into the 'NON-MAGNETIC' circle?",
    questionMm: "သံလိုက်မလိုက်သော (Non-magnetic) စက်ဝိုင်းထဲသို့ မည်သည့်ပစ္စည်းများကို ထည့်ရမည်နည်း။",
    artKey: "forces_magnet", caption: "Workbook p.77: Non-magnetic materials",
    options: ["Brick, Wood, Cotton, and Paper (အုတ်ခဲ၊ သစ်သား၊ ချည်သား နှင့် စက္ကူ)", "Metal keys and Metal nail (သတ္တုသော့ နှင့် သံချောင်း)", "Iron screws and Steel clips"],
    correctIndex: 0,
    explanation: "Brick, wood, cotton wool, and paper are non-magnetic materials—magnets do not pull them. (အုတ်ခဲ၊ သစ်သား၊ ချည်ထည်နှင့် စက္ကူတို့သည် သံလိုက်မလိုက်ပါ။)"
  },

  // --- Unit 6: Practice (9 Questions) ---
  {
    id: "u6_p1", unitId: "u6", level: "practice", topic: "6.1 Moving things",
    questionEn: "When Zara rides her bicycle, which parts of the bicycle are MOVING (rotating)?",
    questionMm: "စက်ဘီးစီးသောအခါ စက်ဘီး၏ မည်သည့်အစိတ်အပိုင်းများက လည်ပတ်ရွေ့လျားနေသနည်း။",
    artKey: "forces_push_pull", caption: "Workbook p.65: Moving parts of a bicycle",
    options: ["The wheels, pedals, and chain (ဘီးများ၊ ခြေနင်း နှင့် ချိန်းကြိုး)", "Only the helmet on her head", "The painted colour on the frame", "None of the parts move"],
    correctIndex: 0,
    explanation: "A bicycle has moving parts like the wheels, pedals, handlebars, and chain! (စက်ဘီး၏ ဘီးများ၊ ခြေနင်းနှင့် ချိန်းကြိုးတို့သည် လည်ပတ်ရွေ့လျားကြသည်။)"
  },
  {
    id: "u6_p2", unitId: "u6", level: "practice", topic: "6.2 Push and pull forces",
    questionEn: "When a horse moves a cart behind it, or a car tows a trailer, what force is moving the cart?",
    questionMm: "မြင်းက လှည်းကိုဆွဲသောအခါ သို့မဟုတ် ကားက နောက်တွဲယာဉ်ကို ဆွဲသောအခါ မည်သည့်အားကို သုံးသနည်း။",
    artKey: "forces_push_pull", caption: "Workbook p.67: Horse cart and car trailer",
    options: ["A PULL force (ဆွဲအား)", "A PUSH force (တွန်းအား)", "A FLOATING force", "A SOUND force"],
    correctIndex: 0,
    explanation: "The horse and car are in front, so they use a PULL force to pull the cart/trailer behind them. (ရှေ့မှနေ၍ နောက်တွဲကို ဆွဲယူခြင်းသည် ဆွဲအား Pull ဖြစ်သည်။)"
  },
  {
    id: "u6_p3", unitId: "u6", level: "practice", topic: "6.2 Push and pull forces",
    questionEn: "When you press a doorbell button or push open a heavy door away from you, what force do you use?",
    questionMm: "လူခေါ်ခေါင်းလောင်းခလုတ်ကို နှိပ်သောအခါ သို့မဟုတ် တံခါးကို တွန်းဖွင့်သောအခါ မည်သည့်အားကို သုံးသနည်း။",
    artKey: "forces_push_pull", caption: "Workbook p.68: Pushes at home and school",
    options: ["A PUSH force (တွန်းအား)", "A PULL force (ဆွဲအား)", "A MAGNETIC force"],
    correctIndex: 0,
    explanation: "Pressing a button or pushing a swing/door away from you is a PUSH force! (ခလုတ်နှိပ်ခြင်းနှင့် တွန်းဖွင့်ခြင်းသည် တွန်းအား Push ဖြစ်သည်။)"
  },
  {
    id: "u6_p4", unitId: "u6", level: "practice", topic: "6.3 Making things move",
    questionEn: "How can children make a football move FASTER and go a LONG WAY?",
    questionMm: "ဘောလုံးကို ပိုမြန်မြန်နှင့် အဝေးကြီးသို့ ရောက်သွားစေရန် မည်သို့ပြုလုပ်ရမည်နည်း။",
    artKey: "forces_push_pull", caption: "Workbook p.70 & 73: Big push vs small push",
    options: ["Give the ball a BIG / HARDER push (အားပြင်းပြင်းဖြင့် ကန်/တွန်းရမည်)", "Give the ball a tiny, gentle push", "Do not touch the ball at all", "Blow on the ball softly"],
    correctIndex: 0,
    explanation: "A big, hard push makes a ball go faster and travel a long way. A small push makes it go slowly and a short way. (အားပြင်းပြင်းဖြင့် တွန်း/ကန်ပါက ပိုဝေးဝေးသို့ ရောက်ရှိပါသည်။)"
  },
  {
    id: "u6_p5", unitId: "u6", level: "practice", topic: "6.3 Making things move",
    questionEn: "Some things are moved by hand (muscle push/pull), and some are moved by ELECTRICITY. Which group is moved by ELECTRICITY?",
    questionMm: "လက်အားဖြင့်မဟုတ်ဘဲ လျှပ်စစ်စွမ်းအင် (Electricity) ဖြင့် လည်ပတ်ရွေ့လျားသော ပစ္စည်းများကို ရွေးပါ။",
    artKey: "forces_push_pull", caption: "Workbook p.72: Moved by hand vs electric",
    options: ["An electric fan, kitchen blender/mixer, washing machine, and electric toy train", "A hand saw and a manual broom", "A wooden rolling pin and a hand pencil sharpener", "A football and a skipping rope"],
    correctIndex: 0,
    explanation: "Electric fans, blenders, and electric trains use electricity to make their parts move! (ပန်ကာ၊ မွှေစက်နှင့် လျှပ်စစ်ရထားတို့သည် လျှပ်စစ်ဖြင့် ရွေ့လျားကြသည်။)"
  },
  {
    id: "u6_p6", unitId: "u6", level: "practice", topic: "6.4 Floating and sinking",
    questionEn: "Look at the clay shapes on page 75: a solid round ball, a solid cylinder, a hollow boat shape, and a hollow bowl shape. Which shapes will FLOAT?",
    questionMm: "ရွှံ့စေး (Clay) ပုံစံအမျိုးမျိုးထဲတွင် မည်သည့်ပုံစံများက ရေပေါ်တွင် ပေါလောပေါ် (Float) နိုင်သနည်း။",
    artKey: "forces_float_sink", caption: "Workbook p.75: Clay shapes that float",
    options: ["The hollow boat shape and hollow bowl/dish shapes (အခေါင်းပေါက်ပါသော လှေပုံ နှင့် ပန်းကန်လုံးပုံ)", "The solid round clay ball and solid cylinder", "None of them can float"],
    correctIndex: 0,
    explanation: "Hollow boat and bowl shapes displace water and trap air, so they float! Solid balls and cylinders of clay sink. (လှေပုံနှင့် ပန်းကန်လုံးပုံ ပြုလုပ်ထားသော ရွှံ့စေးများသည် ရေပေါ်ပေါ်နိုင်ပါသည်။)"
  },
  {
    id: "u6_p7", unitId: "u6", level: "practice", topic: "6.5 Magnets can pull",
    questionEn: "Depal tests 5 objects with a magnet (page 78): Wooden spoon, Metal paperclip, Plastic duck, Newspaper, Metal釘/nail. Which two are MAGNETIC?",
    questionMm: "သစ်သားဇွန်း၊ သတ္တုစက္ကူညှပ်၊ ပလတ်စတစ်ဘဲရုပ်၊ သတင်းစာ နှင့် သံချောင်းတို့တွင် သံလိုက်လိုက်သော ပစ္စည်း (၂) ခုမှာ အဘယ်နည်း။",
    artKey: "forces_magnet", caption: "Workbook p.78: Depal's magnet table",
    options: ["The metal paperclip and the metal nail (သတ္တုစက္ကူညှပ် နှင့် သံချောင်း)", "The wooden spoon and plastic duck", "The newspaper and plastic duck"],
    correctIndex: 0,
    explanation: "The metal paperclip and metal nail are made of magnetic metal! Wood, plastic, and paper are non-magnetic. (သတ္တုစက္ကူညှပ်နှင့် သံချောင်းတို့သည် သံလိုက်လိုက်ပါသည်။)"
  },
  {
    id: "u6_p8", unitId: "u6", level: "practice", topic: "6.5 Magnets can pull",
    questionEn: "When a magnet pulls a metal paperclip towards it, is the magnet using a PUSH force or a PULL force?",
    questionMm: "သံလိုက်က သံချောင်း သို့မဟုတ် စက္ကူညှပ်ကို သူ့ဆီသို့ ဆွဲယူသောအခါ မည်သည့်အားကို သုံးသနည်း။",
    artKey: "forces_magnet", caption: "Workbook p.77-79: Magnets can pull",
    options: ["A PULL force (ဆွဲအား)", "A melting force", "A sound force"],
    correctIndex: 0,
    explanation: "Magnets pull magnetic materials towards them using a magnetic PULL force! (သံလိုက်သည် သံထည်ပစ္စည်းများကို ဆွဲအား Pull ဖြင့် ဆွဲငင်ပါသည်။)"
  },
  {
    id: "u6_p9", unitId: "u6", level: "practice", topic: "6.1 Moving things",
    questionEn: "Look at the playground toys on page 66: a rocking horse, a toy train with wheels, and a spinning top/wheel. How does a rocking horse move?",
    questionMm: "မြင်းရုပ်လွှဲ (Rocking horse) သည် မည်သို့သော ပုံစံဖြင့် ရွေ့လျားသနည်း။",
    artKey: "forces_push_pull", caption: "Workbook p.66: Rocking, rotating, forwards/backwards",
    options: ["Rocking back and forth in an arc (ရှေ့နောက် လွှဲပြီး ရွေ့လျားသည်)", "Flying straight up into the clouds", "Melting into the ground"],
    correctIndex: 0,
    explanation: "A rocking horse moves by rocking back and forth! Train wheels rotate while the train moves forwards or backwards. (မြင်းရုပ်လွှဲသည် ရှေ့နောက်လွှဲ၍ ရွေ့လျားပါသည်။)"
  },

  // --- Unit 6: Challenge (9 Questions) ---
  {
    id: "u6_c1", unitId: "u6", level: "challenge", topic: "6.2 Push and pull forces",
    questionEn: "Look at page 69-70: A boy kicks a football with his foot, and a girl heads the football with her head. How can they make the ball go SLOWLY?",
    questionMm: "ဘောလုံးကို ဖြည်းဖြည်းလေး (Slowly) သာ ရွေ့သွားစေလိုပါက မည်သို့ တွန်း/ကန်ရမည်နည်း။",
    artKey: "forces_push_pull", caption: "Workbook p.70: Question 4d",
    options: ["Give the ball a LITTLE (gentle) push (အားနည်းနည်းဖြင့် အသာအယာ တွန်း/ကန်ရမည်)", "Give the ball the hardest push possible", "Use a magnet on the leather ball"],
    correctIndex: 0,
    explanation: "They can make the ball go faster by pushing it harder, and make it go slowly with a little push! (အားနည်းနည်း Little push သုံးလျှင် ဘောလုံးဖြည်းဖြည်းသာ ရွေ့ပါသည်။)"
  },
  {
    id: "u6_c2", unitId: "u6", level: "challenge", topic: "6.3 Making things move",
    questionEn: "Look at the arrow table on page 73: A thick big arrow means a BIG push, and a thin small arrow means a SMALL push. How far will a toy car or ball go with a SMALL push?",
    questionMm: "ကားရုပ် သို့မဟုတ် ဘောလုံးကို အားနည်းနည်း (Small push) သာ ပေးလျှင် အဝေးကြီး ရောက်မည်လား (a long way)၊ အနီးလေးသာ ရောက်မည်လား (a short way)။",
    artKey: "forces_push_pull", caption: "Workbook p.73: Big arrow vs Small arrow",
    options: ["It will go a SHORT way (အနီးလေးသာ ရောက်မည်)", "It will go a LONG way (အဝေးကြီး ရောက်မည်)", "It will travel to the Moon"],
    correctIndex: 0,
    explanation: "With a big push (thick arrow), the car or ball goes a long way. With a small push (thin arrow), it goes a short way! (အားနည်းနည်းဖြင့် တွန်းလျှင် ခရီးတို a short way သာ ရောက်ရှိပါသည်။)"
  },
  {
    id: "u6_c3", unitId: "u6", level: "challenge", topic: "6.4 Floating and sinking",
    questionEn: "A solid ball of clay sinks in water. How can you change the clay so that it FLOATS?",
    questionMm: "ရေထဲတွင် နစ်မြုပ်သော ရွှံ့စေးလုံး (Clay) ကို ရေပေါ်ပေါ်စေရန် မည်သို့ပြုလုပ်နိုင်သနည်း။",
    artKey: "forces_float_sink", caption: "Workbook p.75: Changing clay shapes to float",
    options: ["Change its shape into a hollow boat or bowl shape (လှေ သို့မဟုတ် ပန်းကန်လုံးပုံစံ ပြောင်းမည်)", "Roll it into a tighter ball or cylinder", "Paint the clay red", "Push it harder to the bottom"],
    correctIndex: 0,
    explanation: "You can change the shape of clay into a hollow boat or bowl shape so that it floats on water! (ရွှံ့စေးကို လှေပုံ သို့မဟုတ် ပန်းကန်လုံးပုံ ပြောင်းလဲပေးခြင်းဖြင့် ရေပေါ်ပေါ်စေနိုင်သည်။)"
  },
  {
    id: "u6_c4", unitId: "u6", level: "challenge", topic: "6.4 Floating and sinking",
    questionEn: "Look at an air-filled balloon and a juicy apple in water (page 76). Both float! Which one floats HIGH on top of the water, and which floats LOWER?",
    questionMm: "ပူဖောင်းနှင့် ပန်းသီး နှစ်ခုလုံး ရေပေါ်ပေါ်ကြသည်။ မည်သည်က ရေမျက်နှာပြင်အပေါ်မြင့်မြင့်တွင် ပေါ်ပြီး မည်သည်က ရေထဲနိမ့်နိမ့်တွင် ပေါ်သနည်း။",
    artKey: "forces_float_sink", caption: "Workbook p.76: Floating high vs floating low",
    options: ["The balloon floats HIGH on the water; the apple floats LOWER in the water", "The apple floats high in the air; the balloon sinks", "Both sink to the bottom like a metal coin", "The metal coin floats highest"],
    correctIndex: 0,
    explanation: "Light air-filled things like beach balls and balloons float high on the water. Apples float lower in the water! (လေပြည့်နေသော ပူဖောင်းနှင့် ဘောလုံးသည် ရေပေါ်မြင့်မြင့်ပေါ်ပြီး ပန်းသီးသည် ရေမြုပ်လုနီးပါး ပေါ်သည်။)"
  },
  {
    id: "u6_c5", unitId: "u6", level: "challenge", topic: "6.4 Floating and sinking",
    questionEn: "On page 76, you test 5 items in a water tray: Apple, Empty sealed tin can, Balloon, Wooden matchstick, and Metal 5-cent coin. Which ONE sinks to the bottom?",
    questionMm: "ပန်းသီး၊ လေလုံသံဘူးခွံ၊ ပူဖောင်း၊ သစ်သားမီးခြစ်ဆံ နှင့် သတ္တုအကြွေစေ့ (၅) ခုတွင် ရေအောက်သို့ နစ်မြုပ်သွားမည့် တစ်ခုတည်းသော ပစ္စည်းမှာ အဘယ်နည်း။",
    artKey: "forces_float_sink", caption: "Workbook p.76: Challenge Question 3c",
    options: ["The metal coin sinks to the bottom", "The air-filled balloon sinks", "The wooden matchstick sinks", "The apple sinks"],
    correctIndex: 0,
    explanation: "The heavy solid metal coin sinks to the bottom of the water tray! (သတ္တုအကြွေစေ့သည် ရေအောက်သို့ နစ်မြုပ်သွားပါသည်။)"
  },
  {
    id: "u6_c6", unitId: "u6", level: "challenge", topic: "6.5 Magnets can pull",
    questionEn: "Why does a magnet NOT pull on a rubber balloon or an ice cube (page 79)?",
    questionMm: "သံလိုက်သည် ရာဘာပူဖောင်း သို့မဟုတ် ရေခဲတုံးကို ဘာကြောင့် မဆွဲငင်သနည်း။",
    artKey: "forces_magnet", caption: "Workbook p.79: Non-magnetic materials",
    options: ["Because rubber and ice are non-magnetic materials (သံလိုက်မလိုက်သော ပစ္စည်းများဖြစ်သောကြောင့်)", "Because the balloon is too heavy for the magnet", "Because magnets only work in the dark", "Because rubber is a type of iron metal"],
    correctIndex: 0,
    explanation: "Magnets only pull magnetic materials (like iron and steel). Rubber and water/ice are non-magnetic materials! (ရာဘာနှင့် ရေခဲတို့သည် သံလိုက်မလိုက်သော Non-magnetic ပစ္စည်းများ ဖြစ်ကြသည်။)"
  },
  {
    id: "u6_c7", unitId: "u6", level: "challenge", topic: "6.5 Magnets can pull",
    questionEn: "Look at page 79: Tin can, Steel scissors, Rubber balloon, Melting ice cube, Steel cutlery (spoon/fork/knife), and Steel key. Which objects WILL be pulled by the horseshoe magnet?",
    questionMm: "စာမျက်နှာ ၇၉ ပုံရှိ ပစ္စည်း (၆) ခုထဲမှ မြင်းခွာသံလိုက်က ဆွဲငင်မည့် ပစ္စည်းများကို ရွေးပါ။",
    artKey: "forces_magnet", caption: "Workbook p.79: Horseshoe magnet challenge",
    options: ["Tin can, steel scissors, steel cutlery, and steel key", "Rubber balloon and melting ice cube", "Only the melting ice cube"],
    correctIndex: 0,
    explanation: "The magnet pulls the magnetic metal objects: the can, scissors, metal spoon/fork/knife, and key! It does not pull the rubber balloon or ice. (သံဘူး၊ ကတ်ကြေး၊ ဇွန်းခရင်းနှင့် သော့တို့ကို သံလိုက်က ဆွဲငင်ပါသည်။)"
  },
  {
    id: "u6_c8", unitId: "u6", level: "challenge", topic: "6.1 Moving things",
    questionEn: "Look at the toy train on page 66. Its wheels turn round and round (rotate) while the whole train moves along the track. Which two arrows describe the toy train's movement?",
    questionMm: "ရထားရုပ်လေး ရွေ့လျားသောအခါ ဘီးများက လည်ပတ်ပြီး ရထားကိုယ်ထည်က ရှေ့နောက်ရွေ့လျားသည်။ မည်သည့် ရွေ့လျားမှုနှစ်မျိုး ပါဝင်သနည်း။",
    artKey: "forces_push_pull", caption: "Workbook p.66: Toy train movement",
    options: ["Rotating (wheels) AND moving forwards or backwards (train body)", "Only rocking like a rocking horse", "Floating and sinking"],
    correctIndex: 0,
    explanation: "The toy train's wheels rotate (spin round) while the train moves forwards or backwards! (ဘီးများက လည်ပတ် Rotating လုပ်ပြီး ရထားက ရှေ့နောက် ရွေ့လျားပါသည်။)"
  },
  {
    id: "u6_c9", unitId: "u6", level: "challenge", topic: "6.5 Magnets can pull",
    questionEn: "Can a strong magnet pull a steel paperclip without even touching it (from a small distance away)?",
    questionMm: "သံလိုက်သည် သံစက္ကူညှပ်ကို လုံးဝမထိသေးဘဲ အနီးသို့ ကပ်လိုက်ရုံဖြင့် လှမ်းဆွဲငင်နိုင်ပါသလား။",
    artKey: "forces_magnet", caption: "Workbook Unit 6 Summary: Magnetic force",
    options: ["Yes, magnetic force can pull magnetic metal through the air from a short distance", "No, magnets must be glued to the paperclip first", "Magnets only push paperclips away"],
    correctIndex: 0,
    explanation: "A magnet's pulling force works across a small gap in the air to pull magnetic materials towards it! (သံလိုက်အားသည် အနီးသို့ ရောက်လာသော သံထည်များကို လေထဲမှတစ်ဆင့် လှမ်းဆွဲငင်နိုင်ပါသည်။)"
  }
];
