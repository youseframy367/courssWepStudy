// Design reminder: Centralized course data keeps the reference content consistent while the UI stays modular.
export type Lesson = {
  id: string;
  title: string;
  explain: string;
  example: string;
};

export type Course = {
  slug: string;
  name: string;
  icon: string;
  title: string;
  linkVideo: string;
  lessons: Lesson[];
};

const icon = (name: string, file = name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${file}-original.svg`;

const lessonSet = (course: string, language: string, sample: string): Lesson[] => [
  {
    id: "introduction",
    title: "Introduction",
    explain: `Welcome to ${course}.\nThis lesson introduces the core ideas you need before writing your first project.\nاقرأ المثال ثم جرّبه بنفسك خطوة بخطوة.`,
    example: sample,
  },
  {
    id: "basics",
    title: "Basics",
    explain: `The basic building blocks of ${course} are simple when you practice them in small pieces.\nاستخدم أسماء واضحة ونظّم الكود دائماً ليكون سهل القراءة.`,
    example: `${sample}\n\n// Keep each step small and readable`,
  },
  {
    id: "practice",
    title: "Practice",
    explain: `Practice turns theory into a useful skill.\nأنشئ مثالاً صغيراً، ثم غيّر قيمة واحدة ولاحظ النتيجة.`,
    example: `// ${course} practice\n${sample}`,
  },
  {
    id: "project",
    title: "Mini project",
    explain: `Build a compact project with ${course}.\nقسّم المشروع إلى أجزاء صغيرة ثم اختبر كل جزء قبل الانتقال للجزء التالي.`,
    example: `// Mini project starter\n${sample}`,
  },
];

export const courses: Course[] = [
  { slug: "html", name: "HTML", icon: icon("html5"), title: "The language for building web pages", linkVideo: "https://www.youtube.com/watch?v=pQN-pnXPaVg", lessons: lessonSet("HTML", "html", "<h1>Hello, world!</h1>\n<p>My first web page.</p>") },
  { slug: "css", name: "CSS", icon: icon("css3"), title: "The language for styling web pages", linkVideo: "https://www.youtube.com/watch?v=1Rs2ND1ryYc", lessons: lessonSet("CSS", "css", "h1 {\n  color: #04AA6D;\n  font-size: 2rem;\n}") },
  { slug: "javascript", name: "JavaScript", icon: icon("javascript"), title: "Programming language of the web", linkVideo: "https://www.youtube.com/watch?v=W6NZfCO5SIk", lessons: lessonSet("JavaScript", "javascript", "const greeting = 'Hello, world!';\nconsole.log(greeting);") },
  { slug: "typescript", name: "TypeScript", icon: icon("typescript"), title: "Typed superset of JavaScript", linkVideo: "https://www.youtube.com/watch?v=gp5H0Vw39yw", lessons: lessonSet("TypeScript", "typescript", "const lesson: string = 'Type-safe code';") },
  { slug: "react", name: "React", icon: icon("react"), title: "A JavaScript library for building UIs", linkVideo: "https://www.youtube.com/watch?v=Ke90Tje7VS0", lessons: lessonSet("React", "jsx", "export default function App() {\n  return <h1>Hello React</h1>;\n}") },
  { slug: "vue", name: "Vue.js", icon: icon("vuejs"), title: "The Progressive JavaScript Framework", linkVideo: "https://www.youtube.com/watch?v=4deVCNJq3qc", lessons: lessonSet("Vue.js", "vue", "<script setup>\nconst title = 'Hello Vue';\n</script>") },
  { slug: "angular", name: "Angular", icon: icon("angularjs"), title: "One framework. Mobile & desktop.", linkVideo: "https://www.youtube.com/watch?v=2OHbjep_WjQ", lessons: lessonSet("Angular", "typescript", "@Component({ selector: 'app-root' })\nexport class AppComponent {}") },
  { slug: "svelte", name: "Svelte", icon: icon("svelte", "svelte"), title: "Cybernetically enhanced web apps", linkVideo: "https://www.youtube.com/watch?v=vhGiGqZ78Rs", lessons: lessonSet("Svelte", "svelte", "<script>\n  let name = 'world';\n</script>") },
  { slug: "tailwind-css", name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", title: "Utility-first CSS framework", linkVideo: "https://www.youtube.com/watch?v=dFgzHOX84xQ", lessons: lessonSet("Tailwind CSS", "html", "<button class=\"rounded bg-green-600 px-4 py-2 text-white\">Save</button>") },
  { slug: "bootstrap", name: "Bootstrap", icon: icon("bootstrap"), title: "The most popular CSS framework", linkVideo: "https://www.youtube.com/watch?v=5GcQtLDGXy8", lessons: lessonSet("Bootstrap", "html", "<button class=\"btn btn-primary\">Save</button>") },
  { slug: "bulma", name: "Bulma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg", title: "Modern CSS framework based on Flexbox", linkVideo: "https://www.youtube.com/watch?v=IiPQYQT2-wg", lessons: lessonSet("Bulma", "html", "<button class=\"button is-primary\">Save</button>") },
  { slug: "material-ui", name: "Material UI", icon: icon("materialui"), title: "React components for faster web dev", linkVideo: "https://www.youtube.com/watch?v=vyJU9efvUtQ", lessons: lessonSet("Material UI", "tsx", "<Button variant=\"contained\">Save</Button>") },
  { slug: "node-js", name: "Node.js", icon: icon("nodejs"), title: "JavaScript runtime built on Chrome V8", linkVideo: "https://www.youtube.com/watch?v=TlB_eWDSMt4", lessons: lessonSet("Node.js", "javascript", "import http from 'node:http';\nhttp.createServer(() => {}).listen(3000);") },
  { slug: "express-js", name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", title: "Fast, unopinionated, minimalist web framework for Node.js", linkVideo: "https://www.youtube.com/watch?v=L72fhGm1tfE", lessons: lessonSet("Express.js", "javascript", "app.get('/', (req, res) => res.send('Hello'));" ) },
  { slug: "django", name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", title: "The web framework for perfectionists with deadlines", linkVideo: "https://www.youtube.com/watch?v=F5mRW0jo-U4", lessons: lessonSet("Django", "python", "def index(request):\n    return HttpResponse('Hello Django')") },
  { slug: "flask", name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", title: "A lightweight WSGI web application framework in Python", linkVideo: "https://www.youtube.com/watch?v=Z1RJmh_OqeA", lessons: lessonSet("Flask", "python", "@app.route('/')\ndef home():\n    return 'Hello Flask'") },
  { slug: "mongodb", name: "MongoDB", icon: icon("mongodb"), title: "The most popular NoSQL database", linkVideo: "https://www.youtube.com/watch?v=ofme2o29ngU", lessons: lessonSet("MongoDB", "javascript", "db.courses.insertOne({ name: 'HTML' })") },
  { slug: "mysql", name: "MySQL", icon: icon("mysql"), title: "The world's most popular open-source database", linkVideo: "https://www.youtube.com/watch?v=7S_tz1z_5bA", lessons: lessonSet("MySQL", "sql", "SELECT * FROM courses;") },
  { slug: "postgresql", name: "PostgreSQL", icon: icon("postgresql"), title: "The world's most advanced open-source database", linkVideo: "https://www.youtube.com/watch?v=qw--VYLpxG4", lessons: lessonSet("PostgreSQL", "sql", "SELECT * FROM courses;") },
  { slug: "firebase", name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", title: "Build apps fast, without managing servers", linkVideo: "https://www.youtube.com/watch?v=9kRgVxULbag", lessons: lessonSet("Firebase", "javascript", "initializeApp(firebaseConfig);") },
  { slug: "php", name: "PHP", icon: icon("php"), title: "A popular general-purpose scripting language", linkVideo: "https://www.youtube.com/watch?v=OK_JCtrrv-c", lessons: lessonSet("PHP", "php", "<?php\necho 'Hello PHP';") },
  { slug: "python", name: "Python", icon: icon("python"), title: "A powerful, easy-to-learn programming language", linkVideo: "https://www.youtube.com/watch?v=rfscVS0vtbw", lessons: lessonSet("Python", "python", "print('Hello, world!')") }
];

export const courseBySlug = Object.fromEntries(courses.map((course) => [course.slug, course])) as Record<string, Course>;
