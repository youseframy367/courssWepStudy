// Design reminder: Each book is an Arabic-first practical curriculum with deliberate pacing, precise English code, and a real next action at every chapter.
export type BookSource = { label: string; href: string };

export type BookChapter = {
  id: string;
  label: string;
  title: string;
  summary: string;
  deepDive: string[];
  keyPoints: string[];
  code: string;
  exercise: string;
  hint: string;
  commonMistake: string;
  miniProjectStep: string;
};

export type StudyBook = {
  slug: string;
  courseSlugs: string[];
  domain: string;
  title: string;
  subtitle: string;
  selectorLabel: string;
  cover: string;
  accent: string;
  estimatedMinutes: number;
  pages: number;
  pdfPath: string;
  description: string;
  outcomes: string[];
  sources: BookSource[];
  chapters: BookChapter[];
};

const frontendSources: BookSource[] = [
  { label: "MDN Learn: HTML", href: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content" },
  { label: "MDN Learn: CSS", href: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics" },
];

export const studyBooks: StudyBook[] = [
  {
    slug: "frontend-foundations",
    courseSlugs: ["html", "css"],
    domain: "Frontend",
    title: "HTML وCSS: من الصفحة الفارغة إلى واجهة متجاوبة",
    subtitle: "منهج تفصيلي لبناء محتوى دلالي، تخطيط مرن، ومكوّنات واجهة قابلة لإعادة الاستخدام",
    selectorLabel: "HTML وCSS",
    cover: "/manus-storage/book-cover-frontend_22c1f0cc.png",
    accent: "#04AA6D",
    estimatedMinutes: 260,
    pages: 8,
    pdfPath: "/books/frontend-foundations-study-guide.pdf",
    description: "هذا الكتاب لا يفترض أنك تحفظ الوسوم أو خصائص CSS. ستبني صفحة كورس مصغّرة خطوة بخطوة، وتفهم في كل خطوة لماذا اخترت العنصر أو القاعدة وليس فقط ماذا كتبت.",
    outcomes: ["تحويل فكرة واجهة إلى HTML دلالي", "بناء تخطيط Flex وGrid متجاوب", "إنشاء نموذج قابل للاستخدام والتنقل بلوحة المفاتيح", "تسليم صفحة صغيرة قابلة للقراءة على الهاتف"],
    sources: frontendSources,
    chapters: [
      {
        id: "web-mental-model",
        label: "الفصل 01 · البداية",
        title: "كيف يفهم المتصفح صفحتك؟",
        summary: "قبل كتابة أي تصميم، افصل بين المحتوى والبنية والشكل. HTML يصف معنى المحتوى، وCSS يقرر مظهره، والمتصفح يقرأ الاثنين ليكوّن صفحة يمكن للإنسان والأدوات المساعدة فهمها.",
        deepDive: ["الصفحة ليست صورة. هي شجرة عناصر؛ لذلك تغيير عنوان من h2 إلى h1 ليس قراراً تجميلياً بل قراراً يغيّر ترتيب المعلومات. ابدأ دائماً بعنوان الصفحة، ثم أقسام واضحة، ثم محتوى كل قسم.", "اتبع دورة قصيرة في كل تجربة: اكتب أقل نسخة تعمل، افتحها في المتصفح، ثم افحص ما ظهر. لا تضف عشر خصائص دفعة واحدة لأنك لن تعرف أي واحدة غيّرت النتيجة."],
        keyPoints: ["ملف HTML يبدأ بالبنية والمعنى", "المتصفح يقرأ العناصر بترتيبها في الملف", "افحص النتيجة بعد تغيير صغير واحد"],
        code: "<!doctype html>\n<html lang=\"ar\" dir=\"rtl\">\n  <head><meta charset=\"utf-8\" /><title>خطة المذاكرة</title></head>\n  <body><h1>خطة المذاكرة الأسبوعية</h1></body>\n</html>",
        exercise: "أنشئ ملفاً جديداً بعنوان study-plan.html وضع فيه عنواناً واحداً ووصفاً قصيراً لخطة مذاكرتك.",
        hint: "جرّب فتح الملف مباشرة في المتصفح قبل إضافة CSS.",
        commonMistake: "استخدام div لكل شيء من البداية؛ سيجعل فهم الصفحة وتعديلها أصعب لاحقاً.",
        miniProjectStep: "أنشئ الهيكل الفارغ لصفحة «مسار اليوم» بعنوان ووصف ومنطقة للمحتوى.",
      },
      {
        id: "semantic-html",
        label: "الفصل 02 · HTML",
        title: "اكتب HTML دلالياً وليس مجرد صناديق",
        summary: "العنصر الصحيح يشرح وظيفته: header للمنطقة الافتتاحية، nav للتنقل، main للمحتوى الأساسي، وbutton لفعل يغيّر شيئاً. بهذه الطريقة تصبح الصفحة أوضح قبل أن تضع عليها أي لون.",
        deepDive: ["اسأل سؤالاً واحداً قبل كل عنصر: ما وظيفة هذا الجزء؟ إذا كان ينقل المستخدم إلى عنوان آخر فهو رابط. إذا كان يحفظ أو يفتح شيئاً في الصفحة فهو زر. إذا كان قطعة مستقلة قابلة للمشاركة فهو article.", "الدلالة تساعد قارئات الشاشة ومحركات البحث، لكنها تساعدك أنت أيضاً. بعد أسبوع ستقرأ هيكل الصفحة بسرعة بدلاً من تتبع عشرات div المتشابهة."],
        keyPoints: ["button للفعل وa للانتقال", "main واحد للمحتوى الرئيسي", "العناوين مرتبة من h1 إلى h2 ثم h3"],
        code: "<header>\n  <nav aria-label=\"التنقل الرئيسي\"><a href=\"#today\">درس اليوم</a></nav>\n</header>\n<main id=\"today\">\n  <article>\n    <h1>مراجعة HTML</h1>\n    <button type=\"button\">علّم الدرس كمكتمل</button>\n  </article>\n</main>",
        exercise: "حوّل قائمة من div فيها عنوان وزر ورابط إلى header وmain وarticle وbutton وa.",
        hint: "لا تغيّر شكل الصفحة الآن؛ غيّر أسماء العناصر فقط ثم تأكد أن كل شيء ما زال يظهر.",
        commonMistake: "وضع button داخل a أو العكس؛ هذا يخلق تفاعلات متداخلة غير صحيحة.",
        miniProjectStep: "أضف header وnav وmain وarticle لصفحة مسار اليوم.",
      },
      {
        id: "content-links-media",
        label: "الفصل 03 · المحتوى",
        title: "روابط وصور وقوائم يمكن الاعتماد عليها",
        summary: "المحتوى الجيد لا يعتمد على الشكل وحده. الرابط يصف وجهته، والصورة تحتاج نصاً بديلاً مفيداً، والقائمة تستخدم ul أو ol عندما تكون العناصر مرتبطة ببعضها.",
        deepDive: ["النص البديل ليس مكاناً لحشو كلمات مفتاحية. اكتب ما الذي تضيفه الصورة للفهم، وإذا كانت زخرفية فقط اجعل alt فارغاً. والرابط الجيد يظل مفهوماً إذا قرأه الشخص بلا سياق.", "عند فتح مصدر خارجي استخدم target=_blank مع rel=noreferrer. لا تجعل المستخدم يخسر مكانه داخل مسار المذاكرة دون أن يعرف."],
        keyPoints: ["اكتب رابطاً يصف الوجهة", "استخدم alt لتفسير قيمة الصورة", "استعمل القوائم للخطوات أو المتطلبات"],
        code: "<ul>\n  <li><a href=\"https://developer.mozilla.org/\" target=\"_blank\" rel=\"noreferrer\">اقرأ مرجع MDN</a></li>\n  <li><img src=\"notes.png\" alt=\"دفتر يحتوي خطة مذاكرة يومية\" /></li>\n</ul>",
        exercise: "اكتب قائمة من ثلاث مصادر مذاكرة، ثم راجع أن كل رابط يمكن فهمه وحده.",
        hint: "تجنب نصوص مثل «اضغط هنا» لأنها لا تشرح إلى أين سيذهب المستخدم.",
        commonMistake: "استخدام اسم الملف أو كلمة image كـ alt؛ هذا لا يساعد القارئ.",
        miniProjectStep: "أضف قائمة مصادر وصورة توضيحية ذات alt مناسب إلى بطاقة الدرس.",
      },
      {
        id: "forms-accessibility",
        label: "الفصل 04 · الإدخال",
        title: "ابنِ نموذجاً يفهمه المستخدم ولوحة المفاتيح",
        summary: "كل input يحتاج label واضحاً، وكل حقل له نوع مناسب. النموذج ليس مجرد مستطيل جميل؛ هو حوار يوضح للمستخدم ما المطلوب منه وما الذي حدث بعد الإرسال.",
        deepDive: ["اجعل label مرتبطاً بالحقل عبر for وid. placeholder يمكن أن يعطي مثالاً، لكنه لا يعوّض اسم الحقل لأن النص يختفي عند الكتابة.", "ابدأ بالتحقق البسيط من المتصفح مثل required وtype=email، ثم أضف رسالة حالة واضحة عند النجاح أو الفشل. اختبر التنقل بزر Tab قبل اعتبار النموذج منتهياً."],
        keyPoints: ["label مرئي لكل حقل", "نوع input يعبّر عن البيانات", "رسالة الحالة تظهر بعد الإرسال"],
        code: "<form>\n  <label for=\"note\">ملاحظة اليوم</label>\n  <input id=\"note\" name=\"note\" required />\n  <button type=\"submit\">حفظ الملاحظة</button>\n</form>",
        exercise: "أنشئ نموذجاً لحفظ ملاحظة يتكون من label وحقل وزر، ثم جرّب الانتقال بين عناصره بزر Tab.",
        hint: "أغلق النموذج عن طريق النقر على الزر، لا بإضافة رابط يؤدي إلى صفحة فارغة.",
        commonMistake: "الاعتماد على placeholder بدلاً من label؛ ستضيع تسمية الحقل فور بدء الكتابة.",
        miniProjectStep: "أضف نموذج ملاحظة قصيراً أسفل محتوى صفحة مسار اليوم.",
      },
      {
        id: "css-cascade",
        label: "الفصل 05 · CSS",
        title: "الـ Cascade: لماذا غلبت قاعدة على قاعدة؟",
        summary: "CSS لا يختار لوناً عشوائياً؛ بل يطبق قواعد حسب الترتيب والتحديد والوراثة. عندما تفهم هذه الثلاثة ستتوقف عن مطاردة المشكلة بإضافة !important.",
        deepDive: ["ابدأ بقواعد عامة للخطوط والألوان، ثم أضف كلاس للمكوّن، ثم حالة محددة عند الحاجة. كلما كان selector أقصر وأوضح أصبح تعديله أسهل.", "الوراثة مفيدة للنصوص مثل color وfont-family، لكنها لا تطبق على كل الخصائص. افحص العنصر في DevTools لترى أي قاعدة فازت ولماذا."],
        keyPoints: ["ترتيب القواعد يؤثر عند تساوي التحديد", "الكلاس أوضح من selector طويل", "لا تستخدم !important كحل أول"],
        code: "body { color: #282a35; font-family: system-ui, sans-serif; }\n.lesson-card { color: #064e3b; }\n.lesson-card__title { color: inherit; }",
        exercise: "أنشئ قاعدة عامة للنص ثم قاعدة خاصة لبطاقة الدرس. غيّر ترتيب القاعدتين ولاحظ متى يتغير اللون.",
        hint: "استعمل DevTools لمعرفة مصدر الخاصية قبل كتابة قاعدة جديدة.",
        commonMistake: "رفع specificity كل مرة بدلاً من إزالة القاعدة المتعارضة أو ترتيبها بوضوح.",
        miniProjectStep: "عرّف ألوان وخطوط صفحة مسار اليوم في بداية ملف CSS.",
      },
      {
        id: "box-layout",
        label: "الفصل 06 · التخطيط",
        title: "فكّر في الصندوق قبل Flex وGrid",
        summary: "كل عنصر له content وpadding وborder وmargin. إذا بدا التصميم أعرض أو أعلى مما توقعت، راجع الصندوق أولاً، ثم اختر Flex للصفوف الصغيرة وGrid للمجموعات ذات الأعمدة.",
        deepDive: ["استخدم box-sizing: border-box عالمياً كي يدخل padding وborder داخل العرض المحدد. بعد ذلك لن تحتاج إلى حسابات مفاجئة عندما تعطي البطاقة width: 100%.", "Flex ممتاز لمحاذاة زر مع عنوان أو عناصر في صف. Grid ممتاز لقائمة بطاقات تتغير من ثلاثة أعمدة إلى عمود واحد. لا تحاول استخدام أحدهما لحل كل شيء."],
        keyPoints: ["border-box يجعل القياسات متوقعة", "Flex للاتجاه الواحد", "Grid للمجموعات ثنائية الأبعاد"],
        code: "* { box-sizing: border-box; }\n.resources { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr)); }\n.resource { padding: 1rem; border: 1px solid #dfe5e3; }",
        exercise: "أنشئ ثلاث بطاقات مصادر تتوزع تلقائياً حسب عرض الشاشة من دون أرقام عرض ثابتة.",
        hint: "ابدأ بـ minmax وauto-fit قبل كتابة media query.",
        commonMistake: "استخدام height ثابت للبطاقات التي تحتوي نصوصاً متغيرة؛ سينتهي بك الأمر بنص مقصوص.",
        miniProjectStep: "حوّل قائمة المصادر إلى شبكة بطاقات مرنة.",
      },
      {
        id: "responsive-components",
        label: "الفصل 07 · التجاوب",
        title: "صمّم للهاتف أولاً ثم وسّع المساحة",
        summary: "التجاوب ليس تصغير نسخة سطح المكتب. رتّب المعلومات حسب الأولوية على شاشة صغيرة، ثم أضف المساحة والأعمدة حين تتوفر. النص القابل للقراءة أهم من ملء كل فراغ.",
        deepDive: ["اجعل المحتوى في عمود يمكن قراءته، والأزرار بحجم لمس مناسب، ولا تخفِ المعلومات المهمة داخل hover. على الشاشات الكبيرة يمكنك وضع القائمة الجانبية بجوار المحتوى بدل وضعها فوقه.", "اختبر في المتصفح على عرض ضيق فعلي. ابحث عن تمرير أفقي، أزرار متداخلة، ونصوص لا يظهر آخرها. هذه أخطاء ترتيب وليست مشكلات تجميل فقط."],
        keyPoints: ["ابدأ بتخطيط عمود واحد", "أضف breakpoints عندما يتغير المحتوى لا بسبب اسم جهاز", "اختبر من دون hover"],
        code: ".page { width: min(100% - 2rem, 72rem); margin-inline: auto; }\n@media (min-width: 48rem) { .lesson-layout { display: grid; grid-template-columns: 16rem 1fr; gap: 2rem; } }",
        exercise: "اجعل بطاقات المصادر عموداً واحداً على الهاتف وثلاثة أعمدة عند اتساع المساحة.",
        hint: "استخدم width: min(...) بدلاً من عرض ثابت للحاوية الرئيسية.",
        commonMistake: "إخفاء الزر أو المحتوى المهم على الهاتف بدلاً من إعادة ترتيبه.",
        miniProjectStep: "رتّب صفحة مسار اليوم في عمود على الهاتف وعمودين على الشاشات الواسعة.",
      },
      {
        id: "frontend-capstone",
        label: "الفصل 08 · مشروع",
        title: "مشروع تطبيقي: صفحة مسار مذاكرة",
        summary: "اجمع ما تعلمته في صفحة واحدة لها هدف واضح: عرض درس اليوم، قائمة مصادر، نموذج ملاحظة، وحالة إنجاز. ابدأ بالنسخة التي تعمل ثم حسّن المسافات والتباين.",
        deepDive: ["اكتب معايير قبول بسيطة قبل الكود: يمكن فتح الصفحة على الهاتف، يمكن قراءة العنوان، يمكن التنقل للروابط، ويمكن كتابة ملاحظة. كل معيار هو اختبار صغير قبل التسليم.", "بعد الانتهاء اكتب ثلاثة أشياء ستعيد تنظيمها. هذه المراجعة تجعل المشروع التالي أسرع، وتمنعك من اعتبار المشروع منتهياً فقط لأنه يبدو جيداً في لقطة شاشة واحدة."],
        keyPoints: ["ابدأ بالمعايير لا بالزينة", "اختبر الإدخال والتنقل", "اكتب ملاحظات التسليم"],
        code: "<main class=\"study-page\">\n  <article class=\"lesson-card\">...</article>\n  <section class=\"resources\">...</section>\n  <form>...</form>\n</main>",
        exercise: "نفّذ المشروع ثم اعرضه على شاشة ضيقة، وسجّل إصلاحين أجريتهما بعد الاختبار.",
        hint: "لا تضف مكتبة واجهات. الهدف هو تثبيت HTML وCSS فقط.",
        commonMistake: "بدء المشروع بتفاصيل الألوان قبل اكتمال البنية والمحتوى.",
        miniProjectStep: "سلّم صفحة مسار اليوم كنسخة أولى واحفظ لقطة لشكلها على الهاتف.",
      },
    ],
  },
  {
    slug: "javascript-core",
    courseSlugs: ["javascript", "typescript", "react", "vue", "angular", "svelte"],
    domain: "JavaScript",
    title: "JavaScript: من القيم إلى واجهة تتفاعل بوضوح",
    subtitle: "منهج تفصيلي لفهم المتغيرات والدوال والمصفوفات وDOM وasync قبل القفز إلى أي Framework",
    selectorLabel: "JavaScript والأساسيات",
    cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=84",
    accent: "#eab308",
    estimatedMinutes: 285,
    pages: 8,
    pdfPath: "/books/javascript-core-study-guide.pdf",
    description: "ستتعلم JavaScript كحلقة واضحة بين إدخال ومعلومة ومعالجة ونتيجة مرئية. الهدف ليس حفظ syntax، بل كتابة منطق يمكن قراءته واختباره وتصحيحه.",
    outcomes: ["تمييز نوع البيانات قبل معالجتها", "كتابة دوال صغيرة ذات مسؤولية واحدة", "تحديث DOM دون فوضى", "التعامل مع async والأخطاء بوضوح"],
    sources: [{ label: "MDN Learn: JavaScript", href: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting" }],
    chapters: [
      { id: "js-runtime", label: "الفصل 01 · البداية", title: "شغّل تجربة صغيرة قبل كتابة تطبيق", summary: "JavaScript تعمل في المتصفح أو الخادم، لكن البداية الأفضل هي مثال صغير يمكن ملاحظته. اكتب قيمة، اعرضها، ثم غيّرها لترى الفرق.", deepDive: ["console.log ليس نهاية التعلم؛ هو نافذة مؤقتة لفهم القيمة. سمِّ القيم بوضوح، ولا تخلط بين نص ورقم أو boolean دون أن تنتبه.", "اجعل كل تجربة قابلة للتكرار. إذا لم تعرف كيف وصلت إلى نتيجة ما، صغّر المثال حتى تفهم كل سطر."], keyPoints: ["ابدأ بملف واحد", "راقب القيم قبل متابعة المنطق", "استعمل أسماء تعبّر عن المعنى"], code: "const studyMinutes = 25;\nconst isBreakTime = false;\nconsole.log({ studyMinutes, isBreakTime });", exercise: "عرّف متغيراً لعنوان درس وآخر لعدد دقائقه، ثم اطبع الاثنين.", hint: "استخدم const ما دامت القيمة لن تتغير.", commonMistake: "تسمية المتغير x أو data بلا سياق؛ سيصبح تتبعه صعباً سريعاً.", miniProjectStep: "أضف بيانات درس اليوم كقيم ثابتة." },
      { id: "js-values", label: "الفصل 02 · القيم", title: "الأنواع والشروط: لا تعالج ما لم تفهمه", summary: "قبل استخدام أي قيمة، اعرف هل هي نص أم رقم أم قائمة أم كائن. الشرط الجيد يعبّر عن قاعدة العمل بوضوح بدلاً من إخفائها داخل تعبير طويل.", deepDive: ["استخدم === للمقارنة الصارمة كي لا يحوّل JavaScript الأنواع بصمت. عند استقبال إدخال من المستخدم، تحقق منه أولاً ثم اختر ما ستفعله في كل حالة.", "اكتب حالة مبكرة للأخطاء. بدلاً من وضع كل المنطق داخل if ضخمة، أوقف الدالة عند البيانات غير الصالحة ثم أكمل المسار الطبيعي."], keyPoints: ["typeof يساعد في الفحص الأولي", "=== يتجنب تحويلات غير مقصودة", "الحالة المبكرة تجعل الدالة أسهل للقراءة"], code: "function formatMinutes(minutes) {\n  if (typeof minutes !== 'number' || minutes < 0) return 'قيمة غير صالحة';\n  return `${minutes} دقيقة`;\n}", exercise: "اكتب دالة تستقبل علامة اختبار وتعيد «ناجح» عند 50 أو أكثر، ورسالة مناسبة للقيم غير الرقمية.", hint: "اختبر 49 و50 و'50' و-1.", commonMistake: "استخدام == ثم التعجب من أن النص '50' تعامل كرقم.", miniProjectStep: "أضف دالة تتحقق من مدة درس اليوم قبل عرضها." },
      { id: "js-functions", label: "الفصل 03 · الدوال", title: "الدالة الصغيرة أسهل في الفهم والاختبار", summary: "الدالة تستقبل مدخلاً وتعيد نتيجة أو تنفذ فعلاً محدداً. عندما تصبح الدالة طويلة، غالباً هي تخفي أكثر من مسؤولية واحدة.", deepDive: ["مرر ما تحتاجه كـ parameter بدلاً من الاعتماد على متغيرات كثيرة خارج الدالة. هذا يجعل الدالة قابلة للاختبار في أي مكان.", "فرق بين دالة تحسب قيمة ودالة تغيّر DOM. افصل الحساب أولاً، ثم استعمل نتيجته في الواجهة. بهذه الطريقة تستطيع اختبار المنطق بلا متصفح."], keyPoints: ["اسم الدالة يبدأ بفعل واضح", "المدخلات ظاهرة في parameters", "افصل الحساب عن العرض"], code: "function completionPercent(done, total) {\n  if (total === 0) return 0;\n  return Math.round((done / total) * 100);\n}\n\nconsole.log(completionPercent(3, 5));", exercise: "اكتب دالة تحسب عدد الدروس المتبقية من total وdone.", hint: "فكّر في حالة total يساوي صفراً.", commonMistake: "تعديل متغير عالمي داخل دالة حساب بسيطة.", miniProjectStep: "احسب نسبة إكمال مسار اليوم بدالة مستقلة." },
      { id: "js-arrays", label: "الفصل 04 · البيانات", title: "المصفوفات والكائنات: نظّم بياناتك قبل عرضها", summary: "القائمة تمثل مجموعة مرتبة مثل الدروس، والكائن يمثل شيئاً له خصائص مثل درس واحد. اختيار البنية الصحيحة يجعل البحث والعرض أسهل.", deepDive: ["استخدم map لإنشاء قائمة جديدة للعرض، filter لاختيار عناصر تطابق شرطاً، وfind للبحث عن عنصر واحد. لا تستخدم map فقط لأنها تبدو مألوفة؛ اخترها عندما تريد تحويل كل عنصر.", "لا تعدّل المصفوفة الأصلية دون قصد. النسخ أو التحديث غير المتغير يجعلك تعرف أين تغيرت البيانات، ويفيدك لاحقاً مع React أو أي واجهة."], keyPoints: ["array للقائمة", "object للكيان الواحد", "map وfilter وfind لها أدوار مختلفة"], code: "const lessons = [\n  { id: 'html', done: true },\n  { id: 'css', done: false },\n];\nconst remaining = lessons.filter((lesson) => !lesson.done);", exercise: "أنشئ قائمة ثلاثة دروس ثم استخرج عناوين الدروس غير المكتملة فقط.", hint: "لا تعدّل done داخل filter.", commonMistake: "استخدام forEach ثم توقع أن يرجع مصفوفة جديدة.", miniProjectStep: "احفظ دروس مسار اليوم في مصفوفة كائنات." },
      { id: "js-dom", label: "الفصل 05 · DOM", title: "حدّث الواجهة من حالة واضحة", summary: "DOM هو تمثيل الصفحة داخل JavaScript. لا تربط كل الأحداث بكتل كود مكررة؛ احتفظ بحالة صغيرة ثم اكتب دالة واحدة ترسمها في الواجهة.", deepDive: ["احصل على العنصر مرة واحدة واحفظه باسم واضح. عند النقر غيّر الحالة، ثم نفّذ render. هذه الحلقة البسيطة تجعل ما تراه مرتبطاً بما تحفظه في الذاكرة.", "استخدم textContent للنص العادي. تجنب إدخال محتوى المستخدم كـ innerHTML لأن ذلك قد يفتح مجالاً لسلوك غير آمن."], keyPoints: ["حالة ثم render", "textContent للنص العادي", "استمع للحدث مرة واحدة"], code: "let completed = 0;\nconst status = document.querySelector('[data-status]');\nfunction render() { status.textContent = `تمت ${completed} دروس`; }\ndocument.querySelector('[data-complete]')?.addEventListener('click', () => { completed += 1; render(); });\nrender();", exercise: "أضف زراً يزيد عداد الدروس المكتملة ويعرض الرقم في عنصر منفصل.", hint: "لا تكتب النص الجديد داخل event listener فقط؛ ضع العرض في render.", commonMistake: "إضافة event listener جديد في كل مرة يتم فيها render.", miniProjectStep: "اجعل زر إكمال درس اليوم يحدث العداد في الصفحة." },
      { id: "js-async", label: "الفصل 06 · الشبكات", title: "async وawait: اطلب البيانات وتعامل مع الفشل", summary: "طلب الشبكة يأخذ وقتاً وقد يفشل. await تجعل التسلسل مقروءاً، لكن يجب أن تضعه داخل try/catch وتفحص response قبل اعتبار الطلب ناجحاً.", deepDive: ["الحالة ليست فقط بيانات أو خطأ. الواجهة تحتاج أيضاً لحالة تحميل، وحالة فارغة، ورسالة نجاح مفهومة. اكتبها قبل ربط endpoint حقيقي.", "لا تضع مفاتيح API في JavaScript يعمل في المتصفح. إذا احتجت سراً، يجب أن يبقى على الخادم ويعود للواجهة ببيانات آمنة فقط."], keyPoints: ["افحص response.ok", "اعرض loading وerror", "الأسرار لا تصل للمتصفح"], code: "async function loadLessons() {\n  try {\n    const response = await fetch('/learning-api/study-domains');\n    if (!response.ok) throw new Error('Request failed');\n    return await response.json();\n  } catch (error) {\n    return { error: 'تعذر تحميل البيانات الآن.' };\n  }\n}", exercise: "اكتب دالة fetch تعرض رسالة عربية عندما يرجع الخادم 404 أو ينقطع الاتصال.", hint: "اختبر بتغيير المسار عمداً مرة واحدة.", commonMistake: "استدعاء response.json من دون فحص حالة الاستجابة أولاً.", miniProjectStep: "أضف حالة تحميل ورسالة خطأ لقائمة المصادر." },
      { id: "js-debug", label: "الفصل 07 · التصحيح", title: "صحّح السبب لا العرض فقط", summary: "الـ bug دليل. ابدأ بإعادة إنتاجه، ثم اقرأ الرسالة، ثم اعزل أصغر جزء يسببه. التخمين وتغيير خمس أسطر في وقت واحد يضيع السبب الحقيقي.", deepDive: ["ضع console.log قصيراً حول المدخلات والنواتج، ثم احذفه بعد فهم المشكلة. استخدم breakpoint عندما تحتاج أن ترى تسلسل التنفيذ خطوة بخطوة.", "اكتب اختباراً بسيطاً للحالات الحدودية. الدالة التي تعمل فقط على المثال السعيد لا تزال غير موثوقة."], keyPoints: ["أعد إنتاج الخطأ", "صغّر الحالة", "اختبر الحدود"], code: "console.assert(completionPercent(1, 2) === 50);\nconsole.assert(completionPercent(0, 0) === 0);", exercise: "أضف حالتي اختبار لدالة إكمالك: قيمة سالبة وإجمالي صفر.", hint: "اكتب ما تتوقعه قبل تشغيل الاختبار.", commonMistake: "إخفاء الخطأ بـ optional chaining في مكان لا يجب أن يكون العنصر فيه مفقوداً.", miniProjectStep: "أضف قائمة اختبارات صغيرة لمنطق عداد الدروس." },
      { id: "js-capstone", label: "الفصل 08 · مشروع", title: "مشروع تطبيقي: قائمة مذاكرة تفاعلية", summary: "ابنِ صفحة فيها قائمة دروس، زر إكمال لكل درس، نسبة تقدم، وحفظ بسيط محلي. الهدف أن ترى البيانات والمنطق والواجهة تعمل كمنظومة واحدة.", deepDive: ["قسّم المشروع إلى state وfunctions للبيانات وrender وevents. لا تبدأ بحفظ localStorage قبل أن يعمل التدفق داخل الذاكرة.", "اكتب سيناريوهات يدوية: لا توجد دروس، درس واحد، جميع الدروس مكتملة، وبيانات تالفة في التخزين. هذه الحالات تفرق بين demo وتطبيق صغير يمكن استخدامه."], keyPoints: ["اكتب الحالات أولاً", "اجعل render مسؤولاً عن العرض", "أضف التخزين بعد النسخة الأولى"], code: "const state = { lessons: [{ id: 'js', title: 'JavaScript', done: false }] };\n// render(state) ثم حدث state عند النقر واحفظه محلياً.", exercise: "نفّذ المشروع واكتب README من خمس خطوات يشرح كيفية تجربته.", hint: "لا تستخدم framework؛ JavaScript الصافي كافٍ لهذا التمرين.", commonMistake: "مزج HTML كبير داخل event handlers بحيث يصبح التعديل مستحيلاً.", miniProjectStep: "سلّم قائمة مذاكرة تفاعلية قابلة للاستخدام على الهاتف." },
    ],
  },
  {
    slug: "backend-with-node",
    courseSlugs: ["node-js", "express-js", "mongodb", "mysql", "postgresql", "firebase", "php", "python", "django", "flask"],
    domain: "Backend",
    title: "Node.js وNest: ابنِ API يمكن الوثوق به",
    subtitle: "منهج تفصيلي يبدأ من HTTP ويصل إلى validation والاختبار والأمان من دون كشف الأسرار",
    selectorLabel: "Node.js وBackend",
    cover: "/manus-storage/book-cover-backend_815d5d6b.png",
    accent: "#4e8cff",
    estimatedMinutes: 300,
    pages: 8,
    pdfPath: "/books/backend-node-nest-study-guide.pdf",
    description: "ستبني API صغيرة لتتبع جلسات المذاكرة. ستتعلم فصل مسؤوليات الـ Controller والـ Service، وتصميم العقد، والتحقق من الإدخال قبل التفكير في قاعدة بيانات أو AI.",
    outcomes: ["فهم request وresponse وstatus code", "تصميم endpoint وعقد بيانات واضح", "فصل المنطق عن طبقة HTTP", "تعامل آمن مع validation والأسرار والأخطاء"],
    sources: [{ label: "Node.js Learn", href: "https://nodejs.org/learn" }, { label: "NestJS Docs", href: "https://docs.nestjs.com/" }],
    chapters: [
      { id: "backend-map", label: "الفصل 01 · الخريطة", title: "ما الذي يحدث بين الطلب والرد؟", summary: "الواجهة ترسل طلباً إلى مسار، والخادم يفهمه ويطبق قاعدة عمل ثم يعيد رداً. لا تبدأ بقاعدة بيانات؛ ابدأ برد ثابت لتتأكد أن الطريق كله يعمل.", deepDive: ["HTTP يعطيك لغة مشتركة: GET لجلب شيء، POST لإنشاء شيء، وحالات مثل 200 و201 و400 و404 تخبر العميل بما حدث. استخدمها بمعنى ثابت داخل مشروعك.", "اكتب اسم المورد في المسار، لا اسم الشاشة. /sessions أو /notes أو /courses أوضح من /dashboardData لأنه يصف البيانات لا تصميم الواجهة."], keyPoints: ["المسار يمثل مورداً", "status code جزء من العقد", "ابدأ برد بسيط قابل للفحص"], code: "GET /api/sessions\n\n200 OK\n{ \"items\": [] }", exercise: "صمّم مسارين لجلب جلسات المذاكرة وإنشاء جلسة جديدة مع status مناسب لكل واحد.", hint: "اكتب مثال response قبل كتابة الكود.", commonMistake: "إرجاع 200 لكل شيء حتى عند خطأ التحقق.", miniProjectStep: "عرّف عقد API لجلسة مذاكرة في ملف README." },
      { id: "node-runtime", label: "الفصل 02 · Node", title: "استخدم Node كبيئة تشغيل لا كمتصفح", summary: "Node يشغّل JavaScript خارج المتصفح، لذلك لا توجد window أو document افتراضياً. بدلاً من ذلك ستتعامل مع ملفات وطلبات HTTP وعمليات غير متزامنة.", deepDive: ["ابدأ من package.json واضح: scripts للتشغيل والفحص والبناء. لا تثبّت مكتبة قبل أن تعرف سببها ومسؤوليتها داخل المشروع.", "متغيرات البيئة مكان الإعدادات التي تختلف بين جهاز وآخر أو يجب أن تبقى سراً. لا تضع .env في Git ولا تمرر أسراراً إلى الواجهة."], keyPoints: ["Node لا يملك DOM", "scripts توثق طريقة التشغيل", "الأسرار داخل البيئة فقط"], code: "import http from 'node:http';\n\nhttp.createServer((request, response) => {\n  response.writeHead(200, { 'content-type': 'application/json' });\n  response.end(JSON.stringify({ status: 'ok' }));\n}).listen(4000);", exercise: "شغّل خادماً صغيراً يرجع { status: 'ok' } ثم افتح المسار في المتصفح.", hint: "تأكد من content-type حتى يظهر الرد كـ JSON واضح.", commonMistake: "نسخ كود يستخدم document أو localStorage داخل ملف Node.", miniProjectStep: "أضف script للتشغيل المحلي ومسار health للـ API." },
      { id: "api-contract", label: "الفصل 03 · العقد", title: "صمّم البيانات قبل الـ endpoint", summary: "العقد يحدد ما يستقبله الخادم وما يعيده عند النجاح أو الخطأ. عندما يكون العقد صغيراً وواضحاً، تصبح الواجهة والاختبارات أبسط ولا تحتاج لتخمين شكل البيانات.", deepDive: ["اكتب الحقول المطلوبة والاختيارية، ونوع كل حقل، وقواعده. على سبيل المثال مدة الجلسة رقم موجب، والعنوان نص قصير، وتاريخ البدء قيمة صالحة.", "لا تعد رسائل أخطاء داخلية أو stack traces للعميل. أعط وصفاً مفهوماً للمستخدم، واحتفظ بالتفصيل التشخيصي داخل الخادم."], keyPoints: ["وثّق request وresponse", "تحقق من المدخلات عند الحد", "الأخطاء لا تكشف تفاصيل داخلية"], code: "POST /api/sessions\n{ \"title\": \"DOM practice\", \"minutes\": 25 }\n\n201 Created\n{ \"id\": \"s_123\", \"title\": \"DOM practice\", \"minutes\": 25 }", exercise: "اكتب response متوقعاً لطلب ينقصه minutes، مع status ورسالة عربية مختصرة.", hint: "لا تستخدم رسالة مثل «حدث خطأ» إذا كنت تعرف ما الحقل المطلوب.", commonMistake: "إرجاع كائن قاعدة البيانات كله بما قد يحتويه من حقول لا يحتاجها العميل.", miniProjectStep: "أضف صفحة توثيق لعقد POST /sessions." },
      { id: "nest-layers", label: "الفصل 04 · Nest", title: "Controller يستقبل وService يفكر", summary: "في Nest، الـ Controller يترجم HTTP إلى استدعاء واضح، والـ Service تحمل قواعد العمل. هذا الفصل يمنع endpoint طويل يصعب اختباره أو إعادة استخدامه.", deepDive: ["ضع التحويل بين البيانات وقواعد الأعمال داخل خدمة لها اسم واضح. عند الحاجة لتغيير مصدر البيانات أو إضافة cache لن تضطر لتعديل كل routes.", "DTO هو عقد المدخلات في الكود. استخدم validation عند حدود الطلب بدلاً من ترك كل Service تتعامل مع بيانات قد تكون ناقصة أو غير صحيحة."], keyPoints: ["Controller رفيع", "Service لقواعد العمل", "DTO يحدد شكل الإدخال"], code: "@Get()\nfindAll() {\n  return this.sessionsService.findAll();\n}\n\n@Injectable()\nexport class SessionsService {\n  findAll() { return []; }\n}", exercise: "انقل منطق فلترة جلسات المذاكرة من controller إلى service.", hint: "اسأل: هل هذا السطر يعرف عن HTTP؟ إن لم يكن، فمكانه غالباً service.", commonMistake: "وضع اتصال قاعدة البيانات والتحقق والـ response داخل method واحدة في controller.", miniProjectStep: "أنشئ SessionsController وSessionsService بمسار GET بسيط." },
      { id: "validation-errors", label: "الفصل 05 · الثقة", title: "Validation وأخطاء يستطيع العميل إصلاحها", summary: "كل إدخال قادم من الشبكة غير موثوق حتى يتحقق الخادم منه. validation ليس إهانة للمستخدم؛ هو حماية للبيانات ورسالة تعليمية واضحة للواجهة.", deepDive: ["تحقق من النوع والحدود والشكل. مثال: minutes رقم صحيح أكبر من صفر، وtitle نص له طول منطقي. لا تحاول إصلاح كل مدخل تلقائياً لأنك قد تخفي خطأ المستخدم.", "استخدم 400 للأخطاء التي يستطيع العميل إصلاحها، و404 للمورد غير الموجود، و500 للأخطاء غير المتوقعة. حافظ على شكل error متسق عبر الـ API."], keyPoints: ["تحقق عند الحد", "رسالة خطأ قابلة للتنفيذ", "شكل ثابت للأخطاء"], code: "export class CreateSessionDto {\n  @IsString()\n  @MinLength(2)\n  title!: string;\n\n  @IsInt()\n  @Min(1)\n  minutes!: number;\n}", exercise: "اكتب ثلاث حالات غير صالحة لـ CreateSessionDto وتوقع رد كل واحدة.", hint: "جرّب نصاً بدلاً من رقم و0 ورقماً صحيحاً.", commonMistake: "توقع أن التحقق في الواجهة يغني عن التحقق في الخادم.", miniProjectStep: "أضف DTO وValidationPipe لمسار إنشاء جلسة." },
      { id: "async-data", label: "الفصل 06 · البيانات", title: "اجعل async صريحاً ولا تبتلع الخطأ", summary: "الملفات وقواعد البيانات والخدمات الخارجية كلها قد تتأخر أو تفشل. انتظر نتيجتها بوضوح، وصمّم ما ستفعله عندما لا تأتي النتيجة كما توقعت.", deepDive: ["استخدم try/catch حول العمليات التي قد ترفض. سجّل التفاصيل المفيدة للخادم، لكن أعد للعميل رسالة آمنة بلا اسم provider أو مفتاح أو stack trace.", "لا تعد بنجاح قبل انتهاء العملية. إذا كان حفظ الجلسة فشل، يجب أن يعرف العميل أنها لم تُنشأ حتى لا يعرض تقدماً وهمياً."], keyPoints: ["await قبل الرد", "catch يعالج الفشل المتوقع", "لا تسرب الأسرار في الرسائل"], code: "async create(input: CreateSessionDto) {\n  try {\n    return await this.repository.save(input);\n  } catch {\n    throw new ServiceUnavailableException('تعذر حفظ الجلسة الآن.');\n  }\n}", exercise: "اكتب سيناريو عندما يفشل مصدر البيانات، وحدد status ورسالة المستخدم.", hint: "المستخدم يحتاج ما يمكنه فعله الآن، لا اسم الاستثناء الداخلي.", commonMistake: "catch فارغ يجعل الطلب يبدو ناجحاً رغم عدم حفظ أي بيانات.", miniProjectStep: "أضف معالجة خطأ واحدة حول طبقة التخزين التجريبية." },
      { id: "testing-security", label: "الفصل 07 · التسليم", title: "اختبر العقد واحمِ الإعدادات", summary: "الـ API الجيد يمكن فحصه من دون واجهة كاملة. اختبر health وvalidation و404 ومسار النجاح، ثم راجع أن مفاتيح الخدمات موجودة في البيئة وليس داخل الكود.", deepDive: ["اختبار الدخان يثبت أن المسار يعمل، لكنه لا يغطي كل منطقك. ابدأ بجدول حالات صغير: إدخال صالح، إدخال ناقص، مسار غير موجود، وخدمة خارجية غير مهيأة.", "للـ AI أو الدفع أو أي خدمة حساسة، يبقى المفتاح على الخادم. واجهة Next أو المتصفح تتكلم مع API فقط ولا ترى السر الحقيقي."], keyPoints: ["اختبر النجاح والفشل", "استعمل .env.example بلا أسرار", "ضع rate limit للخدمات المكلفة"], code: "curl -i http://127.0.0.1:4000/api/health\n# ثم اختبر POST ببيانات صالحة وغير صالحة", exercise: "اكتب checklist من أربع حالات قبل رفع API إلى أي بيئة.", hint: "ضع اختبار 503 عندما لا يكون مفتاح AI مهيأ.", commonMistake: "تسمية متغير AI key بـ NEXT_PUBLIC فيظهر في bundle الواجهة.", miniProjectStep: "اكتب README تشغيلي قصير ومتغيرات البيئة المطلوبة." },
    ],
  },
  {
    slug: "flutter-dart-start",
    courseSlugs: [],
    domain: "Flutter & Dart",
    title: "Dart وFlutter: من اللغة إلى تطبيق مراجعة يومي",
    subtitle: "منهج تفصيلي يربط أساسيات Dart بشجرة Widgets والحالة والشبكات والاختبار",
    selectorLabel: "Dart وFlutter",
    cover: "/manus-storage/book-cover-flutter_2281e9a6.png",
    accent: "#38bdf8",
    estimatedMinutes: 280,
    pages: 8,
    pdfPath: "/books/flutter-dart-study-guide.pdf",
    description: "ستبني فكرة تطبيق مراجعة يومي تدريجياً: بيانات Dart نظيفة، شاشة Widgets، حالة محلية، قائمة مهام، ثم شبكة واختبار بسيط. لا ننتقل لمكتبة إدارة حالة قبل فهم الحالة المحلية.",
    outcomes: ["كتابة Dart بمتغيرات وأنواع ودوال واضحة", "فهم شجرة Widgets", "تغيير state من حدث واحد", "بناء واجهة متجاوبة مع اختبار Widget أولي"],
    sources: [{ label: "Flutter learning pathway", href: "https://docs.flutter.dev/learn/pathway" }, { label: "Learn Dart", href: "https://dart.dev/learn" }],
    chapters: [
      { id: "dart-start", label: "الفصل 01 · Dart", title: "ابدأ باللغة قبل الواجهة", summary: "Flutter يستخدم Dart، لذلك فهم المتغيرات والدوال والقوائم يجعل واجهتك أقل غموضاً. اكتب منطقاً قصيراً يمكنك تشغيله قبل أن تضعه داخل Widget.", deepDive: ["استفد من type inference عندما يكون النوع واضحاً، واكتب النوع صراحة عندما يجعل العقد أوضح. null safety ليست عائقاً؛ هي تنبيه مبكر لما قد لا يكون موجوداً.", "لا تخف من الدوال الصغيرة. دالة تحول دقيقة إلى نص أو تختار مهام اليوم أسهل في الاختبار من كتابة هذا المنطق داخل build."], keyPoints: ["Dart لغة typed", "null safety تخبرك بالحالات الناقصة", "الدوال الصغيرة قابلة للاختبار"], code: "String formatMinutes(int minutes) {\n  return '$minutes دقيقة';\n}\n\nvoid main() {\n  print(formatMinutes(25));\n}", exercise: "اكتب دالة تعيد «جاهز للمراجعة» إذا مر موعد البطاقة.", hint: "اجعل الدالة تستقبل قيمة لا تعتمد على متغير خارجها.", commonMistake: "استخدام dynamic للهروب من النوع بدلاً من فهم الخطأ.", miniProjectStep: "عرّف نموذج RevisionTask فيه عنوان وموعد وحالة إكمال." },
      { id: "dart-models", label: "الفصل 02 · النماذج", title: "نمذج بيانات التطبيق قبل رسمها", summary: "الكلاس لا يجب أن يكون صندوقاً بلا قواعد. اجعله يصف الكيان الحقيقي الذي يحتاجه التطبيق، مثل مهمة مراجعة لها عنوان وموعد وحالة، ثم أنشئ أمثلة قليلة لاختبار الواجهة.", deepDive: ["استخدم constructor واضحاً وخصائص نهائية عندما لا تتغير. عندما تتغير حالة، أنشئ نسخة جديدة أو استخدم مكاناً مخصصاً للحالة بدلاً من تغيير كل شيء بلا تتبع.", "اعرض بيانات حقيقية الشكل مبكراً. النصوص الطويلة والمهام المتأخرة تكشف أخطاء التخطيط قبل أن تربط قاعدة بيانات أو API."], keyPoints: ["النموذج يصف الكيان", "final للقيم الثابتة", "اختبر بيانات قصيرة وطويلة"], code: "class RevisionTask {\n  const RevisionTask({required this.title, required this.dueAt, this.done = false});\n  final String title;\n  final DateTime dueAt;\n  final bool done;\n}", exercise: "أنشئ ثلاث RevisionTask: واحدة اليوم، وأخرى متأخرة، وثالثة مكتملة.", hint: "لا تضع Widget داخل model.", commonMistake: "تمرير Map غير typed في كل مكان بدلاً من إنشاء model واضح.", miniProjectStep: "أنشئ قائمة مهام تجريبية لتطبيق المراجعة." },
      { id: "widgets-tree", label: "الفصل 03 · Widgets", title: "الشاشة شجرة وليس ملفاً واحداً", summary: "ابدأ بـ Scaffold ثم قسم الشاشة إلى Widgets تحمل أسماء وظيفية: عنوان اليوم، قائمة المراجعة، وزر إكمال. الفصل ليس تقسيم ملفات عشوائياً بل تقليل مسؤولية كل جزء.", deepDive: ["StatelessWidget مناسب لما يستقبل بيانات ويعرضها. StatefulWidget مناسب عندما تملك الشاشة حالة محلية متغيرة. ابدأ بالأبسط ولا تضف state إن لم يتغير شيء.", "استخدم const حيث يمكن. ليس الهدف كسب رقم سحري في الأداء؛ بل الإشارة إلى أن هذا الجزء لا يعتمد على بيانات متغيرة."], keyPoints: ["Scaffold هيكل الشاشة", "Stateless للعرض الثابت", "Stateful للتغيير المحلي"], code: "class StudyHome extends StatelessWidget {\n  const StudyHome({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return const Scaffold(body: SafeArea(child: Text('مراجعة اليوم')));\n  }\n}", exercise: "قسّم شاشة فيها عنوان وزر وقائمة إلى ثلاث Widgets مسماة.", hint: "استخرج الجزء الذي تستطيع وصفه بجملة واحدة.", commonMistake: "كتابة شاشة كاملة داخل build واحدة من مئات الأسطر.", miniProjectStep: "أنشئ StudyHome وRevisionList وRevisionCard." },
      { id: "layout-input", label: "الفصل 04 · التخطيط", title: "ابنِ Layout يتحمل النص والحركة", summary: "Column وRow وExpanded أدوات ترتيب لا مجرد حيل للمسافات. اخترها حسب علاقة العناصر، ثم اختبر نصاً عربياً طويلاً وشاشة ضيقة قبل اعتبار البطاقة جاهزة.", deepDive: ["ضع المسافات في Padding وSizedBox واضحين، وليس بأرقام عشوائية في كل عنصر. عندما تحتاج للقائمة التي تمرر، استخدم ListView بدل Column طويلة ستتجاوز الشاشة.", "التفاعل يبدأ من hit target واضح. الزر الذي يغير حالة المهمة يحتاج semantic label ونصاً أو أيقونة مفهومة، لا لوناً وحده."], keyPoints: ["ListView للقوائم القابلة للتمرير", "Expanded يحل ضيق الصف", "اختبر النص الطويل"], code: "ListView.separated(\n  itemCount: tasks.length,\n  separatorBuilder: (_, __) => const SizedBox(height: 12),\n  itemBuilder: (_, index) => RevisionCard(task: tasks[index]),\n)", exercise: "اعرض ثلاث مهام في ListView مع مسافة ثابتة بين البطاقات.", hint: "لا تضع ListView داخل Column بلا Expanded أو حجم محدد.", commonMistake: "إجبار النص على صف واحد ثم قصه من دون أن يلاحظ المستخدم.", miniProjectStep: "اعرض قائمة المهام التجريبية في واجهة التطبيق." },
      { id: "flutter-state", label: "الفصل 05 · الحالة", title: "غيّر حالة واحدة ثم ارسم النتيجة", summary: "قبل Provider أو Bloc، أتقن setState. عند نقر زر الإكمال تغيّر قائمة المهام، ثم تعيد Flutter بناء الجزء المتأثر من الشجرة.", deepDive: ["لا تغيّر قيمة داخل build. build يصف الواجهة للحالة الحالية؛ event handler هو مكان استقبال التفاعل وتحديث الحالة.", "اكتب حالة يمكن وصفها. بدلاً من عشر booleans متفرقة، احتفظ بقائمة مهام وكل مهمة لها done. ستصبح كل عملية مثل الإكمال أو الفلترة واضحة."], keyPoints: ["build لا يغير state", "event يغير state", "الحالة تصف الواقع لا شكل الواجهة"], code: "setState(() {\n  tasks = tasks.map((task) {\n    return task.title == selected.title ? task.copyWith(done: true) : task;\n  }).toList();\n});", exercise: "أضف زر إكمال يغير مهمة واحدة فقط ولا يؤثر على بقية القائمة.", hint: "استخدم معرفاً فريداً لكل مهمة بدلاً من مقارنة العنوان في تطبيق حقيقي.", commonMistake: "استدعاء setState داخل build فيسبب إعادة رسم متواصلة.", miniProjectStep: "اجعل بطاقة المراجعة تتغير إلى مكتملة عند النقر." },
      { id: "flutter-network", label: "الفصل 06 · الشبكة", title: "أظهر التحميل والخطأ والنجاح", summary: "البيانات البعيدة لا تصل فوراً. صمّم ثلاث حالات واضحة: تحميل، نتيجة، وخطأ. لا تعرض صفحة فارغة لأن المستخدم لن يعرف هل التطبيق يعمل أم توقف.", deepDive: ["ضع طلب الشبكة في طبقة أو method مستقلة، ثم اربطه بواجهة لا تعرف تفاصيل HTTP. هذا يقلل تكرار try/catch داخل Widgets.", "عند الخطأ اعرض ما يمكن للمستخدم فعله: إعادة المحاولة أو الرجوع. لا تعرض exception خام أو مفاتيح أو رابط endpoint حساس."], keyPoints: ["loading وdata وerror حالات مختلفة", "افصل الطلب عن Widget", "رسالة الخطأ قابلة للفهم"], code: "Future<List<RevisionTask>> loadTasks() async {\n  final response = await http.get(Uri.parse('https://example.test/tasks'));\n  if (response.statusCode != 200) throw Exception('تعذر تحميل المهام');\n  return parseTasks(response.body);\n}", exercise: "ارسم واجهة loading بسيطة وزر إعادة محاولة للحالة الفاشلة.", hint: "استخدم بيانات ثابتة أولاً حتى تتأكد من الشكل.", commonMistake: "استدعاء Future جديد في كل build بلا حفظه، فيعيد الطلب باستمرار.", miniProjectStep: "أضف شاشة تعرض loading ثم قائمة تجريبية أو رسالة خطأ." },
      { id: "flutter-tests", label: "الفصل 07 · الاختبار", title: "اختبر السلوك الذي يهم المستخدم", summary: "اختبار Widget لا يختبر لوناً فقط؛ يثبت أن النص يظهر وأن النقر يغير الحالة. ابدأ بحالة صغيرة قبل محاولة اختبار التطبيق كله.", deepDive: ["اكتب اسم اختبار يشرح السلوك: tapping complete marks task as done. إذا فشل الاختبار يجب أن تفهم ما انكسر من الاسم نفسه.", "اختبر مساراً عادياً وحالة فارغة وحالة خطأ. هذه الحالات الثلاث تكشف معظم المشاكل المبكرة في التطبيق الصغير."], keyPoints: ["الاختبار يصف السلوك", "ابدأ بوحدة صغيرة", "اختبر الحالة الفارغة"], code: "await tester.pumpWidget(const StudyApp());\nawait tester.tap(find.text('إكمال'));\nawait tester.pump();\nexpect(find.text('مكتملة'), findsOneWidget);", exercise: "اكتب اختباراً يثبت ظهور رسالة فارغة عندما لا توجد مهام.", hint: "لا تعتمد على ترتيب العناصر فقط؛ ابحث عن النص أو المفتاح المناسب.", commonMistake: "اعتبار الاختبار معقداً جداً ثم عدم كتابة أي اختبار.", miniProjectStep: "أضف اختباراً واحداً لزر إكمال المهمة." },
    ],
  },
  {
    slug: "problem-solving",
    courseSlugs: [],
    domain: "Problem Solving",
    title: "حل المسائل: فكّر واختبر واشرح قبل تحسين الحل",
    subtitle: "منهج تفصيلي لتحويل نص المسألة إلى عقد واختبارات وحل يمكن تفسيره في المقابلة",
    selectorLabel: "حل المسائل",
    cover: "/manus-storage/book-cover-problem-solving_8685f65c.png",
    accent: "#f59e0b",
    estimatedMinutes: 190,
    pages: 8,
    pdfPath: "/books/problem-solving-study-guide.pdf",
    description: "دليل عملي للابتعاد عن الحل السريع غير المفهوم. ستتعلم استخراج المدخلات والمخرجات، اختيار أمثلة الحدود، ثم شرح التعقيد قبل التفكير في تحسينات لا تطلبها المسألة.",
    outcomes: ["إعادة صياغة المسألة كعقد", "بناء حالات اختبار قبل الحل", "كتابة حل بسيط قابل للشرح", "تحليل الوقت والذاكرة بصورة واقعية"],
    sources: [{ label: "HackerRank Practice", href: "https://www.hackerrank.com/domains/algorithms" }, { label: "LeetCode Problemset", href: "https://leetcode.com/problemset/" }],
    chapters: [
      { id: "problem-contract", label: "الفصل 01 · الفهم", title: "حوّل نص المسألة إلى عقد", summary: "لا تبدأ بكتابة loop. اكتب ما الذي تستقبله الدالة، ما الذي يجب أن تعيده، وما الحالات غير العادية. إذا لم تستطع وصف ذلك بجملة واضحة، ما زالت المسألة غير مفهومة.", deepDive: ["حدّد نوع كل مدخل وحدوده. هل القائمة قد تكون فارغة؟ هل القيم سالبة؟ هل الترتيب مهم؟ هذه الأسئلة أهم من اسم الخوارزمية في أول دقيقة.", "اكتب مخرجاً متوقعاً لمثال صغير. المثال يثبت أنك فهمت القاعدة، وليس مجرد رقم عشوائي تضعه في الاختبار."], keyPoints: ["المدخلات والمخرجات والحدود", "أعد صياغة السؤال", "اكتب مثالاً صغيراً"], code: "// Input: number[]\n// Output: largest number, or null if the list is empty\nfunction maxValue(values) { /* ... */ }", exercise: "اكتب عقداً لمسألة تعيد أول كلمة تتكرر في قائمة أو null إذا لم توجد.", hint: "اذكر ماذا يحدث للقائمة الفارغة.", commonMistake: "افتراض أن كل مدخل صالح لأن المثال في السؤال كان بسيطاً.", miniProjectStep: "أنشئ قالباً ثابتاً تملأه قبل كل مسألة جديدة." },
      { id: "problem-examples", label: "الفصل 02 · الأمثلة", title: "اختبر الطبيعي والحدودي والمفاجئ", summary: "مثال واحد لا يكفي. اختبر حالة طبيعية، وحالة أصغر مدخل صالح، وحالة قد تكسر افتراضك. هذا يجعلك تكتشف أخطاء المنطق قبل أن تتعقد الخوارزمية.", deepDive: ["عند التعامل مع قائمة، فكّر في الفارغة والعنصر الواحد والتكرارات والقيم السالبة. عند التعامل مع نص، فكّر في المسافة وحروف كبيرة وصغيرة ومدخل فارغ حسب العقد.", "لا تكتب expected بعد تشغيل الحل؛ اكتبه قبل ذلك. وإلا قد تتبع ناتج كودك حتى لو كان خطأ."], keyPoints: ["normal وedge وinvalid", "اكتب expected أولاً", "الحدود تكشف الافتراضات"], code: "console.assert(maxValue([3, 8, 2]) === 8);\nconsole.assert(maxValue([]) === null);\nconsole.assert(maxValue([-4, -1]) === -1);", exercise: "أنشئ خمس حالات لدالة تحسب عدد الأحرف المختلفة في كلمة.", hint: "أضف كلمة فارغة وكلمة تحتوي تكراراً.", commonMistake: "اختبار المثال الموجود في السؤال فقط.", miniProjectStep: "اكتب جدولاً لحالات اختبار أول مسألة لك." },
      { id: "problem-plan", label: "الفصل 03 · الخطة", title: "اكتب خطواتك بكلمات عادية", summary: "الخطة الجيدة تصف كيف سيتحرك الحل قبل أن تستخدم syntax. اشرح هل ستمر على العناصر مرة واحدة، وما الذي ستحتفظ به، ومتى ستعيد النتيجة.", deepDive: ["ابدأ بأبسط حل صحيح حتى لو لم يكن المثال الأسرع. بعد أن ينجح ويُختبر، اسأل هل الحدود الكبيرة تطلب تحسيناً حقيقياً أم لا.", "إذا لم تستطع شرح الخطوة بلا كود، غالباً أنت تحفظ نمطاً لا تفهمه. ارسم مثالاً صغيراً وحرّك المؤشرات أو القيم عليه."], keyPoints: ["حل بسيط أولاً", "اشرح الحالة المتغيرة", "ارسم مثالاً"], code: "// Plan: keep the best value seen so far.\n// For each value: if it is larger, replace best.\n// Return best after the loop.", exercise: "اكتب خطوات مسألة مجموع رقمين قبل كتابة أي كود.", hint: "اذكر متى تتوقف الدالة.", commonMistake: "القفز إلى اسم خوارزمية قبل تحديد ما تحتاجه المسألة.", miniProjectStep: "سجّل خطة مكتوبة لكل مسألة في دفتر المراجعة." },
      { id: "problem-implementation", label: "الفصل 04 · التنفيذ", title: "اكتب حلاً يمكن قراءته بعد أسبوع", summary: "اختر أسماء تصف الدور، وضع الحالات الخاصة في البداية، ثم اجعل loop تركز على قاعدة واحدة. الكود القصير المفهوم أفضل من كود ذكي لا يمكنك شرحه.", deepDive: ["لا تعيد حساب نفس القيمة داخل loop إذا استطعت حفظها. ولكن لا تضف متغيراً إلا إذا كان له معنى واضح في شرحك.", "استخدم return مبكراً للحالات التي تعرف نتيجتها فوراً، مثل قائمة فارغة. هذا يقلل indentation ويجعل المسار الطبيعي واضحاً."], keyPoints: ["أسماء ذات معنى", "حالات خاصة أولاً", "قاعدة واحدة داخل loop"], code: "function maxValue(values) {\n  if (values.length === 0) return null;\n  let best = values[0];\n  for (const value of values) {\n    if (value > best) best = value;\n  }\n  return best;\n}", exercise: "نفّذ خطتك لمسألة مجموع رقمين ثم أعد تسمية أي متغير غامض.", hint: "اقرأ الكود بصوت عالٍ؛ هل تفهم ما يفعله كل اسم؟", commonMistake: "بدء best بـ0 في مسألة قد تحتوي أرقاماً سالبة.", miniProjectStep: "اكتب نسخة سهلة القراءة من حل المسألة قبل أي تحسين." },
      { id: "problem-complexity", label: "الفصل 05 · التحليل", title: "اشرح تكلفة الحل من العمل الذي يفعله", summary: "تعقيد الوقت ليس تعويذة. عدّ تقريباً عدد المرات التي تمر فيها على البيانات، ثم اذكر الذاكرة الإضافية التي تحفظها. اربط الجملة بكودك.", deepDive: ["مرور واحد على قائمة n عنصر عادة O(n). loop داخل loop قد يكون O(n²)، لكن لا تنطق الرقم قبل أن ترى هل الحلقة الداخلية تمر على كل العناصر حقاً.", "الذاكرة الإضافية تعني ما تنشئه خارج المدخل. متغيران لا يكبران مع n، أما Set يخزن عناصر القائمة فينمو مع حجمها."], keyPoints: ["اربط التحليل بالـ loops", "فرق بين وقت وذاكرة", "لا تحسّن بلا سبب"], code: "// maxValue visits each element once: O(n) time.\n// It stores one best value: O(1) extra space.", exercise: "حلل وقت وذاكرة دالة تنسخ العناصر غير المكررة إلى Set.", hint: "اسأل ما الذي يكبر عندما تكبر القائمة.", commonMistake: "قول O(1) لأن الكود قصير رغم وجود loop على كل العناصر.", miniProjectStep: "أضف تعليقاً يشرح التعقيد بجوار كل حل تحفظه." },
      { id: "problem-interview", label: "الفصل 06 · الشرح", title: "قدّم الحل كقصة قصيرة في المقابلة", summary: "الشرح الجيد يبدأ بالتأكد من العقد، ثم الحالات، ثم الخطة، ثم التعقيد. لا تقرأ الكود سطراً سطراً؛ اشرح الفكرة التي تجعله صحيحاً.", deepDive: ["أعلن افتراضاتك إن كان السؤال غامضاً. هذا أفضل من اختيار تفسير مخفي. بعد الحل، امش على مثال واحد لتثبت أن الخطوات تطابق النتيجة.", "إذا وجدت تحسيناً، قل متى يستحقه. نضجك يظهر عندما تعرف أن الحل الأبسط قد يكون الأفضل للحدود الصغيرة."], keyPoints: ["أكد العقد", "امش على مثال", "اذكر السبب والتعقيد"], code: "// " + "I keep the largest value seen so far. Each number is compared once, so the solution is linear.", exercise: "سجّل لنفسك شرحاً مدته دقيقة لمسألة maxValue، ثم اكتب جملة واحدة حسّنت بها الشرح.", hint: "ابدأ بعبارة: «سأتعامل مع القائمة الفارغة أولاً…».", commonMistake: "البدء في الكتابة صامتاً ثم محاولة تبرير الكود بعد الانتهاء.", miniProjectStep: "أضف تسجيل شرح أو ملاحظة نصية بجوار كل مسألة راجعتها." },
    ],
  },
];

export const bookBySlug = Object.fromEntries(studyBooks.map((book) => [book.slug, book])) as Record<string, StudyBook>;
