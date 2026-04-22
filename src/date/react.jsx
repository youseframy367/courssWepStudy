const react = [
  {
    id: 1,
    title: "Introduction",
    explain: "مقدمة عن React",
    example:
      '🔹 React هي مكتبة (Library) من JavaScript لبناء واجهات المستخدم (User Interfaces).\n' +
      '🔹 تم تطويرها بواسطة شركة Meta (Facebook سابقًا) سنة 2013.\n' +
      '🔹 بتخليك تبني واجهات تفاعلية بسهولة عن طريق تقسيمها لمكونات صغيرة اسمها Components.\n' +
      '\n' +
      '📘 الفكرة الأساسية:\n' +
      '- React بتستخدم حاجة اسمها Virtual DOM، وده نسخة خفيفة من الـ DOM الحقيقي.\n' +
      '- لما الحالة (state) بتتغير، React بتقارن الفرق بين النسخة القديمة والجديدة، وتحدث بس الأجزاء اللي اتغيّرت.\n' +
      '\n' +
      '🧩 ليه نستخدم React؟\n' +
      '- السرعة في الأداء بفضل الـ Virtual DOM.\n' +
      '- المكونات (Components) تقدر تعيد استخدامها في أكتر من مكان.\n' +
      '- مجتمع كبير ومكتبات جاهزة كتير.\n' +
      '\n' +
      '🛠️ مثال بسيط:\n' +
      'function Welcome() {\n' +
      '  return <h1>مرحبا بك في React!</h1>;\n' +
      '}\n' +
      '\n' +
      '📍 المكون ده بيرجع عنصر JSX (شكل شبيه بـ HTML) بيعرض جملة على الصفحة.\n' +
      'JSX بيتحوّل تلقائيًا إلى JavaScript قبل ما يشتغل في المتصفح.\n'
  },
   {
    id: 2,
    title: "Install React",
    explain: "إزاي تنشئ مشروع React جديد وتبدأ تشتغل عليه",
    example:
      '💡 عندك طريقتين رئيسيتين لإنشاء مشروع React:\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🟣 الطريقة الأولى (الموصى بها): باستخدام Vite\n' +
      '--------------------------------------------\n' +
      '1️⃣ افتح الـ Terminal في المكان اللي عايز تعمل فيه المشروع.\n' +
      '2️⃣ اكتب الأمر ده:\n' +
      '   npm create vite@latest nameProject -- --template react\n' +
      '   → ده بيعمل مشروع React جديد باستخدام أداة Vite (سريعة جدًا).\n' +
      '\n' +
      '3️⃣ بعد ما المشروع يتنشئ، ادخل عليه:\n' +
      '   cd nameProject\n' +
      '\n' +
      '4️⃣ نزّل المكتبات المطلوبة:\n' +
      '   npm install\n' +
      '\n' +
      '5️⃣ شغّل السيرفر المحلي:\n' +
      '   npm run dev\n' +
      '\n' +
      '✨ كده المشروع شغال على لينك زيه كده:\n' +
      '   http://localhost:5173\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🟡 الطريقة التانية (القديمة): باستخدام Create React App\n' +
      '--------------------------------------------\n' +
      '1️⃣ اكتب:\n' +
      '   npx create-react-app nameProject\n' +
      '\n' +
      '2️⃣ بعد ما يخلص، ادخل على فولدر المشروع:\n' +
      '   cd nameProject\n' +
      '\n' +
      '3️⃣ شغّل السيرفر:\n' +
      '   npm start\n' +
      '\n' +
      '🔹 الفرق بين الطريقتين:\n' +
      '- Vite أسرع وأخف في التطوير.\n' +
      '- Create React App أبطأ شوية ومبني على Webpack.\n' +
      '\n' +
      '🎯 النصيحة: استخدم Vite في أي مشروع جديد.\n'
  },
   {
    id: 3,
    title: "Project Structure",
    explain: "شرح هيكل ملفات مشروع React بعد التثبيت",
    example:
      '📁 لما تنشئ مشروع React باستخدام Vite، هيظهرلك فولدر فيه هيكل بالشكل ده تقريبًا:\n' +
      '\n' +
      'nameProject/\n' +
      '│\n' +
      '├── node_modules/        ← فيه كل المكتبات اللي المشروع بيعتمد عليها\n' +
      '├── public/              ← ملفات عامة (زي الصور أو icons أو favicon)\n' +
      '├── src/                 ← هنا الكود الأساسي للتطبيق\n' +
      '│   ├── assets/          ← صور أو ملفات CSS خاصة بالمشروع\n' +
      '│   ├── App.jsx          ← المكون الرئيسي للتطبيق (Root Component)\n' +
      '│   ├── main.jsx         ← نقطة البداية اللي بتربط React بصفحة HTML\n' +
      '│   └── index.css        ← التنسيقات (CSS) العامة\n' +
      '│\n' +
      '├── .gitignore           ← بيحدد الملفات اللي Git يتجاهلها\n' +
      '├── index.html           ← الصفحة الرئيسية اللي React بتركب جواها\n' +
      '├── package.json         ← فيه أسماء الحزم (dependencies) والأوامر (scripts)\n' +
      '├── vite.config.js       ← إعدادات أداة Vite\n' +
      '└── README.md            ← ملف الشرح العام للمشروع\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🧩 شرح أهم الملفات داخل src:\n' +
      '--------------------------------------------\n' +
      '🔹 App.jsx:\n' +
      '- ده المكون الأساسي (Root Component).\n' +
      '- React بيبدأ من هنا لعرض باقي المكونات.\n' +
      '\n' +
      '🔹 main.jsx:\n' +
      '- هو نقطة الدخول اللي بتستخدم ReactDOM علشان تركّب التطبيق في صفحة index.html.\n' +
      '- مثال:\n' +
      '  import React from "react";\n' +
      '  import ReactDOM from "react-dom/client";\n' +
      '  import App from "./App";\n' +
      '  import "./index.css";\n' +
      '\n' +
      '  ReactDOM.createRoot(document.getElementById("root")).render(\n' +
      '    <React.StrictMode>\n' +
      '      <App />\n' +
      '    </React.StrictMode>\n' +
      '  );\n' +
      '\n' +
      '🔹 index.html:\n' +
      '- فيه div اسمه "root" وده المكان اللي React بتركّب فيه التطبيق.\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🎯 نصيحة:\n' +
      '- متعدّلش في index.html كتير.\n' +
      '- خلي شغلك كله داخل src.\n' +
      '- نظّم ملفاتك كويس من الأول: اعمل فولدرات للمكونات (components) والصفحات (pages).\n'
  },
   {
    id: 4,
    title: "JSX",
    explain: "شرح JSX في React",
    example:
      '🔹 JSX اختصار لـ (JavaScript XML)\n' +
      'هو صيغة كتابة بتخليك تكتب كود React بشكل يشبه HTML، لكنه في الحقيقة JavaScript.\n' +
      '\n' +
      '✅ مثال بسيط:\n' +
      'function Hello() {\n' +
      '  return <h1>مرحبا بك في React!</h1>;\n' +
      '}\n' +
      '\n' +
      '📘 هنا الشكل ده مش HTML، لكن React بتحوّله في الخلفية لـ:\n' +
      'React.createElement("h1", null, "مرحبا بك في React!");\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🧩 القواعد الأساسية في JSX:\n' +
      '--------------------------------------------\n' +
      '1️⃣ لازم يكون عندك عنصر واحد فقط في return.\n' +
      'مثلاً:\n' +
      'return (\n' +
      '  <div>\n' +
      '    <h1>عنوان</h1>\n' +
      '    <p>فقرة</p>\n' +
      '  </div>\n' +
      ')\n' +
      'لو كتبت عنصرين جنب بعض بدون أب، هتظهرلك Error.\n' +
      '\n' +
      '2️⃣ لازم تقفل كل العناصر.\n' +
      'مثلاً:\n' +
      '<img /> ✅ صح\n' +
      '<img> ❌ غلط\n' +
      '\n' +
      '3️⃣ تقدر تستخدم الجافاسكربت داخل JSX باستخدام الأقواس { }.\n' +
      'مثلاً:\n' +
      'const name = "Ali";\n' +
      'return <h2>أهلاً يا {name}</h2>;\n' +
      '\n' +
      '4️⃣ بدل كلمة class في HTML، نستخدم className في JSX.\n' +
      'مثلاً:\n' +
      '<div className="box"></div>\n' +
      '\n' +
      '5️⃣ بدل for في label نستخدم htmlFor.\n' +
      'مثلاً:\n' +
      '<label htmlFor="inputName">الاسم</label>\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🧠 ملاحظات مهمة:\n' +
      '- JSX مش لازم يكون في ملف خاص، تقدر تكتبه داخل أي دالة React.\n' +
      '- لازم تعمل import لـ React في بعض الإصدارات القديمة (لكن في Vite مش ضروري).\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🎯 خلاصة:\n' +
      '- JSX بيخليك تكتب HTML داخل JavaScript بطريقة أنظف وأسهل.\n' +
      '- React بتحوّله أوتوماتيكياً لعناصر DOM حقيقية.\n' +
      '- أي كود JavaScript جوّا {} بيتنفّذ ونتيجته بتظهر في الصفحة.\n'
  },
   {
    id: 5,
    title: "Components",
    explain: "المكونات هي الأساس في React، وهي اللي بنبني بيها واجهة المستخدم",
    example:
      '🔹 المكون (Component) هو عبارة عن دالة أو كلاس بيرجع كود JSX.\n' +
      'كل جزء في الصفحة ممكن يتقسم لمكون مستقل قابل لإعادة الاستخدام.\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🟢 أنواع المكونات في React:\n' +
      '--------------------------------------------\n' +
      '1️⃣ Functional Components (الأكثر استخدامًا):\n' +
      '   - هي دالة بترجع JSX.\n' +
      '   - مثال:\n' +
      '     function Welcome() {\n' +
      '       return <h2>أهلاً بك في React!</h2>;\n' +
      '     }\n' +
      '\n' +
      '   - لاستخدامها داخل مكون تاني:\n' +
      '     function App() {\n' +
      '       return (\n' +
      '         <div>\n' +
      '           <Welcome />\n' +
      '         </div>\n' +
      '       );\n' +
      '     }\n' +
      '\n' +
      '2️⃣ Class Components (الطريقة القديمة):\n' +
      '   - كانت تُستخدم قبل ظهور الـ Hooks.\n' +
      '   - مثال:\n' +
      '     class Welcome extends React.Component {\n' +
      '       render() {\n' +
      '         return <h2>أهلاً بك {this.props.name}</h2>;\n' +
      '       }\n' +
      '     }\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🧩 ملاحظات مهمة:\n' +
      '- لازم اسم المكون يبدأ بحرف كبير (Capital letter).\n' +
      '- كل مكون بيرجع عنصر واحد فقط (ممكن يحتوي عناصر داخلية).\n' +
      '- تقدر تعيد استخدام نفس المكون أكتر من مرة في أماكن مختلفة.\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🧠 مثال عملي:\n' +
      'function Header() {\n' +
      '  return <h1>موقعي الشخصي</h1>;\n' +
      '}\n' +
      '\n' +
      'function Footer() {\n' +
      '  return <p>© 2025 - كل الحقوق محفوظة</p>;\n' +
      '}\n' +
      '\n' +
      'function App() {\n' +
      '  return (\n' +
      '    <div>\n' +
      '      <Header />\n' +
      '      <p>ده المحتوى الرئيسي للموقع</p>\n' +
      '      <Footer />\n' +
      '    </div>\n' +
      '  );\n' +
      '}\n' +
      '\n' +
      '📍 النتيجة:\n' +
      '- الصفحة هتعرض العنوان في الأعلى.\n' +
      '- المحتوى في النص.\n' +
      '- والفوتر في الأسفل.\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🎯 الخلاصة:\n' +
      '- المكون هو وحدة البناء الأساسية في React.\n' +
      '- بتقسم المشروع لمكونات صغيرة عشان التنظيم وسهولة الصيانة.\n' +
      '- استخدم دائمًا المكونات الوظيفية (Functional Components) مع الـ Hooks لأنها الأحدث والأخف.\n'
  },
   {
    id: 6,
    title: "Props",
    explain: "Props هي الطريقة اللي من خلالها نبعت بيانات من مكون أب لمكون ابن",
    example:
      '🔹 Props اختصار لـ Properties.\n' +
      '🔹 هي معلومات أو بيانات بنمررها للمكونات علشان تكون ديناميكية وقابلة لإعادة الاستخدام.\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🟢 مثال عملي:\n' +
      'function Welcome(props) {\n' +
      '  return <h2>أهلاً بك، {props.name}!</h2>;\n' +
      '}\n' +
      '\n' +
      'function App() {\n' +
      '  return (\n' +
      '    <div>\n' +
      '      <Welcome name="Ali" />\n' +
      '      <Welcome name="Sara" />\n' +
      '    </div>\n' +
      '  );\n' +
      '}\n' +
      '\n' +
      '📍 هنا، كل مكون Welcome بيستقبل قيمة مختلفة من الأب (App) ويعرض الاسم المناسب.\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🧩 ملاحظات مهمة عن Props:\n' +
      '- Props immutable: لا يمكن تعديلها داخل المكون الابن.\n' +
      '- لو محتاج تعدل بيانات، استخدم State داخل الابن.\n' +
      '- تقدر تبعت أي نوع من البيانات: نصوص، أرقام، boolean، دوال، مصفوفات، أو حتى مكونات أخرى.\n' +
      '\n' +
      '🔹 مثال إرسال دالة كمعلومة (Callback Function):\n' +
      'function Button({ onClick }) {\n' +
      '  return <button onClick={onClick}>اضغط هنا</button>;\n' +
      '}\n' +
      '\n' +
      'function App() {\n' +
      '  function sayHello() {\n' +
      '    alert("مرحبا!");\n' +
      '  }\n' +
      '  return <Button onClick={sayHello} />;\n' +
      '}\n' +
      '\n' +
      '🎯 النتيجة:\n' +
      '- الضغط على الزر هيشغّل الدالة اللي الاب بعتّها للابن.\n'
  },
    {
    id: 7,
    title: "Hooks",
    explain: "Hooks هي الطريقة الحديثة لإدارة الحالة (state) والتأثيرات الجانبية (side effects) في المكونات الوظيفية (Functional Components)",
    example:
      '🔹 قبل Hooks، لو كنت عايز تستخدم State أو lifecycle methods كنت محتاج Class Components.\n' +
      '🔹 Hooks بتخليك تستخدم كل ده بسهولة داخل Functional Components.\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🟢 أهم أنواع Hooks:\n' +
      '--------------------------------------------\n' +
      '1️⃣ useState:\n' +
      '- لإدارة الحالة المحلية داخل المكون.\n' +
      '- مثال:\n' +
      '  import { useState } from "react";\n' +
      '\n' +
      '  function Counter() {\n' +
      '    const [count, setCount] = useState(0);\n' +
      '    return (\n' +
      '      <div>\n' +
      '        <p>العداد: {count}</p>\n' +
      '        <button onClick={() => setCount(count + 1)}>+</button>\n' +
      '      </div>\n' +
      '    );\n' +
      '  }\n' +
      '\n' +
      '2️⃣ useEffect:\n' +
      '- لإضافة تأثيرات جانبية، زي جلب بيانات من API أو التعامل مع DOM.\n' +
      '- مثال:\n' +
      '  import { useEffect } from "react";\n' +
      '\n' +
      '  function Timer() {\n' +
      '    useEffect(() => {\n' +
      '      const timer = setInterval(() => console.log("tick"), 1000);\n' +
      '      return () => clearInterval(timer); // cleanup عند إزالة المكون\n' +
      '    }, []); // [] تعني التنفيذ مرة واحدة بعد الماونت\n' +
      '    return <p>شوف الكونسول كل ثانية</p>;\n' +
      '  }\n' +
      '\n' +
      '3️⃣ useRef:\n' +
      '- للإشارة لعناصر DOM أو تخزين قيمة ثابتة بدون إعادة render.\n' +
      '- مثال:\n' +
      '  import { useRef } from "react";\n' +
      '  function InputFocus() {\n' +
      '    const inputRef = useRef();\n' +
      '    return <input ref={inputRef} placeholder="focus هنا"/>;\n' +
      '  }\n' +
      '\n' +
      '4️⃣ useContext:\n' +
      '- للوصول للـ Context ومشاركة البيانات بين المكونات بدون props drilling.\n' +
      '- مثال:\n' +
      '  const ThemeContext = React.createContext("light");\n' +
      '  function ThemedButton() {\n' +
      '    const theme = useContext(ThemeContext);\n' +
      '    return <button>Theme: {theme}</button>;\n' +
      '  }\n' +
      '\n' +
      '5️⃣ useReducer:\n' +
      '- لإدارة الحالة المعقدة بطريقة مشابهة لـ Redux داخل المكون.\n' +
      '- مثال:\n' +
      '  const [state, dispatch] = useReducer(reducer, initialState);\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🧩 ملاحظات مهمة:\n' +
      '- Hooks لازم تُستخدم بس داخل Functional Components أو Custom Hooks.\n' +
      '- لازم تُستخدم بنفس الترتيب دائمًا (top-level)، متحطهاش داخل loops أو if statements.\n' +
      '- Custom Hooks: تقدر تبني Hook خاص بيك لإعادة استخدام منطق معين.\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🎯 خلاصة:\n' +
      '- useState لإدارة الحالة.\n' +
      '- useEffect للتأثيرات الجانبية.\n' +
      '- useRef للوصول للعناصر أو القيم المستقرة.\n' +
      '- useContext لمشاركة البيانات بين المكونات.\n' +
      '- useReducer للحالات المعقدة.\n' +
      '- Hooks جعلت Functional Components قوية وسهلة الاستخدام بديل Class Components.\n'
  },
   {
    id: 8,
    title: "State",
    explain: "State هي البيانات الداخلية للمكون اللي ممكن تتغير مع الوقت وتؤثر على إعادة العرض (re-render) في React",
    example:
      '🔹 State بتستخدم لتخزين أي بيانات داخل المكون.\n' +
      '🔹 لما تتغير البيانات دي، React بتعمل re-render تلقائيًا لتحديث الواجهة.\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🟢 استخدام useState لإدارة State:\n' +
      '--------------------------------------------\n' +
      'import { useState } from "react";\n' +
      '\n' +
      'function Counter() {\n' +
      '  // تعريف الحالة: count = القيمة الحالية، setCount = دالة لتغيير القيمة\n' +
      '  const [count, setCount] = useState(0);\n' +
      '\n' +
      '  return (\n' +
      '    <div>\n' +
      '      <p>العداد: {count}</p>\n' +
      '      <button onClick={() => setCount(count + 1)}>زيادة</button>\n' +
      '      <button onClick={() => setCount(count - 1)}>نقصان</button>\n' +
      '      <button onClick={() => setCount(0)}>إعادة تعيين</button>\n' +
      '    </div>\n' +
      '  );\n' +
      '}\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🧩 ملاحظات مهمة عن State:\n' +
      '- State متغيرة (mutable) داخل المكون، لكن لا يمكن تعديلها مباشرة.\n' +
      '  لازم تستخدم الدالة اللي جايه من useState (مثال: setCount).\n' +
      '- يمكن أن تكون State أي نوع: رقم، نص، Boolean، مصفوفة، كائن.\n' +
      '- كل مرة تغير قيمة State، React تعيد عرض المكون لتحديث الواجهة.\n' +
      '- يمكن استخدام عدة حالات State في نفس المكون.\n' +
      '\n' +
      '🔹 مثال مع أكثر من State:\n' +
      'function Profile() {\n' +
      '  const [name, setName] = useState("Ali");\n' +
      '  const [age, setAge] = useState(25);\n' +
      '\n' +
      '  return (\n' +
      '    <div>\n' +
      '      <p>الاسم: {name}</p>\n' +
      '      <p>العمر: {age}</p>\n' +
      '      <button onClick={() => setAge(age + 1)}>تكبير العمر</button>\n' +
      '    </div>\n' +
      '  );\n' +
      '}\n' +
      '\n' +
      '🎯 خلاصة:\n' +
      '- State هي قلب المكون الديناميكي.\n' +
      '- useState هو Hook لإدارة State داخل Functional Components.\n' +
      '- لا تعدل State مباشرةً، استخدم الدوال اللي Hook بيقدّمها.\n'
  },
   {
    id: 9,
    title: "useEffect",
    explain: "useEffect هو Hook لإضافة تأثيرات جانبية (side effects) داخل المكونات الوظيفية",
    example:
      '🔹 قبل Hooks، كنا نستخدم Lifecycle Methods في Class Components.\n' +
      '🔹 useEffect بيحل محل componentDidMount, componentDidUpdate, و componentWillUnmount.\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🟢 الاستخدام الأساسي:\n' +
      '--------------------------------------------\n' +
      'import { useEffect, useState } from "react";\n' +
      '\n' +
      'function Timer() {\n' +
      '  const [seconds, setSeconds] = useState(0);\n' +
      '\n' +
      '  useEffect(() => {\n' +
      '    // الكود ده هيتنفذ بعد ما المكون يركب (mount)\n' +
      '    const interval = setInterval(() => {\n' +
      '      setSeconds(prev => prev + 1);\n' +
      '    }, 1000);\n' +
      '\n' +
      '    // cleanup: الكود ده هيتنفذ قبل إزالة المكون\n' +
      '    return () => clearInterval(interval);\n' +
      '  }, []); // [] يعني التنفيذ مرة واحدة فقط بعد الماونت\n' +
      '\n' +
      '  return <p>مرّت {seconds} ثانية منذ تحميل الصفحة</p>;\n' +
      '}\n' +
      '\n' +
      '--------------------------------------------\n' +
      '🧩 ملاحظات مهمة:\n' +
      '- المصفوفة الثانية [] تتحكم في وقت تشغيل useEffect:\n' +
      '  - [] → مرة واحدة بعد الماونت\n' +
      '  - [var1, var2] → كل مرة تتغير var1 أو var2\n' +
      '  - بدون [] → كل مرة يحصل render\n' +
      '- استخدم cleanup لإيقاف أي مؤقتات أو subscriptions.\n' +
      '- يمكن استخدام أكثر من useEffect في نفس المكون.\n' +
      '\n' +
      '🎯 خلاصة:\n' +
      '- useEffect لإدارة التأثيرات الجانبية.\n' +
      '- يتحكم في تنفيذ الكود بعد الماونت، بعد تحديث القيم، أو قبل إزالة المكون.\n' +
      '- مهم جدًا عند التعامل مع API، مؤقتات، أو DOM مباشر.\n'
  },
  {
  "id": 10,
  "title": "useContext",
  "explain": 
    "`useContext` هو Hook في React بيسمحلك توصل لقيمة Context مباشرة جوه أي مكون (Component) بدون ما تحتاج تمرر Props لكل مستوى.\n" +
    "Context بيُستخدم لمشاركة بيانات أو حالة (state) بين مكونات مختلفة في شجرة المكونات بدون تعقيد تمرير Props.\n" +
    "الخطوات الأساسية:\n" +
    "1- إنشاء Context باستخدام React.createContext()\n" +
    "2- تغليف المكونات اللي عايزها تستخدم القيمة دي بالـ Provider\n" +
    "3- استخدام useContext داخل أي مكون للوصول للقيمة.\n",
  "example":
    "1- إنشاء Context وتغليف المكونات\n"+
    "import React, { createContext, useContext } from 'react';\n"+
    "\n"+
    "// إنشاء Context\n"+
    "const ThemeContext = createContext('light');\n"+
    "\n"+
    "// المكون الرئيسي\n"+
    "function App() {\n"+
    "  return (\n"+
    "    <ThemeContext.Provider value='dark'>\n"+
    "      <Toolbar />\n"+
    "    </ThemeContext.Provider>\n"+
    "  );\n"+
    "}\n"+
    "\n"+
    "// مكون فرعي يستخدم useContext\n"+
    "function Toolbar() {\n"+
    "  return <ThemedButton />;\n"+
    "}\n"+
    "\n"+
    "function ThemedButton() {\n"+
    "  const theme = useContext(ThemeContext);\n"+
    "  return <button>Current theme: {theme}</button>;\n"+
    "}"
},
{
  "id": 11,
  "title": "useRef",
  "explain": 
    "`useRef` هو Hook في React بيسمحلك تحتفظ بقيمة بين الريندرات بدون ما يعيد المكون رسم نفسه.\n" +
    "ممكن يستخدم لتخزين بيانات أو للوصول لعناصر DOM مباشرة.\n" +
    "الاستخدامات الأساسية:\n" +
    "1- الاحتفاظ بقيم بين الريندرات بدون إعادة عرض المكون.\n" +
    "2- الوصول لعناصر DOM (زي التركيز على input).\n" +
    "الخاصية المهمة: القيمة المخزنة موجودة داخل `ref.current`.\n",
  "example":
    "1- الاحتفاظ بالعداد بين الريندرات\n"+
    "import { useRef } from 'react';\n"+
    "\n"+
    "function Timer() {\n"+
    "  const count = useRef(0);\n"+
    "  const increment = () => {\n"+
    "    count.current += 1;\n"+
    "    console.log(count.current);\n"+
    "  };\n"+
    "  return <button onClick={increment}>زيادة</button>;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "2- الوصول لعناصر DOM مباشرة\n"+
    "import { useRef } from 'react';\n"+
    "\n"+
    "function InputFocus() {\n"+
    "  const inputRef = useRef();\n"+
    "  const focusInput = () => {\n"+
    "    inputRef.current.focus();\n"+
    "  };\n"+
    "  return (\n"+
    "    <div>\n"+
    "      <input ref={inputRef} placeholder='اكتب هنا...' />\n"+
    "      <button onClick={focusInput}>ركز على النص</button>\n"+
    "    </div>\n"+
    "  );\n"+
    "}"
},
{
  "id": 12,
  "title": "useReducer",
  "explain": 
    "`useReducer` هو Hook في React لإدارة الحالة (state) بطريقة منظمة، خصوصًا لو الحالة معقدة أو فيها أكثر من قيمة.\n" +
    "بيعتمد على دالة `reducer` لتحديد إزاي تتغير الحالة بناءً على `action`.\n" +
    "التركيب الأساسي:\n" +
    "const [state, dispatch] = useReducer(reducer, initialState);\n" +
    "- state: الحالة الحالية.\n" +
    "- dispatch: دالة لإرسال action.\n" +
    "- reducer: دالة تاخد الحالة الحالية وaction وتحدد الحالة الجديدة.\n" +
    "- initialState: القيمة الابتدائية للحالة.\n",
  "example":
    "1- مثال عداد بسيط\n"+
    "import { useReducer } from 'react';\n"+
    "\n"+
    "// دالة reducer\n"+
    "function reducer(state, action) {\n"+
    "  switch(action.type) {\n"+
    "    case 'increment':\n"+
    "      return { count: state.count + 1 };\n"+
    "    case 'decrement':\n"+
    "      return { count: state.count - 1 };\n"+
    "    default:\n"+
    "      return state;\n"+
    "  }\n"+
    "}\n"+
    "\n"+
    "function Counter() {\n"+
    "  const [state, dispatch] = useReducer(reducer, { count: 0 });\n"+
    "\n"+
    "  return (\n"+
    "    <div>\n"+
    "      <p>العدد: {state.count}</p>\n"+
    "      <button onClick={() => dispatch({ type: 'increment' })}>زيادة</button>\n"+
    "      <button onClick={() => dispatch({ type: 'decrement' })}>نقصان</button>\n"+
    "    </div>\n"+
    "  );\n"+
    "}"
},
{
  "id": 13,
  "title": "fetch-multiple-ways",
  "explain": 
    "في React نقدر نجلب بيانات من API بعدة طرق:\n" +
    "1- fetch + then\n" +
    "2- fetch + async/await\n" +
    "3- مكتبة Axios\n" +
    "بنستخدم useState لتخزين البيانات وحالة التحميل و الأخطاء.\n" +
    "بنستخدم useEffect علشان نجلب البيانات عند تحميل المكون لأول مرة.\n",
  "example":
    "1- طريقة fetch + then\n"+
    "import React, { useState, useEffect } from 'react';\n"+
    "\n"+
    "function UsersThen() {\n"+
    "  const [users, setUsers] = useState([]);\n"+
    "  const [loading, setLoading] = useState(true);\n"+
    "  const [error, setError] = useState(null);\n"+
    "\n"+
    "  useEffect(() => {\n"+
    "    fetch('https://jsonplaceholder.typicode.com/users')\n"+
    "      .then(res => {\n"+
    "        if (!res.ok) throw new Error('خطأ في التحميل');\n"+
    "        return res.json();\n"+
    "      })\n"+
    "      .then(data => {\n"+
    "        setUsers(data);\n"+
    "        setLoading(false);\n"+
    "      })\n"+
    "      .catch(err => {\n"+
    "        setError(err.message);\n"+
    "        setLoading(false);\n"+
    "      });\n"+
    "  }, []);\n"+
    "\n"+
    "  if (loading) return <p>جارٍ التحميل...</p>;\n"+
    "  if (error) return <p>حدث خطأ: {error}</p>;\n"+
    "\n"+
    "  return <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "2- طريقة fetch + async/await\n"+
    "import React, { useState, useEffect } from 'react';\n"+
    "\n"+
    "function UsersAsync() {\n"+
    "  const [users, setUsers] = useState([]);\n"+
    "  const [loading, setLoading] = useState(true);\n"+
    "  const [error, setError] = useState(null);\n"+
    "\n"+
    "  useEffect(() => {\n"+
    "    const fetchData = async () => {\n"+
    "      try {\n"+
    "        const res = await fetch('https://jsonplaceholder.typicode.com/users');\n"+
    "        if (!res.ok) throw new Error('خطأ في التحميل');\n"+
    "        const data = await res.json();\n"+
    "        setUsers(data);\n"+
    "      } catch (err) {\n"+
    "        setError(err.message);\n"+
    "      } finally {\n"+
    "        setLoading(false);\n"+
    "      }\n"+
    "    };\n"+
    "    fetchData();\n"+
    "  }, []);\n"+
    "\n"+
    "  if (loading) return <p>جارٍ التحميل...</p>;\n"+
    "  if (error) return <p>حدث خطأ: {error}</p>;\n"+
    "\n"+
    "  return <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "3- طريقة استخدام Axios\n\n"+
    "هنزل المكتبه الاول \n"+
    "npm install axios\n\n"+

    "import React, { useState, useEffect } from 'react';\n"+
    "import axios from 'axios';\n"+
    "\n"+
    "function UsersAxios() {\n"+
    "  const [users, setUsers] = useState([]);\n"+
    "  const [loading, setLoading] = useState(true);\n"+
    "  const [error, setError] = useState(null);\n"+
    "\n"+
    "  useEffect(() => {\n"+
    "    const fetchData = async () => {\n"+
    "      try {\n"+
    "        const res = await axios.get('https://jsonplaceholder.typicode.com/users');\n"+
    "        setUsers(res.data);\n"+
    "      } catch (err) {\n"+
    "        setError(err.message);\n"+
    "      } finally {\n"+
    "        setLoading(false);\n"+
    "      }\n"+
    "    };\n"+
    "    fetchData();\n"+
    "  }, []);\n"+
    "\n"+
    "  if (loading) return <p>جارٍ التحميل...</p>;\n"+
    "  if (error) return <p>حدث خطأ: {error}</p>;\n"+
    "\n"+
    "  return <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>;\n"+
    "}"
},
{
  "id": 14,
  "title": "useState-vs-useReducer",
  "explain": 
    "`useState` و `useReducer` هما Hooks لإدارة الحالة (state) في React، لكن كل واحد مناسب لحالات مختلفة:\n\n" +
    "1- useState:\n" +
    "- مناسب للحالات البسيطة والمفردة.\n" +
    "- سهل الاستخدام: بنكتب قيمة الحالة ودالة لتحديثها.\n" +
    "- مثال: عداد أو نص input.\n\n" +
    "2- useReducer:\n" +
    "- مناسب للحالات المعقدة أو اللي فيها أكثر من قيمة/state.\n" +
    "- بيعتمد على دالة reducer و action لتحديد كيف تتغير الحالة.\n" +
    "- مفيد لما يكون عندك منطق تحديث معقد أو متعدد الخطوات.\n",
  "example":
    "1- مثال useState (عداد بسيط)\n"+
    "import React, { useState } from 'react';\n"+
    "\n"+
    "function CounterUseState() {\n"+
    "  const [count, setCount] = useState(0);\n"+
    "  return (\n"+
    "    <div>\n"+
    "      <p>العدد: {count}</p>\n"+
    "      <button onClick={() => setCount(count + 1)}>زيادة</button>\n"+
    "      <button onClick={() => setCount(count - 1)}>نقصان</button>\n"+
    "    </div>\n"+
    "  );\n"+
    "}\n"+
    "----------------------------------------\n"+
    "2- مثال useReducer (عداد بنفس الوظيفة)\n"+
    "import React, { useReducer } from 'react';\n"+
    "\n"+
    "function reducer(state, action) {\n"+
    "  switch(action.type) {\n"+
    "    case 'increment':\n"+
    "      return { count: state.count + 1 };\n"+
    "    case 'decrement':\n"+
    "      return { count: state.count - 1 };\n"+
    "    default:\n"+
    "      return state;\n"+
    "  }\n"+
    "}\n"+
    "\n"+
    "function CounterUseReducer() {\n"+
    "  const [state, dispatch] = useReducer(reducer, { count: 0 });\n"+
    "  return (\n"+
    "    <div>\n"+
    "      <p>العدد: {state.count}</p>\n"+
    "      <button onClick={() => dispatch({ type: 'increment' })}>زيادة</button>\n"+
    "      <button onClick={() => dispatch({ type: 'decrement' })}>نقصان</button>\n"+
    "    </div>\n"+
    "  );\n"+
    "}\n"+
    "----------------------------------------\n"+
    "✅ النتيجة:\n"+
    "- useState سهل وسريع للحالات البسيطة.\n"+
    "- useReducer أنسب للحالات المعقدة أو لما يكون عندك أكثر من عملية لتغيير الحالة."
},

{
  "id": 15,
  "title": "React.memo",
  "explain": 
    "`React.memo` هي دالة في React بتستخدم لتسريع الأداء (Performance Optimization) عن طريق منع إعادة رسم المكون (re-render) لو الـ props بتاعته ما تغيّرتش.\n" +
    "بمعنى آخر، React.memo بيخلي المكون \"يحفظ\" النتيجة بتاعته ويعيد استخدامها طالما الـ props هي هي.\n\n" +
    "✅ إمتى نستخدمه:\n" +
    "- لما المكون بياخد props كتير لكن بيتغير نادرًا.\n" +
    "- لما إعادة رسم المكون مكلفة أو بتبطّئ الصفحة.\n\n" +
    "⚠️ ملاحظات:\n" +
    "- بيشتغل فقط مع المكونات الوظيفية (Function Components).\n" +
    "- بيقارن props القديمة والجديدة بطريقة سطحية (shallow comparison).\n" +
    "- لو الـ props دايمًا بتتغير، مش هيكون له فايدة.\n",
  "example":
    "1- مثال بسيط على React.memo\n"+
    "import React, { useState } from 'react';\n"+
    "\n"+
    "// مكون فرعي بياخد props\n"+
    "const Child = React.memo(({ name }) => {\n"+
    "  console.log('تم إعادة رسم المكون الفرعي');\n"+
    "  return <p>اسم المستخدم: {name}</p>;\n"+
    "});\n"+
    "\n"+
    "function Parent() {\n"+
    "  const [count, setCount] = useState(0);\n"+
    "  const [name, setName] = useState('أحمد');\n"+
    "\n"+
    "  return (\n"+
    "    <div>\n"+
    "      <Child name={name} />\n"+
    "      <p>العدد: {count}</p>\n"+
    "      <button onClick={() => setCount(count + 1)}>زيادة</button>\n"+
    "      <button onClick={() => setName('محمد')}>تغيير الاسم</button>\n"+
    "    </div>\n"+
    "  );\n"+
    "}\n"+
    "----------------------------------------\n"+
    "✅ النتيجة:\n"+
    "- لما تضغط على زر 'زيادة'، المكون الفرعي مش هيُعاد رسمه لأن الـ props (name) ما تغيّرتش.\n"+
    "- لكن لما تضغط على 'تغيير الاسم'، React.memo هيلاحظ إن الـ props اختلفت، فالمكون هيتحدث.\n"+
    "----------------------------------------\n"+
    "2- مثال آخر مع دالة مقارنة مخصصة\n"+
    "const MyComponent = React.memo((props) => {\n"+
    "  return <div>{props.value}</div>;\n"+
    "}, (prevProps, nextProps) => {\n"+
    "  return prevProps.value === nextProps.value; // يمنع إعادة الرندر لو القيمة هي نفسها\n"+
    "});"
},
{
  "id": 16,
  "title": "useMemo",
  "explain": 
    "`useMemo` هو Hook في React بيُستخدم لتحسين الأداء عن طريق حفظ نتيجة عملية حسابية (memoization)، بحيث React ما تعيدش حسابها كل مرة المكون يرندر فيها.\n" +
    "بيكون مفيد لما عندك عملية تقيلة (زي فلترة أو حسابات) ومش عايز تنفذها في كل تحديث.\n\n" +
    "الصيغة:\n" +
    "const memoizedValue = useMemo(() => { return عملية_حسابية }, [dependencies]);\n\n" +
    "✅ الفكرة:\n" +
    "- React هتحسب القيمة أول مرة فقط أو لما أي dependency في القائمة تتغير.\n" +
    "- لو مفيش تغيير في الـ dependencies، React هتستخدم القيمة القديمة المحفوظة.\n\n" +
    "⚠️ ملاحظات:\n" +
    "- `useMemo` مش بيمنع الريندر نفسه، لكنه بيمنع العمليات التقيلة تتنفذ تاني.\n" +
    "- بيُستخدم فقط لو فعلاً عندك كود مكلف (مش في كل الحالات).\n",
  "example":
    "1- مثال بسيط على useMemo\n"+
    "import React, { useState, useMemo } from 'react';\n"+
    "\n"+
    "function ExpensiveCalculation(num) {\n"+
    "  console.log('بيحسب القيمة...');\n"+
    "  let result = 0;\n"+
    "  for (let i = 0; i < 1000000000; i++) {\n"+
    "    result += num * 2;\n"+
    "  }\n"+
    "  return result;\n"+
    "}\n"+
    "\n"+
    "function App() {\n"+
    "  const [count, setCount] = useState(0);\n"+
    "  const [num, setNum] = useState(5);\n"+
    "\n"+
    "  const memoizedResult = useMemo(() => ExpensiveCalculation(num), [num]);\n"+
    "\n"+
    "  return (\n"+
    "    <div>\n"+
    "      <p>نتيجة العملية: {memoizedResult}</p>\n"+
    "      <button onClick={() => setCount(count + 1)}>زيادة العدّاد ({count})</button>\n"+
    "      <button onClick={() => setNum(num + 1)}>تغيير الرقم ({num})</button>\n"+
    "    </div>\n"+
    "  );\n"+
    "}\n"+
    "----------------------------------------\n"+
    "✅ النتيجة:\n"+
    "- لما تضغط على زر زيادة العدّاد → المكون هيعيد الرندر، لكن `ExpensiveCalculation` مش هتشتغل تاني.\n"+
    "- لما تغيّر الرقم `num` → `useMemo` هتعيد الحساب لأن الـ dependency اتغيرت.\n"+
    "----------------------------------------\n"+
    "2- مثال بسيط آخر (فلترة قائمة)\n"+
    "const filteredList = useMemo(() => {\n"+
    "  return users.filter(user => user.active);\n"+
    "}, [users]);\n"+
    "// React مش هتعيد الفلترة إلا لو users اتغيرت."
},
{
  "id": 17,
  "title": "useCallback",
  "explain": 
    "`useCallback` هو Hook في React بيُستخدم لتحسين الأداء عن طريق حفظ (تثبيت) الدوال بين عمليات إعادة الرسم.\n" +
    "بدون useCallback، كل مرة المكون يرندر بيتم إنشاء نسخة جديدة من نفس الدالة، وده ممكن يسبب إعادة رسم غير ضرورية للمكونات الأبناء.\n\n" +
    "الصيغة:\n" +
    "const memoizedFunction = useCallback(() => { ... }, [dependencies]);\n\n" +
    "✅ الفكرة:\n" +
    "- React هتحفظ الدالة، ومش هتعيد إنشاءها إلا لو الـ dependencies اتغيرت.\n" +
    "- بنستخدمها غالبًا مع React.memo أو في الـ props اللي فيها دوال.\n\n" +
    "⚠️ ملاحظات:\n" +
    "- useCallback بيمنع إنشاء دوال جديدة كل ريندر.\n" +
    "- مفيد فقط لما تمرر الدالة كمُلكية (prop) لمكون فرعي.\n" +
    "- لو مش بتمررها كـ prop، فـ useCallback مالوش فايدة حقيقية.\n",
  "example":
    "1- مثال بدون useCallback (مشكلة الأداء)\n"+
    "import React, { useState } from 'react';\n"+
    "\n"+
    "const Child = React.memo(({ onClick }) => {\n"+
    "  console.log('📢 تم إعادة رسم المكون الفرعي');\n"+
    "  return <button onClick={onClick}>اضغط هنا</button>;\n"+
    "});\n"+
    "\n"+
    "function Parent() {\n"+
    "  const [count, setCount] = useState(0);\n"+
    "\n"+
    "  const handleClick = () => {\n"+
    "    console.log('تم الضغط!');\n"+
    "  };\n"+
    "\n"+
    "  return (\n"+
    "    <div>\n"+
    "      <p>العدد: {count}</p>\n"+
    "      <button onClick={() => setCount(count + 1)}>زيادة العدّاد</button>\n"+
    "      <Child onClick={handleClick} />\n"+
    "    </div>\n"+
    "  );\n"+
    "}\n"+
    "----------------------------------------\n"+
    "📍 المشكلة:\n"+
    "كل مرة Parent يرندر، React بتنشئ نسخة جديدة من handleClick → المكون الفرعي Child يُعاد رسمه.\n"+
    "----------------------------------------\n"+
    "2- الحل باستخدام useCallback\n"+
    "import React, { useState, useCallback } from 'react';\n"+
    "\n"+
    "const Child = React.memo(({ onClick }) => {\n"+
    "  console.log('📢 تم إعادة رسم المكون الفرعي');\n"+
    "  return <button onClick={onClick}>اضغط هنا</button>;\n"+
    "});\n"+
    "\n"+
    "function Parent() {\n"+
    "  const [count, setCount] = useState(0);\n"+
    "\n"+
    "  const handleClick = useCallback(() => {\n"+
    "    console.log('تم الضغط!');\n"+
    "  }, []); // الدالة هتتحفظ ومش هتتغير إلا لو اتغيرت الـ dependencies\n"+
    "\n"+
    "  return (\n"+
    "    <div>\n"+
    "      <p>العدد: {count}</p>\n"+
    "      <button onClick={() => setCount(count + 1)}>زيادة العدّاد</button>\n"+
    "      <Child onClick={handleClick} />\n"+
    "    </div>\n"+
    "  );\n"+
    "}\n"+
    "----------------------------------------\n"+
    "✅ النتيجة:\n"+
    "- لما تضغط على زر زيادة العدّاد → Parent هيرندر.\n"+
    "- بس Child مش هيُعاد رسمه لأن الدالة onClick هي نفس النسخة القديمة.\n"+
    "----------------------------------------\n"+
    "💡 الفرق بين useMemo و useCallback:\n"+
    "- useMemo → بيحفظ **نتيجة** دالة (قيمة).\n"+
    "- useCallback → بيحفظ **نفس الدالة** نفسها."
}






];
export default react