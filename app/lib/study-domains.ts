// Design reminder: Treat the platform as a practical personal learning hub; use concise Arabic guidance and link to original sources.
export type StudyDomain = {
  slug: "frontend" | "backend" | "flutter" | "algorithms";
  label: string;
  eyebrow: string;
  description: string;
  color: string;
  recommendedCourse: string;
  steps: string[];
  resources: Array<{ name: string; note: string; href: string }>;
  practice: Array<{ name: string; note: string; href: string }>;
};

export const studyDomains: StudyDomain[] = [
  {
    slug: "frontend",
    label: "Frontend Development",
    eyebrow: "ابدأ من واجهة المستخدم",
    description: "ابنِ صفحات سريعة ومفهومة ثم انتقل إلى الواجهات التفاعلية والمشروعات الحقيقية.",
    color: "#04aa6d",
    recommendedCourse: "html",
    steps: ["HTML ومعنى العناصر", "CSS والتخطيط المتجاوب", "JavaScript والتفاعل", "React ومشروع واجهة متكامل"],
    resources: [
      { name: "MDN Learn", note: "مسار منظم لتعلم الويب للمبتدئين", href: "https://developer.mozilla.org/en-US/docs/Learn_web_development" },
      { name: "web.dev Learn CSS", note: "دروس تطبيقية في CSS والتجاوب", href: "https://web.dev/learn/css/" },
      { name: "React Learn", note: "المرجع الرسمي لأساسيات React", href: "https://react.dev/learn" },
    ],
    practice: [
      { name: "Frontend Mentor", note: "حول تصميماً إلى واجهة قابلة للتسليم", href: "https://www.frontendmentor.io/challenges" },
      { name: "freeCodeCamp", note: "تمارين ومشروعات لتثبيت المفاهيم", href: "https://www.freecodecamp.org/learn/" },
    ],
  },
  {
    slug: "backend",
    label: "Backend Development",
    eyebrow: "ابنِ منطق التطبيق",
    description: "تعلّم تصميم الـ API، التعامل مع البيانات، الحماية، والاختبار بدون القفز فوق الأساسيات.",
    color: "#7c4dff",
    recommendedCourse: "javascript",
    steps: ["JavaScript على الخادم", "HTTP وREST APIs", "Node.js وExpress أو NestJS", "قواعد البيانات والمصادقة"],
    resources: [
      { name: "Node.js Learn", note: "دليل Node.js الرسمي للمفاهيم الأساسية", href: "https://nodejs.org/en/learn" },
      { name: "Express", note: "دليل الإطار الخفيف لبناء REST APIs", href: "https://expressjs.com/" },
      { name: "NestJS Docs", note: "توثيق الإطار المنظم المستخدم في هذا الفرع", href: "https://docs.nestjs.com/" },
    ],
    practice: [
      { name: "HackerRank SQL", note: "مسائل SQL مرتبة للتدريب", href: "https://www.hackerrank.com/domains/sql" },
      { name: "Postman Learning", note: "تعلّم اختبار وتوثيق APIs", href: "https://academy.postman.com/" },
    ],
  },
  {
    slug: "flutter",
    label: "Flutter & Dart",
    eyebrow: "طوّر تطبيقات متعددة المنصات",
    description: "امشِ من Dart إلى Widgets ثم إدارة الحالة وبناء تطبيق موبايل حقيقي قابل للتوسع.",
    color: "#087fbd",
    recommendedCourse: "css",
    steps: ["Dart fundamentals", "Widgets والتخطيط", "State management", "Networking واختبار التطبيق"],
    resources: [
      { name: "Flutter Pathway", note: "مسار Flutter الرسمي خطوة بخطوة", href: "https://docs.flutter.dev/learn/pathway" },
      { name: "Learn Dart", note: "دروس Dart الرسمية للمبتدئين", href: "https://dart.dev/learn" },
      { name: "Flutter Resources", note: "Codelabs ووصفات وأمثلة رسمية", href: "https://docs.flutter.dev/reference/learning-resources" },
    ],
    practice: [
      { name: "DartPad", note: "جرّب Dart مباشرة من المتصفح", href: "https://dartpad.dev/" },
      { name: "Flutter Codelabs", note: "ابنِ تطبيقات قصيرة بتوجيه عملي", href: "https://docs.flutter.dev/codelabs" },
    ],
  },
  {
    slug: "algorithms",
    label: "Problem Solving",
    eyebrow: "فكّر قبل أن تكتب الكود",
    description: "كوّن عادة حل المسألة: فهم المدخلات، اختيار البنية، ثم اختبار الحل وتحسينه.",
    color: "#d17c00",
    recommendedCourse: "javascript",
    steps: ["Big O والمنطق الأساسي", "Arrays وStrings", "Stacks وQueues وHash Maps", "Trees وGraphs وتدريب دوري"],
    resources: [
      { name: "HackerRank Algorithms", note: "مسائل متدرجة مع محرر تشغيل", href: "https://www.hackerrank.com/domains/algorithms" },
      { name: "LeetCode Study Plan", note: "خطط تدريب ومراجعة لمسائل متنوعة", href: "https://leetcode.com/studyplan/" },
      { name: "VisuAlgo", note: "شرح بصري لهياكل البيانات والخوارزميات", href: "https://visualgo.net/en" },
    ],
    practice: [
      { name: "Codewars", note: "تحديات قصيرة مناسبة للممارسة اليومية", href: "https://www.codewars.com/" },
      { name: "Exercism", note: "تمارين مع مراجعة مجتمعية للكود", href: "https://exercism.org/" },
    ],
  },
];

export const studyDomainBySlug = (slug: string) => studyDomains.find((domain) => domain.slug === slug) ?? studyDomains[0];
