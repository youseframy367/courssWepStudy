 const tillwind=[
    {
id: 1,
title: "Introduction (Tailwind)",
explain:
"Tailwind CSS هي إطار عمل (Framework) لتصميم واجهات المستخدم باستخدام كلاسّات جاهزة.\n" +
"- تعتمد على Utility Classes بدل كتابة أكواد CSS يدوية.\n" +
"- تسمح لك بالتحكم الكامل في الألوان، الهوامش، الأحجام، الخطوط، وغيرها مباشرة من HTML.\n" +
"- يمكن تضمين Tailwind في المشروع بسهولة عبر CDN أو إعداد بناء (Build).\n" +
"- مثل CSS العادية، يمكن تطبيقها على العناصر عبر الكلاسات داخل الوسوم.\n",
example:
"1- تضمين Tailwind عبر CDN:\n"+
"<head>\n"+
"  <script src='https://cdn.tailwindcss.com'></script>\n"+
"</head>\n"+
"----------------------------------------\n"+
"2- تطبيق ستايل مباشر على الوسم:\n"+
"<p class='text-red-500 text-xl'>هذا نص أحمر وكبير</p>\n"+
"----------------------------------------\n"+
"3- استخدام كلاس عام من Tailwind:\n"+
"<div class='bg-blue-500 text-white p-4 rounded-lg'>عنصر بخلفية زرقاء ونص أبيض</div>\n"+
"----------------------------------------\n"+
"4- تعديل النمط مباشرة من HTML:\n"+
"<h1 class='text-3xl font-bold underline text-center text-green-600'>عنوان منسق بـ Tailwind</h1>\n"
},
{
id: 2,
title: "Selectors (Tailwind)",
explain:
"في Tailwind CSS لا نستخدم Selectors تقليدية مثل (id, class, tag)، بل نطبق الكلاسات مباشرة على عناصر HTML.\n" +
"- كل كلاس في Tailwind يمثل خاصية معينة (لون، حجم، هوامش...)\n" +
"- لتطبيق نفس النمط على أكثر من عنصر نستخدم نفس الكلاسات.\n" +
"- يمكن الجمع بين الكلاسات للحصول على تصميم مخصص.\n" +
"- لا يوجد حاجة إلى تعريف CSS خارجي؛ كل شيء يتم داخل HTML.\n" +
"- مع ذلك، يمكن استخدام شروط أو حالات خاصة مثل hover, focus, active إلخ.\n",
example:
"1- تطبيق كلاس عام على كل العناصر (بديل عن *):\n"+
"<div class='m-0 p-0'>كل العناصر داخل هذا العنصر بدون هوامش</div>\n"+
"----------------------------------------\n"+
"2- Type Selector (بديل عنه نضيف الكلاس مباشرة):\n"+
"<p class='text-green-600'>نص باللون الأخضر</p>\n"+
"----------------------------------------\n"+
"3- Class Selector:\n"+
"<p class='bg-yellow-200'>نص بخلفية صفراء</p>\n"+
"----------------------------------------\n"+
"4- ID Selector (في Tailwind نستخدم الكلاس بدل ID):\n"+
"<h1 class='text-3xl text-red-600'>العنوان الرئيسي</h1>\n"+
"----------------------------------------\n"+
"5- Grouping Selector (نفس الكلاسات لعناصر متعددة):\n"+
"<h1 class='font-sans'>عنوان 1</h1>\n"+
"<h2 class='font-sans'>عنوان 2</h2>\n"+
"<h3 class='font-sans'>عنوان 3</h3>\n"+
"----------------------------------------\n"+
"6- Descendant Selector (نضيف الكلاس داخل العنصر مباشرة):\n"+
"<div>\n"+
"  <p class='text-blue-600'>نص داخل ديف باللون الأزرق</p>\n"+
"</div>\n"+
"----------------------------------------\n"+
"7- Pseudo-classes:\n"+
"<a href='#' class='text-gray-600 hover:text-orange-500'>رابط يتغير لونه عند المرور</a>\n"+
"<p class='first:font-bold'>أول فقرة ستكون بخط عريض</p>\n"
},

    {
id: 3,
title: "Colors (Tailwind)",
explain:
"في Tailwind CSS يمكن التحكم في ألوان النصوص والخلفيات بسهولة باستخدام كلاسّات جاهزة.\n" +
"- text-color: لتغيير لون النص.\n" +
"- bg-color: لتغيير لون الخلفية.\n" +
"- opacity-: لتغيير شفافية العنصر.\n" +
"- يدعم Tailwind تدرجات كثيرة مثل: red-500, blue-300, green-700...\n" +
"- كما يمكن استخدام ألوان مخصصة عند إعداد الإعدادات (config).\n",
example:
"1- تغيير لون النص:\n"+
"<p class='text-red-500'>نص باللون الأحمر</p>\n"+
"----------------------------------------\n"+
"2- تغيير لون الخلفية:\n"+
"<div class='bg-blue-200 p-4'>مربع بخلفية زرقاء فاتحة</div>\n"+
"----------------------------------------\n"+
"3- استخدام تدرجات الألوان:\n"+
"<h1 class='text-orange-600'>عنوان بلون برتقالي غامق</h1>\n"+
"----------------------------------------\n"+
"4- شفافية النص:\n"+
"<p class='text-green-700 opacity-70'>نص أخضر مع شفافية</p>\n"+
"----------------------------------------\n"+
"5- شفافية الخلفية:\n"+
"<div class='bg-red-500/50 p-4'>مربع بخلفية حمراء نصف شفافة</div>\n"+
"----------------------------------------\n"+
"6- تدرج لوني (Gradient):\n"+
"<div class='bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg'>خلفية بتدرج لوني</div>\n"


},
{
    
id: 4,
title: "Backgrounds (Tailwind)",
explain:
"في Tailwind CSS يمكن التحكم في الخلفيات باستخدام كلاسّات مختصرة وسهلة:\n" +
"- bg-color: لتغيير لون الخلفية (مثلاً bg-blue-200).\n" +
"- bg-[url('...')]: لإضافة صورة خلفية.\n" +
"- bg-no-repeat / bg-repeat-x / bg-repeat-y: للتحكم في تكرار الصورة.\n" +
"- bg-center / bg-top / bg-bottom / bg-left / bg-right: لتحديد مكان الصورة.\n" +
"- bg-cover / bg-contain / bg-auto: لتغيير حجم الصورة.\n" +
"- bg-fixed / bg-scroll / bg-local: للتحكم في ثبات الخلفية أثناء التمرير.\n" +
"- يمكن دمج كل الخصائص بسهولة في كلاس واحد.\n",

example:
"1- تغيير لون الخلفية:\n"+
"<div class='bg-blue-200 p-4'>مربع بخلفية زرقاء فاتحة</div>\n"+
"----------------------------------------\n"+
"2- إضافة صورة خلفية:\n"+
"<div class='bg-[url('/images/bg.jpg')] h-40 w-full'></div>\n"+
"----------------------------------------\n"+
"3- تكرار الصورة:\n"+
"<div class='bg-[url('/images/pattern.png')] bg-no-repeat h-40 w-full'></div>\n"+
"----------------------------------------\n"+
"4- تحديد موقع الصورة:\n"+
"<div class='bg-[url('/images/bg.jpg')] bg-center bg-no-repeat h-40 w-full'></div>\n"+
"----------------------------------------\n"+
"5- تغيير حجم الصورة:\n"+
"<div class='bg-[url('/images/bg.jpg')] bg-cover bg-center h-40 w-full'></div>\n"+
"----------------------------------------\n"+
"6- تثبيت الصورة عند التمرير:\n"+
"<div class='bg-[url('/images/bg.jpg')] bg-fixed bg-cover h-60 w-full'></div>\n"+
"----------------------------------------\n"+
"7- مثال شامل:\n"+
"<div class='bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat bg-blue-200 h-60 w-full'></div>\n"


},
{
id: 5,
title: "Box Model (Tailwind)",
explain:
"في Tailwind CSS يتم التحكم في الـ Box Model باستخدام كلاسّات جاهزة للهوامش والحدود والمسافات الداخلية:\n" +
"- margin (m-): المسافة الخارجية حول العنصر.\n" +
"- padding (p-): المسافة الداخلية بين المحتوى والحد.\n" +
"- border: لإضافة حدود مع تحديد السمك واللون والنمط.\n" +
"- box-border: يجعل العرض يشمل الـ border والـ padding (مثل border-box في CSS).\n" +
"- box-content: يجعل العرض يعتمد فقط على المحتوى (مثل content-box في CSS).\n" +
"- يمكن تخصيص كل جانب: mt-, mr-, mb-, ml-, pt-, pr-, pb-, pl-.\n",

example:
"1- Margin:\n"+
"<div class='m-5 bg-gray-200'>مسافة خارجية 1.25rem (20px تقريبًا)</div>\n"+
"----------------------------------------\n"+
"2- Padding:\n"+
"<div class='p-4 bg-gray-300'>مسافة داخلية 1rem حول المحتوى</div>\n"+
"----------------------------------------\n"+
"3- Border:\n"+
"<div class='border-4 border-blue-500 p-3 rounded-lg'>حد أزرق بسُمك 4px</div>\n"+
"----------------------------------------\n"+
"4- تخصيص الجوانب:\n"+
"<div class='mt-4 ml-2 p-2 border border-gray-400'>هامش علوي ويسار فقط</div>\n"+
"----------------------------------------\n"+
"5- Box Sizing:\n"+
"<div class='box-border w-48 p-4 border-4 border-green-500 mb-2'>box-border (افتراضي)</div>\n"+
"<div class='box-content w-48 p-4 border-4 border-green-500'>box-content (مثل content-box)</div>\n"


},
{
id: 6,
title: "Display & Position (Tailwind)",
explain:
"في Tailwind CSS يمكن التحكم في طريقة عرض العناصر (display) ومواقعها (position) باستخدام كلاسّات جاهزة:\n\n" +
"🔹 **Display:**\n" +
"- block → `block`\n" +
"- inline → `inline`\n" +
"- inline-block → `inline-block`\n" +
"- hidden → `hidden`\n" +
"- flex → `flex`\n" +
"- grid → `grid`\n\n" +
"🔹 **Position:**\n" +
"- static → `static` (افتراضي)\n" +
"- relative → `relative`\n" +
"- absolute → `absolute`\n" +
"- fixed → `fixed`\n" +
"- sticky → `sticky`\n\n" +
"يمكن التحكم في الإزاحة باستخدام كلاسّات مثل:\n" +
"- top- / right- / bottom- / left-\n" +
"مثلاً: `top-0`, `left-10`, `bottom-4`\n",

example:
"1- Display Block vs Inline:\n"+
"<div class='block bg-blue-200 mb-2'>Block Element</div>\n"+
"<span class='inline bg-green-200'>Inline Element</span>\n"+
"----------------------------------------\n"+
"2- إخفاء العنصر:\n"+
"<p class='hidden'>هذا النص مخفي</p>\n"+
"----------------------------------------\n"+
"3- Display Flex:\n"+
"<div class='flex justify-between bg-gray-200 p-2'>\n"+
"  <div>Item 1</div>\n"+
"  <div>Item 2</div>\n"+
"  <div>Item 3</div>\n"+
"</div>\n"+
"----------------------------------------\n"+
"4- Position Relative & Absolute:\n"+
"<div class='relative w-72 h-40 bg-gray-300'>\n"+
"  <div class='absolute top-10 left-10 bg-red-400 p-2'>Absolute</div>\n"+
"</div>\n"+
"----------------------------------------\n"+
"5- Position Fixed:\n"+
"<div class='fixed bottom-0 right-0 bg-yellow-300 p-2'>Fixed Footer</div>\n"+
"----------------------------------------\n"+
"6- Position Sticky:\n"+
"<div class='sticky top-0 bg-orange-300 p-2'>Sticky Header</div>\n"
},
{
id: 7,
title: "Width & Height (Tailwind)",
explain:
"في Tailwind CSS يمكن التحكم في أبعاد العناصر بسهولة باستخدام كلاسّات جاهزة.\n\n" +
"🔹 **الخصائص الأساسية:**\n" +
"- `w-` لتحديد العرض (width)\n" +
"- `h-` لتحديد الارتفاع (height)\n\n" +
"🔹 **أمثلة على القيم الثابتة:**\n" +
"- `w-20` = 5rem ≈ 80px\n" +
"- `h-10` = 2.5rem ≈ 40px\n\n" +
"🔹 **نسبية إلى العنصر الأب:**\n" +
"- `w-1/2` = 50% من عرض الأب\n" +
"- `w-full` = 100%\n" +
"- `h-screen` = ارتفاع الشاشة بالكامل\n\n" +
"🔹 **القيم التلقائية والقصوى:**\n" +
"- `w-auto`, `h-auto`\n" +
"- `min-w-`, `max-w-`, `min-h-`, `max-h-`\n" +
"مثلًا: `max-w-md`, `min-h-32`\n",

example:
"1- تحديد عرض وارتفاع ثابت:\n"+
"<div class='w-52 h-24 bg-blue-200 flex items-center justify-center'>Fixed Size</div>\n"+
"----------------------------------------\n"+
"2- تحديد العرض والارتفاع بنسبة:\n"+
"<div class='w-1/2 h-1/2 bg-green-200 flex items-center justify-center'>50% Size</div>\n"+
"----------------------------------------\n"+
"3- استخدام auto:\n"+
"<div class='w-auto h-auto bg-red-200 inline-block p-2'>Auto Size</div>\n"+
"----------------------------------------\n"+
"4- الحد الأدنى والأقصى:\n"+
"<div class='w-72 min-w-40 max-w-lg h-24 bg-orange-300 flex items-center justify-center'>Min & Max Width</div>\n"+
"<div class='h-40 min-h-24 max-h-60 bg-yellow-300 flex items-center justify-center mt-2'>Min & Max Height</div>\n"
},
{
id: 8,
title: "Text Shadow (Tailwind)",
explain:
"في Tailwind CSS لا توجد كلاسّات مدمجة للـ `text-shadow` افتراضيًا، لكن يمكن إضافتها بسهولة من خلال **plugin** أو استخدام **كلاسّات مخصّصة**.\n\n" +
"🔹 **إضافة ظل للنصوص (باستخدام Plugin):**\n" +
"يمكن تثبيت إضافة `tailwindcss-textshadow` لتفعيل الظلال:\n" +
"`bash\nnpm install tailwindcss-textshadow\n`\n" +
"ثم أضفها إلى `tailwind.config.js`:\n" +
"`js\nplugins: [require('tailwindcss-textshadow')],\n`\n\n" +
"بعدها يمكنك استخدام:\n" +
"- `text-shadow` → ظل بسيط\n" +
"- `text-shadow-md` → ظل متوسط\n" +
"- `text-shadow-lg` → ظل قوي\n" +
"- `text-shadow-none` → بدون ظل\n\n" +
"🔹 **بدون Plugin (كلاس مخصص):**\n" +
"يمكنك إضافة كلاس يدوي داخل ملف CSS الخاص بك:\n" +
"`css\n.text-shadow {\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n}\n`\n" +
"ثم استخدمه مع Tailwind:\n" +
"`<p class='text-shadow text-lg font-bold'>Hello</p>`\n",

example:
"1- ظل بسيط للنص (Plugin):\n"+
"<p class='text-shadow text-2xl font-bold'>Hello World</p>\n"+
"----------------------------------------\n"+
"2- ظل متوسط:\n"+
"<p class='text-shadow-md text-3xl font-semibold'>Blurred Shadow</p>\n"+
"----------------------------------------\n"+
"3- أكثر من ظل (كود مخصص):\n"+
"<p class='text-lg font-bold' style='text-shadow: 1px 1px red, -1px -1px blue;'>Multiple Shadows</p>\n"+
"----------------------------------------\n"+
"4- باستخدام RGBA للشفافية:\n"+
"<p class='text-xl' style='text-shadow: 2px 2px 5px rgba(0,0,0,0.5);'>Soft Shadow</p>\n"
},
{
id: 9,
title: "Overflow (Tailwind)",
explain:
"في Tailwind CSS نتحكم في عرض المحتوى الزائد عن العنصر باستخدام كلاسّات الـ `overflow`.\n\n" +
"🔹 **الخصائص الأساسية:**\n" +
"- `overflow-visible` ➜ المحتوى الزائد يظهر خارج العنصر (الافتراضي)\n" +
"- `overflow-hidden` ➜ إخفاء المحتوى الزائد\n" +
"- `overflow-scroll` ➜ إظهار شريط تمرير دائم\n" +
"- `overflow-auto` ➜ شريط تمرير فقط عند الحاجة\n\n" +
"🔹 **للتحكم في الاتجاه:**\n" +
"- `overflow-x-hidden`, `overflow-y-auto`, إلخ.\n\n" +
"🔹 **ملاحظات:**\n" +
"- يمكن الجمع بين `overflow` مع `max-h-`, `max-w-` لضبط الأبعاد.\n" +
"- مهم لتفادي خروج النصوص أو الصور عن الحاوية.\n",

example:
"1- overflow-visible:\n"+
"<div class='w-24 h-12 border border-black overflow-visible'>نص طويل جدا لن يختفي</div>\n"+
"----------------------------------------\n"+
"2- overflow-hidden:\n"+
"<div class='w-24 h-12 border border-black overflow-hidden'>نص طويل جدا ولن يظهر كله</div>\n"+
"----------------------------------------\n"+
"3- overflow-scroll:\n"+
"<div class='w-24 h-12 border border-black overflow-scroll'>نص طويل جدا وسيظهر شريط تمرير</div>\n"+
"----------------------------------------\n"+
"4- overflow-auto:\n"+
"<div class='w-24 h-12 border border-black overflow-auto'>نص طويل جدا وسيظهر الشريط عند الحاجة</div>\n"+
"----------------------------------------\n"+
"5- overflow-x و overflow-y:\n"+
"<div class='w-32 h-16 border border-black overflow-x-scroll overflow-y-hidden whitespace-nowrap'>هذا نص طويل جدا في اتجاه أفقي فقط</div>\n"
},
{
id: 10,
title: "Text Align (Tailwind)",
explain:
"في Tailwind CSS يتم التحكم في محاذاة النصوص باستخدام كلاسّات `text-align`.\n\n" +
"🔹 **الكلاسّات الأساسية:**\n" +
"- `text-left` ➜ محاذاة النص لليسار.\n" +
"- `text-right` ➜ محاذاة النص لليمين.\n" +
"- `text-center` ➜ محاذاة النص في المنتصف.\n" +
"- `text-justify` ➜ توزيع النص ليملأ السطر بالكامل.\n" +
"- `text-start` و `text-end` ➜ تتبع اتجاه النص (LTR / RTL).\n\n" +
"🔹 **ملاحظات:**\n" +
"- هذه الكلاسّات تؤثر فقط على النصوص داخل العنصر.\n" +
"- يمكن دمجها مع `direction` عبر `dir='rtl'` أو `ltr` لتغيير الاتجاه.\n" +
"- يمكن استخدامها استجابيًا مثل `md:text-center`, `lg:text-right`.\n",

example:
"1- text-left:\n"+
"<div class='w-72 border border-black text-left'>هذا نص بمحاذاة لليسار</div>\n"+
"----------------------------------------\n"+
"2- text-right:\n"+
"<div class='w-72 border border-black text-right'>هذا نص بمحاذاة لليمين</div>\n"+
"----------------------------------------\n"+
"3- text-center:\n"+
"<div class='w-72 border border-black text-center'>هذا نص في المنتصف</div>\n"+
"----------------------------------------\n"+
"4- text-justify:\n"+
"<div class='w-72 border border-black text-justify'>هذا نص سيتم توزيعه بالتساوي عبر السطر بالكامل لتبدو الفقرات منسقة بشكل متوازن</div>\n"+
"----------------------------------------\n"+
"5- text-start / text-end:\n"+
"<div class='w-72 border border-black text-start' dir='rtl'>بداية السطر حسب الاتجاه</div>\n"+
"<div class='w-72 border border-black text-end' dir='rtl'>نهاية السطر حسب الاتجاه</div>\n"
},
{
id: 11,
title: "Vertical Align (Tailwind)",
explain:
"في Tailwind CSS، نستخدم كلاسّات `align-*` للتحكم في المحاذاة العمودية للعناصر **inline** أو **table-cell**.\n\n" +
"🔹 **الكلاسّات المتاحة:**\n" +
"- `align-baseline` ➜ محاذاة على خط الأساس للنص (الافتراضي).\n" +
"- `align-top` ➜ محاذاة لأعلى.\n" +
"- `align-middle` ➜ محاذاة في المنتصف عموديًا.\n" +
"- `align-bottom` ➜ محاذاة للأسفل.\n" +
"- `align-text-top` ➜ محاذاة لأعلى النص.\n" +
"- `align-text-bottom` ➜ محاذاة لأسفل النص.\n\n" +
"🔹 **ملاحظات:**\n" +
"- تعمل فقط على العناصر `inline`, `inline-block`, و `table-cell`.\n" +
"- لا تعمل على عناصر block بشكل مباشر.\n" +
"- مفيدة عند محاذاة الصور أو الرموز مع النص.\n",

example:
"1- align-top:\n"+
"<div class='h-24 border border-black'>"+
"<span class='inline-block align-top border border-red-500'>أعلى</span>"+
"<span class='inline-block border border-blue-500'>النص العادي</span></div>\n"+
"----------------------------------------\n"+
"2- align-middle:\n"+
"<div class='h-24 border border-black'>"+
"<span class='inline-block align-middle border border-red-500'>وسط</span>"+
"<span class='inline-block border border-blue-500'>النص العادي</span></div>\n"+
"----------------------------------------\n"+
"3- align-bottom:\n"+
"<div class='h-24 border border-black'>"+
"<span class='inline-block align-bottom border border-red-500'>أسفل</span>"+
"<span class='inline-block border border-blue-500'>النص العادي</span></div>\n"+
"----------------------------------------\n"+
"4- align-text-top / align-text-bottom:\n"+
"<div class='h-24 border border-black'>"+
"<span class='inline-block align-text-top border border-green-500'>أعلى النص</span>"+
"<span class='inline-block align-text-bottom border border-yellow-500'>أسفل النص</span></div>\n"
},
{
id: 12,
title: "Text Decoration (Tailwind)",
explain:
"في Tailwind CSS، نستخدم كلاسّات `underline`, `overline`, `line-through`, و `no-underline` لتزيين النص.\n\n" +
"🔹 **الكلاسّات الأساسية:**\n" +
"- `underline` ➜ خط تحت النص.\n" +
"- `overline` ➜ خط فوق النص.\n" +
"- `line-through` ➜ خط يمر عبر النص.\n" +
"- `no-underline` ➜ إزالة أي تزيين.\n\n" +
"🔹 **تحكم إضافي:**\n" +
"- `decoration-{color}` ➜ لتغيير لون الخط (مثل `decoration-red-500`).\n" +
"- `decoration-{style}` ➜ لتغيير نوع الخط (مثل `decoration-dotted`, `decoration-dashed`, `decoration-wavy`).\n" +
"- `decoration-{thickness}` ➜ لتغيير سمك الخط (مثل `decoration-2`).\n\n" +
"💡 **ملاحظات:**\n" +
"- مفيدة جدًا للروابط أو النصوص المزخرفة.\n" +
"- في Tailwind يمكن دمج أكثر من كلاس مثل `underline decoration-wavy decoration-blue-500`.\n",

example:
"1- خط تحت النص:\n"+
"<p class='underline'>هذا نص تحته خط</p>\n"+
"----------------------------------------\n"+
"2- خط فوق النص:\n"+
"<p class='overline'>هذا نص عليه خط فوقه</p>\n"+
"----------------------------------------\n"+
"3- خط يمر عبر النص:\n"+
"<p class='line-through'>هذا نص مخطوط</p>\n"+
"----------------------------------------\n"+
"4- بدون أي تزيين:\n"+
"<p class='no-underline'>هذا نص بدون أي تزيين</p>\n"+
"----------------------------------------\n"+
"5- تغيير لون الخط ونمطه:\n"+
"<p class='underline decoration-wavy decoration-red-500'>نص بخط أحمر مموج تحت النص</p>\n"+
"----------------------------------------\n"+
"6- سمك الخط:\n"+
"<p class='underline decoration-4 decoration-green-600'>نص بخط سميك أخضر</p>\n"
},
{
id: 13,
title: "Text Transform (Tailwind)",
explain:
"في Tailwind CSS نستخدم كلاسّات `uppercase`, `lowercase`, `capitalize`, و `normal-case` للتحكم في شكل الحروف.\n\n" +
"🔹 **الكلاسّات المتاحة:**\n" +
"- `uppercase` ➜ يحول كل الحروف إلى كبيرة.\n" +
"- `lowercase` ➜ يحول كل الحروف إلى صغيرة.\n" +
"- `capitalize` ➜ يجعل أول حرف من كل كلمة كبير.\n" +
"- `normal-case` ➜ يعيد النص إلى حالته الأصلية.\n\n" +
"💡 **ملاحظات:**\n" +
"- هذه الكلاسات لا تغيّر النص في المحتوى نفسه، فقط في العرض.\n" +
"- مفيدة جدًا للعناوين أو الأزرار أو أسماء الأقسام.\n",

example:
"1- كل الحروف كبيرة:\n"+
"<p class='uppercase'>هذا نص بالحروف الكبيرة</p>\n"+
"----------------------------------------\n"+
"2- كل الحروف صغيرة:\n"+
"<p class='lowercase'>هذا نص بالحروف الصغيرة</p>\n"+
"----------------------------------------\n"+
"3- أول حرف من كل كلمة كبير:\n"+
"<p class='capitalize'>هذا نص كل كلمة أول حرف كبير</p>\n"+
"----------------------------------------\n"+
"4- الاحتفاظ بالنص كما هو:\n"+
"<p class='normal-case'>هذا نص بدون أي تحويل</p>\n"
},{
id: 14,
title: "Spacing (Letter & Line) (Tailwind)",
explain:
"في Tailwind CSS نقدر نتحكم في المسافات بين الأحرف والكلمات والأسطر باستخدام كلاسّات جاهزة.\n\n" +
"🔹 **letter-spacing (المسافة بين الأحرف):**\n" +
"- `tracking-tighter` ➜ مسافة أقل بين الأحرف.\n" +
"- `tracking-tight` ➜ ضيقة قليلاً.\n" +
"- `tracking-normal` ➜ المسافة الافتراضية.\n" +
"- `tracking-wide` ➜ مسافة متوسطة.\n" +
"- `tracking-wider` ➜ مسافة أوسع.\n" +
"- `tracking-widest` ➜ أكبر مسافة بين الأحرف.\n\n" +
"🔹 **line-height (المسافة بين الأسطر):**\n" +
"- `leading-none` ➜ بدون مسافة بين الأسطر تقريبًا.\n" +
"- `leading-tight` ➜ مسافة ضيقة.\n" +
"- `leading-snug` ➜ مناسبة قليلاً.\n" +
"- `leading-normal` ➜ المسافة الافتراضية.\n" +
"- `leading-relaxed` ➜ أسطر متباعدة.\n" +
"- `leading-loose` ➜ أسطر متباعدة جدًا.\n\n" +
"🔹 **word-spacing:** (Tailwind لا تحتوي كلاس مباشر، لكن يمكن استخدام `[word-spacing:value]` مع JIT)\n\n" +
"💡 **ملاحظات:**\n" +
"- letter-spacing تستخدم عادة للعناوين.\n" +
"- line-height مهمة جدًا لتحسين قراءة النصوص الطويلة.\n",

example:
"1- مسافة بين الأحرف:\n"+
"<p class='tracking-widest'>هذا نص مع مسافة كبيرة بين الأحرف</p>\n"+
"----------------------------------------\n"+
"2- مسافة بين الأسطر:\n"+
"<p class='leading-loose'>هذا نص يحتوي على أسطر متعددة\nوهناك مسافة كبيرة بينها</p>\n"+
"----------------------------------------\n"+
"3- مثال على استخدام الاثنين:\n"+
"<p class='tracking-wide leading-relaxed'>نص بمسافة بين الأحرف والأسطر محسّنة</p>\n"
},
{
id: 15,
title: "Text Indent & White Space (Tailwind)",
explain:
"في Tailwind CSS نستخدم كلاسّات جاهزة للتحكم في المسافة في بداية الفقرة (text-indent) وطريقة التعامل مع المسافات البيضاء والأسطر (white-space).\n\n" +
"🔹 **text-indent (بداية السطر الأول):**\n" +
"- `indent-0` ➜ بدون مسافة.\n" +
"- `indent-4` ➜ مسافة صغيرة (1rem).\n" +
"- `indent-8` ➜ مسافة أكبر (2rem).\n" +
"- يمكن استخدام `[text-indent:value]` لتحديد أي قيمة مخصصة.\n\n" +
"🔹 **white-space (المسافات والأسطر):**\n" +
"- `whitespace-normal` ➜ السلوك الافتراضي (يلتف النص).\n" +
"- `whitespace-nowrap` ➜ يمنع التفاف النص.\n" +
"- `whitespace-pre` ➜ يحافظ على المسافات والأسطر كما هي (مثل `<pre>`).\n" +
"- `whitespace-pre-line` ➜ يحافظ على الأسطر فقط.\n" +
"- `whitespace-pre-wrap` ➜ يحافظ على المسافات والأسطر ويف الالتفاف عند الحاجة.\n\n" +
"💡 **ملاحظات:**\n" +
"- `indent-*` مفيدة لتنسيق الفقرات في المقالات.\n" +
"- `whitespace-*` تستخدم كثيرًا عند عرض نصوص برمجية أو محتوى منسق.\n",

example:
"1- text-indent لتحديد مسافة بداية الفقرة:\n"+
"<p class='indent-8'>هذا نص يبدأ بمسافة من اليسار باستخدام indent-8</p>\n"+
"----------------------------------------\n"+
"2- white-space normal:\n"+
"<p class='whitespace-normal w-60 border p-2'>هذا نص طويل سيلتف تلقائيًا عند نهاية السطر.</p>\n"+
"----------------------------------------\n"+
"3- white-space nowrap:\n"+
"<p class='whitespace-nowrap w-60 border p-2 overflow-auto'>هذا نص طويل لن يلتف وسيبقى في سطر واحد</p>\n"+
"----------------------------------------\n"+
"4- white-space pre:\n"+
"<p class='whitespace-pre border p-2'>هذا نص\nيحافظ على\nكل الأسطر والمسافات</p>\n"
},{
id: 16,
title: "Text Overflow & Word Handling (Tailwind)",
explain:
"في Tailwind CSS نتحكم في النصوص الطويلة والتفاف الكلمات بسهولة باستخدام كلاسّات جاهزة.\n\n" +
"🔹 **text-overflow:**\n" +
"- `truncate` ➜ يخفي النص الزائد ويضيف (...) تلقائيًا (يحتاج معاه `overflow-hidden` و `whitespace-nowrap`).\n" +
"- `text-ellipsis` ➜ نفس فكرة `truncate` لكن أكثر وضوحًا في Tailwind 3.\n" +
"- `text-clip` ➜ يقص النص بدون نقاط (...).\n\n" +
"🔹 **word-wrap / overflow-wrap:**\n" +
"- `break-normal` ➜ السلوك الافتراضي (ما بيكسر الكلمات).\n" +
"- `break-words` ➜ يسمح بكسر الكلمة عند الحاجة.\n" +
"- `break-all` ➜ يكسر الكلمة في أي مكان لو ضاقت المساحة.\n\n" +
"🔹 **white-space:**\n" +
"- غالبًا نستخدم `whitespace-nowrap` مع `truncate` أو `ellipsis`.\n\n" +
"💡 **ملاحظات:**\n" +
"- `truncate` مفيدة في القوائم والبطاقات.\n" +
"- `break-words` و `break-all` تمنع خروج النص عن الإطار.\n",

example:
"1- text-overflow مع ellipsis:\n"+
"<div class='w-40 whitespace-nowrap overflow-hidden text-ellipsis border p-2'>هذا نص طويل جدًا لن يظهر كله</div>\n"+
"----------------------------------------\n"+
"2- text-overflow مع clip:\n"+
"<div class='w-40 whitespace-nowrap overflow-hidden text-clip border p-2'>هذا نص طويل جدًا لن يظهر كله</div>\n"+
"----------------------------------------\n"+
"3- كسر الكلمة باستخدام break-words:\n"+
"<div class='w-40 break-words border p-2'>كلمةطويلةجداًبدونفراغاتلتكسرالسطر</div>\n"+
"----------------------------------------\n"+
"4- كسر الكلمة في أي مكان باستخدام break-all:\n"+
"<div class='w-40 break-all border p-2'>كلمةطويلةجداًبدونفراغاتلتكسرالسطر</div>\n"
},
{
id: 17,
title: "Inheritance (Tailwind)",
explain:
"في Tailwind CSS، الوراثة بتحصل تلقائيًا لبعض خصائص النصوص (زي اللون والخط)، لكن معظم الخصائص بتحتاج كلاس محدد لكل عنصر.\n\n" +
"🔹 **الخصائص اللي تُورّث تلقائيًا:**\n" +
"- اللون (`text-*`) يُورّث عادة داخل العناصر.\n" +
"- خصائص الخطوط (`font-*`) زي `font-bold`, `font-serif`, `text-lg` تنتقل للأبناء.\n\n" +
"🔹 **خصائص لا تُورّث:**\n" +
"- الخلفية (`bg-*`)\n" +
"- الهوامش (`m-*`, `p-*`)\n" +
"- الحدود (`border-*`)\n" +
"- الأبعاد (`w-*`, `h-*`)\n\n" +
"🔹 **فرض الوراثة يدويًا:**\n" +
"يمكن استخدام كلاس `inherit` في بعض الحالات الحديثة (Tailwind 3.3+) مثل:\n" +
"- `text-inherit` ➜ يجعل العنصر يرث لون النص.\n" +
"- `font-inherit` ➜ يرث نوع وحجم الخط.\n" +
"- `bg-inherit` ➜ يرث الخلفية من الأب (نادر الاستخدام).\n\n" +
"💡 **ملاحظات:**\n" +
"- Tailwind مصمم لتجنب الاعتماد الكلي على الوراثة لتقليل التعقيد.\n" +
"- استخدم الوراثة فقط عند الحاجة لتناسق النصوص داخل عناصر متشابهة.\n",

example:
"1- وراثة اللون:\n"+
"<div class='text-red-600'>\n"+
"  <p>هذا النص يرث اللون الأحمر من العنصر الأب</p>\n"+
"</div>\n"+
"----------------------------------------\n"+
"2- عدم وراثة الخلفية:\n"+
"<div class='bg-yellow-300 p-2'>\n"+
"  <p class='bg-white'>هذا النص لا يرث الخلفية الصفراء</p>\n"+
"</div>\n"+
"----------------------------------------\n"+
"3- فرض الوراثة يدويًا:\n"+
"<div class='text-xl font-bold text-blue-700'>\n"+
"  <p class='text-inherit font-inherit'>هذا النص يرث الخصائص يدويًا</p>\n"+
"</div>\n"
},
{
id: 18,
title: "Fonts (Tailwind)",
explain:
"في Tailwind CSS، التحكم في الخطوط بيكون من خلال كلاسّات جاهزة بتتعامل مع نوع الخط، حجم النص، سمك الخط، والمحاذاة.\n\n" +
"🔹 **أنواع الخطوط (Font Family):**\n" +
"- `font-sans` ➜ خطوط بدون ذيول (افتراضيًا: ui-sans-serif)\n" +
"- `font-serif` ➜ خطوط بذيل (مثل Times)\n" +
"- `font-mono` ➜ خطوط أحادية العرض (مثل Courier)\n\n" +
"🔹 **حجم النص (Font Size):**\n" +
"- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, ... حتى `text-9xl`\n\n" +
"🔹 **وزن الخط (Font Weight):**\n" +
"- `font-thin`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`, `font-black`\n\n" +
"🔹 **نمط الخط (Font Style):**\n" +
"- `italic` ➜ نص مائل\n" +
"- `not-italic` ➜ نص عادي\n\n" +
"🔹 **تحويل الحروف (Text Transform):**\n" +
"- `uppercase`, `lowercase`, `capitalize`, `normal-case`\n\n" +
"🔹 **تخصيص الخطوط (Custom Fonts):**\n" +
"يمكنك إضافة خطوط مخصصة داخل ملف tailwind.config.js:\n" +
"`js\n" +
    "theme: {\n" +
    "  extend: {\n" +
    "    fontFamily: {\n" +
    "      cairo: ['Cairo', 'sans-serif'],\n" +
    "    },\n" +
    "  },\n" +
    "}\n" +
    "`\n" +
"ثم تستخدمها: `font-cairo`\n\n" +
"💡 **ملاحظات:**\n" +
"- يمكن الجمع بين `text-*` و `font-*` لتنسيق متكامل.\n" +
"- يفضل استخدام أحجام نسبية (مثل `text-lg`) لتوافق التصميم مع مختلف الأجهزة.\n",

example:
"1- أنواع الخطوط:\n"+
"<p class='font-sans text-lg'>نص بخط Sans</p>\n"+
"<p class='font-serif text-lg'>نص بخط Serif</p>\n"+
"<p class='font-mono text-lg'>نص بخط Mono</p>\n"+
"----------------------------------------\n"+
"2- أحجام النصوص:\n"+
"<p class='text-xs'>نص صغير جدًا</p>\n"+
"<p class='text-base'>نص بالحجم الافتراضي</p>\n"+
"<p class='text-3xl'>نص كبير</p>\n"+
"----------------------------------------\n"+
"3- سمك الخط:\n"+
"<p class='font-light'>خط خفيف</p>\n"+
"<p class='font-semibold'>خط متوسط</p>\n"+
"<p class='font-bold'>خط عريض</p>\n"+
"----------------------------------------\n"+
"4- تحويل الحروف:\n"+
"<p class='uppercase'>uppercase text</p>\n"+
"<p class='capitalize'>capitalize text</p>\n"+
"<p class='lowercase'>LOWERCASE TEXT</p>\n"+
"----------------------------------------\n"+
"5- نص مائل:\n"+
"<p class='italic'>هذا نص مائل</p>\n"+
"<p class='not-italic'>هذا نص غير مائل</p>\n"
},
{
id: 19,
title: "Colors (Tailwind)",
explain:
"في Tailwind CSS نستخدم كلاسّات جاهزة لتطبيق الألوان على النصوص، الخلفيات، الحدود، وغيرهم.\n\n" +
"🔹 **ألوان النص (Text Color):**\n" +
"- `text-{color}` ➜ لتغيير لون النص.\n" +
"مثلاً: `text-red-500`, `text-blue-700`, `text-gray-300`.\n\n" +
"🔹 **ألوان الخلفية (Background Color):**\n" +
"- `bg-{color}` ➜ لتغيير لون الخلفية.\n" +
"مثلاً: `bg-green-200`, `bg-yellow-400`, `bg-black`.\n\n" +
"🔹 **ألوان الحدود (Border Color):**\n" +
"- `border-{color}` ➜ لتغيير لون الحد.\n" +
"مثلاً: `border-red-500`, `border-blue-300`.\n\n" +
"🔹 **ألوان التدرجات (Gradient Colors):**\n" +
"- تبدأ بـ `bg-gradient-to-*` + من (`from-*`) إلى (`to-*`).\n" +
"مثلاً: `bg-gradient-to-r from-blue-500 to-green-500`\n\n" +
"🔹 **ألوان النص عند التفاعل (Hover):**\n" +
"- يمكن إضافة `hover:` لتغيير اللون عند المرور.\n" +
"مثلاً: `hover:text-red-600`, `hover:bg-blue-400`\n\n" +
"💡 **ملاحظات:**\n" +
"- الألوان في Tailwind مُنظَّمة بنظام درجات من 50 إلى 900.\n" +
"- كل رقم أعلى يعني لون أغمق.\n" +
"- يمكن تخصيص الألوان داخل ملف `tailwind.config.js`.\n",

example:
"1- تغيير لون النص:\n"+
"<p class='text-red-500'>نص أحمر</p>\n"+
"<p class='text-blue-700'>نص أزرق غامق</p>\n"+
"<p class='text-gray-300 bg-black'>نص رمادي على خلفية سوداء</p>\n"+
"----------------------------------------\n"+
"2- لون الخلفية:\n"+
"<div class='bg-yellow-200 p-4'>خلفية صفراء فاتحة</div>\n"+
"<div class='bg-green-500 text-white p-4'>خلفية خضراء</div>\n"+
"----------------------------------------\n"+
"3- لون الحدود:\n"+
"<div class='border-4 border-blue-400 p-2'>حد أزرق</div>\n"+
"<div class='border border-red-600 p-2'>حد أحمر</div>\n"+
"----------------------------------------\n"+
"4- تدرج لوني:\n"+
"<div class='bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4'>تدرج من بنفسجي إلى وردي</div>\n"+
"----------------------------------------\n"+
"5- عند التمرير (Hover):\n"+
"<button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>زر يتغير عند المرور</button>\n"
},

{
id: 20,
title: "Cursor (Tailwind)",
explain:
"في Tailwind CSS نقدر نتحكم في شكل مؤشر الماوس بسهولة باستخدام كلاسّات `cursor-*`.\n\n" +
"🔹 **القيم الشائعة:**\n" +
"- `cursor-auto` ➜ المؤشر الافتراضي (يتغير حسب نوع العنصر).\n" +
"- `cursor-default` ➜ المؤشر العادي (سهم).\n" +
"- `cursor-pointer` ➜ شكل اليد (يُستخدم عادة للأزرار والروابط).\n" +
"- `cursor-text` ➜ مؤشر النص (خط عمودي).\n" +
"- `cursor-move` ➜ مؤشر الحركة (أسهم الاتجاهات الأربعة).\n" +
"- `cursor-not-allowed` ➜ مؤشر الحظر (رمز × أو دائرة مقطوعة).\n" +
"- `cursor-wait` ➜ مؤشر الانتظار (ساعة رملية أو دائرة تحميل).\n" +
"- `cursor-crosshair` ➜ شكل علامة + (دقيق).\n\n" +
"💡 **ملاحظات:**\n" +
"- يمكن استخدام `hover:cursor-*` لتغيير شكل المؤشر عند التمرير.\n" +
"- Tailwind لا يدعم مؤشرات مخصصة بـ `url()` مباشرة، لكن يمكن إضافتها عبر CSS مخصص.\n",

example:
"1- المؤشر الافتراضي:\n"+
"<div class='cursor-default w-48 h-12 bg-blue-100 flex items-center justify-center'>Default</div>\n"+
"----------------------------------------\n"+
"2- شكل اليد:\n"+
"<div class='cursor-pointer w-48 h-12 bg-green-200 flex items-center justify-center'>Pointer</div>\n"+
"----------------------------------------\n"+
"3- مؤشر النص:\n"+
"<div class='cursor-text w-48 h-12 bg-yellow-200 flex items-center justify-center'>Text</div>\n"+
"----------------------------------------\n"+
"4- مؤشر الحظر:\n"+
"<div class='cursor-not-allowed w-48 h-12 bg-red-200 flex items-center justify-center'>Not Allowed</div>\n"+
"----------------------------------------\n"+
"5- عند التمرير (Hover):\n"+
"<button class='bg-purple-400 text-white px-4 py-2 rounded hover:cursor-wait'>Hover = Wait</button>\n"
},
{
id: 21,
title: "Position (Tailwind)",
explain:
"في Tailwind CSS نستخدم كلاسّات للتحكم في موضع العناصر، وهي تعادل خاصية `position` في CSS.\n\n" +
"🔹 **الكلاسات الأساسية:**\n" +
"- `static` ➜ الوضع الافتراضي (العنصر في التدفق الطبيعي).\n" +
"- `relative` ➜ العنصر يمكن تحريكه نسبةً إلى موقعه الأصلي.\n" +
"- `absolute` ➜ العنصر يتم وضعه نسبةً إلى أقرب عنصر أب ذو `relative`.\n" +
"- `fixed` ➜ العنصر ثابت بالنسبة للشاشة حتى عند التمرير.\n" +
"- `sticky` ➜ العنصر يظل ثابتًا أثناء التمرير حتى حد معين.\n\n" +
"🔸 **كلاسات تحديد الاتجاهات:**\n" +
"- `top-*`, `right-*`, `bottom-*`, `left-*` ➜ لتحديد المسافة من الجهة المطلوبة.\n" +
"مثال: `top-0`, `right-4`, `left-1/2`, `bottom-10`.\n\n" +
"💡 **ملاحظات:**\n" +
"- لتعمل `absolute` أو `fixed` بشكل صحيح، يجب تحديد قيم الاتجاه.\n" +
"- `sticky` تحتاج أن يكون الأب يحتوي على مساحة كافية حتى يظهر تأثيرها.\n",

example:
"1- `relative`:\n"+
"<div class='relative bg-blue-200 p-4'>\n"+
"  عنصر نسبي\n"+
"  <div class='absolute top-0 right-0 bg-blue-500 text-white px-2 py-1'>عنصر مطلق</div>\n"+
"</div>\n"+
"----------------------------------------\n"+
"2- `absolute` داخل عنصر نسبي:\n"+
"<div class='relative bg-green-200 h-32'>\n"+
"  <div class='absolute bottom-2 right-2 bg-green-500 text-white px-3 py-1'>Bottom Right</div>\n"+
"</div>\n"+
"----------------------------------------\n"+
"3- `fixed`:\n"+
"<div class='fixed top-0 left-0 bg-red-500 text-white px-4 py-2'>شريط علوي ثابت</div>\n"+
"----------------------------------------\n"+
"4- `sticky`:\n"+
"<div class='h-48 overflow-y-scroll bg-gray-100'>\n"+
"  <div class='sticky top-0 bg-yellow-300 p-2'>عنوان ثابت أثناء التمرير</div>\n"+
"  <p class='p-2'>محتوى طويل جدًا<br>يتكرر<br>مرات<br>عديدة<br>...</p>\n"+
"</div>\n"+
"----------------------------------------\n"+
"5- تحديد الاتجاهات:\n"+
"<div class='relative bg-purple-200 h-32'>\n"+
"  <div class='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white px-3 py-1'>منتصف</div>\n"+
"</div>\n"
},

{
id: 22,
title: "Z-Index (Tailwind)",
explain:
"في Tailwind CSS نستخدم `z-*` للتحكم في ترتيب العناصر فوق أو تحت بعضها (Z-axis).\n\n" +
"🔹 **الكلاسات الأساسية:**\n" +
"- `z-0` ➜ العنصر في المستوى 0.\n" +
"- `z-10`, `z-20`, `z-30`, `z-40`, `z-50` ➜ مستويات أعلى.\n" +
"- `z-auto` ➜ يترك المتصفح يحدد الترتيب.\n\n" +
"🔸 **ملاحظات مهمة:**\n" +
"- الـ `z-index` يعمل فقط على العناصر التي تحتوي على `position` غير `static`.\n" +
"- كلما زادت قيمة `z-*`، يكون العنصر فوق العناصر ذات القيم الأقل.\n" +
"- يمكن تخصيص قيم إضافية في ملف Tailwind config إذا احتجت.\n",

example:
"1- مثال بسيط:\n"+
"<div class='relative h-32'>\n"+
"  <div class='absolute top-4 left-4 w-24 h-24 bg-blue-400 z-10'>z-10</div>\n"+
"  <div class='absolute top-8 left-8 w-24 h-24 bg-green-400 z-20'>z-20</div>\n"+
"  <div class='absolute top-12 left-12 w-24 h-24 bg-red-400 z-30'>z-30</div>\n"+
"</div>\n"+
"----------------------------------------\n"+
"2- استخدام `z-auto`:\n"+
"<div class='relative h-24'>\n"+
"  <div class='absolute w-24 h-24 bg-purple-400 z-auto'>z-auto</div>\n"+
"  <div class='absolute w-24 h-24 bg-yellow-400 top-4 left-4 z-10'>z-10</div>\n"+
"</div>\n"+
"----------------------------------------\n"+
"3- مثال عملي (نوافذ متداخلة):\n"+
"<div class='relative h-48'>\n"+
"  <div class='absolute top-6 left-6 w-32 h-32 bg-gray-300 z-10'>خلفية</div>\n"+
"  <div class='absolute top-10 left-10 w-32 h-32 bg-gray-500 text-white z-20'>أمامية</div>\n"+
"</div>\n"
},
{
id: 23,
title: "Lists (Tailwind)",
explain:
"في Tailwind CSS نستخدم كلاسات لتنسيق القوائم (Lists) بسهولة.\n\n" +
"🔹 **أنواع القوائم:**\n" +
"- `list-disc` ➜ نقاط دائرية (افتراضية للقوائم غير المرتبة).\n" +
"- `list-decimal` ➜ أرقام للقوائم المرتبة.\n" +
"- `list-none` ➜ إزالة الرموز تمامًا.\n\n" +
"🔸 **محاذاة الرموز:**\n" +
"- `list-inside` ➜ يجعل الرموز داخل النص.\n" +
"- `list-outside` ➜ يجعل الرموز خارج النص (الافتراضي).\n\n" +
"🔹 **ملاحظات:**\n" +
"- يمكن دمج الكلاسات مع `pl-*` لإضافة مسافة قبل النص.\n" +
"- Tailwind لا يغيّر نوع القائمة نفسها (`ul` أو `ol`)، فقط التنسيق.\n",

example:
"1- قائمة نقطية:\n"+
"<ul class='list-disc pl-5'>\n"+
"  <li>HTML</li>\n"+
"  <li>CSS</li>\n"+
"  <li>JavaScript</li>\n"+
"</ul>\n"+
"----------------------------------------\n"+
"2- قائمة مرقمة:\n"+
"<ol class='list-decimal pl-5'>\n"+
"  <li>المقدمة</li>\n"+
"  <li>التفاصيل</li>\n"+
"  <li>الخاتمة</li>\n"+
"</ol>\n"+
"----------------------------------------\n"+
"3- قائمة بدون رموز:\n"+
"<ul class='list-none pl-0'>\n"+
"  <li>العنصر الأول</li>\n"+
"  <li>العنصر الثاني</li>\n"+
"</ul>\n"+
"----------------------------------------\n"+
"4- الرموز داخل النص:\n"+
"<ul class='list-disc list-inside'>\n"+
"  <li>نقطة داخل النص</li>\n"+
"  <li>سطر آخر</li>\n"+
"</ul>\n"
},
{
id: 24,
title: "Actions & States (Tailwind)",
explain:
"في Tailwind CSS نقدر نضيف تأثيرات تفاعلية على العناصر بسهولة باستخدام **Modifiers**.\n\n" +
"🔹 **أشهر الحالات (States):**\n" +
"- `hover:` ➜ عند تمرير الماوس على العنصر.\n" +
"- `focus:` ➜ عند تركيز المستخدم على عنصر إدخال.\n" +
"- `active:` ➜ عند الضغط على العنصر.\n" +
"- `visited:` ➜ بعد زيارة رابط.\n" +
"- `disabled:` ➜ عندما يكون الزر أو الحقل معطل.\n\n" +
"🔸 **ملاحظات مهمة:**\n" +
"- يمكن دمج الحالات مع أي خاصية (ألوان، حدود، خلفية، ظلال...).\n" +
"- ترتيبها في Tailwind يكون دائمًا: `state:property` مثل `hover:bg-blue-500`.\n" +
"- يمكن استخدام أكثر من حالة على نفس العنصر.\n",

example:
"1- تغيير اللون عند المرور:\n"+
"<button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Hover Me</button>\n"+
"----------------------------------------\n"+
"2- تأثير الضغط:\n"+
"<button class='bg-green-500 active:bg-green-700 text-white py-2 px-4 rounded'>Click Me</button>\n"+
"----------------------------------------\n"+
"3- تأثير التركيز (input):\n"+
"<input class='border border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200 p-2 rounded' placeholder='اكتب هنا'>\n"+
"----------------------------------------\n"+
"4- زر معطل:\n"+
"<button class='bg-gray-400 text-white py-2 px-4 rounded disabled:opacity-50' disabled>Disabled</button>\n"+
"----------------------------------------\n"+
"5- تأثيرات متعددة:\n"+
"<a class='text-blue-500 hover:text-blue-700 visited:text-purple-600' href='#'>رابط تفاعلي</a>\n"
},
{
id: 25,
title: "Pseudo-elements (Tailwind)",
explain:
"في Tailwind CSS يمكننا التعامل مع العناصر الكاذبة مثل `::before` و`::after` باستخدام الـ **variants** `before:` و `after:`.\n\n" +
"🔹 **ما هي الـ Pseudo-elements؟**\n" +
"- عناصر افتراضية تُستخدم لإضافة محتوى أو تنسيق إضافي دون تعديل HTML.\n" +
"- الأشهر هما:\n" +
"  • `::before` → لإضافة عنصر قبل المحتوى.\n" +
"  • `::after` → لإضافة عنصر بعد المحتوى.\n\n" +
"🔸 **في Tailwind:**\n" +
"- نستخدم `before:` أو `after:` كبادئة للكلاسات.\n" +
"- نفعّل محتوى العنصر بـ `before:content-['']` أو `after:content-['نص']`.\n" +
"- يمكن دمجها مع أي خاصية (لون، حجم، موضع...).\n" +
"- لازم يكون للعنصر `relative` لو هنستخدم position داخل الـ pseudo-element.\n",

example:
"1- إضافة رمز قبل النص:\n"+
"<p class='before:content-[\"→\"] before:mr-2'>عنصر بقيمة before</p>\n"+
"----------------------------------------\n"+
"2- إضافة نص بعد العنصر:\n"+
"<p class='after:content-[\"★\"] after:ml-2 text-yellow-500'>عنصر بقيمة after</p>\n"+
"----------------------------------------\n"+
"3- تزيين عنصر بخط قبل النص:\n"+
"<div class='relative pl-4 before:content-[\"\"] before:absolute before:left-0 before:top-1 before:h-4 before:w-1 before:bg-blue-500'>نص مع خط أزرق</div>\n"+
"----------------------------------------\n"+
"4- استخدام before و after معًا:\n"+
"<div class='relative before:content-[\"«\"] after:content-[\"»\"] text-lg text-gray-700'>اقتباس</div>\n"+
"----------------------------------------\n"+
"💡 **ملاحظات:**\n"+
"- Tailwind يحتاج `content-['']` لتفعيل العنصر.\n"+
"- يمكن تخصيص محتوى قبل/بعد العنصر لأي شكل أو تأثير.\n"+
"- يمكن أيضًا استخدام `first:` و`last:` و`odd:` و`even:` لحالات إضافية."
},
{
id: 26,
title: "Border (Tailwind)",
explain:
"خصائص **Border** في Tailwind CSS تُستخدم للتحكم في حدود العناصر بسهولة وسرعة.\n\n" +
"🔹 **الأساسيات:**\n" +
"- `border` لإضافة حد افتراضي بعرض 1px ولون افتراضي (غالبًا رمادي).\n" +
"- `border-[size]` لتحديد سمك الحد (مثل `border-2`, `border-4`, `border-8`).\n" +
"- `border-[color]` لتحديد لون الحد (مثل `border-red-500`, `border-blue-300`).\n" +
"- `border-[side]` لتحديد جانب معين (`border-t`, `border-b`, `border-l`, `border-r`).\n" +
"- `rounded` لتدوير الحواف (border-radius).\n\n" +
"🔸 **أنواع الحواف (Radius):**\n" +
"- `rounded-none` بدون تدوير.\n" +
"- `rounded-sm`, `rounded`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full`.\n" +
"- يمكن تحديد الجهة مثل: `rounded-t-lg`, `rounded-b-md`, `rounded-l-full`.\n\n" +
"🔸 **أنماط إضافية:**\n" +
"- `border-dashed`, `border-dotted`, `border-double` لتغيير نمط الخط.\n" +
"- `divide-x`, `divide-y` لتقسيم العناصر داخل flex/grid.\n",

example:
"1- حد بسيط:\n"+
"<div class='border p-4'>عنصر بحد بسيط</div>\n"+
"----------------------------------------\n"+
"2- تحديد السمك واللون:\n"+
"<div class='border-4 border-blue-500 p-4'>حد أزرق سُمكه 4px</div>\n"+
"----------------------------------------\n"+
"3- تحديد جانب واحد:\n"+
"<div class='border-t-4 border-green-500 p-4'>حد علوي فقط</div>\n"+
"----------------------------------------\n"+
"4- تدوير الحواف:\n"+
"<div class='border border-gray-400 rounded-lg p-4'>حواف مدورة</div>\n"+
"----------------------------------------\n"+
"5- أنماط مختلفة:\n"+
"<div class='border-2 border-dashed border-red-400 p-4 mb-2'>حد متقطع</div>\n"+
"<div class='border-4 border-dotted border-blue-400 p-4 mb-2'>حد منقط</div>\n"+
"<div class='border-4 border-double border-green-400 p-4'>حد مزدوج</div>\n"+
"----------------------------------------\n"+
"6- استخدام divide بين العناصر:\n"+
"<div class='flex divide-x divide-gray-400'>\n"+
"  <div class='p-2'>1</div>\n"+
"  <div class='p-2'>2</div>\n"+
"  <div class='p-2'>3</div>\n"+
"</div>\n"+
"----------------------------------------\n"+
"💡 **ملاحظات:**\n"+
"- يمكن الجمع بين اللون، السمك، والنمط في نفس الوقت.\n"+
"- `rounded-full` تستخدم لصنع عناصر دائرية (مثل الصور الرمزية)."
},

{
id: 27,
title: "Box Shadow (Tailwind)",
explain:
"خاصية **Box Shadow** في Tailwind CSS تُستخدم لإضافة ظل للعناصر بسهولة.\n\n" +
"🔹 **الأساسيات:**\n" +
"- `shadow` لإضافة ظل افتراضي بسيط.\n" +
"- `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl` للتحكم في قوة الظل.\n" +
"- `shadow-inner` لإضافة ظل داخلي داخل العنصر.\n" +
"- `shadow-none` لإزالة الظل.\n\n" +
"🔹 **الألوان (Tailwind v3+):**\n" +
"- يمكن دمج الظل مع لون عبر `shadow-[color]` مثل `shadow-blue-500/50` (شفافية 50%).\n\n" +
"🔹 **نصائح:**\n" +
"- الظلال تُستخدم لإبراز العناصر (مثل البطاقات أو الأزرار).\n" +
"- يمكنك استخدام `hover:shadow-lg` لإضافة تأثير عند التمرير.\n",

example:
"1- ظل بسيط:\n"+
"<div class='shadow p-4'>ظل بسيط</div>\n"+
"----------------------------------------\n"+
"2- ظلال متعددة القوة:\n"+
"<div class='shadow-sm p-4 mb-2'>ظل صغير</div>\n"+
"<div class='shadow-md p-4 mb-2'>ظل متوسط</div>\n"+
"<div class='shadow-lg p-4 mb-2'>ظل كبير</div>\n"+
"<div class='shadow-xl p-4 mb-2'>ظل أكبر</div>\n"+
"<div class='shadow-2xl p-4'>ظل قوي جدًا</div>\n"+
"----------------------------------------\n"+
"3- ظل داخلي:\n"+
"<div class='shadow-inner p-4'>ظل داخلي</div>\n"+
"----------------------------------------\n"+
"4- ظل بلون محدد (Tailwind v3):\n"+
"<div class='shadow-lg shadow-blue-500/50 p-4'>ظل أزرق شفاف</div>\n"+
"----------------------------------------\n"+
"5- تأثير عند التمرير:\n"+
"<button class='p-3 bg-white shadow hover:shadow-lg transition'>زر بتأثير Hover</button>\n"+
"----------------------------------------\n"+
"💡 **ملاحظات:**\n"+
"- استخدم `transition` لجعل تغيّر الظل أكثر سلاسة.\n"+
"- يمكنك تخصيص الظلال أكثر في ملف tailwind.config.js."
},
{
id: 28,
title: "Transition (Tailwind)",
explain:
"خاصية **Transition** في Tailwind CSS تُستخدم لإضافة حركة سلسة عند تغيّر حالة العنصر (مثل hover أو focus).\n\n" +
"🔹 **الأساسيات:**\n" +
"- `transition` ➜ تفعّل التحويل لجميع الخصائص القابلة للتحريك.\n" +
"- `transition-none` ➜ تعطيل التحويل.\n" +
"- `transition-colors` ➜ لتأثيرات الألوان فقط.\n" +
"- `transition-opacity` ➜ لتأثير الشفافية.\n" +
"- `transition-shadow` ➜ لتأثير الظلال.\n" +
"- `transition-transform` ➜ لتأثيرات التحويل (scale, rotate, translate...).\n\n" +
"🔹 **المدة (Duration):**\n" +
"- استخدم `duration-75`, `duration-150`, `duration-300`, `duration-500`, ... للتحكم بسرعة التحويل.\n\n" +
"🔹 **التأخير (Delay):**\n" +
"- استخدم `delay-75`, `delay-150`, `delay-300`, ... لتأخير البداية.\n\n" +
"🔹 **نوع الحركة (Timing Function):**\n" +
"- `ease-linear`, `ease-in`, `ease-out`, `ease-in-out` للتحكم في تسارع الحركة.\n\n" +
"💡 **ملاحظات:**\n" +
"- غالبًا ما تُستخدم مع `hover:` أو `focus:` أو `active:` لتغيير اللون أو الظل أو الحجم بسلاسة.\n" +
"- يمكن دمجها مع `transform` للحصول على تأثيرات تفاعلية أنيقة.\n",

example:
"1- انتقال على اللون:\n"+
"<button class='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 transition-colors duration-300'>زر بلون متغير</button>\n"+
"----------------------------------------\n"+
"2- انتقال على الظل:\n"+
"<div class='p-4 bg-white shadow transition-shadow duration-500 hover:shadow-lg'>بطاقة بتأثير ظل ناعم</div>\n"+
"----------------------------------------\n"+
"3- انتقال على التحويل (تكبير عند المرور):\n"+
"<img src='https://via.placeholder.com/100' class='transition-transform duration-300 hover:scale-110'>\n"+
"----------------------------------------\n"+
"4- دمج أكثر من تأثير:\n"+
"<button class='bg-green-500 text-white px-4 py-2 rounded transition-all duration-500 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg'>زر متفاعل</button>\n"+
"----------------------------------------\n"+
"💡 **ملاحظات:**\n"+
"- `transition-all` تجعل التحويل يشمل كل الخصائص التي تتغير.\n"+
"- `ease-in-out` تمنح الحركة مظهرًا طبيعيًا أكثر."
},

{
id: 29,
title: "CSS Variables (Tailwind)",
explain:
"في Tailwind CSS يمكن استخدام **CSS Variables** (المتغيرات) لتخزين القيم مثل الألوان أو الأحجام أو المسافات، ثم إعادة استخدامها في أي مكان داخل الكود.\n\n" +
"🔹 **تعريف المتغير:**\n" +
"يُعرّف المتغير باستخدام `--اسم-المتغير` داخل خاصية `style` أو ملف CSS مخصص:\n" +
"`--main-color: #3490dc;`\n\n" +
"🔹 **الاستخدام داخل Tailwind:**\n" +
"يمكن استخدام المتغيرات داخل Tailwind بدمجها مع الأقواس المربعة `[]`:\n" +
"- `bg-[var(--main-color)]` لتعيين خلفية حسب المتغير.\n" +
"- `text-[var(--text-color)]` لتلوين النص حسب المتغير.\n" +
"- `p-[var(--spacing)]` لتحديد المسافة حسب المتغير.\n\n" +
"🔹 **التعريف في :root (عالمي):**\n" +
"يمكن وضع المتغيرات داخل `:root` لتكون متاحة في كل الصفحة.\n\n" +
"🔹 **نصائح:**\n" +
"- مفيد عند تخصيص الألوان أو الثيم (dark / light mode).\n" +
"- يمكن تغيير قيم المتغيرات ديناميكيًا عبر JavaScript.\n" +
"- Tailwind لا يمنع استخدام المتغيرات بل يتكامل معها تمامًا.\n",

example:
"1- تعريف متغير واستخدامه كخلفية:\n"+
"<div style='--main-color: #4ade80;' class='bg-[var(--main-color)] p-4 text-white'>خلفية بالمتغير</div>\n"+
"----------------------------------------\n"+
"2- تعريف عدة متغيرات:\n"+
"<div style='--text-color: #1e3a8a; --spacing: 2rem;'>\n"+
"  <p class='text-[var(--text-color)] p-[var(--spacing)] bg-gray-100'>نص بلون ومسافة من متغيرات</p>\n"+
"</div>\n"+
"----------------------------------------\n"+
"3- تعريف متغيرات في :root:\n"+
"<style>\n"+
":root {\n"+
"  --primary: #3b82f6;\n"+
"  --secondary: #9333ea;\n"+
"}\n"+
"</style>\n"+
"<div class='bg-[var(--primary)] text-white p-4 mb-2'>خلفية primary</div>\n"+
"<div class='bg-[var(--secondary)] text-white p-4'>خلفية secondary</div>\n"+
"----------------------------------------\n"+
"4- تغيير المتغير عبر JavaScript:\n"+
"<script>\n"+
"document.documentElement.style.setProperty('--main-color', '#f87171');\n"+
"</script>\n"+
"----------------------------------------\n"+
"💡 **ملاحظات:**\n"+
"- يمكن دمج المتغيرات مع `hover:` أو `dark:` لتطبيق ثيمات متغيرة.\n"+
"- تجعل الكود أكثر مرونة عند العمل على مشاريع كبيرة أو تصميمات متكررة."
}






















 ]
 export default tillwind
