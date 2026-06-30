
const CARDS_DATA = [
  { number: "#1", name: "الله", desc: "أعظم أسماء الله تعالى وأجلها، الاسم العلم الخاص بالذات الإلهية الجامع لجميع صفات الكمال والجلال." },
  { number: "#2", name: "الرحمن", desc: "صاحب الرحمة الواسعة جل جلاله الذي وسعت رحمته كل شي" },
  { number: "#3", name: "الرحيم", desc: "الذي يرحم عباده المؤمنين ويتفضل بإحسانه لهم" },
  { number: "#4", name: "الملك", desc: "الذي له الملك الحقيقي الكامل التام الأزلي" },
  { number: "#5", name: "القدوس", desc: "المنزه عن كل نقص والمطهر من كل عيب" },
  { number: "#6", name: "السلام", desc: "السالم من كل عيب ونقص وآفة" },
  { number: "#7", name: "المهيمن", desc: "المسيطر القادر الرقيب الشهيد الأمين على كل شيء" },
  { number: "#8", name: "العزيز", desc: "ذو العزة المطلقة والغلبة والقدرة" },
  { number: "#9", name: "الجبار", desc: "صاحب الجبروت والعظمة القهار للعباد" },
  { number: "#10", name: "المتكبر", desc: "ذو الكبرياء والعلو والعظمة" },
  { number: "#11", name: "الأحد", desc: "المتفرد في عليائه وصفات كماله وجلاله" },
  { number: "#12", name: "الأعلى", desc: "الأعلى من كل شي المنزه عن الشريك والشبيه وعن كل مالا يليق به" },
  { number: "#13", name: "الأكرم", desc: "الاكرم في احسانه والاجود في عطائه" },
  { number: "#14", name: "الإله", desc: "المعبود بحق فلا إله غيره وكل ما سواه باطل" },
  { number: "#15", name: "الأول", desc: "القديم بلا ابتداء الذي ليس قبله شيء" },
  { number: "#16", name: "الآخر", desc: "الذي ليس بعده شيء" },
  { number: "#17", name: "والظاهر", desc: "الذي ليس فوقه شيء, العالي فوق كل شيء فلا شيء أعلى منه" },
  { number: "#18", name: "الباطن", desc: "الذي ليس دونه شيء, العالم ببواطن الأمور" },
  { number: "#19", name: "البارئ", desc: "المحدث لكل ما سبق به علمه من الخلق" },
  { number: "#20", name: "البَرّ", desc: "اللطيف بعباده الرفيق بهم المحسن إليهم" },
  { number: "#21", name: "البصير", desc: "المبصر الذي يرى جميع ما في الوجود ولا تخفى عليه خافية" },
  { number: "#22", name: "التواب", desc: "المحسن الذي يتوب على عباده ويتجاوز عن سيئاتهم" },
  { number: "#23", name: "الجبار", desc: "صاحب الجبروت والعظمة القهار للعباد" },
  { number: "#24", name: "الحافظ", desc: "الذي يحرس عباده ويرعاهم ويحفظ أوليائه ويتولاهم" },
  { number: "#25", name: "الحسيب", desc: "المحاسب والمجازي لخلقه على أعمالهم بعدله فلا يظلم عنده أحد" },
  { number: "#26", name: "الحفيظ", desc: "الحافظ لأعمال الخلق العالم بكل شيء" },
  { number: "#27", name: "الحفي", desc: "البرّ اللّطيف الذي يحتفي بعباده" },
  { number: "#28", name: "الحق", desc: "ثابت الوجود حقيقة بلا نكران وثقة بلا نقصان" },
  { number: "#29", name: "المبين", desc: "الواضح الظاهر البين, فكل مافي الوجود دال عليه" },
  { number: "#30", name: "الحكيم", desc: "ذو الفعل السديد والصنع المتقن والقول الحميد " },
  { number: "#31", name: "الحليم", desc: "ذو الصفح والأناة, الذي لا يُعجِّل بالعقوبة والانتقام" },
  { number: "#32", name: "الحميد", desc: "المستحق للحمد والثناء والتمجيد" },
  { number: "#33", name: "الحي", desc: "الباقي على الأبد الذي له كمال الحياة فلا يعتريه نقص" },
  { number: "#34", name: "القيوم", desc: "القَيِّم على كل شيء بالرعاية والولاية" },
  { number: "#35", name: "الخبير", desc: "المدرك لحقيقة كل شيء, المحيط بأخبار كل شيء" },
  { number: "#36", name: "الخالق", desc: "الذي أوجد كل شيء و أبدع كل موجود" },
  { number: "#37", name: "الخلاق", desc: "الموجد لجميع الأشياء من العدم" },
  { number: "#38", name: "الرؤوف", desc: "كثير الرأفة والرحمة والعطف على عباده" },
  { number: "#39", name: "الرزاق", desc: "المعيل لخلقه المتكفل برزقهم" },
  { number: "#40", name: "الرقيب", desc: "المراقب الحافظ الذي يرى ويعلم كل شيء" },
  { number: "#41", name: "السميع", desc: "السامع لأصوات الخلق كلهم" },
  { number: "#42", name: "الشاكر", desc: "الذي يرضى من عباده بالقليل ويكافئهم عليه بالكثير" },
  { number: "#43", name: "الشكور", desc: "الكريم الذي يكافئ بالكثير على اليسير" },
  { number: "#44", name: "الشهيد", desc: "الشاهد الحاضر الذي لا يغيب عن علمه شيء" },
  { number: "#45", name: "الصمد", desc: "الدائم الباقي الذي لا يزول" },
  { number: "#46", name: "العالم", desc: "ذو العلم المطلق الشامل" },
  { number: "#47", name: "العظيم", desc: "جليل القدر ذو العظمة بذاته" },
  { number: "#48", name: "العفو", desc: "كثير العفو والصفح عن خلقه" },
  { number: "#49", name: "العليم", desc: "الذي يعلم ما كان وما يكون والمطلع على كل مكنون" },
  { number: "#50", name: "العلي", desc: "ذو العلو, العالي على كل شيء" },
  { number: "#51", name: "الغفار", desc: "كثير المغفرة والستر على عباده" },
  { number: "#52", name: "الغفور", desc: "كثير المغفرة والستر لعباده" },
  { number: "#53", name: "الغني", desc: "المستغني بذاته عن جميع خلقه" },
  { number: "#54", name: "الفتاح", desc: "الذي يفتح أبواب الخير والرزق والنصر لعباده" },
  { number: "#55", name: "القادر", desc: "المُستطيع ذو القدرة الذي يمكنه فعل كل شيء" },
  { number: "#56", name: "القاهر", desc: "الغالب لخلقه بقدرته وسلطانه" },
  { number: "#57", name: "القدير", desc: "القادر على كل شيء قدرة تامة فلا يعجزه شيء" },
  { number: "#58", name: "القريب", desc: "القريب بعلمه من عباده فيعلم سرهم ونجواهم" },
  { number: "#59", name: "القوي", desc: "ذو القوة المطلقة والقدرة التامة والعزم الشديد" },
  { number: "#60", name: "القهار", desc: "ذو السلطان و السيطرة الكاملة على جميع الأمور" },
  { number: "#61", name: "الكبير", desc: "العظيم الجليل كبير الشأن الكامل في ذاته" },
  { number: "#62", name: "الكريم", desc: "المنعم الجواد كثير الخير والكرم" },
  { number: "#63", name: "اللطيف", desc: "الرفيق البرُّ بخلقه المحسن إليهم برحمته" },
  { number: "#64", name: "المؤمن", desc: "هو الذي أمن عبيده به سبحانه فلا يظلم عنده أحد" },
  { number: "#65", name: "المتعال", desc: "المستعلي على كل شيء بقدرته وقهره" },
  { number: "#66", name: "المتين", desc: "القوي الشديد المقتدر" },
  { number: "#67", name: "المجيب", desc: "الذي يستجيب للداعين ويعطي السائلين" },
  { number: "#68", name: "المجيد", desc: "الموصوف بالمجد والجلال والرفعة والعظمة" },
  { number: "#69", name: "المحيط", desc: "العظيم الذي أحاط علمه وإرادته بالأمور كلها" },
  { number: "#70", name: "المصور", desc: "خالق صور الأشياء وموجدها على صورها التي صورها بها" },
  { number: "#71", name: "المقتدر", desc: "عظيم القدرة كامل القوة لا يقدر عليه أحد" },
  { number: "#72", name: "المقيت", desc: "المقتدر الحفيظ، خالق الأقوات" },
  { number: "#73", name: "المليك", desc: "الملك العظيم القادر, صاحب الملك العزيز الواسع" },
  { number: "#74", name: "المولى", desc: "السيد القائم بتدبير أمور جميع الكائنات وتصريف شؤونهم" },
  { number: "#75", name: "النصير", desc: "الناصر المؤيد الذي لا يخذل أوليائه" },
  { number: "#76", name: "الواحد", desc: "الفرد الذي لا ثاني له, ولا شبيهَ له ولا شَرِيكَ له" },
  { number: "#77", name: "الوارث", desc: "الباقي بعد موت العباد وفناء الخلق" },
  { number: "#78", name: "الواسع", desc: "الجواد واسع الغنى كثير العطاء" },
  { number: "#79", name: "الودود", desc: "المتودد إلى أوليائه وأهل طاعته بالمحبة والمغفرة" },
  { number: "#80", name: "الوكيل", desc: "الكفيل بأرزاق العباد الموكول إليه مصالحهم العالم بأحوالهم" },
  { number: "#81", name: "الولي", desc: "الناصر لعباده وحافظهم والمعين لهم" },
  { number: "#82", name: "الوهاب", desc: "المنعم الكريم المانح" },
  { number: "#83", name: "الجميل", desc: "الجميل في حسن الأفعال والأوصاف، الذي أحسن كل شيء خلقه" },
  { number: "#84", name: "الجواد", desc: "الجود والعطاء والكرم الذي عَمّ بفضله" },
  { number: "#85", name: "الحكم", desc: "القاضي العدل الذي لا رادّ لقضائه" },
  { number: "#86", name: "الحي", desc: "الباقي دائم الوجود الذي له كمال الحياة" },
  { number: "#87", name: "الرب", desc: "السيد الذي يُصلح شؤون خلقه" },
  { number: "#88", name: "الرفيق", desc: "اللطيف والحليم والميسر لعباده" },
  { number: "#89", name: "السبوح", desc: "المنزّه والمُبرأ من كل عيب ونقص" },
  { number: "#90", name: "السيد", desc: "الذي اليه ترجع أمور العباد وبأمره يعملون" },
  { number: "#91", name: "الشافي", desc: " شافي القلوب من أمراضها والابدان من اسقامها" },
  { number: "#92", name: "الطيب", desc: "الطيب في صفاته وفي شرعه واحكامه" },
  { number: "#93", name: "القابض", desc: "يقتر على من يشاء ويوسع على من يشاء" },
  { number: "#94", name: "الباسط", desc: "الذي يوسع الرزق لعباده بجوده ورحمته" },
  { number: "#95", name: "المقدم", desc: "منزّل الأشياء منازلها يقدم ما شاء، ويؤخر ما شاء" },
  { number: "#96", name: "المؤخر", desc: "يؤخر الأشياء ويضعها في مواضعها الصحيحة" },
  { number: "#97", name: "المحسن", desc: "المنعم، والمجمل، وصاحب الفضل والجود" },
  { number: "#98", name: "المعطي", desc: "الذي يعطي كل شيء خلقه، ويتولى أمره، ويرزقه" },
  { number: "#99", name: "المنان", desc: "الجواد الكريم وافر العطايا وعظيم الهبات " },
  
  
];


const QUIZ_POOL = [
  {
    id: 1,
    question: "ما هو الاسم الذي يعني واسع الرحمة بمخلوقاته؟",
    options: ["الملك", "القدوس", "الرحمن", "السلام"],
    correctIndex: 2 
  },
  {
    id: 2,
    question: "الاسم الذي يدل على المُلْك التام والتصرف المطلق هو:",
    options: ["الملك", "المؤمن", "المهيمن", "العزيز"],
    correctIndex: 0 
  },
  {
    id: 3,
    question: "ما معنى اسم الله تعالى (الرحيم)؟",
    options: ["المنزه عن كل عيب", "الموصل رحمته لمن يشاء من عباده", "السالم من النقص", "المنفرد بالعظمة"],
    correctIndex: 1 
  },
  {
    id: 4,
    question: "ماهو اعظم اسم من اسماء الله الحسنى ؟",
    options: ["الله", "الرحمن", "العزيز", "الملك"],
    correctIndex: 0
  },
  {
    id: 5,
    question: "المنعم الجواد كثير الخير والكرم",
    options: ["الكريم", "المجيب", "القيوم", "السلام"],
    correctIndex: 0
  },
  {
    id: 6,
    question: "ما معنى اسم الله تعالى (المتعال)؟",
    options: ["المستعلي على كل شيء بقدرته وقهره", "الذي يستجيب للداعين ويعطي السائلين", "الناصر المؤيد الذي لا يخذل أوليائه", "عظيم القدرة كامل القوة لا يقدر عليه أحد"],
    correctIndex: 0
  },
  {
    id: 7,
    question: "المسيطر القادر الرقيب الشهيد الأمين على كل شيء",
    options: ["المهيمن", "الوارث", "الحكم", "اللطيف"],
    correctIndex: 0
  },
  {
    id: 8,
    question: "المحدث لكل ما سبق به علمه من الخلق",
    options: ["البارئ", "الأعلى", "الحميد", "الحليم"],
    correctIndex: 0
  },
  {
    id: 9,
    question: "المنزه عن كل نقص والمطهر من كل عيب",
    options: ["القدوس", "العليم", "الشاكر", "الرقيب"],
    correctIndex: 0
  },
  {
    id: 10,
    question: "المعيل لخلقه المتكفل برزقهم",
    options: ["الرزاق", "الرقيب", "السلام", "السميع"],
    correctIndex: 0
  },
  {
    id: 11,
    question: "القادر على كل شيء قدرة تامة فلا يعجزه شيء",
    options: ["القدير", "الكريم", "المصور", "المجيد"],
    correctIndex: 0
  },
  {
    id: 12,
    question: "ذو الكبرياء والعلو والعظمة",
    options: ["المتكبر", "المتين", "المجيب", "المجيد"],
    correctIndex: 0
  },
  {
    id: 13,
    question: "الموصوف بالمجد والجلال والرفعة والعظمة",
    options: ["المجيد", "المولى", "المحيط", "المصور"],
    correctIndex: 0
  },
  {
    id: 14,
    question: "خالق صور الأشياء وموجدها على صورها التي صورها بها",
    options: ["المصور", "النصير", "الوارث", "الواسع"],
    correctIndex: 0
  },
  {
    id: 15,
    question: "الباقي بعد موت العباد وفناء الخلق",
    options: ["الوارث", "الودود", "الولي", "الوهاب"],
    correctIndex: 0
  },
  {
    id: 16,
    question: "الكفيل بأرزاق العباد الموكول إليه مصالحهم العالم بأحوالهم",
    options: ["الوكيل", "الحي", "الواحد", "العزيز"],
    correctIndex: 0
  },
  {
    id: 17,
    question: "الذي يوسع الرزق لعباده بجوده ورحمته",
    options: ["الباسط", "الشافي", "الرفيق", "المنان"],
    correctIndex: 0
  },
  {
    id: 18,
    question: "ذو العزة المطلقة والغلبة والقدرة",
    options: ["العزيز", "القاهر", "الفتاح", "الغني"],
    correctIndex: 0
  },
  {
    id: 19,
    question: "الذي يفتح أبواب الخير والرزق والنصر لعباده",
    options: ["الفتاح", "العليم", "القاهر", "الصمد"],
    correctIndex: 0
  },
  {
    id: 20,
    question: "الدائم الباقي الذي لا يزول",
    options: ["الصمد", "الحميد", "القيوم", "الخالق"],
    correctIndex: 0
  },
  {
    id: 21,
    question: "القَيِّم على كل شيء بالرعاية والولاية",
    options: ["القيوم", "السلام", "الرحمن", "الاله"],
    correctIndex: 0
  },
  {
    id: 22,
    question: "السامع لأصوات الخلق كلهم",
    options: ["السميع", "العليم", "الغفور", "الرحيم"],
    correctIndex: 0
  },
  {
    id: 23,
    question: "جليل القدر ذو العظمة بذاته",
    options: ["العظيم", "العلي", "الشهيد", "الرؤوف"],
    correctIndex: 0
  },
  {
    id: 24,
    question: "كثير الرأفة والرحمة والعطف على عباده",
    options: ["الرؤوف", "الخالق", "المصور", "المنان"],
    correctIndex: 0
  },
  {
    id: 25,
    question: "صاحب الجبروت والعظمة القهار للعباد",
    options: ["الجبار", "الحليم", "الحكيم", "الرؤوف"],
    correctIndex: 0
  },
  {
    id: 26,
    question: "الواضح الظاهر البين, فكل مافي الوجود دال عليه",
    options: ["المبين", "الحي", "العليم", "العزيز"],
    correctIndex: 0
  },{
    id: 27,
    question: "المراقب الحافظ الذي يرى ويعلم كل شيء",
    options: ["الرقيب", "الشهيد", "الشكور", "الحميد"],
    correctIndex: 0
  },
  {
    id: 28,
    question: "المستحق للحمد والثناء والتمجيد",
    options: ["الحميد", "الوهاب", "السلام", "الحكيم"],
    correctIndex: 0
  },
  {
    id: 29,
    question: "المعبود بحق فلا إله غيره وكل ما سواه باطل",
    options: ["الإله", "الأول", "الآخر", "الباطن"],
    correctIndex: 0
  },
  {
    id: 30,
    question: "القديم بلا ابتداء الذي ليس قبله شيء",
    options: ["الأول", "الحافظ", "المبين", "الحي"],
    correctIndex: 0
  },
  {
    id: 31,
    question: "الذي ليس دونه شيء, العالم ببواطن الأمور",
    options: ["الباطن", "الحق", "الخبير", "القيوم"],
    correctIndex: 0
  },
  {
    id: 32,
    question: "المبصر الذي يرى جميع ما في الوجود ولا تخفى عليه خافية",
    options: ["البصير", "البَرّ", "الحليم", "الأعلى"],
    correctIndex: 0
  },
  {
    id: 33,
    question: "الذي أوجد كل شيء و أبدع كل موجود",
    options: ["الخالق", "الحسيب", "الحافظ", "الحفيظ"],
    correctIndex: 0
  },
  {
    id: 34,
    question: "المحاسب والمجازي لخلقه على أعمالهم بعدله فلا يظلم عنده أحد",
    options: ["الحسيب", "الغفور", "الخالق", "الغني"],
    correctIndex: 0
  },
  {
    id: 35,
    question: "كثير المغفرة والستر على عباده",
    options: ["الغفار", "الشكور", "العالم", "القاهر"],
    correctIndex: 0
  },
  {
    id: 36,
    question: "السالم من كل عيب ونقص وآفة",
    options: ["السلام", "الحكيم", "الكريم", "الوهاب"],
    correctIndex: 0
  },
  {
    id: 37,
    question: "الرفيق البرُّ بخلقه المحسن إليهم برحمته",
    options: ["اللطيف", "المجيب", "الغفور", "الحكيم"],
    correctIndex: 0
  },
  {
    id: 38,
    question: "المنعم، والمجمل، وصاحب الفضل والجود",
    options: ["المحسن", "الملك", "الجبار", "البارئ"],
    correctIndex: 0
  },
  {
    id: 39,
    question: "ذو الصفح والأناة, الذي لا يُعجِّل بالعقوبة والانتقام",
    options: ["الحليم", "الحي", "الخالق", "العظيم"],
    correctIndex: 0
  },
  {
    id: 40,
    question: "ذو الفعل السديد والصنع المتقن والقول الحميد ",
    options: ["الحكيم", "الودود", "الغفور", "السلام"],
    correctIndex: 0
  },
];

const QUESTIONS_PER_QUIZ = 10;


const heroScrollCue      = document.getElementById('scrollCue');
const menuSection        = document.getElementById('menu');
const cardsSection       = document.getElementById('cards');
const quizSection        = document.getElementById('quiz');
const cardsGrid          = document.getElementById('cardsGrid');

const btnShowCards        = document.getElementById('btnShowCards');
const btnShowQuiz         = document.getElementById('btnShowQuiz');

const quizQuestionEl     = document.getElementById('quizQuestion');
const quizOptionsEl      = document.getElementById('quizOptions');
const quizNextBtn        = document.getElementById('quizNextBtn');
const quizScoreEl        = document.getElementById('quizScore');
const quizTotalEl        = document.getElementById('quizTotal');
const quizProgressFill   = document.getElementById('quizProgressFill');
const quizProgressLabel  = document.getElementById('quizProgressLabel');
const quizCardEl         = document.querySelector('.quiz-card');
const quizResultEl       = document.getElementById('quizResult');
const quizResultScore    = document.getElementById('quizResultScore');
const quizResultMsg      = document.getElementById('quizResultMsg');
const quizRetryBtn       = document.getElementById('quizRetryBtn');


function scrollToEl(el) {
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

heroScrollCue.addEventListener('click', () => scrollToEl(menuSection));

document.querySelectorAll('[data-scroll-to]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-scroll-to');
    scrollToEl(document.getElementById(targetId));
  });
});

function setActiveOption(activeBtn) {
  [btnShowCards, btnShowQuiz].forEach((b) => b.classList.remove('is-active'));
  if (activeBtn) activeBtn.classList.add('is-active');
}

function showCardsSection() {
  cardsSection.hidden = false;
  quizSection.hidden = true;
  cardsSection.classList.add('is-revealing');
  setActiveOption(btnShowCards);
  scrollToEl(cardsSection);
}

function showQuizSection() {
  quizSection.hidden = false;
  cardsSection.hidden = true;
  quizSection.classList.add('is-revealing');
  setActiveOption(btnShowQuiz);
  scrollToEl(quizSection);
  startNewQuiz(); 
}

btnShowCards.addEventListener('click', showCardsSection);
btnShowQuiz.addEventListener('click', showQuizSection);


function renderCards() {
  const fragment = document.createDocumentFragment();

  CARDS_DATA.forEach((card) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'flip-card';
    cardEl.setAttribute('role', 'button');
    cardEl.setAttribute('tabindex', '0');
    cardEl.setAttribute('aria-label', `${card.name} ${card.number}`);

    cardEl.innerHTML = `
      <div class="flip-card__inner">
        <div class="flip-card__face flip-card__face--front">
          <span class="flip-card__number">${card.number}</span>
          <span class="flip-card__name">${card.name}</span>
          <span class="flip-card__hint">انقر للقلب</span>
        </div>
        <div class="flip-card__face flip-card__face--back">
          <span class="flip-card__desc">${card.desc}</span>
        </div>
      </div>
    `;

    const toggleFlip = () => cardEl.classList.toggle('is-flipped');
    cardEl.addEventListener('click', toggleFlip);
    cardEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFlip();
      }
    });

    fragment.appendChild(cardEl);
  });

  cardsGrid.innerHTML = '';
  cardsGrid.appendChild(fragment);
}


let activeQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;


function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}


function pickRandomQuestions(pool, count) {
  return shuffleArray(pool).slice(0, count);
}


function shuffleOptions(question) {
  const indices = [0, 1, 2, 3];
  const shuffledIndices = shuffleArray(indices);

  const options = shuffledIndices.map((originalIdx) => question.options[originalIdx]);
  const correctIndex = shuffledIndices.indexOf(question.correctIndex);

  return { options, correctIndex };
}

function startNewQuiz() {
  activeQuestions = pickRandomQuestions(QUIZ_POOL, QUESTIONS_PER_QUIZ);
  currentQuestionIndex = 0;
  score = 0;
  hasAnswered = false;

  quizTotalEl.textContent = activeQuestions.length;
  quizResultEl.hidden = true;
  quizCardEl.hidden = false;

  renderQuestion();
}

function renderQuestion() {
  const q = activeQuestions[currentQuestionIndex];
  hasAnswered = false;

  
  const { options: shuffledOptions, correctIndex: shuffledCorrectIndex } = shuffleOptions(q);

  quizQuestionEl.textContent = q.question;
  quizScoreEl.textContent = score;
  quizNextBtn.disabled = true;
  quizNextBtn.textContent =
    currentQuestionIndex === activeQuestions.length - 1 ? 'عرض النتيجة' : 'السؤال التالي ←';

  const progressPct = ((currentQuestionIndex + 1) / activeQuestions.length) * 100;
  quizProgressFill.style.width = `${progressPct}%`;
  quizProgressLabel.textContent = `السؤال ${currentQuestionIndex + 1} من ${activeQuestions.length}`;

  quizOptionsEl.innerHTML = '';
  shuffledOptions.forEach((optionText, idx) => {
    const optBtn = document.createElement('button');
    optBtn.className = 'quiz-option';
    optBtn.dataset.option = idx;
    optBtn.innerHTML = `<span class="quiz-option__text">${optionText}</span>`;
    optBtn.addEventListener('click', () => handleOptionClick(optBtn, idx, shuffledCorrectIndex));
    quizOptionsEl.appendChild(optBtn);
  });
}

function handleOptionClick(btn, selectedIndex, correctIndex) {
  if (hasAnswered) return;
  hasAnswered = true;

  const allOptions = quizOptionsEl.querySelectorAll('.quiz-option');

  if (selectedIndex === correctIndex) {
    btn.classList.add('is-correct');
    score += 1;
  } else {
    btn.classList.add('is-incorrect');
    allOptions[correctIndex].classList.add('is-revealed-correct'); // كشف الإجابة الصحيحة للمستخدم
  }

  allOptions.forEach((opt) => (opt.disabled = true));

  quizScoreEl.textContent = score;
  quizNextBtn.disabled = false;
}

function goToNextQuestion() {
  if (!hasAnswered) return;

  if (currentQuestionIndex < activeQuestions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
  } else {
    showQuizResult();
  }
}

function showQuizResult() {
  quizCardEl.hidden = true;
  quizResultEl.hidden = false;

  const total = activeQuestions.length;
  quizResultScore.textContent = `${score} / ${total}`;

  const ratio = score / total;
  let message = '';
  if (ratio === 1) message = 'إجابات مثالية! أحسنت 🎉';
  else if (ratio >= 0.7) message = 'نتيجة رائعة، استمر في التقدم!';
  else if (ratio >= 0.4) message = 'بداية جيدة، يمكنك التحسن أكثر.';
  else message = 'حاول مرة أخرى لتحسين نتيجتك.';

  quizResultMsg.textContent = message;
}

quizNextBtn.addEventListener('click', goToNextQuestion);
quizRetryBtn.addEventListener('click', startNewQuiz);


const navbar = document.getElementById('navbar');
let scrollTicking = false;

function updateNavbarShadow() {
  navbar.classList.toggle('navbar--scrolled', window.scrollY > 12);
  scrollTicking = false;
}

window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(updateNavbarShadow);
    scrollTicking = true;
  }
}, { passive: true });


const THEME_STORAGE_KEY = 'husna-theme-preference';
const themeToggleBtn = document.getElementById('themeToggle');

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme'); 
  }
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
}

themeToggleBtn.addEventListener('click', toggleTheme);


document.addEventListener('DOMContentLoaded', () => {
  renderCards();  
  startNewQuiz();  
});
