const html=[
 
    {
  "id": 1,
  "title": "introduction",
  "explain": 
    "HTML هي لغة ترميزية (Markup Language) تستخدم لبناء صفحات الويب.\n" +
    "HTML مش لغة برمجة، لكنها بتحدد هيكل الصفحة ومحتواها.\n" +
    "الصفحة بتتكون من عناصر (Elements) وكل عنصر ليه وسم (Tag) بداية ونهاية.\n" +
    "أهم الحاجات في HTML:\n" +
    "- الوسوم (Tags) زي <p>, <h1>, <a>, <img>\n" +
    "- السمات (Attributes) زي id, class, src, href\n" +
    "- التعليقات (Comments) باستخدام <!-- تعليق -->\n" +
    "- HTML حساس للصياغة، بس مش حساس للحروف الكبيرة والصغيرة في الوسوم.\n",
  "example":
    "1- هيكل صفحة HTML أساسي\n"+
    "<!DOCTYPE html>\n"+
    "<html>\n"+
    "  <head>\n"+
    "    <title>عنوان الصفحة</title>\n"+
    "  </head>\n"+
    "  <body>\n"+
    "    <h1>مرحبًا بك في HTML</h1>\n"+
    "    <p>ده نص فقرة.</p>\n"+
    "  </body>\n"+
    "</html>\n"+
    "----------------------------------------\n"+
    "2- إضافة رابط (Link)\n"+
    "<a href='https://www.example.com'>اذهب للموقع</a>\n"+
    "----------------------------------------\n"+
    "3- إضافة صورة (Image)\n"+
    "<img src='image.jpg' alt='وصف الصورة'>\n"+
    "----------------------------------------\n"+
    "4- إضافة قائمة (List)\n"+
    "<ul>\n"+
    "  <li>العنصر الأول</li>\n"+
    "  <li>العنصر الثاني</li>\n"+
    "</ul>\n"+
    "----------------------------------------\n"+
    "5- إضافة تعليق\n"+
    "<!-- هذا تعليق ولن يظهر في الصفحة -->"
},

{

  id: 2,
  title: " Semantic Elements ",
  explain:
    "العناصر الدلالية (Semantic Elements) في HTML بتوضح معنى ومحتوى الصفحة.\n" +
    "بتساعد محركات البحث، القارئات، والمطورين على فهم هيكل الصفحة.\n" +
    "أهم العناصر الدلالية:\n" +
    "- <header>: يحتوي على مقدمة أو شريط العنوان للموقع.\n" +
    "- <footer>: يحتوي على تذييل الصفحة، حقوق الملكية، أو روابط الاتصال.\n" +
    "- <main>: المحتوى الرئيسي للصفحة.\n" +
    "- <section>: قسم أو جزء مميز داخل الصفحة.\n" +
    "- <article>: محتوى مستقل يمكن نشره بمفرده (مثل مقالة).\n" +
    "- <aside>: محتوى جانبي مثل شريط إعلانات أو معلومات إضافية.\n" +
    "- <nav>: روابط التنقل (القوائم الرئيسية).\n" +
    "- <figure> و <figcaption>: عناصر لعرض صور أو وسائط مع شرح.\n",
  example:
    "<!-- مثال على عناصر دلالية -->\n"+
    "<!DOCTYPE html>\n"+
    "<html>\n"+
    "<head>\n"+
    "  <title>صفحة دلالية</title>\n"+
    "</head>\n"+
    "<body>\n"+
    "  <header>\n"+
    "    <h1>موقعي الشخصي</h1>\n"+
    "    <nav>\n"+
    "      <ul>\n"+
    "        <li><a href='#home'>الرئيسية</a></li>\n"+
    "        <li><a href='#about'>من أنا</a></li>\n"+
    "        <li><a href='#contact'>تواصل معنا</a></li>\n"+
    "      </ul>\n"+
    "    </nav>\n"+
    "  </header>\n"+
    "  <main>\n"+
    "    <section id='home'>\n"+
    "      <h2>الصفحة الرئيسية</h2>\n"+
    "      <p>هذا القسم يحتوي على مقدمة الموقع.</p>\n"+
    "    </section>\n"+
    "    <section id='about'>\n"+
    "      <h2>من أنا</h2>\n"+
    "      <article>\n"+
    "        <h3>مقالتي الأولى</h3>\n"+
    "        <p>هذا محتوى المقالة المستقل.</p>\n"+
    "      </article>\n"+
    "      <aside>\n"+
    "        <p>معلومات جانبية مثل روابط مهمة أو إعلانات.</p>\n"+
    "      </aside>\n"+
    "    </section>\n"+
    "  </main>\n"+
    "  <footer>\n"+
    "    <p>حقوق النشر &copy; 2025 موقعي الشخصي</p>\n"+
    "  </footer>\n"+
    "  <figure>\n"+
    "    <img src='image.jpg' alt='صورة توضيحية'>\n"+
    "    <figcaption>شرح الصورة</figcaption>\n"+
    "  </figure>\n"+
    "</body>\n"+
    "</html>\n"+
    "----------------------------------------\n"+
    "<!-- ملاحظات -->\n"+
    "<!-- العناصر الدلالية تساعد محركات البحث على فهم الصفحة -->\n"+
    "<!-- <header> و <footer> تستخدم للمقدمة والتذييل -->\n"+
    "<!-- <main> المحتوى الرئيسي -->\n"+
    "<!-- <section> لتقسيم الصفحة لأقسام -->\n"+
    "<!-- <article> محتوى مستقل مثل مقالات -->\n"+
    "<!-- <aside> محتوى جانبي -->\n"+
    "<!-- <nav> قوائم التنقل -->\n"+
    "<!-- <figure> و <figcaption> للصور والشروحات -->"


},
{
  id: 2,
  title: " Headings",
  explain:
    "العناوين (Headings) بتستخدم لتقسيم المحتوى في صفحة الويب.\n" +
    "في HTML عندنا 6 مستويات من العناوين من h1 لأصغر h6:\n" +
    "- <h1>: أهم عنوان، يستخدم مرة واحدة غالبًا للعنوان الرئيسي للصفحة.\n" +
    "- <h2>: عنوان فرعي كبير.\n" +
    "- <h3>: عنوان فرعي متوسط.\n" +
    "- <h4>: عنوان فرعي صغير.\n" +
    "- <h5>: عنوان فرعي أصغر.\n" +
    "- <h6>: أصغر عنوان.\n" +
    "العناوين تساعد محركات البحث (SEO) وتنظيم المحتوى للمستخدمين.\n",
  example:
    "<h1>عنوان رئيسي</h1>\n"+
    "<h2>عنوان فرعي كبير</h2>\n"+
    "<h3>عنوان فرعي متوسط</h3>\n"+
    "<h4>عنوان فرعي صغير</h4>\n"+
    "<h5>عنوان فرعي أصغر</h5>\n"+
    "<h6>أصغر عنوان</h6>\n"+
    "----------------------------------------\n"+
    "<p>النص العادي لا يُعتبر عنوانًا.</p>\n"+
    "----------------------------------------\n"+
    "<!-- نصائح -->\n"+
    "<!-- استخدم h1 مرة واحدة للعنوان الرئيسي فقط -->\n"+
    "<!-- استخدم باقي العناوين لتقسيم المحتوى بشكل منطقي -->"
},
{
  id: 3,
  title: "Text Modifiers ",
  explain:
    "HTML فيها وسوم لتعديل النصوص أو إضافة دلالة معينة.\n" +
    "أهم الوسوم:\n" +
    "- <del> : يشير إلى نص تم حذفه (Deleted text)\n" +
    "- <ins> : يشير إلى نص تم إضافته (Inserted text)\n" +
    "- <sub> : يجعل النص **أسفل السطر** (Subscript)\n" +
    "- <sup> : يجعل النص **أعلى السطر** (Superscript)\n" +
    "- <small> : يقلل حجم النص (Smaller text)\n" +
    "- <cite> : يستخدم لذكر مصدر أو مرجع\n" +
    "- <q> : اقتباس قصير داخل السطر\n" +
    "- <abbr> : اختصار مع تحديد المعنى باستخدام title\n",
  example:
    "<p>هذا نص <del>تم حذفه</del> و<ins>تم إضافته</ins></p>\n"+
    "<p>H<sub>2</sub>O هو الماء</p>\n"+
    "<p>10<sup>2</sup> = 100</p>\n"+
    "<p><small>نص صغير الحجم</small></p>\n"+
    "<p>المؤلف: <cite>جون دو</cite></p>\n"+
    "<p>اقتباس: <q>هذا اقتباس قصير</q></p>\n"+
    "<p>HTML <abbr title='HyperText Markup Language'>HTML</abbr></p>\n"+
    "----------------------------------------\n"+
    "<!-- ملاحظات -->\n"+
    "<!-- استخدم <del> و <ins> عند تعديل النصوص -->\n"+
    "<!-- <sub> و <sup> مفيدين للمعادلات أو الصيغ الكيميائية -->\n"+
    "<!-- <small>, <cite>, <q>, <abbr> تعطي معنى دلالي للنصوص -->"
},
{
  id: 4,
  title: "Links",
  explain:
    "وسم <a> يستخدم لإنشاء روابط (Links) في HTML.\n" +
    "- href: تحدد عنوان الرابط.\n" +
    "- target: تحدد أين سيفتح الرابط (_blank يفتح في نافذة جديدة).\n" +
    "- title: نص يظهر عند تمرير الماوس على الرابط.\n" +
    "- download: يسمح بتحميل الرابط عند النقر عليه.\n" +
    "- rel: يحدد العلاقة بين الصفحة الحالية والرابط (مثل noreferrer, noopener).\n",
  example:
    "<!-- رابط عادي -->\n"+
    "<a href='https://www.example.com'>اذهب للموقع</a>\n"+
    "----------------------------------------\n"+
    "<!-- فتح الرابط في نافذة جديدة -->\n"+
    "<a href='https://www.example.com' target='_blank'>افتح الموقع في نافذة جديدة</a>\n"+
    "----------------------------------------\n"+
    "<!-- إضافة عنوان يظهر عند تمرير الماوس -->\n"+
    "<a href='https://www.example.com' title='اذهب لموقع Example'>Example</a>\n"+
    "----------------------------------------\n"+
    "<!-- تحميل الملف عند النقر -->\n"+
    "<a href='file.pdf' download>تحميل الملف</a>\n"+
    "----------------------------------------\n"+
    "<!-- استخدام rel لحماية الرابط -->\n"+
    "<a href='https://www.example.com' target='_blank' rel='noopener noreferrer'>رابط آمن</a>\n"+
    "----------------------------------------\n"+
    "<!-- ملاحظات -->\n"+
    "<!-- روابط مهمة للتنقل بين صفحات الموقع -->\n"+
    "<!-- target='_blank' يفضل استخدامه بحذر لأنه يفتح صفحات جديدة -->\n"+
    "<!-- rel='noopener noreferrer' مهم عند فتح روابط جديدة لضمان الأمان -->"
},
{
  id: 5,
  title: "Images ",
  explain:
    "وسم <img> يستخدم لإدراج الصور في صفحات HTML.\n" +
    "- src: يحدد مسار الصورة (مطلوب).\n" +
    "- alt: نص بديل يظهر إذا لم يتم تحميل الصورة، مهم للوصولية.\n" +
    "- width و height: تحدد عرض وارتفاع الصورة.\n" +
    "- title: نص يظهر عند تمرير الماوس فوق الصورة.\n" +
    "- loading: 'lazy' لتأخير تحميل الصورة لتحسين الأداء.\n",
  example:
    "<!-- صورة أساسية -->\n"+
    "<img src='image.jpg' alt='وصف الصورة'>\n"+
    "----------------------------------------\n"+
    "<!-- تحديد العرض والارتفاع -->\n"+
    "<img src='image.jpg' alt='وصف الصورة' width='300' height='200'>\n"+
    "----------------------------------------\n"+
    "<!-- إضافة عنوان يظهر عند تمرير الماوس -->\n"+
    "<img src='image.jpg' alt='وصف الصورة' title='هذه صورة'>\n"+
    "----------------------------------------\n"+
    "<!-- تحميل الصورة بشكل كسول لتسريع الصفحة -->\n"+
    "<img src='image.jpg' alt='وصف الصورة' loading='lazy'>\n"+
    "----------------------------------------\n"+
    "<!-- ملاحظات -->\n"+
    "<!-- من المهم دائمًا وضع alt لوصف الصورة لتحسين الوصولية وSEO -->\n"+
    "<!-- يمكن استخدام صور من الإنترنت أو ملفات محلية -->"
},
{
  id: 6,
  title: " Lists ",
  explain:
    "HTML بتدعم 3 أنواع أساسية من القوائم:\n" +
    "1- قائمة مرتبة (Ordered List): <ol> تُعرض العناصر برقم أو ترتيب محدد.\n" +
    "2- قائمة غير مرتبة (Unordered List): <ul> تُعرض العناصر بنقاط •.\n" +
    "3- قائمة وصفية (Description List): <dl> تحتوي على عناصر <dt> (العنوان) و <dd> (الوصف).\n" +
    "الوسم <li> يُستخدم لإضافة عنصر داخل <ol> أو <ul>.\n",
  example:
    "1- قائمة غير مرتبة (Unordered List):\n"+
    "<ul>\n"+
    "  <li>العنصر الأول</li>\n"+
    "  <li>العنصر الثاني</li>\n"+
    "  <li>العنصر الثالث</li>\n"+
    "</ul>\n"+
    "----------------------------------------\n"+
    "2- قائمة مرتبة (Ordered List):\n"+
    "<ol>\n"+
    "  <li>العنصر الأول</li>\n"+
    "  <li>العنصر الثاني</li>\n"+
    "  <li>العنصر الثالث</li>\n"+
    "</ol>\n"+
    "----------------------------------------\n"+
    "3- قائمة وصفية (Description List):\n"+
    "<dl>\n"+
    "  <dt>HTML</dt>\n"+
    "  <dd>لغة ترميزية لبناء صفحات الويب.</dd>\n"+
    "  <dt>CSS</dt>\n"+
    "  <dd>لغة لتنسيق وتصميم صفحات الويب.</dd>\n"+
    "</dl>\n"+
    "----------------------------------------\n"+
    "4- قوائم متداخلة (Nested Lists):\n"+
    "<ul>\n"+
    "  <li>فواكه\n"+
    "    <ul>\n"+
    "      <li>تفاح</li>\n"+
    "      <li>موز</li>\n"+
    "    </ul>\n"+
    "  </li>\n"+
    "  <li>خضروات\n"+
    "    <ul>\n"+
    "      <li>جزر</li>\n"+
    "      <li>خيار</li>\n"+
    "    </ul>\n"+
    "  </li>\n"+
    "</ul>\n"+
    "----------------------------------------\n"+
    "<!-- ملاحظات -->\n"+
    "<!-- استخدم <ul> للقوائم العادية والنقاط، و<ol> للقوائم ذات ترتيب أو أولوية -->\n"+
    "<!-- <li> ضروري لكل عنصر داخل القائمة -->\n"+
    "<!-- القوائم المتداخلة مفيدة لتقسيم المحتوى بشكل منظم -->"
},
{
  id: 7,
  title: " Tables ",
  explain:
    "الجداول تُستخدم لعرض البيانات في صفوف وأعمدة.\n" +
    "العناصر الأساسية:\n" +
    "- <table>: لإنشاء الجدول.\n" +
    "- <tr>: لإنشاء صف في الجدول.\n" +
    "- <th>: رأس العمود (عادة يكون غامق ومُسطّر).\n" +
    "- <td>: خلية بيانات.\n" +
    "- colspan: لدمج خلية على عدة أعمدة.\n" +
    "- rowspan: لدمج خلية على عدة صفوف.\n",
  example:
    "1- جدول أساسي:\n"+
    "<table border='1'>\n"+
    "  <tr>\n"+
    "    <th>الاسم</th>\n"+
    "    <th>العمر</th>\n"+
    "    <th>المدينة</th>\n"+
    "  </tr>\n"+
    "  <tr>\n"+
    "    <td>أحمد</td>\n"+
    "    <td>25</td>\n"+
    "    <td>القاهرة</td>\n"+
    "  </tr>\n"+
    "  <tr>\n"+
    "    <td>منى</td>\n"+
    "    <td>30</td>\n"+
    "    <td>الإسكندرية</td>\n"+
    "  </tr>\n"+
    "</table>\n"+
    "----------------------------------------\n"+
    "2- استخدام colspan لدمج أعمدة:\n"+
    "<table border='1'>\n"+
    "  <tr>\n"+
    "    <th>الاسم</th>\n"+
    "    <th colspan='2'>العمر والموقع</th>\n"+
    "  </tr>\n"+
    "  <tr>\n"+
    "    <td>أحمد</td>\n"+
    "    <td>25</td>\n"+
    "    <td>القاهرة</td>\n"+
    "  </tr>\n"+
    "</table>\n"+
    "----------------------------------------\n"+
    "3- استخدام rowspan لدمج صفوف:\n"+
    "<table border='1'>\n"+
    "  <tr>\n"+
    "    <th rowspan='2'>الاسم</th>\n"+
    "    <th>العمر</th>\n"+
    "    <th>المدينة</th>\n"+
    "  </tr>\n"+
    "  <tr>\n"+
    "    <td>30</td>\n"+
    "    <td>الإسكندرية</td>\n"+
    "  </tr>\n"+
    "  <tr>\n"+
    "    <td>منى</td>\n"+
    "    <td>25</td>\n"+
    "    <td>القاهرة</td>\n"+
    "  </tr>\n"+
    "</table>\n"+
    "----------------------------------------\n"+
    "<!-- ملاحظات -->\n"+
    "<!-- colspan='2' تعني أن الخلية تغطي عمودين -->\n"+
    "<!-- rowspan='2' تعني أن الخلية تغطي صفين -->\n"+
    "<!-- يمكن دمج colspan و rowspan في نفس الجدول لتنسيق البيانات بشكل مرتب -->"
},
{
  id: 8,
  title: " Basic Elements ",
  explain:
    "في HTML فيه عناصر أساسية تستخدم لتنظيم المحتوى:\n"+
    "- <div>: عنصر كتلة (Block) لتجميع عناصر أخرى.\n"+
    "- <p>: فقرة.\n"+
    "- <hr>: خط أفقي للفصل بين المحتوى.\n"+
    "- <span>: عنصر صغير داخل السطر (Inline) لتنسيق جزء من النص.\n"+
    "- الرموز الخاصة: \n"+
    "  - &lt; يعني <\n"+
    "  - &gt; يعني >\n"+
    "  - &amp; يعني &\n"+
    "  - &nbsp; يعنى ادراح مسافه فارغه\n"+
    '   - <map> خريطه \n'+
    "- هذه العناصر مش بتأثر على البيانات نفسها، لكنها لتنسيق وهيكلة الصفحة.\n",
  example:
    "1- استخدام <div> لتجميع محتوى:\n"+
    "<div style='border:1px solid black; padding:10px;'>\n"+
    "  <h2>عنوان داخل div</h2>\n"+
    "  <p>فقرة داخل div.</p>\n"+
    "</div>\n"+
    "----------------------------------------\n"+
    "2- استخدام <hr> للفصل:\n"+
    "<p>محتوى قبل الخط</p>\n"+
    "<hr>\n"+
    "<p>محتوى بعد الخط</p>\n"+
    "----------------------------------------\n"+
    "3- استخدام <span> لتنسيق جزء من النص:\n"+
    "<p>هذا نص عادي <span style='color:red;'>ونص أحمر</span> باقي النص.</p>\n"+
    "----------------------------------------\n"+
    "4- الرموز الخاصة:\n"+
    "<p>استخدام &lt;div&gt; يعني '<div>' وليس كود حقيقي.</p>\n"+
    "<p>استخدام &amp; يعني '&'</p>\n"+
    "----------------------------------------\n"+
    "<!-- ملاحظات -->\n"+
    "<!-- <div> يستخدم لتجميع محتوى كتلة كاملة -->\n"+
    "<!-- <span> لتنسيق نص صغير داخل السطر -->\n"+
    "<!-- <hr> لإضافة خط فاصل بين المحتوى -->\n"+
    "<!-- &lt;, &gt;, &amp; تستخدم لعرض الرموز الخاصة في الصفحة -->"
},

{
  id: 9,
  title: " Figure ",
  explain:
    "في HTML، عنصر <figure> يستخدم لتجميع صورة أو رسم أو محتوى مرئي مع تعليق توضيحي.\n"+
    "- <figure>: عنصر كتلة (Block) لتجميع المحتوى.\n"+
    "- <figcaption>: تعليق توضيحي للصورة أو الرسم.\n"+
    "- الهدف: ربط الصورة بتعليقها بشكل منطقي.\n",
  example:
    "1- مثال بسيط:\n"+
    "<figure>\n"+
    "  <img src='image.jpg' alt='وصف الصورة'>\n"+
    "  <figcaption>هذا تعليق للصورة</figcaption>\n"+
    "</figure>\n"+
    "----------------------------------------\n"+
    "2- مثال متعدد الصور:\n"+
    "<figure>\n"+
    "  <img src='chart.png' alt='رسم بياني'>\n"+
    "  <figcaption>الرسم البياني يوضح المبيعات الشهرية</figcaption>\n"+
    "</figure>\n"+
    "<figure>\n"+
    "  <img src='diagram.png' alt='مخطط'>\n"+
    "  <figcaption>مخطط العمليات</figcaption>\n"+
    "</figure>\n"+
    "----------------------------------------\n"+
    "<!-- ملاحظات -->\n"+
    "<!-- <figure> يستخدم لتجميع محتوى مرئي -->\n"+
    "<!-- <figcaption> لإضافة وصف أو تعليق للصورة -->\n"+
    "<!-- يمكن أن يحتوي <figure> على صور، فيديوهات أو SVG -->"
},
{
  id: 10,
  title: " Audio ",
  explain:
    "عنصر <audio> يُستخدم لتضمين ملفات صوتية في صفحات HTML.\n"+
    "- src: مسار ملف الصوت.\n"+
    "- controls: لإظهار أزرار التحكم (تشغيل، إيقاف، مستوى الصوت).\n"+
    "- autoplay: لتشغيل الصوت تلقائيًا عند تحميل الصفحة.\n"+
    "- loop: لتكرار الصوت عند انتهائه.\n"+
    "- muted: لتشغيل الصوت صامتًا في البداية.\n",
  example:
    "1- تشغيل صوت مع أزرار التحكم:\n"+
    "<audio controls>\n"+
    "  <source src='audio.mp3' type='audio/mpeg'>\n"+
    "  المتصفح لا يدعم عنصر الصوت.\n"+
    "</audio>\n"+
    "----------------------------------------\n"+
    "2- تشغيل صوت تلقائي وتكراره:\n"+
    "<audio autoplay loop>\n"+
    "  <source src='music.mp3' type='audio/mpeg'>\n"+
    "  المتصفح لا يدعم عنصر الصوت.\n"+
    "</audio>\n"+
    "----------------------------------------\n"+
    "3- تشغيل الصوت بدون صوت (Muted):\n"+
    "<audio controls muted>\n"+
    "  <source src='audio.mp3' type='audio/mpeg'>\n"+
    "  المتصفح لا يدعم عنصر الصوت.\n"+
    "</audio>\n"+
    "----------------------------------------\n"+
    "<!-- ملاحظات -->\n"+
    "<!-- يفضل دائمًا إضافة نص بديل للمتصفح الذي لا يدعم <audio> -->\n"+
    "<!-- يمكن إضافة أكثر من <source> لتوفير صيغ مختلفة للصوت -->"
},
{
    
  id: 11,
  title: " Video ",
  explain:
    "عنصر <video> يُستخدم لتضمين ملفات الفيديو في صفحات HTML.\n"+
    "- src: مسار ملف الفيديو.\n"+
    "- controls: لإظهار أزرار التحكم (تشغيل، إيقاف، مستوى الصوت، التقديم).\n"+
    "- autoplay: لتشغيل الفيديو تلقائيًا عند تحميل الصفحة.\n"+
    "- loop: لتكرار الفيديو عند انتهائه.\n"+
    "- muted: لتشغيل الفيديو صامتًا في البداية.\n"+
    "- width, height: لتحديد حجم الفيديو.\n",
  example:
    "1- فيديو مع أزرار التحكم:\n"+
    "<video width='320' height='240' controls>\n"+
    "  <source src='video.mp4' type='video/mp4'>\n"+
    "  المتصفح لا يدعم عنصر الفيديو.\n"+
    "</video>\n"+
    "----------------------------------------\n"+
    "2- فيديو تلقائي التشغيل وتكراره:\n"+
    "<video width='320' height='240' autoplay loop>\n"+
    "  <source src='movie.mp4' type='video/mp4'>\n"+
    "  المتصفح لا يدعم عنصر الفيديو.\n"+
    "</video>\n"+
    "----------------------------------------\n"+
    "3- فيديو بدون صوت (Muted):\n"+
    "<video width='320' height='240' controls muted>\n"+
    "  <source src='video.mp4' type='video/mp4'>\n"+
    "  المتصفح لا يدعم عنصر الفيديو.\n"+
    "</video>\n"+
    "----------------------------------------\n"+
    "<!-- ملاحظات -->\n"+
    "<!-- يفضل دائمًا إضافة نص بديل للمتصفح الذي لا يدعم <video> -->\n"+
    "<!-- يمكن إضافة أكثر من <source> لتوفير صيغ مختلفة للفيديو -->"

},
{


  id: 12,
  title: " Forms ",
  explain:
    "عنصر <form> يُستخدم لإنشاء نماذج لجمع بيانات من المستخدم.\n"+
    "- action: رابط الخادم لاستقبال البيانات.\n"+
    "- method: طريقة الإرسال (GET أو POST).\n"+
    "- enctype: نوع ترميز البيانات (multipart/form-data للملفات).\n"+
    "- target: أين تُفتح نتيجة الإرسال (_blank, _self).\n"+
    "حقول الإدخال الأساسية والمتقدمة:\n"+
    "- <input> بأنواع: text, password, email, number, tel, url, date, datetime-local, month, week, time, color, file, checkbox, radio, hidden, submit, reset, button, range.\n"+
    "- <textarea> لإدخال نص طويل.\n"+
    "- <select> لإدراج قائمة اختيار.\n"+
    "- <option> عناصر القائمة.\n"+
    "- <button> لإنشاء أزرار مخصصة.\n"+
    "- <fieldset> لتجميع الحقول.\n"+
    "- <legend> لعنوان مجموعة الحقول.\n"+
    "- <label> لتوضيح الحقل وتحسين الوصولية.\n",
  example:
    "1- نموذج بسيط مع نص وزر إرسال:\n"+
    "<form action='/submit' method='post'>\n"+
    "  <label for='name'>الاسم:</label>\n"+
    "  <input type='text' id='name' name='name'>\n"+
    "  <input type='submit' value='إرسال'>\n"+
    "</form>\n"+
    "----------------------------------------\n"+
    "2- أنواع مختلفة من الحقول:\n"+
    "<form action='/submit' method='post'>\n"+
    "  <label for='email'>البريد الإلكتروني:</label>\n"+
    "  <input type='email' id='email' name='email'>\n"+
    "  <label for='password'>كلمة المرور:</label>\n"+
    "  <input type='password' id='password' name='password'>\n"+
    "  <label for='age'>العمر:</label>\n"+
    "  <input type='number' id='age' name='age' min='1' max='120'>\n"+
    "  <label for='phone'>رقم الهاتف:</label>\n"+
    "  <input type='tel' id='phone' name='phone'>\n"+
    "  <label for='website'>الموقع الشخصي:</label>\n"+
    "  <input type='url' id='website' name='website'>\n"+
    "  <label for='birth'>تاريخ الميلاد:</label>\n"+
    "  <input type='date' id='birth' name='birth'>\n"+
    "  <label for='appt'>وقت الموعد:</label>\n"+
    "  <input type='time' id='appt' name='appt'>\n"+
    "  <label for='color'>اختر اللون:</label>\n"+
    "  <input type='color' id='color' name='color'>\n"+
    "  <label for='file'>ارفع ملف:</label>\n"+
    "  <input type='file' id='file' name='file'>\n"+
    "  <label>النوع:</label>\n"+
    "  <input type='radio' id='male' name='gender' value='male'> ذكر\n"+
    "  <input type='radio' id='female' name='gender' value='female'> أنثى\n"+
    "  <label>الهوايات:</label>\n"+
    "  <input type='checkbox' name='hobby' value='reading'> قراءة\n"+
    "  <input type='checkbox' name='hobby' value='sports'> رياضة\n"+
    "  <label for='range'>مستوى:</label>\n"+
    "  <input type='range' id='range' name='range' min='0' max='100'>\n"+
    "  <input type='submit' value='إرسال'>\n"+
    "</form>\n"+
    "----------------------------------------\n"+
    "3- نص متعدد الأسطر <textarea>:\n"+
    "<form action='/submit' method='post'>\n"+
    "  <label for='message'>رسالتك:</label>\n"+
    "  <textarea id='message' name='message' rows='4' cols='50'></textarea>\n"+
    "  <input type='submit' value='إرسال'>\n"+
    "</form>\n"+
    "----------------------------------------\n"+
    "4- قائمة اختيار <select>:\n"+
    "<form action='/submit' method='post'>\n"+
    "  <label for='country'>اختر الدولة:</label>\n"+
    "  <select id='country' name='country'>\n"+
    "    <option value='egypt'>مصر</option>\n"+
    "    <option value='ksa'>السعودية</option>\n"+
    "    <option value='uae'>الإمارات</option>\n"+
    "  </select>\n"+
    "  <input type='submit' value='إرسال'>\n"+
    "</form>\n"+
    "----------------------------------------\n"+
    "5- تجميع الحقول باستخدام <fieldset> و <legend>:\n"+
    "<form action='/submit' method='post'>\n"+
    "  <fieldset>\n"+
    "    <legend>المعلومات الشخصية</legend>\n"+
    "    <label for='fname'>الاسم الأول:</label>\n"+
    "    <input type='text' id='fname' name='fname'>\n"+
    "    <label for='lname'>الاسم الأخير:</label>\n"+
    "    <input type='text' id='lname' name='lname'>\n"+
    "  </fieldset>\n"+
    "  <input type='submit' value='إرسال'>\n"+
    "</form>\n"+
    "----------------------------------------\n"+
    "<!-- ملاحظات -->\n"+
    "<!-- استخدم name لجميع الحقول لإرسال البيانات -->\n"+
    "<!-- labels تحسن الوصولية -->\n"+
    "<!-- method='post' للبيانات الحساسة، get للبحث أو البيانات البسيطة -->\n"+
    "<!-- range لتحديد قيمة رقمية ضمن مدى محدد -->\n"+
    "<!-- file لرفع الملفات، color لاختيار اللون -->"

},
{
   
  id: 13,
  title: "Iframe ",
  explain:
    "عنصر <iframe> يُستخدم لإدراج صفحة ويب أخرى داخل الصفحة الحالية.\n"+
    "- src: رابط الصفحة التي سيتم عرضها داخل الإطار.\n"+
    "- width / height: تحديد أبعاد الإطار.\n"+
    "- title: نص توضيحي للإطار لتحسين الوصولية.\n"+
    "- frameborder: للتحكم في ظهور حدود الإطار (0 = بدون حدود).\n"+
    "- allowfullscreen: للسماح بعرض الفيديوهات أو المحتوى بكامل الشاشة.\n"+
    "- loading: 'lazy' لتأجيل تحميل الإطار لتحسين سرعة الصفحة.\n"+
    "- name: اسم الإطار لاستخدامه في target للروابط أو النماذج.\n"+
    "ملاحظات مهمة:\n"+
    "- استخدام iframes يزيد من استهلاك الموارد، استخدمه بحذر.\n"+
    "- احرص على أن يكون محتوى src من مصدر موثوق.\n"+
    "- يمكن استخدام CSS لتنسيق الإطار (border, border-radius, box-shadow).\n",
  example:
    "1- إدراج صفحة ويب داخل الإطار:\n"+
    "<iframe src='https://www.example.com' width='600' height='400'></iframe>\n"+
    "----------------------------------------\n"+
    "2- إضافة عنوان وصلاحيات للفريم:\n"+
    "<iframe src='https://www.example.com' width='600' height='400' title='مثال على iframe' frameborder='0' allowfullscreen></iframe>\n"+
    "----------------------------------------\n"+
    "3- تأجيل تحميل الإطار لتحسين الأداء:\n"+
    "<iframe src='https://www.example.com' width='600' height='400' loading='lazy'></iframe>\n"+
    "----------------------------------------\n"+
    "4- التحكم في الروابط باستخدام name:\n"+
    "<iframe src='page.html' name='myframe' width='600' height='400'></iframe>\n"+
    "<a href='anotherpage.html' target='myframe'>افتح الصفحة داخل الإطار</a>\n"+
    "----------------------------------------\n"+
    "<!-- ملاحظات -->\n"+
    "<!-- frameborder يعتبر قديم، يمكن استخدام CSS بدلاً منه -->\n"+
    "<!-- يجب استخدام iframes فقط عند الحاجة لمحتوى خارجي -->"


},

]

// date/htmlQuestions.js

const htmlQuestions = [
  {
    lessonId: 1,
    questions: [
      { id: 1, question: "ما هو وسم الصورة في HTML؟", options: ["<img>", "<image>", "<src>", "<picture>"], answer: "<img>" },
      { id: 2, question: "ما وسم الفقرة في HTML؟", options: ["<p>", "<para>", "<text>", "<div>"], answer: "<p>" }
    ]
  },
  {
    lessonId: 2,
    questions: [
      { id: 3, question: "ما الوسم الدلالي للمحتوى الرئيسي؟", options: ["<main>", "<section>", "<div>", "<article>"], answer: "<main>" },
      { id: 4, question: "ما الوسم الذي يمثل قائمة تنقل؟", options: ["<nav>", "<menu>", "<ul>", "<aside>"], answer: "<nav>" }
    ]
  },
  {
    lessonId: 3,
    questions: [
      { id: 5, question: "كم عدد مستويات العناوين في HTML؟", options: ["4", "5", "6", "7"], answer: "6" },
      { id: 6, question: "أي وسم يستخدم لأهم عنوان في الصفحة؟", options: ["<h1>", "<h2>", "<h3>", "<h6>"], answer: "<h1>" }
    ]
  },
  {
    lessonId: 4,
    questions: [
      { id: 7, question: "أي خاصية تحدد عنوان الرابط؟", options: ["href", "src", "link", "title"], answer: "href" },
      { id: 8, question: "أي وسم يستخدم لإنشاء رابط؟", options: ["<a>", "<link>", "<url>", "<nav>"], answer: "<a>" }
    ]
  },
  {
    lessonId: 5,
    questions: [
      { id: 9, question: "ما الخاصية التي تحدد نص بديل للصورة؟", options: ["alt", "title", "src", "href"], answer: "alt" },
      { id: 10, question: "أي وسم يستخدم لإضافة صورة؟", options: ["<img>", "<image>", "<picture>", "<figure>"], answer: "<img>" }
    ]
  },
  {
    lessonId: 6,
    questions: [
      { id: 11, question: "أي وسم يستخدم لقائمة غير مرتبة؟", options: ["<ul>", "<ol>", "<li>", "<dl>"], answer: "<ul>" },
      { id: 12, question: "أي وسم يستخدم لعناصر القائمة؟", options: ["<li>", "<dt>", "<dd>", "<ol>"], answer: "<li>" }
    ]
  },
  {
    lessonId: 7,
    questions: [
      { id: 13, question: "أي وسم يستخدم لإنشاء جدول؟", options: ["<table>", "<tr>", "<td>", "<th>"], answer: "<table>" },
      { id: 14, question: "أي وسم يمثل رأس العمود في الجدول؟", options: ["<th>", "<tr>", "<td>", "<table>"], answer: "<th>" }
    ]
  },
  {
    lessonId: 8,
    questions: [
      { id: 15, question: "أي وسم يستخدم لتجميع محتوى كتلة؟", options: ["<div>", "<span>", "<section>", "<article>"], answer: "<div>" },
      { id: 16, question: "أي وسم يستخدم لفصل محتوى بخط أفقي؟", options: ["<hr>", "<br>", "<line>", "<divider>"], answer: "<hr>" }
    ]
  },
  {
    lessonId: 9,
    questions: [
      { id: 17, question: "ما وسم التعليق التوضيحي للصورة داخل <figure>؟", options: ["<figcaption>", "<caption>", "<label>", "<span>"], answer: "<figcaption>" },
      { id: 18, question: "ما الهدف من استخدام <figure>؟", options: ["تجميع محتوى مرئي مع تعليق توضيحي", "لإنشاء جدول", "لإنشاء رابط", "لتحسين النصوص"], answer: "تجميع محتوى مرئي مع تعليق توضيحي" }
    ]
  },
  {
    lessonId: 10,
    questions: [
      { id: 19, question: "أي وسم يستخدم لتضمين ملفات صوتية؟", options: ["<audio>", "<sound>", "<music>", "<media>"], answer: "<audio>" },
      { id: 20, question: "أي خاصية لتكرار الصوت عند نهايته تلقائيًا؟", options: ["loop", "autoplay", "muted", "controls"], answer: "loop" }
    ]
  },
  {
    lessonId: 11,
    questions: [
      { id: 21, question: "أي وسم لتضمين فيديو في الصفحة؟", options: ["<video>", "<movie>", "<media>", "<iframe>"], answer: "<video>" },
      { id: 22, question: "أي خاصية لتشغيل الفيديو صامتًا عند التحميل؟", options: ["muted", "autoplay", "controls", "loop"], answer: "muted" }
    ]
  },
  {
    lessonId: 12,
    questions: [
      { id: 23, question: "أي وسم يستخدم لإنشاء نموذج لإدخال البيانات؟", options: ["<form>", "<input>", "<textarea>", "<select>"], answer: "<form>" },
      { id: 24, question: "أي خاصية تحدد طريقة إرسال البيانات للنموذج؟", options: ["method", "action", "target", "enctype"], answer: "method" }
    ]
  },
  {
    lessonId: 13,
    questions: [
      { id: 25, question: "أي وسم يستخدم لإدراج صفحة ويب داخل أخرى؟", options: ["<iframe>", "<frame>", "<embed>", "<object>"], answer: "<iframe>" },
      { id: 26, question: "أي خاصية لتأجيل تحميل الإطار لتحسين الأداء؟", options: ["loading='lazy'", "width", "height", "src"], answer: "loading='lazy'" }
    ]
  }
];


// التصدير
export default html;          // التصدير الافتراضي للدروس
export { htmlQuestions };     // التصدير المسمى للأسئلة



