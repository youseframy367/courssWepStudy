const css = [
  {
    id: 1,
    title: "introduction",
    explain:
      "CSS (Cascading Style Sheets) هي لغة تصميم تستخدم لتنسيق صفحات الويب.\n" +
      "- تتحكم في شكل العناصر (العرض، اللون، الخطوط، الهوامش، الحدود…)\n" +
      "- يمكن ربطها بالـ HTML داخل الصفحة أو خارجيًا (ملف CSS مستقل)\n" +
      "- الأنماط تتسلسل (Cascading) أي الأولوية تعتمد على ترتيب وأهمية القواعد\n" +
      "- يمكن تطبيق CSS على عناصر محددة باستخدام:\n" +
      "  1. Selectors (المحددات) مثل id, class, tag\n" +
      "  2. Inline styles (ستايل مباشر على الوسم)\n" +
      "  3. External stylesheets (ملفات CSS خارجية)\n",
    example:
      "1- ربط CSS خارجي:\n"+
      "<head>\n"+
      "  <link rel='stylesheet' href='style.css'>\n"+
      "</head>\n"+
      "----------------------------------------\n"+
      "2- Inline style:\n"+
      "<p style='color: red; font-size: 20px;'>هذا نص أحمر وكبير</p>\n"+
      "----------------------------------------\n"+
      "3- Internal style:\n"+
      "<style>\n"+
      "  p { color: blue; font-size: 18px; }\n"+
      "</style>\n"+
      "<p>هذا نص أزرق</p>\n"
  },
  {
    
  id: 2,
  title: " Selectors",
  explain:
    "Selectors هي الطريقة لتحديد أي عناصر HTML سيتم تطبيق الـ CSS عليها.\n" +
    "أهم أنواع Selectors:\n" +
    "- Universal Selector (*) : يحدد كل العناصر\n" +
    "- Type Selector (tag) : يحدد كل العناصر من نوع الوسم\n" +
    "- Class Selector (.classname) : يحدد العناصر حسب الكلاس\n" +
    "- ID Selector (#idname) : يحدد عنصر واحد حسب الـ ID\n" +
    "- Grouping Selector (selector1, selector2) : لتطبيق نفس القاعدة على أكثر من عنصر\n" +
    "- Descendant Selector (parent child) : يحدد العناصر داخل عنصر آخر\n" +
    "- Pseudo-classes (:hover, :first-child) : تحدد حالات خاصة للعناصر\n",
  example:
    "1- Universal Selector:\n"+
    "* { margin: 0; padding: 0; }\n"+
    "----------------------------------------\n"+
    "2- Type Selector:\n"+
    "p { color: green; }\n"+
    "----------------------------------------\n"+
    "3- Class Selector:\n"+
    ".highlight { background-color: yellow; }\n"+
    "<p class='highlight'>نص مع خلفية صفراء</p>\n"+
    "----------------------------------------\n"+
    "4- ID Selector:\n"+
    "#main-title { font-size: 30px; color: red; }\n"+
    "<h1 id='main-title'>العنوان الرئيسي</h1>\n"+
    "----------------------------------------\n"+
    "5- Grouping Selector:\n"+
    "h1, h2, h3 { font-family: Arial; }\n"+
    "----------------------------------------\n"+
    "6- Descendant Selector:\n"+
    "div p { color: blue; }\n"+
    "----------------------------------------\n"+
    "7- Pseudo-classes:\n"+
    "a:hover { color: orange; }\n"+
    "p:first-child { font-weight: bold; "

  },
  {
    

  id: 3,
  title: " Colors",
  explain:
    "CSS Colors:\n" +
    "- color: لتغيير لون النص.\n" +
    "- background-color: لتغيير لون خلفية العنصر.\n" +
    "- يمكن استخدام الألوان بعدة طرق:\n" +
    "  1- أسماء الألوان (color names): red, blue, green, black, white..\n" +
    "  2- القيم الست عشرية (Hex codes): #FF0000, #00FF00, #0000FF..\n" +
    "  3- قيم RGB: rgb(255,0,0), rgb(0,255,0), rgb(0,0,255)\n" +
    "  4- قيم RGBA (مع الشفافية): rgba(255,0,0,0.5)\n" +
    "  5- قيم HSL: hsl(120, 100%, 50%)\n" +
    "  6- قيم HSLA: hsla(120, 100%, 50%, 0.3)\n" +
    "- opacity: لتغيير شفافية العنصر بالكامل.\n",

  example:
    "1- تغيير لون النص:\n"+
    "p {\n"+
    "  color: red;\n"+
    "}\n"+
    "<p>نص باللون الأحمر</p>\n"+
    "----------------------------------------\n"+
    "2- تغيير لون خلفية العنصر:\n"+
    "div {\n"+
    "  background-color: lightblue;\n"+
    "}\n"+
    "<div>مربع بخلفية زرقاء فاتحة</div>\n"+
    "----------------------------------------\n"+
    "3- استخدام Hex code:\n"+
    "h1 {\n"+
    "  color: #FF5733;\n"+
    "}\n"+
    "<h1>عنوان باللون البرتقالي</h1>\n"+
    "----------------------------------------\n"+
    "4- استخدام RGB:\n"+
    "p {\n"+
    "  color: rgb(0,128,0);\n"+
    "}\n"+
    "<p>نص باللون الأخضر</p>\n"+
    "----------------------------------------\n"+
    "5- استخدام RGBA للشفافية:\n"+
    "div {\n"+
    "  background-color: rgba(255,0,0,0.3);\n"+
    "}\n"+
    "<div>مربع بخلفية حمراء شفافة</div>\n"+
    "----------------------------------------\n"+
    "6- استخدام HSL:\n"+
    "p {\n"+
    "  color: hsl(240, 100%, 50%);\n"+
    "}\n"+
    "<p>نص باللون الأزرق باستخدام HSL</p>\n"+
    "----------------------------------------\n"+
    "7- Opacity:\n"+
    "div {\n"+
    "  background-color: blue;\n"+
    "  opacity: 0.5;\n"+
    "}\n"+
    "<div>مربع أزرق نصف شفاف</div>"


  },
  {
    
  id: 4,
  title: "Backgrounds",
  explain:
    "CSS Background Properties:\n" +
    "- background-color: لتغيير لون خلفية العنصر.\n" +
    "- background-image: لإضافة صورة خلفية.\n" +
    "- background-repeat: للتحكم في تكرار الصورة (repeat, no-repeat, repeat-x, repeat-y).\n" +
    "- background-position: لتحديد مكان الصورة (top, bottom, left, right, center, px, %).\n" +
    "- background-size: لتغيير حجم الصورة (cover, contain, px, %).\n" +
    "- background-attachment: للتحكم في ثبات الصورة عند التمرير (scroll, fixed, local).\n" +
    "- يمكن استخدام اختصار background لتحديد كل الخصائص دفعة واحدة.\n",

  example:
    "1- تغيير لون الخلفية:\n"+
    "div {\n"+
    "  background-color: lightblue;\n"+
    "}\n"+
    "<div>مربع بخلفية زرقاء فاتحة</div>\n"+
    "----------------------------------------\n"+
    "2- إضافة صورة خلفية:\n"+
    "body {\n"+
    "  background-image: url('image.jpg');\n"+
    "}\n"+
    "----------------------------------------\n"+
    "3- تكرار الصورة:\n"+
    "body {\n"+
    "  background-image: url('image.jpg');\n"+
    "  background-repeat: no-repeat;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "4- تحديد موقع الصورة:\n"+
    "body {\n"+
    "  background-image: url('image.jpg');\n"+
    "  background-position: center top;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "5- تغيير حجم الصورة:\n"+
    "body {\n"+
    "  background-image: url('image.jpg');\n"+
    "  background-size: cover;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "6- تثبيت الصورة عند التمرير:\n"+
    "body {\n"+
    "  background-image: url('image.jpg');\n"+
    "  background-attachment: fixed;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "7- استخدام الاختصار background:\n"+
    "div {\n"+
    "  background: url('image.jpg') no-repeat center center / cover lightblue;\n"+
    "}"


  },
  {
  id: 5,
  title: " Box Model ",
  explain:
    "Box Model: كل عنصر في HTML عبارة عن صندوق (Box) يتكون من:\n" +
    "1- Content: المحتوى داخل العنصر.\n" +
    "2- Padding: المسافة بين المحتوى وحدود العنصر.\n" +
    "3- Border: الحد حول العنصر.\n" +
    "4- Margin: المسافة بين العنصر والعناصر الأخرى.\n" +
    "\n" +
    "- margin: يحدد المسافة خارج العنصر.\n" +
    "- padding: يحدد المسافة داخل العنصر، بين المحتوى والحد.\n" +
    "- border: يحدد حدود العنصر (سمك، نوع، ولون).\n" +
    "- يمكن استخدام القيم الفردية لكل جانب: top, right, bottom, left.\n" +
    "- يمكن استخدام اختصارات: margin: 10px 5px 15px 0;\n" +
    "  padding: 5px 10px; (top/bottom left/right)\n" +
    "- box-sizing: يحدد إذا كان padding و border محسوب ضمن العرض والارتفاع (content-box / border-box).\n",

  example:
    "1- مثال على Margin:\n"+
    "div {\n"+
    "  margin: 20px;\n"+
    "}\n"+
    "<div>مسافة خارجية 20px حول العنصر</div>\n"+
    "----------------------------------------\n"+
    "2- مثال على Padding:\n"+
    "div {\n"+
    "  padding: 15px;\n"+
    "  background-color: lightgrey;\n"+
    "}\n"+
    "<div>مسافة داخلية 15px حول المحتوى</div>\n"+
    "----------------------------------------\n"+
    "3- مثال على Border:\n"+
    "div {\n"+
    "  border: 3px solid blue;\n"+
    "  padding: 10px;\n"+
    "}\n"+
    "<div>حد أزرق بسُمك 3px حول العنصر</div>\n"+
    "----------------------------------------\n"+
    "4- استخدام Box-sizing:\n"+
    "div {\n"+
    "  width: 200px;\n"+
    "  padding: 10px;\n"+
    "  border: 5px solid black;\n"+
    "  box-sizing: border-box;\n"+
    "}\n"+
    "<div>العرض الكلي يشمل padding و border</div>"


  },
  {
    
  id: 6,
  title: " Display ",
  explain:
    "1- Display:\n"+
    "- يحدد كيف يظهر العنصر في الصفحة.\n"+
    "- أهم القيم:\n"+
    "  • block: العنصر يأخذ كامل عرض الصف (div, p)\n"+
    "  • inline: العنصر يظهر في نفس السطر (span, a)\n"+
    "  • inline-block: يجمع بين inline و block (يأخذ عرض وارتفاع لكن في نفس السطر)\n"+
    "  • none: يخفي العنصر (لا يظهر في الصفحة)\n"+
    "  • flex: لتحويل العنصر الحاوي إلى flex container\n"+
    "  • grid: لتحويل العنصر الحاوي إلى grid container\n"+
    "\n"+
    "2- Position:\n"+
    "- يحدد كيف يتم وضع العنصر في الصفحة.\n"+
    "- أهم القيم:\n"+
    "  • static: الوضع الافتراضي، يظهر حسب ترتيب العناصر.\n"+
    "  • relative: يتم وضع العنصر نسبياً لموقعه الأصلي.\n"+
    "  • absolute: يتم وضع العنصر بالنسبة لأقرب عنصر أبوي له position != static.\n"+
    "  • fixed: يبقى العنصر ثابت عند التمرير.\n"+
    "  • sticky: يلتصق عند التمرير بعد الوصول لنقطة معينة.\n",

  example:
    "1- Display Block vs Inline:\n"+
    "<div style='display:block; background:lightblue;'>Block Element</div>\n"+
    "<span style='display:inline; background:lightgreen;'>Inline Element</span>\n"+
    "----------------------------------------\n"+
    "2- Display None:\n"+
    "<p style='display:none;'>هذا النص مخفي</p>\n"+
    "----------------------------------------\n"+
    "3- Display Flex:\n"+
    "<div style='display:flex; justify-content:space-between;'>\n"+
    "  <div>Item 1</div>\n"+
    "  <div>Item 2</div>\n"+
    "  <div>Item 3</div>\n"+
    "</div>\n"+
    "----------------------------------------\n"+
    "4- Position Relative & Absolute:\n"+
    "<div style='position:relative; width:300px; height:200px; background:lightgrey;'>\n"+
    "  <div style='position:absolute; top:50px; left:50px; background:red;'>Absolute</div>\n"+
    "</div>\n"+
    "----------------------------------------\n"+
    "5- Position Fixed:\n"+
    "<div style='position:fixed; bottom:0; right:0; background:yellow;'>Fixed Footer</div>\n"+
    "----------------------------------------\n"+
    "6- Position Sticky:\n"+
    "<div style='position:sticky; top:0; background:orange;'>Sticky Header</div>"


  },
  {
    
  id: 7,
  title: " Width & Height",
  explain:
    "تُستخدم خصائص Width و Height لتحديد أبعاد العناصر في الصفحة.\n"+
    "- width: لتحديد عرض العنصر.\n"+
    "- height: لتحديد ارتفاع العنصر.\n"+
    "- يمكن استخدام القيم:\n"+
    "  • px: وحدات البكسل، ثابتة.\n"+
    "  • %: نسبة من العنصر الأبوي.\n"+
    "  • em/rem: وحدات بالنسبة لحجم الخط.\n"+
    "  • auto: الحجم يعتمد على المحتوى.\n"+
    "- يمكن استخدام min-width, max-width, min-height, max-height للتحكم في الحد الأدنى والأقصى للأبعاد.\n",

  example:
    "1- تحديد عرض وارتفاع ثابت بالبكسل:\n"+
    "<div style='width:200px; height:100px; background:lightblue;'>Fixed Size</div>\n"+
    "----------------------------------------\n"+
    "2- تحديد عرض وارتفاع بنسبة:\n"+
    "<div style='width:50%; height:50%; background:lightgreen;'>50% Size</div>\n"+
    "----------------------------------------\n"+
    "3- استخدام auto:\n"+
    "<div style='width:auto; height:auto; background:lightcoral;'>Auto Size</div>\n"+
    "----------------------------------------\n"+
    "4- الحد الأدنى والحد الأقصى:\n"+
    "<div style='width:300px; min-width:150px; max-width:400px; height:100px; background:orange;'>Min & Max Width</div>\n"+
    "<div style='height:150px; min-height:100px; max-height:200px; background:yellow;'>Min & Max Height</div>"


  },
  {
    
  id: 8,
  title: " Text Shadow",
  explain:
    "خاصية text-shadow تستخدم لإضافة ظل للنصوص.\n"+
    "- الصياغة: text-shadow: offsetX offsetY blurRadius color;\n"+
    "- offsetX: المسافة الأفقية للظل (سالب لليسار، موجب لليمين).\n"+
    "- offsetY: المسافة الرأسية للظل (سالب لأعلى، موجب لأسفل).\n"+
    "- blurRadius: درجة تمويه الظل (اختياري).\n"+
    "- color: لون الظل.\n"+
    "- يمكن إضافة أكثر من ظل باستخدام فاصلة ',' بين كل ظل.\n",

  example:
    "1- ظل بسيط للنص:\n"+
    "<p style='text-shadow: 2px 2px gray;'>Hello World</p>\n"+
    "----------------------------------------\n"+
    "2- ظل مع تمويه:\n"+
    "<p style='text-shadow: 2px 2px 5px black;'>Blurred Shadow</p>\n"+
    "----------------------------------------\n"+
    "3- أكثر من ظل:\n"+
    "<p style='text-shadow: 1px 1px red, -1px -1px blue;'>Multiple Shadows</p>\n"+
    "----------------------------------------\n"+
    "4- ملاحظات:\n"+
    "- يمكن استخدام rgba للون الشفاف.\n"+
    "- النصوص الكبيرة تظهر الظلال بشكل أفضل."


  },
  {
    
  id: 9,
  title: " Overflow",
  explain:
    "خاصية overflow تتحكم في كيفية عرض المحتوى الزائد عن حجم العنصر.\n"+
    "- overflow: visible; المحتوى الزائد يظهر خارج العنصر (الافتراضي).\n"+
    "- overflow: hidden; المحتوى الزائد يتم قصه ولا يظهر.\n"+
    "- overflow: scroll; يظهر شريط تمرير حتى لو المحتوى أقل من حجم العنصر.\n"+
    "- overflow: auto; يظهر شريط تمرير فقط عند الحاجة.\n"+
    "- يمكن التحكم في overflow-x (أفقي) و overflow-y (رأسي) بشكل منفصل.\n",

  example:
    "1- overflow: visible (المحتوى يظهر خارج الصندوق):\n"+
    "<div style='width:100px; height:50px; border:1px solid black; overflow:visible;'>"+
    "هذا نص طويل جدا ولن يختفي</div>\n"+
    "----------------------------------------\n"+
    "2- overflow: hidden (قص المحتوى الزائد):\n"+
    "<div style='width:100px; height:50px; border:1px solid black; overflow:hidden;'>"+
    "هذا نص طويل جدا ولن يظهر كله</div>\n"+
    "----------------------------------------\n"+
    "3- overflow: scroll (شريط تمرير دائم):\n"+
    "<div style='width:100px; height:50px; border:1px solid black; overflow:scroll;'>"+
    "هذا نص طويل جدا وسيظهر شريط التمرير</div>\n"+
    "----------------------------------------\n"+
    "4- overflow: auto (شريط تمرير عند الحاجة):\n"+
    "<div style='width:100px; height:50px; border:1px solid black; overflow:auto;'>"+
    "هذا نص طويل جدا وسيظهر شريط التمرير فقط عند الحاجة</div>\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- استخدام overflow مهم لتجنب تشوه التصميم عند المحتوى الزائد.\n"+
    "- يمكن دمجه مع max-width و max-height للتحكم الكامل."

  },
  {
    
  id: 10,
  title: " Text Align",
  explain:
    "خاصية text-align تتحكم في محاذاة النص داخل العنصر.\n"+
    "- text-align: left;  المحاذاة لليسار (الافتراضي في معظم اللغات).\n"+
    "- text-align: right; المحاذاة لليمين.\n"+
    "- text-align: center; المحاذاة في المنتصف.\n"+
    "- text-align: justify; توزيع النص ليملأ السطر بالكامل (تسوية).\n"+
    "- text-align: start; المحاذاة بداية السطر حسب اتجاه النص (ltr/rtl).\n"+
    "- text-align: end; المحاذاة نهاية السطر حسب اتجاه النص (ltr/rtl).\n",

  example:
    "1- text-align: left;\n"+
    "<div style='width:300px; border:1px solid black; text-align:left;'>"+
    "هذا نص محاذاة لليسار</div>\n"+
    "----------------------------------------\n"+
    "2- text-align: right;\n"+
    "<div style='width:300px; border:1px solid black; text-align:right;'>"+
    "هذا نص محاذاة لليمين</div>\n"+
    "----------------------------------------\n"+
    "3- text-align: center;\n"+
    "<div style='width:300px; border:1px solid black; text-align:center;'>"+
    "هذا نص محاذاة للمنتصف</div>\n"+
    "----------------------------------------\n"+
    "4- text-align: justify;\n"+
    "<div style='width:300px; border:1px solid black; text-align:justify;'>"+
    "هذا نص سيتم توزيعه ليملأ السطر بالكامل</div>\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- text-align يؤثر فقط على النصوص داخل العنصر.\n"+
    "- يمكن دمجه مع direction: rtl/ltr لتغيير اتجاه النص."


  },
  {
    
  id: 11,
  title: " Vertical Align",
  explain:
    "خاصية vertical-align تتحكم في المحاذاة العمودية للعناصر inline أو inline-block أو داخل الخلايا table-cell.\n"+
    "- vertical-align: baseline;   المحاذاة على خط الأساس للنص (الافتراضي).\n"+
    "- vertical-align: top;       المحاذاة للأعلى.\n"+
    "- vertical-align: middle;    المحاذاة للوسط عموديًا.\n"+
    "- vertical-align: bottom;    المحاذاة للأسفل.\n"+
    "- vertical-align: sub;       محاذاة نص أسفل النص العادي (subscript).\n"+
    "- vertical-align: super;     محاذاة نص فوق النص العادي (superscript).\n"+
    "- vertical-align: text-top;  محاذاة أعلى النص الحالي.\n"+
    "- vertical-align: text-bottom; محاذاة أسفل النص الحالي.\n",

  example:
    "1- vertical-align: top;\n"+
    "<div style='height:100px; border:1px solid black;'>"+
    "<span style='vertical-align:top; border:1px solid red;'>أعلى</span>"+
    "<span style='border:1px solid blue;'>النص العادي</span></div>\n"+
    "----------------------------------------\n"+
    "2- vertical-align: middle;\n"+
    "<div style='height:100px; border:1px solid black;'>"+
    "<span style='vertical-align:middle; border:1px solid red;'>وسط</span>"+
    "<span style='border:1px solid blue;'>النص العادي</span></div>\n"+
    "----------------------------------------\n"+
    "3- vertical-align: bottom;\n"+
    "<div style='height:100px; border:1px solid black;'>"+
    "<span style='vertical-align:bottom; border:1px solid red;'>أسفل</span>"+
    "<span style='border:1px solid blue;'>النص العادي</span></div>\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- لا تعمل مع عناصر block، بل مع inline و inline-block و table-cell.\n"+
    "- مفيدة لمحاذاة الصور أو أي عناصر صغيرة بجانب النص."


  },
  {
    
  id: 12,
  title: " Text Decoration",
  explain:
    "خاصية text-decoration تتحكم في تزيين النصوص في CSS.\n"+
    "- text-decoration: none;          إزالة أي خط تحت النص (بدون decoration).\n"+
    "- text-decoration: underline;     خط تحت النص.\n"+
    "- text-decoration: overline;      خط فوق النص.\n"+
    "- text-decoration: line-through;  خط يمر عبر النص (Strike-through).\n"+
    "- text-decoration: blink;         يجعل النص يومض (غير مدعوم في معظم المتصفحات).\n"+
    "- text-decoration: inherit;       يرث قيمة decoration من العنصر الأب.\n"+
    "- text-decoration-color: red;     لتغيير لون الخط.\n"+
    "- text-decoration-style: solid | dotted | dashed | wavy;  لتغيير نمط الخط.\n",

  example:
    "1- خط تحت النص:\n"+
    "<p style='text-decoration: underline;'>هذا نص تحته خط</p>\n"+
    "----------------------------------------\n"+
    "2- خط فوق النص:\n"+
    "<p style='text-decoration: overline;'>هذا نص عليه خط فوقه</p>\n"+
    "----------------------------------------\n"+
    "3- خط يمر عبر النص:\n"+
    "<p style='text-decoration: line-through;'>هذا نص مخطوط</p>\n"+
    "----------------------------------------\n"+
    "4- إزالة أي خط:\n"+
    "<p style='text-decoration: none;'>هذا نص بدون أي تزيين</p>\n"+
    "----------------------------------------\n"+
    "5- تغيير لون الخط ونمطه:\n"+
    "<p style='text-decoration: underline wavy red;'>نص بخط أحمر مموج تحت النص</p>\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- مفيدة لتزيين الروابط والنصوص.\n"+
    "- text-decoration اختصرت كثيرًا في CSS3 بدلاً من استخدام خصائص متعددة."


  },
  {
    
  id: 13,
  title: " Text Transform",
  explain:
    "خاصية text-transform تتحكم في تحويل النصوص في CSS.\n"+
    "- text-transform: uppercase;      تحويل كل الحروف إلى كبيرة.\n"+
    "- text-transform: lowercase;      تحويل كل الحروف إلى صغيرة.\n"+
    "- text-transform: capitalize;     جعل أول حرف من كل كلمة كبير.\n"+
    "- text-transform: none;           الاحتفاظ بالنص كما هو.\n",

  example:
    "1- تحويل كل الحروف إلى كبيرة:\n"+
    "<p style='text-transform: uppercase;'>هذا نص بالحروف الكبيرة</p>\n"+
    "----------------------------------------\n"+
    "2- تحويل كل الحروف إلى صغيرة:\n"+
    "<p style='text-transform: lowercase;'>هذا نص بالحروف الصغيرة</p>\n"+
    "----------------------------------------\n"+
    "3- جعل أول حرف من كل كلمة كبير:\n"+
    "<p style='text-transform: capitalize;'>هذا نص كل كلمة أول حرف كبير</p>\n"+
    "----------------------------------------\n"+
    "4- الاحتفاظ بالنص كما هو:\n"+
    "<p style='text-transform: none;'>هذا نص بدون أي تحويل</p>\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- مفيدة لتنسيق العناوين والنصوص في المواقع.\n"+
    "- يمكن استخدامها مع الروابط أو أي عنصر نصي."

  },
  {
    
  id: 14,
  title: " Spacing (Letter & Line)",
  explain:
    "خاصية spacing تتحكم في المسافات بين الأحرف والكلمات والأسطر في النصوص.\n"+
    "- letter-spacing: تتحكم في المسافة بين الأحرف.\n"+
    "- word-spacing: تتحكم في المسافة بين الكلمات.\n"+
    "- line-height: تتحكم في ارتفاع الأسطر (المسافة بين الأسطر).\n",

  example:
    "1- المسافة بين الأحرف:\n"+
    "<p style='letter-spacing: 5px;'>هذا نص مع مسافة بين الأحرف</p>\n"+
    "----------------------------------------\n"+
    "2- المسافة بين الكلمات:\n"+
    "<p style='word-spacing: 20px;'>هذا نص مع مسافة بين الكلمات</p>\n"+
    "----------------------------------------\n"+
    "3- ارتفاع الأسطر:\n"+
    "<p style='line-height: 2;'>هذا نص مع مسافة بين الأسطر أكبر</p>\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- letter-spacing بالعادة يستخدم للعناوين أو النصوص الكبيرة.\n"+
    "- word-spacing مفيد لتنسيق الفقرات وجعل النص أوضح.\n"+
    "- line-height يساعد على تحسين قابلية القراءة للنصوص الطويلة."


  },
  {
    
  id: 15,
  title: " Text Indent & White Space",
  explain:
    "خاصية text-indent تتحكم في المسافة التي يبدأ منها السطر الأول من الفقرة.\n"+
    "خاصية white-space تتحكم في كيفية التعامل مع المسافات البيضاء والأسطر في النصوص.\n"+
    "- text-indent: يحدد مقدار المسافة في بداية السطر الأول.\n"+
    "- white-space: القيمة normal (افتراضي) تعالج المسافات بشكل طبيعي، nowrap تمنع الالتفاف، pre تحافظ على كل المسافات والأسطر كما هي.\n",

  example:
    "1- text-indent لتحديد المسافة في بداية السطر:\n"+
    "<p style='text-indent: 50px;'>هذا نص يبدأ بمسافة من اليسار 50 بكسل</p>\n"+
    "----------------------------------------\n"+
    "2- white-space normal (افتراضي):\n"+
    "<p style='white-space: normal;'>هذا نص طويل سيقوم بالالتفاف تلقائيًا عند نهاية السطر.</p>\n"+
    "----------------------------------------\n"+
    "3- white-space nowrap:\n"+
    "<p style='white-space: nowrap;'>هذا نص طويل لن يلتف أبداً وسيبقى في سطر واحد</p>\n"+
    "----------------------------------------\n"+
    "4- white-space pre:\n"+
    "<p style='white-space: pre;'>هذا نص\nيحافظ على\nكل الأسطر والمسافات</p>\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- text-indent مفيد لتنسيق الفقرات في المقالات.\n"+
    "- white-space يتحكم في كيفية عرض النصوص مع المسافات البيضاء، مفيد للنصوص البرمجية أو ASCII art."


  },
  {

  
  id: 16,
  title: "Text Overflow & Word Handling",
  explain:
    "خاصية text-overflow تتحكم في كيفية عرض النص الذي يتجاوز حاويته.\n"+
    "خصائص word-wrap و word-break تتحكم في كيفية تقسيم الكلمات الطويلة.\n"+
    "- text-overflow: قيمتها الرئيسية 'clip' (اقتطاع النص) و 'ellipsis' (إضافة ثلاث نقاط ...).\n"+
    "- white-space: غالبًا تستخدم مع text-overflow لضبط الالتفاف أو عدم الالتفاف.\n"+
    "- word-wrap: القيمة 'break-word' تسمح بكسر الكلمة عند نهاية السطر.\n"+
    "- word-break: تتحكم بكسر الكلمات حسب اللغة والقواعد، مثل 'break-all' أو 'keep-all'.\n",

  example:
    "1- text-overflow مع ellipsis:\n"+
    "<div style='width: 150px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'>هذا نص طويل جدًا لن يظهر كله</div>\n"+
    "----------------------------------------\n"+
    "2- text-overflow مع clip:\n"+
    "<div style='width: 150px; white-space: nowrap; overflow: hidden; text-overflow: clip;'>هذا نص طويل جدًا لن يظهر كله</div>\n"+
    "----------------------------------------\n"+
    "3- word-wrap break-word:\n"+
    "<div style='width: 150px; word-wrap: break-word;'>كلمةطويلةجداًبدونفراغاتلتكسرالسطر</div>\n"+
    "----------------------------------------\n"+
    "4- word-break break-all:\n"+
    "<div style='width: 150px; word-break: break-all;'>كلمةطويلةجداًبدونفراغاتلتكسرالسطر</div>\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- text-overflow مفيد للبطاقات أو القوائم حيث لا نريد النص الطويل أن يفسد التصميم.\n"+
    "- word-wrap و word-break تساعد على التحكم بالنصوص طويلة الكلمات أو بدون مسافات."
  },
  {
    
  id: 17,
  title: "Inheritance ",
  explain:
    "الوراثة في CSS معناها أن بعض الخصائص اللي بتتطبق على عنصر الأب (Parent) ممكن تنتقل لعناصره الأبناء (Children) تلقائيًا.\n"+
    "مش كل الخصائص تُورّث، وبعضها يحتاج تحديد صريح.\n"+
    "- الخصائص التي عادةً تُورّث: color, font-family, font-size, font-style, font-weight, text-align.\n"+
    "- الخصائص التي لا تُورّث: margin, padding, border, width, height, background.\n"+
    "- يمكن إجبار أي خاصية على الوراثة باستخدام القيمة 'inherit'.\n"+
    "- يمكن منع الوراثة أحيانًا باستخدام القيمة 'initial' أو 'unset'.\n",

  example:
    "1- وراثة اللون (color):\n"+
    "<div style='color: red;'>\n"+
    "  <p>هذا نص سيتم وراثة اللون الأحمر من العنصر الأب</p>\n"+
    "</div>\n"+
    "----------------------------------------\n"+
    "2- عدم وراثة الخلفية (background):\n"+
    "<div style='background-color: yellow;'>\n"+
    "  <p>هذا النص لن يرث لون الخلفية الأصفر</p>\n"+
    "</div>\n"+
    "----------------------------------------\n"+
    "3- إجبار الخصائص على الوراثة باستخدام inherit:\n"+
    "<div style='font-size: 20px;'>\n"+
    "  <p style='font-size: inherit;'>هذا النص يرث حجم الخط 20px</p>\n"+
    "</div>\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- الوراثة تجعل صيانة التصميم أسهل خصوصًا عند استخدام خصائص الخطوط والألوان.\n"+
    "- بعض الخصائص تحتاج إعادة تعريف لأن الوراثة الطبيعية لا تشملها."


  },
  {
    
  id: 18,
  title: "Fonts",
  explain:
    "في CSS، التحكم في الخطوط يشمل النوع، الحجم، الوزن، والأنماط المختلفة.\n"+
    "أهم الخصائص المتعلقة بالخطوط:\n"+
    "- font-family: تحديد نوع الخط (مثل Arial, Verdana, 'Times New Roman')\n"+
    "- font-size: تحديد حجم الخط (px, em, rem, %, ...) \n"+
    "- font-weight: تحديد سمك الخط (normal, bold, 100..900)\n"+
    "- font-style: تحديد نمط الخط (normal, italic, oblique)\n"+
    "- font-variant: التحكم في أشكال الأحرف الصغيرة (normal, small-caps)\n"+
    "- line-height: التحكم في ارتفاع السطر\n"+
    "- letter-spacing: التحكم في المسافة بين الحروف\n"+
    "- word-spacing: التحكم في المسافة بين الكلمات\n"+
    "- font shorthand: لتحديد كل الخصائص السابقة في سطر واحد\n",

  example:
    "1- تحديد نوع الخط:\n"+
    "<p style='font-family: Arial, sans-serif;'>نص بخط Arial</p>\n"+
    "----------------------------------------\n"+
    "2- تحديد حجم الخط:\n"+
    "<p style='font-size: 24px;'>نص بحجم 24px</p>\n"+
    "----------------------------------------\n"+
    "3- تحديد وزن الخط:\n"+
    "<p style='font-weight: bold;'>نص بخط عريض</p>\n"+
    "----------------------------------------\n"+
    "4- تحديد نمط الخط:\n"+
    "<p style='font-style: italic;'>نص مائل</p>\n"+
    "----------------------------------------\n"+
    "5- استخدام اختصار font:\n"+
    "<p style='font: italic small-caps bold 16px Arial, sans-serif;'>نص بخط مختصر</p>\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- إذا لم يتوفر الخط المطلوب في جهاز المستخدم، يتم استخدام الخط التالي في قائمة font-family.\n"+
    "- يُفضل دائمًا تحديد أكثر من خيار في font-family لضمان عرض الخط بشكل صحيح."


  },
  {
    
  id: 19,
  title: " Opacity ",
  explain:
    "خاصية opacity في CSS تتحكم في شفافية العنصر.\n"+
    "تأخذ قيمة بين 0 و 1:\n"+
    "- 0 تعني العنصر شفاف بالكامل (غير مرئي).\n"+
    "- 1 تعني العنصر غير شفاف (مرئي بالكامل).\n"+
    "- قيم بين 0 و 1 تعني شفافية جزئية.\n"+
    "ملاحظة: عند تقليل الشفافية، كل محتويات العنصر (نصوص، صور، ... ) تصبح شفافة بنفس النسبة.\n",
  example:
    "1- عنصر كامل شفاف بنسبة 50%:\n"+
    "<div style='background-color: red; opacity: 0.5; width: 200px; height: 100px;'>نص داخل الصندوق</div>\n"+
    "----------------------------------------\n"+
    "2- عنصر كامل شفاف بنسبة 20%:\n"+
    "<div style='background-color: blue; opacity: 0.2; width: 200px; height: 100px;'>نص داخل الصندوق</div>\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- opacity تؤثر على كل محتويات العنصر.\n"+
    "- إذا أردت شفافية الخلفية فقط بدون النص، استخدم rgba() للون الخلفية مثل background-color: rgba(255,0,0,0.5);"


  },
  {
  id: 20,
  title: " Cursor ",
  explain:
    "خاصية cursor في CSS تتحكم في شكل مؤشر الماوس عند المرور على عنصر.\n"+
    "يمكن تحديد عدة أشكال للمؤشر حسب الحالة المطلوبة.\n"+
    "بعض القيم الشائعة:\n"+
    "- default: المؤشر الافتراضي (عادة سهم).\n"+
    "- pointer: مؤشر على شكل يد (يستخدم عادة للروابط).\n"+
    "- text: مؤشر نص (عادة خط عمودي) عند المرور على نص.\n"+
    "- move: مؤشر الحركة (عادة علامة + مع أسهم).\n"+
    "- not-allowed: مؤشر مع خط أفقى يدل على أن الفعل غير مسموح.\n"+
    "- crosshair: مؤشر على شكل + دقيق.\n"+
    "- wait: مؤشر الانتظار (ساعة رملية أو دائرة).\n",
  example:
    "1- المؤشر الافتراضي:\n"+
    "<div style='width: 200px; height: 50px; background-color: lightblue; cursor: default;'>Default Cursor</div>\n"+
    "----------------------------------------\n"+
    "2- مؤشر على شكل يد (لروابط):\n"+
    "<div style='width: 200px; height: 50px; background-color: lightgreen; cursor: pointer;'>Pointer Cursor</div>\n"+
    "----------------------------------------\n"+
    "3- مؤشر نص:\n"+
    "<div style='width: 200px; height: 50px; background-color: lightyellow; cursor: text;'>Text Cursor</div>\n"+
    "----------------------------------------\n"+
    "4- مؤشر غير مسموح:\n"+
    "<div style='width: 200px; height: 50px; background-color: lightcoral; cursor: not-allowed;'>Not Allowed Cursor</div>\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- يمكن استخدام cursor لتغيير تجربة المستخدم عند التفاعل مع الأزرار والروابط.\n"+
    "- يمكن أيضا استخدام url() لتعيين أيقونة مخصصة للمؤشر."


  },
  {
    
  id: 21,
  title: " Position ",
  explain:
    "خاصية position في CSS تتحكم في كيفية تموضع العنصر داخل الصفحة.\n"+
    "هناك عدة قيم رئيسية:\n"+
    "- static: القيمة الافتراضية. العنصر يظهر في مكانه الطبيعي حسب تدفق الصفحة.\n"+
    "- relative: العنصر يُحرك بالنسبة لموقعه الأصلي. يمكن استخدام top, bottom, left, right.\n"+
    "- absolute: العنصر يُحرك بالنسبة لأقرب عنصر أبوي له position ليس static.\n"+
    "- fixed: العنصر يبقى في نفس المكان حتى عند التمرير (scroll).\n"+
    "- sticky: العنصر يتصرف كـ relative حتى تصل الصفحة لموضع محدد فيصبح fixed.\n",
  example:
    "1- static (الافتراضي):\n"+
    "<div style='position: static; background-color: lightblue;'>Static</div>\n"+
    "----------------------------------------\n"+
    "2- relative (نسبي):\n"+
    "<div style='position: relative; top: 10px; left: 20px; background-color: lightgreen;'>Relative</div>\n"+
    "----------------------------------------\n"+
    "3- absolute (مطلق):\n"+
    "<div style='position: relative; background-color: lightyellow; height: 150px;'>\n"+
    "  <div style='position: absolute; top: 20px; left: 30px; background-color: lightcoral;'>Absolute</div>\n"+
    "</div>\n"+
    "----------------------------------------\n"+
    "4- fixed (ثابت):\n"+
    "<div style='position: fixed; bottom: 10px; right: 10px; background-color: lightpink;'>Fixed</div>\n"+
    "----------------------------------------\n"+
    "5- sticky (لزج):\n"+
    "<div style='position: sticky; top: 0; background-color: lightgray;'>Sticky</div>\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- عند استخدام absolute أو fixed، العنصر يُخرج من التدفق الطبيعي للصفحة.\n"+
    "- sticky يحتاج أن يكون داخل عنصر أبوي ليعمل بشكل صحيح."


  },
  {
    
  id: 22,
  title: " Z-Index ",
  explain:
    "خاصية z-index في CSS تتحكم في ترتيب العناصر عندما تتداخل (تتراكب) فوق بعضها.\n"+
    "كل عنصر له مستوى على المحور Z (عمودي على الشاشة). القيم الأعلى تظهر فوق القيم الأقل.\n"+
    "شروط استخدام z-index:\n"+
    "- العنصر يجب أن يكون له position: relative, absolute, fixed, أو sticky.\n"+
    "- z-index لا يعمل على العناصر position: static.\n"+
    "- يمكن استخدام أرقام موجبة، صفر، أو أرقام سالبة.\n",
  example:
    "1- عناصر متراكبة مع z-index مختلف:\n"+
    "<div style='position: relative; width: 200px; height: 200px; background-color: lightblue;'>\n"+
    "  <div style='position: absolute; top: 20px; left: 20px; width: 100px; height: 100px; background-color: red; z-index: 1;'>Red</div>\n"+
    "  <div style='position: absolute; top: 50px; left: 50px; width: 100px; height: 100px; background-color: green; z-index: 2;'>Green</div>\n"+
    "</div>\n"+
    "----------------------------------------\n"+
    "2- z-index سالب:\n"+
    "<div style='position: relative; width: 200px; height: 200px; background-color: lightgray;'>\n"+
    "  <div style='position: absolute; top: 20px; left: 20px; width: 100px; height: 100px; background-color: orange; z-index: -1;'>Orange</div>\n"+
    "  <div style='position: absolute; top: 40px; left: 40px; width: 100px; height: 100px; background-color: purple; z-index: 0;'>Purple</div>\n"+
    "</div>\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- العناصر ذات z-index أعلى ستظهر فوق العناصر ذات z-index أقل.\n"+
    "- z-index يعمل فقط على العناصر التي لها position مختلف عن static.\n"+
    "- يمكن استخدام z-index لتصميم القوائم المنسدلة (Dropdowns)، النوافذ المنبثقة (Modals)، وغيرها."


  },
  {
    
  id: 23,
  title: " Lists ",
  explain:
    "في CSS، يمكنك التحكم في شكل القوائم (Lists) سواء كانت Ordered (مرتبة) أو Unordered (غير مرتبة).\n"+
    "الخصائص المهمة للقوائم:\n"+
    "- list-style-type: لتحديد نوع العلامة (bullet) أو الرقم.\n"+
    "- list-style-image: لوضع صورة بدل العلامة.\n"+
    "- list-style-position: لتحديد مكان العلامة داخل العنصر أو خارجه.\n"+
    "- يمكنك التحكم في المسافات باستخدام margin و padding للقائمة.\n",
  example:
    "1- قائمة غير مرتبة (Unordered list) بالعناصر العادية:\n"+
    "<ul style='list-style-type: disc;'>\n"+
    "  <li>العنصر الأول</li>\n"+
    "  <li>العنصر الثاني</li>\n"+
    "  <li>العنصر الثالث</li>\n"+
    "</ul>\n"+
    "----------------------------------------\n"+
    "2- قائمة مرتبة (Ordered list) بأرقام رومانية:\n"+
    "<ol style='list-style-type: upper-roman;'>\n"+
    "  <li>العنصر الأول</li>\n"+
    "  <li>العنصر الثاني</li>\n"+
    "  <li>العنصر الثالث</li>\n"+
    "</ol>\n"+
    "----------------------------------------\n"+
    "3- استخدام صورة كعلامة للقائمة:\n"+
    "<ul style='list-style-image: url(\"bullet.png\");'>\n"+
    "  <li>العنصر الأول</li>\n"+
    "  <li>العنصر الثاني</li>\n"+
    "  <li>العنصر الثالث</li>\n"+
    "</ul>\n"+
    "----------------------------------------\n"+
    "4- تغيير مكان العلامة (داخل/خارج):\n"+
    "<ul style='list-style-position: inside;'>\n"+
    "  <li>العنصر الأول</li>\n"+
    "  <li>العنصر الثاني</li>\n"+
    "</ul>\n"+
    "<ul style='list-style-position: outside;'>\n"+
    "  <li>العنصر الأول</li>\n"+
    "  <li>العنصر الثاني</li>\n"+
    "</ul>\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- يمكن الجمع بين list-style-type و list-style-image و list-style-position في خاصية واحدة: list-style.\n"+
    "- استخدام margin و padding يتيح التحكم في المسافة بين العناصر.\n"+
    "- القوائم مهمة لإنشاء القوائم الرئيسية، القوائم الجانبية، أو أي عرض منظم للمحتوى."


  },
  {
    
  id: 24,
  title: " Pseudo-classes & Actions ",
  explain:
    "Pseudo-classes تسمح لك بتطبيق CSS على عناصر بناءً على حالتها أو تفاعل المستخدم.\n"+
    "أمثلة شائعة:\n"+
    "- :hover → عندما يمر الماوس على العنصر.\n"+
    "- :active → عندما يتم النقر على العنصر.\n"+
    "- :focus → عندما يكون العنصر في حالة التركيز (مثل input).\n"+
    "- :checked → عندما يكون عنصر input من النوع checkbox أو radio محدد.\n"+
    "- :disabled → عندما يكون العنصر معطل.\n"+
    "- :first-child, :last-child → لتحديد أول أو آخر عنصر داخل parent.\n"+
    "- :nth-child(n) → لتحديد العنصر nth داخل parent.\n",
  example:
    "1- تغيير لون زر عند المرور بالماوس:\n"+
    "button:hover {\n"+
    "  background-color: blue;\n"+
    "  color: white;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "2- تغيير لون زر عند الضغط عليه:\n"+
    "button:active {\n"+
    "  background-color: darkblue;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "3- تغيير لون حقل input عند التركيز:\n"+
    "input:focus {\n"+
    "  border-color: green;\n"+
    "  outline: none;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "4- تلوين checkbox أو radio عند الاختيار:\n"+
    "input[type='checkbox']:checked {\n"+
    "  accent-color: red;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "5- تعطيل زر عند حالة disabled:\n"+
    "button:disabled {\n"+
    "  background-color: grey;\n"+
    "  cursor: not-allowed;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "6- تحديد أول عنصر في القائمة:\n"+
    "ul li:first-child {\n"+
    "  font-weight: bold;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "7- تحديد آخر عنصر في القائمة:\n"+
    "ul li:last-child {\n"+
    "  font-style: italic;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "8- تحديد العنصر nth في القائمة:\n"+
    "ul li:nth-child(2) {\n"+
    "  color: red;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- Pseudo-classes مهمة جداً لتحسين تجربة المستخدم.\n"+
    "- يمكن دمجها مع أي selector مثل div:hover, a:focus, input:checked.\n"+
    "- بعض الـ pseudo-classes حديثة مثل :not() و :empty توفر تحكم أكبر."


  },
  {
    
  id: 25,
  title: " Pseudo-elements ",
  explain:
    "Pseudo-elements تسمح لك بتطبيق CSS على جزء معين من العنصر أو لإنشاء محتوى إضافي.\n"+
    "أمثلة شائعة:\n"+
    "- ::before → إنشاء محتوى قبل محتوى العنصر.\n"+
    "- ::after → إنشاء محتوى بعد محتوى العنصر.\n"+
    "- ::first-letter → تنسيق أول حرف من النص.\n"+
    "- ::first-line → تنسيق أول سطر من النص.\n"+
    "- ::selection → تنسيق النص عند تحديده بالماوس.\n",
  example:
    "1- إضافة رمز قبل النص باستخدام ::before:\n"+
    "p::before {\n"+
    "  content: '⚡ '; /* رمز ⚡ قبل النص */\n"+
    "  color: red;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "2- إضافة محتوى بعد النص باستخدام ::after:\n"+
    "p::after {\n"+
    "  content: ' ✔';\n"+
    "  color: green;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "3- تنسيق أول حرف من الفقرة:\n"+
    "p::first-letter {\n"+
    "  font-size: 2em;\n"+
    "  font-weight: bold;\n"+
    "  color: blue;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "4- تنسيق أول سطر من الفقرة:\n"+
    "p::first-line {\n"+
    "  font-style: italic;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "5- تغيير لون النص عند تحديده (::selection):\n"+
    "p::selection {\n"+
    "  background-color: yellow;\n"+
    "  color: black;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- Pseudo-elements تختلف عن Pseudo-classes، فهي تؤثر على جزء من العنصر أو تضيف محتوى.\n"+
    "- يجب استخدام property 'content' عند استخدام ::before و ::after.\n"+
    "- يمكن دمجها مع أي selector مثل div::before, span::first-letter."


  },
  {
    
  id: 26,
  title: " Border ",
  explain:
    "الـ Border (الحواف) تستخدم لتحديد إطار حول العناصر.\n"+
    "يمكن التحكم في سمك الحافة، نوعها، ولونها.\n"+
    "أهم الخصائص:\n"+
    "- border-width → سمك الحافة (px, em, rem, ...)\n"+
    "- border-style → نوع الحافة (solid, dashed, dotted, double, none, ...)\n"+
    "- border-color → لون الحافة\n"+
    "- border-radius → لتدوير زوايا الحافة (لعمل مستطيل دائري أو دائرة)\n"+
    "- border-top / border-right / border-bottom / border-left → للتحكم بحواف محددة\n"+
    "- shorthand border → لتحديد كل الخصائص في سطر واحد\n",
  example:
    "1- حافة بسيطة:\n"+
    "div {\n"+
    "  border-width: 2px;\n"+
    "  border-style: solid;\n"+
    "  border-color: black;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "2- حافة مختصرة (شامل كل الخصائص):\n"+
    "div {\n"+
    "  border: 3px dashed red;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "3- حافة مع تدوير الزوايا:\n"+
    "div {\n"+
    "  border: 2px solid blue;\n"+
    "  border-radius: 10px;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "4- حافة محددة للجانب:\n"+
    "div {\n"+
    "  border-top: 5px solid green;\n"+
    "  border-left: 3px dotted red;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- border-radius يعطي تأثير دائري على الزوايا.\n"+
    "- يمكن استخدام border مع الصور والـ buttons لتصميم جذاب.\n"+
    "- يمكن التحكم في كل جانب على حدة أو استخدام الاختصار border."


  },
  {
    
  id: 27,
  title: " Box Shadow ",
  explain:
    "خاصية Box Shadow تستخدم لإضافة ظل حول العناصر.\n"+
    "يمكن التحكم في لون الظل، موضعه، ومدى انتشار الظل.\n"+
    "أهم القيم:\n"+
    "- offset-x → المسافة الأفقية للظل (إيجابية لليمين، سلبية لليسار)\n"+
    "- offset-y → المسافة الرأسية للظل (إيجابية للأسفل، سلبية للأعلى)\n"+
    "- blur-radius → لتحديد مدى ضبابية الظل (اختياري)\n"+
    "- spread-radius → لتحديد مدى توسع الظل (اختياري)\n"+
    "- color → لون الظل\n"+
    "- inset → يجعل الظل داخل العنصر بدلاً من خارجه\n",
  example:
    "1- ظل بسيط:\n"+
    "div {\n"+
    "  width: 150px;\n"+
    "  height: 100px;\n"+
    "  background-color: lightblue;\n"+
    "  box-shadow: 5px 5px 10px gray;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "2- ظل متعدد:\n"+
    "div {\n"+
    "  width: 150px;\n"+
    "  height: 100px;\n"+
    "  background-color: pink;\n"+
    "  box-shadow: 3px 3px 5px red, -3px -3px 5px blue;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "3- ظل داخلي:\n"+
    "div {\n"+
    "  width: 150px;\n"+
    "  height: 100px;\n"+
    "  background-color: lightgreen;\n"+
    "  box-shadow: inset 5px 5px 10px black;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- يمكن الجمع بين box-shadow و border-radius للحصول على تأثيرات جذابة.\n"+
    "- يمكن تحديد أكثر من ظل على نفس العنصر بفاصلة.\n"+
    "- inset يحول الظل ليكون داخل العنصر بدلاً من الخارج."

  },
  {
    
  id: 28,
  title: " Transition ",
  explain:
    "خاصية Transition تسمح بعمل تأثيرات سلسة عند تغيير قيم الخصائص في CSS.\n"+
    "يمكن التحكم في مدة الانتقال، نوع التوقيت، والخصائص التي ستتأثر.\n"+
    "أهم القيم:\n"+
    "- property → الخاصية التي تريد تطبيق الانتقال عليها (مثل color, width, height, background-color)\n"+
    "- duration → المدة الزمنية للانتقال (مثل 0.5s أو 500ms)\n"+
    "- timing-function → نمط سرعة الانتقال (linear, ease, ease-in, ease-out, ease-in-out)\n"+
    "- delay → تأخير بدء الانتقال (اختياري)\n",
  example:
    "1- انتقال لون الخلفية عند المرور بالماوس:\n"+
    "div {\n"+
    "  width: 150px;\n"+
    "  height: 100px;\n"+
    "  background-color: lightblue;\n"+
    "  transition: background-color 0.5s ease;\n"+
    "}\n"+
    "div:hover {\n"+
    "  background-color: lightcoral;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "2- انتقال حجم العنصر:\n"+
    "div {\n"+
    "  width: 100px;\n"+
    "  height: 100px;\n"+
    "  background-color: pink;\n"+
    "  transition: width 0.5s ease, height 0.5s ease;\n"+
    "}\n"+
    "div:hover {\n"+
    "  width: 150px;\n"+
    "  height: 150px;\n"+
    "}\n"+
    "----------------------------------------\n"+
    "3- استخدام delay وتأثير linear:\n"+
    "div {\n"+
    "  width: 100px;\n"+
    "  height: 100px;\n"+
    "  background-color: lightgreen;\n"+
    "  transition: all 1s linear 0.3s;\n"+
    "}\n"+
    "div:hover {\n"+
    "  background-color: green;\n"+
    "  transform: rotate(20deg);\n"+
    "}\n"+
    "----------------------------------------\n"+
    "ملاحظات:\n"+
    "- يمكن استخدام 'all' لتطبيق الانتقال على كل الخصائص القابلة للانتقال.\n"+
    "- التوقيت والتأخير يمكن التحكم فيهما لتصميم تأثيرات سلسة وجذابة.\n"+
    "- يجب أن يكون هناك قيمة مختلفة للخاصية عند التفاعل (hover أو class) حتى يظهر التأثير."


  },
  
  {
    id: 29,
    title: "Variables ",
    explain:
      "- CSS Variables تسمح لك بتخزين قيمة معينة لاستخدامها في أكثر من مكان.\n"+
      "- تُعرف عادةً في عنصر :root عشان تكون متاحة لكل الصفحة.\n"+
      "- الصيغة: --variable-name: value;\n"+
      "- لاستخدام المتغير: var(--variable-name);\n"+
      "- فوايدها: تسهل التعديل، توفر الوقت، وتنظم الكود.\n",
    example:
      "/* تعريف المتغيرات */\n"+
      ":root {\n"+
      "  --main-color: #3498db;\n"+
      "  --secondary-color: #2ecc71;\n"+
      "  --font-size: 18px;\n"+
      "}\n\n"+
      "/* استخدام المتغيرات */\n"+
      "body {\n"+
      "  background-color: var(--secondary-color);\n"+
      "  color: var(--main-color);\n"+
      "  font-size: var(--font-size);\n"+
      "}\n\n"+
      "h1 {\n"+
      "  color: var(--main-color);\n"+
      "}\n"
  },
   {
    id: 30,
    title: " Flexbox",
    explain:
      "- Flexbox نظام لتنسيق العناصر داخل Container بطريقة مرنة.\n"+
      "- العناصر الأب (Parent) يكون display:flex;\n"+
      "- يمكن التحكم في اتجاه العناصر، المحاذاة، الفراغ بينهم بسهولة.\n"+
      "- الخصائص المهمة للـ Container:\n"+
      "  - flex-direction (row, column, row-reverse, column-reverse)\n"+
      "  - justify-content (flex-start, flex-end, center, space-between, space-around)\n"+
      "  - align-items (flex-start, flex-end, center, stretch, baseline)\n"+
      "  - flex-wrap (nowrap, wrap, wrap-reverse)\n"+
      "- الخصائص المهمة للعناصر الفرعية:\n"+
      "  - flex-grow\n"+
      "  - flex-shrink\n"+
      "  - flex-basis\n"+
      "  - align-self\n",
    example:
      "/* Container */\n"+
      ".container {\n"+
      "  display: flex;\n"+
      "  flex-direction: row;\n"+
      "  justify-content: space-between;\n"+
      "  align-items: center;\n"+
      "  flex-wrap: wrap;\n"+
      "}\n\n"+
      "/* Items */\n"+
      ".item {\n"+
      "  flex: 1 1 100px; /* grow shrink basis */\n"+
      "  margin: 10px;\n"+
      "  padding: 20px;\n"+
      "  border: 1px solid #ccc;\n"+
      "}\n"
  },
  {
  id: 31,
  title: " align-content",
  explain:
    "- الخاصية `align-content` تتحكم في توزيع الأسطر (lines) داخل Container عند وجود أكثر من خط (multi-line flex container).\n"+
    "- تعمل فقط إذا كان هناك **flex-wrap: wrap**.\n"+
    "- القيم الممكنة:\n"+
    "  - flex-start: محاذاة كل الأسطر في بداية الحاوية\n"+
    "  - flex-end: محاذاة كل الأسطر في نهاية الحاوية\n"+
    "  - center: وضع كل الأسطر في المنتصف\n"+
    "  - space-between: توزيع الفراغات بين الأسطر بالتساوي\n"+
    "  - space-around: توزيع الفراغات حول كل سطر\n"+
    "  - stretch: تمديد الأسطر لملء الحاوية (افتراضي)\n",
  example:
    "/* Container */\n"+
    ".container {\n"+
    "  display: flex;\n"+
    "  flex-wrap: wrap;\n"+
    "  align-content: space-between;\n"+
    "  height: 300px; /* لازم يكون عندك ارتفاع عشان يظهر الفرق */\n"+
    "}\n\n"+
    "/* Items */\n"+
    ".item {\n"+
    "  flex: 1 1 100px;\n"+
    "  margin: 5px;\n"+
    "  background-color: lightblue;\n"+
    "  height: 50px;\n"+
    "}\n"
},
{
  id: 32,
  title: " align-self",
  explain:
    "- الخاصية `align-self` تتحكم في محاذاة عنصر واحد داخل Flex Container على المحور العمودي (cross axis).\n"+
    "- تغلب على الخاصية `align-items` الخاصة بالحاوية.\n"+
    "- القيم الممكنة:\n"+
    "  - auto: الوراثة من align-items (الافتراضي)\n"+
    "  - flex-start: وضع العنصر في بداية المحور العمودي\n"+
    "  - flex-end: وضع العنصر في نهاية المحور العمودي\n"+
    "  - center: وضع العنصر في المنتصف\n"+
    "  - baseline: محاذاة حسب خط النص الأساسي للعنصر\n"+
    "  - stretch: تمديد العنصر ليملأ الحاوية عمودياً\n",
  example:
    "/* Container */\n"+
    ".container {\n"+
    "  display: flex;\n"+
    "  height: 200px;\n"+
    "  align-items: flex-start;\n"+
    "}\n\n"+
    "/* Items */\n"+
    ".item1 {\n"+
    "  align-self: center; /* هذا العنصر سيكون في منتصف المحور العمودي */\n"+
    "  background-color: lightcoral;\n"+
    "  width: 50px;\n"+
    "  height: 50px;\n"+
    "}\n"+
    ".item2 {\n"+
    '  align-self: flex-start; /* هيكون فى بدايه المحور المودى  */\n'+
    "  background-color: lightblue;\n"+
    "  width: 50px;\n"+
    "  height: 50px;\n"+
    "}\n"+
    ".item3 {\n"+
    "  align-self: flex-end; /* هذا العنصر سيكون في نهاية المحور العمودي */\n"+
    "  background-color: lightgreen;\n"+
    "  width: 50px;\n"+
    "  height: 50px;\n"+
    "}\n"
},
{
  id: 33,
  title: " Filters & Images ",
  explain: 
    "في CSS، نقدر نعدل شكل الصور والفيديوهات باستخدام الفلاتر وبعض الخصائص المهمة:\n" +
    "- filter: لتطبيق تأثيرات على الصور مثل الضبابية، السطوع، التباين...\n" +
    "- object-fit: لتحديد كيفية ملئ الصورة أو الفيديو داخل الحاوية.\n" +
    "- object-position: لتحديد موقع الصورة داخل الحاوية.\n" +
    "- overflow: لو الصورة أكبر من الحاوية، نحدد كيفية عرض الزوائد.\n" +
    "- clip-path: لقص الصور بأشكال مختلفة.\n",
  
  example: 
    "1- استخدام filter على صورة\n"+
    "<img src='image.jpg' alt='صورة' style='filter: grayscale(100%);'>\n"+
    "<!-- grayscale: يحول الصورة للأبيض والأسود -->\n"+
    "<img src='image.jpg' style='filter: blur(5px);'>\n"+
    "<!-- blur: يعمل تشويش على الصورة -->\n"+
    "<img src='image.jpg' style='filter: brightness(150%);'>\n"+
    "<!-- brightness: يزيد أو يقلل سطوع الصورة -->\n"+
    "<img src='image.jpg' style='filter: contrast(200%);'>\n"+
    "<!-- contrast: يزيد أو يقلل التباين -->\n"+
    "<img src='image.jpg' style='filter: sepia(80%);'>\n"+
    "<!-- sepia: يعطي تأثير قديم/بني للصورة -->\n"+
    "-----------------------------------------------------\n"+
    "2- دمج أكثر من فلتر\n"+
    "<img src='image.jpg' style='filter: grayscale(50%) blur(3px) brightness(120%);'>\n"+
    "-----------------------------------------------------\n"+
    "3- object-fit\n"+
    "<div style='width:200px; height:150px;'>\n"+
    "  <img src='image.jpg' style='width:100%; height:100%; object-fit: cover;'>\n"+
    "</div>\n"+
    "<!-- cover: الصورة تغطي الحاوية بالكامل بدون تشويه -->\n"+
    "<img src='image.jpg' style='object-fit: contain;'>\n"+
    "<!-- contain: الصورة تبقى بالكامل داخل الحاوية مع الحفاظ على النسب -->\n"+
    "-----------------------------------------------------\n"+
    "4- object-position\n"+
    "<img src='image.jpg' style='width:200px; height:150px; object-fit: cover; object-position: top right;'>\n"+
    "<!-- تحدد مكان الصورة داخل الحاوية -->\n"+
    "-----------------------------------------------------\n"+
    "5- overflow للصور\n"+
    "<div style='width:200px; height:150px; overflow:hidden;'>\n"+
    "  <img src='image.jpg' style='width:300px; height:200px;'>\n"+
    "</div>\n"+
    "<!-- overflow:hidden يخفي أي جزء خارج الحاوية -->\n"+
    "-----------------------------------------------------\n"+
    "6- clip-path لقص الصور\n"+
    "<img src='image.jpg' style='clip-path: circle(50% at 50% 50%);'>\n"+
    "<!-- قص الصورة بشكل دائرة -->\n"+
    "<img src='image.jpg' style='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);'>\n"+
    "<!-- قص الصورة بشكل مثلث -->"
},
{
  
  id: 34,
  title: " Gradients ",
  explain: 
    "التدرجات اللونية (Gradients) بتخلي الخلفيات فيها انتقال سلس بين لونين أو أكتر.\n" +
    "في CSS نوعين رئيسيين:\n" +
    "- linear-gradient: تدرج خطي من اتجاه محدد.\n" +
    "- radial-gradient: تدرج دائري يبدأ من نقطة مركزية.\n" +
    "- conic-gradient: تدرج دائري على شكل مخروط (زاوي).\n",
  
  example: 
    "1- Linear Gradient\n"+
    "<div style='width:200px; height:100px; background: linear-gradient(to right, red, yellow);'></div>\n"+
    "<!-- التدرج من اليسار لليمين من الأحمر للأصفر -->\n"+
    "-----------------------------------------------------\n"+
    "2- Linear Gradient بزاوية\n"+
    "<div style='width:200px; height:100px; background: linear-gradient(45deg, blue, green);'></div>\n"+
    "<!-- التدرج بزاوية 45 درجة من الأزرق للأخضر -->\n"+
    "-----------------------------------------------------\n"+
    "3- Radial Gradient\n"+
    "<div style='width:200px; height:100px; background: radial-gradient(circle, red, yellow);'></div>\n"+
    "<!-- التدرج دائري من الأحمر في المركز للأصفر على الأطراف -->\n"+
    "-----------------------------------------------------\n"+
    "4- Elliptical Radial Gradient\n"+
    "<div style='width:200px; height:100px; background: radial-gradient(ellipse at center, blue, white);'></div>\n"+
    "<!-- تدرج بيضاوي من الأزرق في المركز للأبيض على الأطراف -->\n"+
    "-----------------------------------------------------\n"+
    "5- Conic Gradient\n"+
    "<div style='width:200px; height:200px; background: conic-gradient(red, yellow, green, blue);'></div>\n"+
    "<!-- تدرج دائري على شكل مخروط يبدأ من الأعلى -->\n"+
    "-----------------------------------------------------\n"+
    "6- Gradients مع أكثر من لون\n"+
    "<div style='width:200px; height:100px; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);'></div>\n"+
    "<!-- تدرج من ألوان قوس قزح -->\n"+
    "-----------------------------------------------------\n"+
    "7- استخدام Gradients مع نصوص\n"+
    "<h1 style='background: linear-gradient(to right, red, blue); -webkit-background-clip: text; color: transparent;'>نص بتدرج</h1>\n"+
    "<!-- تدرج على النص بدل الخلفية -->"


},
{
  
  id: 35,
  title: "Grid ",
  explain:
    "CSS Grid هو نظام تصميم شبكي يسمح بتنظيم العناصر في صفوف وأعمدة بدقة.\n" +
    "يمكنك التحكم في كل شيء تقريباً: حجم الأعمدة، حجم الصفوف، المسافات، ومحاذاة العناصر.\n" +
    "الخصائص المهمة:\n" +
    "- grid-template-columns / rows: تحديد الأعمدة والصفوف\n" +
    "- gap / row-gap / column-gap: المسافة بين العناصر\n" +
    "- grid-column-start / grid-column-end\n" +
    "- grid-row-start / grid-row-end\n" +
    "- grid-auto-rows / grid-auto-columns\n" +
    "- grid-auto-flow\n" +
    "- justify-items / align-items\n" +
    "- justify-content / align-content\n" +
    "- grid-area\n" +
    "- minmax() و repeat() للمرونة\n",

  example:
    "1- Grid أساسي مع صفوف وأعمدة\n"+
    "<div style='display:grid; grid-template-columns: 100px 200px 100px; grid-template-rows: 50px 100px; gap:10px;'>\n"+
    "  <div style='background:red;'>1</div>\n"+
    "  <div style='background:blue;'>2</div>\n"+
    "  <div style='background:green;'>3</div>\n"+
    "  <div style='background:yellow;'>4</div>\n"+
    "</div>\n"+
    "--------------------------------------\n"+
    "2- استخدام repeat() و minmax()\n"+
    "<div style='display:grid; grid-template-columns: repeat(3, minmax(100px, 1fr)); gap:10px;'>\n"+
    "  <div style='background:red;'>A</div>\n"+
    "  <div style='background:blue;'>B</div>\n"+
    "  <div style='background:green;'>C</div>\n"+
    "</div>\n"+
    "--------------------------------------\n"+
    "3- Grid Items spanning\n"+
    "<div style='display:grid; grid-template-columns: repeat(3, 100px); gap:5px;'>\n"+
    "  <div style='background:red; grid-column: 1 / 3; grid-row:1 / 2;'>A</div>\n"+
    "  <div style='background:blue;'>B</div>\n"+
    "  <div style='background:green;'>C</div>\n"+
    "</div>\n"+
    "--------------------------------------\n"+
    "4- justify-items و align-items\n"+
    "<div style='display:grid; grid-template-columns: 100px 100px; height:200px; border:1px solid black; justify-items:center; align-items:end;'>\n"+
    "  <div style='background:red; width:50px; height:50px;'>1</div>\n"+
    "  <div style='background:blue; width:50px; height:50px;'>2</div>\n"+
    "</div>\n"+
    "--------------------------------------\n"+
    "5- justify-content و align-content\n"+
    "<div style='display:grid; grid-template-columns: 100px 100px; grid-template-rows:50px 50px; height:300px; border:1px solid black; justify-content:end; align-content:center;'>\n"+
    "  <div style='background:red;'>A</div>\n"+
    "  <div style='background:blue;'>B</div>\n"+
    "  <div style='background:green;'>C</div>\n"+
    "  <div style='background:yellow;'>D</div>\n"+
    "</div>\n"+
    "--------------------------------------\n"+
    "6- grid-auto-flow\n"+
    "<div style='display:grid; grid-template-columns: 100px 100px; grid-auto-rows:50px; gap:5px; grid-auto-flow:row;'>\n"+
    "  <div style='background:red;'>1</div>\n"+
    "  <div style='background:blue;'>2</div>\n"+
    "  <div style='background:green;'>3</div>\n"+
    "  <div style='background:yellow;'>4</div>\n"+
    "</div>\n"+
    "--------------------------------------\n"+
    "7- استخدام grid-area\n"+
    "<div style='display:grid; grid-template-areas:\"header header\" \"menu content\"; gap:5px;'>\n"+
    "  <div style='grid-area:header; background:red;'>Header</div>\n"+
    "  <div style='grid-area:menu; background:blue;'>Menu</div>\n"+
    "  <div style='grid-area:content; background:green;'>Content</div>\n"+
    "</div>"


},
{
  
  id: 36,
  title: " Transform",
  explain:
    "خاصية transform تُستخدم لتغيير شكل العنصر وتحريكه وتدويره وتكبيره أو تصغيره.\n" +
    "يمكن التحكم في العنصر على محاور X و Y و Z.\n" +
    "ملاحظات مهمة:\n" +
    "- يمكن دمج أكثر من دالة في transform واحدة.\n" +
    "- نقطة الأصل يمكن تغييرها باستخدام transform-origin.\n" +
    "- يمكن استخدام transition مع transform لتأثيرات سلسة عند الحركة.\n",
  example:
    "1- تحريك العنصر\n" +
    "div {\n" +
    "  transform: translate(50px, 100px); /* تحريك 50px يمين و100px أسفل */\n" +
    "}\n" +
    "----------------------------------------\n" +
    "2- تدوير العنصر\n" +
    "div {\n" +
    "  transform: rotate(45deg); /* تدوير 45 درجة */\n" +
    "}\n" +
    "----------------------------------------\n" +
    "3- تكبير أو تصغير العنصر\n" +
    "div {\n" +
    "  transform: scale(1.5, 2); /* تكبير العرض 1.5 والارتفاع 2 */\n" +
    "}\n" +
    "----------------------------------------\n" +
    "4- إمالة العنصر\n" +
    "div {\n" +
    "  transform: skew(20deg, 10deg); /* إمالة 20° أفقي و10° عمودي */\n" +
    "}\n" +
    "----------------------------------------\n" +
    "5- دمج أكثر من transform\n" +
    "div {\n" +
    "  transform: translate(50px, 100px) rotate(45deg) scale(1.2);\n" +
    "}\n" +
    "----------------------------------------\n" +
    "6- تغيير نقطة الأصل\n" +
    "div {\n" +
    "  transform-origin: top left;\n" +
    "}\n" +
    "----------------------------------------\n" +
    "7- استخدام transition مع transform\n" +
    "div {\n" +
    "  transition: transform 0.5s ease;\n" +
    "}\n" +
    "div:hover {\n" +
    "  transform: scale(1.2) rotate(15deg);\n" +
    "}"


},
{
  
  id: 37,
  title: " Animation ",
  explain:
    "الـ Animation في CSS بتُستخدم لعمل حركات (تحريك العناصر) بدون استخدام JavaScript.\n" +
    "التحريك بيتم عن طريق خاصيتين أساسيتين:\n" +
    "- @keyframes: لتحديد خطوات الحركة.\n" +
    "- animation: لتطبيق الحركة على العنصر.\n\n" +
    "الخصائص الأساسية:\n" +
    "- animation-name: اسم الحركة اللي تم تعريفها في @keyframes.\n" +
    "- animation-duration: مدة الحركة (مثلاً 2s أو 500ms).\n" +
    "- animation-timing-function: سرعة الحركة (ease, linear, ease-in...).\n" +
    "- animation-delay: تأخير قبل بدء الحركة.\n" +
    "- animation-iteration-count: عدد مرات التكرار (1، 2 أو infinite).\n" +
    "- animation-direction: اتجاه الحركة (normal, reverse, alternate).\n" +
    "- animation-fill-mode: تحدد إذا كان العنصر يحتفظ بالحالة النهائية بعد الحركة.\n" +
    "- animation-play-state: لتوقيف أو تشغيل الأنيميشن (running / paused).\n",
  example:
    "1- إنشاء حركة بسيطة\n" +
    "@keyframes moveBox {\n" +
    "  from { left: 0; }\n" +
    "  to { left: 200px; }\n" +
    "}\n\n" +
    "div {\n" +
    "  position: relative;\n" +
    "  animation-name: moveBox;\n" +
    "  animation-duration: 3s;\n" +
    "}\n" +
    "----------------------------------------\n" +
    "2- حركة متدرجة باستخدام النسب\n" +
    "@keyframes colorChange {\n" +
    "  0% { background-color: red; }\n" +
    "  50% { background-color: yellow; }\n" +
    "  100% { background-color: green; }\n" +
    "}\n\n" +
    "div {\n" +
    "  width: 100px;\n" +
    "  height: 100px;\n" +
    "  animation: colorChange 4s infinite;\n" +
    "}\n" +
    "----------------------------------------\n" +
    "3- إضافة تأخير وتكرار\n" +
    "div {\n" +
    "  animation: moveBox 2s ease-in-out 1s 3;\n" +
    "  /* name duration timing delay count */\n" +
    "}\n" +
    "----------------------------------------\n" +
    "4- الاتجاه العكسي والتبادل\n" +
    "div {\n" +
    "  animation: moveBox 3s infinite alternate;\n" +
    "  /* alternate = يتحرك يمين ثم يرجع */\n" +
    "}\n" +
    "----------------------------------------\n" +
    "5- الحفاظ على آخر حالة بعد انتهاء الحركة\n" +
    "div {\n" +
    "  animation: moveBox 2s forwards;\n" +
    "  /* forwards = يحتفظ بالشكل النهائي */\n" +
    "}\n" +
    "----------------------------------------\n" +
    "6- إيقاف وتشغيل الحركة باستخدام animation-play-state\n" +
    "div:hover {\n" +
    "  animation-play-state: paused;\n" +
    "  /* الحركة تتوقف عند الوقوف بالماوس */\n" +
    "}\n" +
    "----------------------------------------\n" +
    "7- دمج أكثر من حركة\n" +
    "div {\n" +
    "  animation: moveBox 3s infinite, colorChange 5s infinite alternate;\n" +
    "}\n" +
    "----------------------------------------\n" +
    "🟢 نصيحة:\n" +
    "تقدر تستخدم animation مع transform وopacity وfilter عشان تعمل تأثيرات احترافية جدًا في واجهات المستخدم."


},
{
  
  id: 38,
  title: " Media Queries ",
  explain:
    "الـ Media Queries تُستخدم لجعل الموقع **متجاوب (Responsive)**، يعني يتكيف مع أحجام الشاشات المختلفة (موبايل – تابلت – كمبيوتر).\n" +
    "الفكرة الأساسية إنك بتحدد **شروط معينة** (زي عرض الشاشة أو نوع الجهاز)، ولما تتحقق الشروط دي، بيتطبق CSS مختلف.\n\n" +
    "📘 الصيغة الأساسية:\n" +
    "@media (شرط) {\n" +
    "   /* كود CSS */\n" +
    "}\n\n" +
    "📏 أهم الأنواع المستخدمة:\n" +
    "- width / height : عرض وارتفاع نافذة العرض.\n" +
    "- min-width / max-width : الحد الأدنى أو الأقصى للعرض.\n" +
    "- orientation : لتحديد الاتجاه (portrait / landscape).\n" +
    "- print : لتطبيق التنسيق عند الطباعة.\n" +
    "- screen : لتطبيق التنسيق عند العرض على شاشة.\n\n" +
    "🎯 الهدف: كتابة أكواد CSS مختلفة لكل نوع شاشة لجعل الموقع يظهر بشكل ممتاز في كل الأجهزة.\n",
  example:
    "1️⃣ - مثال بسيط لتغيير لون الخلفية بناءً على حجم الشاشة:\n" +
    "body {\n" +
    "  background-color: lightblue;\n" +
    "}\n\n" +
    "@media (max-width: 600px) {\n" +
    "  body {\n" +
    "    background-color: lightgreen;\n" +
    "  }\n" +
    "}\n" +
    "➡ النتيجة: لما عرض الشاشة يكون أقل من 600px، الخلفية تبقى خضراء.\n" +
    "----------------------------------------\n" +
    "2️⃣ - استخدام min-width (يعني لو العرض أكبر من قيمة معينة):\n" +
    "@media (min-width: 768px) {\n" +
    "  body {\n" +
    "    font-size: 18px;\n" +
    "  }\n" +
    "}\n" +
    "➡ لما العرض يكون 768 بكسل أو أكتر، حجم الخط يكبر.\n" +
    "----------------------------------------\n" +
    "3️⃣ - استخدام أكتر من شرط معًا:\n" +
    "@media (min-width: 600px) and (max-width: 900px) {\n" +
    "  div {\n" +
    "    background-color: yellow;\n" +
    "  }\n" +
    "}\n" +
    "➡ لما يكون العرض بين 600 و900، الخلفية تبقى صفراء.\n" +
    "----------------------------------------\n" +
    "4️⃣ - تحديد الاتجاه (orientation):\n" +
    "@media (orientation: landscape) {\n" +
    "  body {\n" +
    "    background-color: pink;\n" +
    "  }\n" +
    "}\n" +
    "➡ اللون يتغير لو الجهاز في وضع أفقي.\n" +
    "----------------------------------------\n" +
    "5️⃣ - مثال عملي لتصميم متجاوب:\n" +
    ".container {\n" +
    "  width: 100%;\n" +
    "}\n\n" +
    "@media (min-width: 768px) {\n" +
    "  .container {\n" +
    "    width: 80%;\n" +
    "  }\n" +
    "}\n\n" +
    "@media (min-width: 1200px) {\n" +
    "  .container {\n" +
    "    width: 60%;\n" +
    "  }\n" +
    "}\n" +
    "➡ كل ما الشاشة تكبر، المحتوى يبقى أضيق وأكثر تناسقًا.\n" +
    "----------------------------------------\n" +
    "6️⃣ - استخدام أنواع الوسائط (media types):\n" +
    "@media screen and (max-width: 500px) {\n" +
    "  body {\n" +
    "    background-color: lightcoral;\n" +
    "  }\n" +
    "}\n\n" +
    "@media print {\n" +
    "  body {\n" +
    "    color: black;\n" +
    "    background: white;\n" +
    "  }\n" +
    "}\n" +
    "➡ الأول للتصميم على الشاشة، الثاني عند الطباعة.\n" +
    "----------------------------------------\n" +
    "🟢 نصيحة مهمة:\n" +
    "- استخدم نظام **Mobile First**: ابدأ بتصميم الموبايل أولًا، ثم زوّد الشروط بـ (min-width) لتوسيع التصميم على الشاشات الأكبر.\n" +
    "- استخدم أدوات المتصفح (DevTools) لاختبار استجابة موقعك لكل الأجهزة."


}

];
export default css;
