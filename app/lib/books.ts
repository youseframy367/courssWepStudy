// Design reminder: Books feel like calm, practical field guides with Arabic-first context and precise English code.
export type BookChapter = {
  id: string;
  label: string;
  title: string;
  summary: string;
  keyPoints: string[];
  code: string;
  exercise: string;
};

export type StudyBook = {
  slug: string;
  courseSlug: string;
  domain: string;
  title: string;
  subtitle: string;
  cover: string;
  accent: string;
  estimatedMinutes: number;
  pages: number;
  pdfPath: string;
  description: string;
  outcomes: string[];
  chapters: BookChapter[];
};

export const studyBooks: StudyBook[] = [
  {
    slug: "frontend-foundations",
    courseSlug: "html",
    domain: "Frontend",
    title: "أساسيات الواجهة الأمامية",
    subtitle: "HTML, CSS & JavaScript — من الفكرة إلى واجهة صغيرة متماسكة",
    cover: "/manus-storage/book-cover-frontend_22c1f0cc.png",
    accent: "#04AA6D",
    estimatedMinutes: 95,
    pages: 5,
    pdfPath: "/books/frontend-foundations-study-guide.pdf",
    description: "دليل عملي قصير لبناء صفحة واضحة وقابلة للاستخدام، مع أمثلة صغيرة وتمارين لا تعتمد على نسخ مشاريع ضخمة.",
    outcomes: ["كتابة هيكل HTML دلالي", "تنسيق واجهة مرنة بـ CSS", "ربط تفاعل بسيط بـ JavaScript"],
    chapters: [
      {
        id: "semantic-start",
        label: "الفصل 01",
        title: "ابدأ بالمعنى قبل الشكل",
        summary: "HTML الجيد لا يصف مكان النص فقط؛ بل يوضح وظيفة كل جزء في الصفحة. استخدم header وmain وsection وbutton عندما يطابق العنصر المعنى الحقيقي للتفاعل.",
        keyPoints: ["عنوان واحد رئيسي للصفحة", "الأزرار للأفعال والروابط للانتقال", "النص البديل يشرح قيمة الصورة"],
        code: "<main>\n  <section aria-labelledby=\"course-title\">\n    <h1 id=\"course-title\">خطة أسبوع HTML</h1>\n    <p>ابدأ بدرس قصير ثم جرّب المثال.</p>\n    <button type=\"button\">ابدأ الدرس</button>\n  </section>\n</main>",
        exercise: "حوّل بطاقة كورس مبنية من div فقط إلى عناصر دلالية، ثم جرّب التنقل بينها بزر Tab.",
      },
      {
        id: "layout-system",
        label: "الفصل 02",
        title: "نظام صغير للمسافات والتخطيط",
        summary: "بدلاً من تعديل كل عنصر بمقاسات عشوائية، عرّف مسافات وألواناً أساسية. استخدم Grid للمجموعات وFlex للصف الواحد، ثم اختبر العرض على شاشة ضيقة قبل إضافة الزينة.",
        keyPoints: ["ابدأ من الهاتف ثم وسّع", "اجعل القراءة في عمود محدود العرض", "حافظ على تباين واضح بين النص والخلفية"],
        code: ":root { --space: 16px; --ink: #282A35; --accent: #04AA6D; }\n.cards { display: grid; gap: var(--space); grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }\n.card { padding: calc(var(--space) * 1.25); border: 1px solid #e4e7eb; }",
        exercise: "أنشئ شبكة من ثلاث بطاقات تصبح بطاقة واحدة في الهاتف، ولا تستخدم عرضاً ثابتاً للبطاقة.",
      },
      {
        id: "browser-feedback",
        label: "الفصل 03",
        title: "أضف تفاعلاً يمكن ملاحظته",
        summary: "JavaScript هنا ليس استعراضاً؛ هو حلقة واضحة: حدث من المستخدم، قيمة جديدة في الواجهة، ثم نتيجة قابلة للفحص. لا تخفِ المنطق داخل دوال طويلة.",
        keyPoints: ["سمِّ العناصر بحسب دورها", "اعرض حالة النجاح للمستخدم", "اختبر حالة النقر مرتين لا مرة واحدة"],
        code: "const button = document.querySelector('[data-save]');\nconst status = document.querySelector('[data-status]');\n\nbutton?.addEventListener('click', () => {\n  status.textContent = 'تم حفظ جلسة المذاكرة محلياً.';\n});",
        exercise: "أضف زر إكمال درس يغيّر النص إلى «تمت المراجعة» ويستعيد الحالة عند إعادة فتح الصفحة.",
      },
    ],
  },
  {
    slug: "backend-with-node",
    courseSlug: "node-js",
    domain: "Backend",
    title: "بناء API واضح بـ Node وNest",
    subtitle: "Request → Validation → Service → Response بدون خلط المسؤوليات",
    cover: "/manus-storage/book-cover-backend_815d5d6b.png",
    accent: "#4e8cff",
    estimatedMinutes: 105,
    pages: 5,
    pdfPath: "/books/backend-node-nest-study-guide.pdf",
    description: "كتاب تمهيدي لبناء واجهات API منظمة: كيف تحدد العقد، تتحقق من المدخلات، وتحمي الأسرار قبل ربط أي واجهة أمامية.",
    outcomes: ["فهم دورة الطلب والاستجابة", "فصل Controller عن Service", "إرجاع أخطاء مفهومة وآمنة"],
    chapters: [
      {
        id: "api-contract",
        label: "الفصل 01",
        title: "العقد قبل الكود",
        summary: "قبل كتابة endpoint حدّد ما الذي يرسله العميل، وما الذي سيحصل عليه دائماً عند النجاح أو الفشل. العقد الصغير يقلل التغييرات المفاجئة في الواجهة الأمامية.",
        keyPoints: ["مسار واضح ومفرد", "حالة HTTP مناسبة", "رسالة خطأ بلا أسرار"],
        code: "GET /api/study-domains/backend/challenges?difficulty=beginner\n\n{\n  \"domain\": \"backend\",\n  \"items\": [{ \"title\": \"Build a health endpoint\" }]\n}",
        exercise: "صمّم عقداً لـ POST /notes يوضح الحقول المطلوبة، ومثالاً لرد التحقق الفاشل.",
      },
      {
        id: "nest-boundaries",
        label: "الفصل 02",
        title: "قسّم المسؤوليات في Nest",
        summary: "Controller يستقبل ويرجع البيانات، Service يضع قواعد العمل، وDTO يحدد شكل المدخلات. هذا التقسيم يجعل الاختبار والتعديل أبسط من وضع كل شيء في endpoint واحد.",
        keyPoints: ["لا تضع API keys في المتصفح", "تحقق من DTO عند الحدود", "أعد استخدام الخدمات بين endpoints"],
        code: "@Get(':slug')\nfindOne(@Param('slug') slug: string) {\n  return this.catalogService.findDomain(slug);\n}\n\n@Injectable()\nexport class CatalogService {\n  findDomain(slug: string) { /* curated local data */ }\n}",
        exercise: "انقل منطق اختيار التحديات من Controller إلى Service واكتب ثلاث حالات: مستوى صحيح، مستوى غير صحيح، ومسار غير موجود.",
      },
      {
        id: "safe-integration",
        label: "الفصل 03",
        title: "اربط خدمات خارجية بأمان",
        summary: "أي مفتاح لخدمة AI أو قاعدة بيانات هو مسؤولية الخادم. استخدم متغيرات بيئة في Nest، ومرر إلى الواجهة نتيجة مختصرة فقط بدلاً من تمرير مفتاح أو رسالة داخلية.",
        keyPoints: ["المفتاح لا يصل إلى NEXT_PUBLIC", "أضف حدّاً للطلبات", "وفر رسالة واضحة عند غياب الإعداد"],
        code: "if (!process.env.AI_API_KEY) {\n  throw new ServiceUnavailableException(\n    'AI tutor is not configured on this server yet.',\n  );\n}",
        exercise: "اكتب سيناريو اختبار يثبت أن endpoint المحادثة يرجع 503 مفهوماً عندما لا يكون المفتاح موجوداً.",
      },
    ],
  },
  {
    slug: "flutter-dart-start",
    courseSlug: "typescript",
    domain: "Flutter & Dart",
    title: "Flutter وDart من الشاشة إلى الحالة",
    subtitle: "واجهات صغيرة، Widgets مفهومة، وخطوات اختبار قصيرة",
    cover: "/manus-storage/book-cover-flutter_2281e9a6.png",
    accent: "#38bdf8",
    estimatedMinutes: 85,
    pages: 5,
    pdfPath: "/books/flutter-dart-study-guide.pdf",
    description: "مذكرة عملية لتقسيم واجهة Flutter إلى Widgets واضحة وفهم كيف تتغير الحالة من حدث واحد يمكن اختباره.",
    outcomes: ["فهم شجرة الـ Widgets", "تنظيم state صغير", "بناء شاشة قائمة مهام مصغّرة"],
    chapters: [
      {
        id: "widget-tree",
        label: "الفصل 01",
        title: "فكّر كشجرة Widgets",
        summary: "كل شاشة Flutter هي شجرة عناصر. ابدأ بـ Scaffold، ثم ضع المحتوى في Widgets صغيرة يسهل تسميتها وإعادة استخدامها. لا تجعل Widget واحداً يحمل كل الصفحة.",
        keyPoints: ["Widget واحد له مهمة واحدة", "ابدأ بالهيكل ثم التفاصيل", "استخدم const عندما تكون القيمة ثابتة"],
        code: "class StudyHome extends StatelessWidget {\n  const StudyHome({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return const Scaffold(body: Center(child: Text('جلسة مذاكرة')));\n  }\n}",
        exercise: "قسّم شاشة بها عنوان وزر وقائمة إلى ثلاث Widgets مسمّاة بدلاً من كتابتها داخل build واحدة.",
      },
      {
        id: "small-state",
        label: "الفصل 02",
        title: "غيّر حالة واحدة بوضوح",
        summary: "قبل استخدام أي مكتبة لإدارة الحالة، أتقن الحالة المحلية. عرّف متغيراً واحداً، غيّره في حدث، واعرض النتيجة في جزء محدد من الشاشة.",
        keyPoints: ["اجعل الحالة قابلة للوصف بجملة", "لا تعدّل الواجهة مباشرة", "اختبر الضغط المتكرر على الزر"],
        code: "setState(() {\n  completedLessons += 1;\n});",
        exercise: "أنشئ عداد جلسات مذاكرة لا يسمح بالقيم السالبة، واعرض رسالة عند الوصول للهدف اليومي.",
      },
      {
        id: "mini-app",
        label: "الفصل 03",
        title: "مشروع: قائمة مراجعة يومية",
        summary: "اجمع المهارات في شاشة واحدة: بطاقة لدرس اليوم، زر إكمال، وقائمة بالأيام القادمة. ابدأ ببيانات ثابتة، ثم خطط للتخزين لاحقاً.",
        keyPoints: ["اكتب acceptance criteria قبل الكود", "اختبر شاشة ضيقة", "احتفظ بالواجهة قابلة للقراءة"],
        code: "final today = RevisionCard(title: 'Dart lists', due: DateTime.now());\n// Render the title, then provide a single completion action.",
        exercise: "ارسم ثلاثة حالات للتطبيق: لا يوجد عنصر، عنصر واحد، وثلاثة عناصر متأخرة. اكتب ما الذي سيظهر في كل حالة.",
      },
    ],
  },
  {
    slug: "problem-solving",
    courseSlug: "javascript",
    domain: "Problem Solving",
    title: "حل المسائل بعقلية منظمة",
    subtitle: "فهم المسألة، حالات الاختبار، ثم حل صغير يمكن تفسيره",
    cover: "/manus-storage/book-cover-problem-solving_8685f65c.png",
    accent: "#f59e0b",
    estimatedMinutes: 75,
    pages: 5,
    pdfPath: "/books/problem-solving-study-guide.pdf",
    description: "منهج مبسّط للتحويل من نص المسألة إلى خطوات وأمثلة واختبارات، دون القفز إلى الحل قبل فهم المدخلات والمخرجات.",
    outcomes: ["استخراج شروط المسألة", "كتابة حالات اختبار", "تحسين حل واضح قبل التفكير في السرعة"],
    chapters: [
      {
        id: "read-the-task",
        label: "الفصل 01",
        title: "اقرأ المطلوب كعقد",
        summary: "استخرج المدخلات والمخرجات والحدود من نص المسألة. أعد صياغتها بجملة بسيطة قبل كتابة أي حل؛ إذا لم تستطع شرحها، فلست جاهزاً للكود بعد.",
        keyPoints: ["ما شكل المدخل؟", "ما الذي يجب أن يبقى صحيحاً؟", "ما أصغر مثال صالح؟"],
        code: "// Input: number[]\n// Output: the largest number, or null for an empty list\nfunction maxValue(values) {\n  if (!values.length) return null;\n  return Math.max(...values);\n}",
        exercise: "اكتب عقداً لمسألة تبحث عن أول كلمة مكررة، وحدّد الناتج في حالة عدم وجود تكرار.",
      },
      {
        id: "tests-first",
        label: "الفصل 02",
        title: "اختبر الحواف قبل الحل الجميل",
        summary: "الحل الذي يعمل على مثال واحد ليس دليلاً كافياً. اختبر قائمة فارغة، قيمة مكررة، قيمة سالبة، وترتيباً غير متوقع حسب طبيعة المسألة.",
        keyPoints: ["حالة طبيعية", "حالة حدودية", "حالة قد تكسر الافتراض"],
        code: "console.assert(maxValue([3, 8, 2]) === 8);\nconsole.assert(maxValue([]) === null);\nconsole.assert(maxValue([-4, -1]) === -1);",
        exercise: "أضف ثلاث حالات اختبار لدالة تحسب عدد الأحرف المختلفة في كلمة، واشرح لماذا كل حالة مهمة.",
      },
      {
        id: "explain-solution",
        label: "الفصل 03",
        title: "اشرح الحل قبل تحسينه",
        summary: "اكتب لماذا يعمل الحل، وما تكلفة الوقت والذاكرة بصورة تقريبية. لا تنتقل إلى تحسين أعقد إلا إذا كان هناك حد واضح في المسألة يطلبه.",
        keyPoints: ["وضّح الفكرة لا الأسطر فقط", "اذكر تعقيداً تقريبياً", "احفظ نسخة سهلة القراءة"],
        code: "// We inspect each value once, so time grows linearly with the list length.\n// Extra memory is constant because we only keep the current maximum.",
        exercise: "اشرح حلك لمسألة مجموع رقمين في 60 ثانية كأنك في مقابلة، ثم سجّل أين توقفت في الشرح.",
      },
    ],
  },
];

export const bookBySlug = Object.fromEntries(studyBooks.map((book) => [book.slug, book])) as Record<string, StudyBook>;
