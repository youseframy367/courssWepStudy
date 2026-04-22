const node = [
  {
    id: 1,
    title: "Introduction ",
    explain:
      "📘 أولاً: ما هو Node.js ؟\n" +
      "Node.js هو بيئة تشغيل (Runtime Environment) بتسمح لك تشغّل كود JavaScript خارج المتصفح.\n" +
      "يعني بدل ما JavaScript تشتغل فقط في المتصفح (Browser)، تقدر تشتغل على السيرفر (Server) باستخدام Node.js.\n" +
      "-----------------------------------------\n" +
      "⚙️ ثانيًا: كيف يعمل Node.js ؟\n" +
      "Node.js مبني على محرك V8 (نفس المحرك اللي بيشغّل JavaScript في Google Chrome)،\n" +
      "وبيستخدم نظام الـ Event Loop عشان ينفّذ المهام بشكل غير متزامن (Asynchronous) — يعني سريع جدًا.\n" +
      "-----------------------------------------\n" +
      "🚀 ثالثًا: لماذا نستخدم Node.js ؟\n" +
      "1️⃣ السرعة — لأنه مبني على V8 وبيستخدم نظام غير متزامن.\n" +
      "2️⃣ خفيف — بيستهلك موارد أقل من السيرفرات التقليدية.\n" +
      "3️⃣ نفس اللغة — تقدر تكتب Frontend و Backend بـ JavaScript.\n" +
      "4️⃣ مجتمع ضخم — فيه مكتبات جاهزة كتير من خلال npm.\n" +
      "-----------------------------------------\n" +
      "📦 رابعًا: ما هو npm ؟\n" +
      "npm هو مدير الحزم الخاص بـ Node.js (Node Package Manager)،\n" +
      "وبيخليك تثبّت مكتبات جاهزة تساعدك تبني مشروعك أسرع.\n" +
      "-----------------------------------------\n" +
      "💡 خامسًا: أهم استخدامات Node.js\n" +
      "- بناء السيرفرات (Servers) وواجهات الـ API.\n" +
      "- تطوير تطبيقات الوقت الحقيقي (Real-time apps) زي الدردشة.\n" +
      "- إدارة قواعد البيانات والتعامل مع الملفات.\n" +
      "- تطوير أدوات البرمجة (CLI Tools).\n" +
      "-----------------------------------------\n" +
      "💬 ملاحظات:\n" +
      "- Node.js مش Framework، دي بيئة تشغيل.\n" +
      "- بيعتمد على JavaScript بالكامل.\n" +
      "- ممكن تدمجه مع Express.js لتبني تطبيقات ويب قوية.",

    example:
      "// 🧩 التحقق من تثبيت Node.js و npm:\n" +
      "node -v   // لمعرفة إصدار Node.js\n" +
      "npm -v    // لمعرفة إصدار npm\n" +
      "-----------------------------------------\n" +
      "// 🧩 مثال بسيط لتشغيل كود JavaScript في Node.js:\n" +
      "console.log('مرحبًا من Node.js!');\n" +
      "-----------------------------------------\n" +
      "// 🧩 إنشاء سيرفر بسيط باستخدام Node.js:\n" +
      "const http = require('http');\n" +
      "const server = http.createServer((req, res) => {\n" +
      "  res.writeHead(200, {'Content-Type': 'text/plain'});\n" +
      "  res.end('مرحبًا بك في أول سيرفر Node.js 🚀');\n" +
      "});\n" +
      "server.listen(3000, () => {\n" +
      "  console.log('السيرفر شغال على http://localhost:3000');\n" +
      "});\n" +
      "-----------------------------------------\n" +
      "// 🧩 تشغيل الملف:\n" +
      "node server.js  // لو اسم الملف server.js\n" +
      "-----------------------------------------\n" +
      "💡 لما تفتح المتصفح على http://localhost:3000 هتشوف الرسالة اللي كتبناها."
  },
  {
    id: 2,
    title: "downlod node.js",
    explain:
      "📥 أولاً: تنزيل Node.js\n" +
      "1️⃣ ادخل على الموقع الرسمي: https://nodejs.org\n" +
      "2️⃣ اختار النسخة المناسبة لنظام التشغيل (Windows, macOS, Linux)\n" +
      "   - النسخة LTS (Long Term Support) مستقرة ومناسبة لمعظم المستخدمين\n" +
      "   - النسخة Current فيها أحدث الميزات لكنها أقل استقرارًا\n" +
      "3️⃣ حمل الملف وابدأ عملية التثبيت، اتبع التعليمات القياسية.\n" +
      "-----------------------------------------\n" +
      "⚙️ ثانيًا: التحقق من التثبيت\n" +
      "بعد انتهاء التثبيت افتح Terminal أو Command Prompt واكتب:\n" +
      "- للتحقق من إصدار Node.js:\n" +
      "  node -v\n" +
      "- للتحقق من إصدار npm (مدير الحزم):\n" +
      "  npm -v\n" +
      "لو ظهرت الأرقام، يبقى كل شيء جاهز.\n" +
      "-----------------------------------------\n" +
      "🚀 ثالثًا: البدء بتجهيز البيئة\n" +
      "1️⃣ افتح محرر الأكواد المفضل (VS Code مثلا)\n" +
      "2️⃣ أنشئ مجلد المشروع، وافتحه في VS Code\n" +
      "3️⃣ أنشئ ملف جديد باسم `app.js`\n" +
      "4️⃣ اكتب الكود التالي:\n" +
      "   console.log('مرحبًا بك في Node.js!');\n" +
      "5️⃣ شغّل الملف من Terminal:\n" +
      "   node app.js\n" +
      "هتشوف رسالة الترحيب تظهر في الطرفية.\n" +
      "-----------------------------------------\n" +
      "💡 ملاحظات مهمة:\n" +
      "- Node.js مش Framework، ده بيئة تشغيل JavaScript على السيرفر\n" +
      "- npm هو أداة مهمة لإدارة مكتبات JavaScript الجاهزة\n" +
      "- دايمًا استخدم النسخة LTS لو مش محتاج آخر ميزات\n" +
      "- شغّل Terminal جوه المجلد اللي فيه ملفات المشروع لتجنب المشاكل",
    example:
      "// 🧩 مثال أول كود في Node.js\n" +
      "console.log('مرحبًا بك في Node.js!');\n" +
      "// تشغيل الملف في Terminal:\n" +
      "// node app.js\n" +
      "// هتشوف النتيجة: مرحبًا بك في Node.js!"
  },
  {
    id: 3,
    title: "creat server",
    explain:
      "🌐 أولًا: ما هو السيرفر في Node.js؟\n" +
      "السيرفر هو برنامج يستقبل طلبات المستخدمين ويرد عليهم بالبيانات المناسبة.\n" +
      "Node.js بيتيحلك إنشاء سيرفرات بسيطة باستخدام وحدة 'http' المدمجة.\n" +
      "-----------------------------------------\n" +
      "⚙️ ثانيًا: إنشاء أول سيرفر\n" +
      "1️⃣ افتح نفس المشروع اللي أنشأته سابقًا\n" +
      "2️⃣ افتح ملف جديد باسم `server.js`\n" +
      "3️⃣ اكتب الكود التالي:\n" +
      "   const http = require('http');\n" +
      "   const server = http.createServer((req, res) => {\n" +
      "       res.writeHead(200, {'Content-Type': 'text/plain'});\n" +
      "       res.end('مرحبًا بك في أول سيرفر Node.js 🚀');\n" +
      "   });\n" +
      "   server.listen(3000, () => {\n" +
      "       console.log('السيرفر شغال على http://localhost:3000');\n" +
      "   });\n" +
      "-----------------------------------------\n" +
      "🚀 ثالثًا: تشغيل السيرفر\n" +
      "1️⃣ افتح Terminal في مجلد المشروع\n" +
      "2️⃣ شغّل السيرفر بكتابة:\n" +
      "   node server.js\n" +
      "3️⃣ افتح المتصفح وادخل على الرابط:\n" +
      "   http://localhost:3000\n" +
      "هتشوف الرسالة 'مرحبًا بك في أول سيرفر Node.js 🚀'\n" +
      "-----------------------------------------\n" +
      "💡 ملاحظات مهمة:\n" +
      "- السيرفر هيشتغل على البورت 3000، ممكن تغيّره لو محتاج\n" +
      "- اضغط Ctrl+C في الطرفية لإيقاف السيرفر\n" +
      "- ده مثال بسيط جدًا لفهم الفكرة، بعدين ممكن نضيف HTML وJSON\n" +
      "- استخدم `nodemon` لتشغيل السيرفر تلقائي عند أي تغيير بالكود (اختياري)"
    ,
    example:
      "// 🧩 كود السيرفر الكامل\n" +
      "const http = require('http');\n" +
      "const server = http.createServer((req, res) => {\n" +
      "    res.writeHead(200, {'Content-Type': 'text/plain'});\n" +
      "    res.end('مرحبًا بك في أول سيرفر Node.js 🚀');\n" +
      "});\n" +
      "server.listen(3000, () => {\n" +
      "    console.log('السيرفر شغال على http://localhost:3000');\n" +
      "});"
  },
    {
    id: 4,
    title: "CRUD في Node.js باستخدام Express",
    explain:
      "🌐 أولًا: إنشاء API بسيط للتعامل مع البيانات\n" +
      "هنا هنستخدم Express لإنشاء سيرفر Node.js ونعمل مثال CRUD على بيانات وهمية.\n" +
      "-----------------------------------------\n" +
      "⚙️ ثانيًا: تثبيت Express\n" +
      "1️⃣ افتح Terminal في مجلد المشروع\n" +
      "2️⃣ ثبّت Express:\n" +
      "   npm install express\n" +
      "3️⃣ أنشئ ملف باسم server.js\n" +
      "-----------------------------------------\n" +
      "🚀 ثالثًا: الكود الكامل للسيرفر\n" +
      "   const express = require('express');\n" +
      "   const app = express();\n" +
      "   const PORT = 3000;\n" +
      "\n" +
      "   app.use(express.json()); // لتفسير بيانات JSON\n" +
      "\n" +
      "   // بيانات وهمية\n" +
      "   let users = [\n" +
      "     { id: 1, name: 'Ahmed' },\n" +
      "     { id: 2, name: 'Sara' }\n" +
      "   ];\n" +
      "\n" +
      "   // GET - قراءة كل المستخدمين\n" +
      "   app.get('/users', (req, res) => {\n" +
      "     res.json(users);\n" +
      "   });\n" +
      "\n" +
      "   // POST - إضافة مستخدم جديد\n" +
      "   app.post('/users', (req, res) => {\n" +
      "     const newUser = { id: Date.now(), ...req.body };\n" +
      "     users.push(newUser);\n" +
      "     res.json({ message: 'تم إنشاء المستخدم بنجاح!', user: newUser });\n" +
      "   });\n" +
      "\n" +
      "   // PUT - تعديل مستخدم موجود\n" +
      "   app.put('/users/:id', (req, res) => {\n" +
      "     const userId = parseInt(req.params.id);\n" +
      "     users = users.map(u => u.id === userId ? { ...u, ...req.body } : u);\n" +
      "     res.json({ message: 'تم تحديث المستخدم بنجاح!' });\n" +
      "   });\n" +
      "\n" +
      "   // DELETE - حذف مستخدم\n" +
      "   app.delete('/users/:id', (req, res) => {\n" +
      "     const userId = parseInt(req.params.id);\n" +
      "     users = users.filter(u => u.id !== userId);\n" +
      "     res.json({ message: 'تم حذف المستخدم بنجاح!' });\n" +
      "   });\n" +
      "\n" +
      "   app.listen(PORT, () => console.log(`السيرفر شغال على http://localhost:${PORT}`));\n" +
      "-----------------------------------------\n" +
      "💡 ملاحظات:\n" +
      "- استخدم Postman أو أي أداة لإرسال الطلبات وتجربة GET, POST, PUT, DELETE\n" +
      "- GET لقراءة البيانات، POST لإضافة، PUT لتعديل، DELETE للحذف\n" +
      "- البيانات هنا وهمية في الذاكرة، لو أعدت تشغيل السيرفر هترجع البيانات الأصلية"
    ,
    example:
      "// 🧩 مثال استخدام CURL أو Postman\n" +
      "// GET جميع المستخدمين:\n" +
      "// GET http://localhost:3000/users\n" +
      "\n" +
      "// POST لإضافة مستخدم جديد:\n" +
      "// POST http://localhost:3000/users\n" +
      "// body: { \"name\": \"Ali\" }\n" +
      "\n" +
      "// PUT لتعديل مستخدم:\n" +
      "// PUT http://localhost:3000/users/1\n" +
      "// body: { \"name\": \"Ahmed Updated\" }\n" +
      "\n" +
      "// DELETE لحذف مستخدم:\n" +
      "// DELETE http://localhost:3000/users/2"
  },
  {
  id: 5,
  title: "res.send() type",
  explain:
    "🌐 في Express، res هو الكائن المسؤول عن إرسال الردود للعميل (Client).\n" +
    "واحدة من أهم الطرق لإرسال الردود هي res.send()، لكن فيه طرق تانية حسب نوع البيانات.\n" +
    "-----------------------------------------\n" +
    "⚡ 1️⃣ res.send()\n" +
    "- ترسل أي نوع بيانات: نص، HTML، JSON، Buffer.\n" +
    "- Express يحدد نوع الـ Content-Type تلقائيًا.\n" +
    "\n" +
    "⚡ 2️⃣ res.json()\n" +
    "- تستخدم خصيصًا لإرسال JSON.\n" +
    "- تضيف تلقائيًا الـ Content-Type كـ 'application/json'.\n" +
    "\n" +
    "⚡ 3️⃣ res.sendFile()\n" +
    "- تستخدم لإرسال ملف كامل.\n" +
    "- تحتاج المسار الكامل للملف أو Path مطلق.\n" +
    "\n" +
    "⚡ 4️⃣ res.status().send()\n" +
    "- تستخدم لتحديد كود الحالة HTTP قبل إرسال الرد.\n" +
    "- مهم لتوضيح نجاح أو فشل العملية.\n" +
    "-----------------------------------------\n" +
    "💡 ملاحظات:\n" +
    "- res.send يتحول تلقائيًا لـ JSON لو مررت له كائن Object.\n" +
    "- لو مررت له نص، سيصبح Content-Type: text/html.\n" +
    "- دائمًا استخدم res.status() لتحديد الحالة HTTP بدقة.",
  example:
    "// مثال عملي على res.send و res.json\n" +
    "const express = require('express');\n" +
    "const path = require('path');\n" +
    "const app = express();\n" +
    "const PORT = 3000;\n" +
    "\n" +
    "app.get('/hello', (req, res) => {\n" +
    "  res.send('مرحبا بك في الموقع!');\n" +
    "});\n" +
    "\n" +
    "app.get('/user', (req, res) => {\n" +
    "  res.json({ name: 'Sara', role: 'student' });\n" +
    "});\n" +
    "\n" +
    "app.get('/download', (req, res) => {\n" +
    "  res.sendFile(path.join(__dirname, 'example.txt'));\n" +
    "});\n" +
    "\n" +
    "app.get('/notfound', (req, res) => {\n" +
    "  res.status(404).send('الصفحة غير موجودة');\n" +
    "});\n" +
    "\n" +
    "app.listen(PORT, () => console.log(`السيرفر شغال على http://localhost:${PORT}`));"
},
{
  id: 8,
  title: "ربط Node.js وExpress بقاعدة البيانات MongoDB",
  explain:
    "🌐 في الدرس ده هنتعلم إزاي نربط Node.js وExpress بقاعدة بيانات MongoDB عشان نقدر نخزن ونقرأ البيانات.\n" +
    "-----------------------------------------\n" +
    "⚙️ 1️⃣ تثبيت Mongoose\n" +
    "npm install mongoose\n" +
    "\n" +
    "⚙️ 2️⃣ إعداد الاتصال بقاعدة البيانات\n" +
    "- لو هتستخدم MongoDB Atlas، خد رابط الاتصال (Connection String) وضعه في ملف .env\n" +
    "- مثال على .env:\n" +
    "MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/courseDB\n" +
    "\n" +
    "⚡ 3️⃣ الاتصال بالداتا بيز في server.js\n" +
    "const mongoose = require('mongoose');\n" +
    "require('dotenv').config();\n" +
    "\n" +
    "mongoose.connect(process.env.MONGO_URI, {\n" +
    "  useNewUrlParser: true,\n" +
    "  useUnifiedTopology: true\n" +
    "})\n" +
    ".then(() => console.log('DB connected successfully'))\n" +
    ".catch(err => console.log('DB connection error:', err));\n" +
    "-----------------------------------------\n" +
    "⚡ 4️⃣ إنشاء موديلات (Models)\n" +
    "- User Model:\n" +
    "const userSchema = new mongoose.Schema({ name: String, email: String, password: String });\n" +
    "module.exports = mongoose.model('User', userSchema);\n" +
    "- Course Model:\n" +
    "const courseSchema = new mongoose.Schema({ title: String, description: String });\n" +
    "module.exports = mongoose.model('Course', courseSchema);\n" +
    "-----------------------------------------\n" +
    "💡 ملاحظات:\n" +
    "- استخدم async/await مع عمليات DB\n" +
    "- استخدم try/catch لمعالجة الأخطاء\n" +
    "- populate لو عايز تجيب بيانات من موديلات تانية"
  ,
  example:
    "const express = require('express');\n" +
    "const mongoose = require('mongoose');\n" +
    "require('dotenv').config();\n" +
    "const User = require('./models/User');\n" +
    "const Course = require('./models/Course');\n" +
    "\n" +
    "const app = express();\n" +
    "const PORT = 3000;\n" +
    "\n" +
    "app.use(express.json());\n" +
    "\n" +
    "// الاتصال بقاعدة البيانات\n" +
    "mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })\n" +
    "  .then(() => console.log('DB connected successfully'))\n" +
    "  .catch(err => console.log('DB connection error:', err));\n" +
    "\n" +
    "// إنشاء مستخدم جديد\n" +
    "app.post('/users', async (req, res) => {\n" +
    "  try {\n" +
    "    const user = await User.create(req.body);\n" +
    "    res.json({ message: 'تم إنشاء المستخدم!', user });\n" +
    "  } catch(err) {\n" +
    "    res.status(400).json({ error: err.message });\n" +
    "  }\n" +
    "});\n" +
    "\n" +
    "// جلب كل الكورسات\n" +
    "app.get('/courses', async (req, res) => {\n" +
    "  const courses = await Course.find();\n" +
    "  res.json(courses);\n" +
    "});\n" +
    "\n" +
    "// تشغيل السيرفر\n" +
    "app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));"
}




];

export default node;
