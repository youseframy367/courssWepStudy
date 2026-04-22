const python = [
  {
    id: 1,
    title: "Comment",
    explain:
      "التعليقات تُستخدم لشرح الكود وجعله أسهل في الفهم.\n" +
      "تبدأ التعليقات بالرمز #، ويتجاهلها مفسّر بايثون أثناء التنفيذ.\n" +
      "يمكن استخدامها لتوضيح منطق الكود أو تعطيل جزء منه مؤقتًا أثناء الاختبار.\n" +
      "يمكن كتابة تعليق من سطر واحد باستخدام #، أو تعليق من عدة أسطر باستخدام ثلاث علامات اقتباس ثلاثية (\"\"\" أو ''').",

    example:
      '# هذا تعليق على سطر واحد\n' +
      '# print("Hello, World!")  # هذا السطر لن يُنفذ\n' +
      '""" هذا تعليق\n' +
      'على أكثر من\n' +
      'سطر واحد """',

    imgSrc: "./imgPython/carbon(3).png",
  },

{
  id: 2,
  title: "Variables",
  explain:
    "المتغيرات (Variables) هي حاويات تُستخدم لتخزين القيم والبيانات داخل البرنامج.\n" +
    "يمكن أن تحتوي المتغيرات على أنواع مختلفة من البيانات مثل الأرقام أو النصوص أو القوائم.\n" +
    "في بايثون، لا تحتاج لتحديد نوع المتغير عند إنشائه، حيث يقوم المفسّر بتحديد النوع تلقائيًا حسب القيمة.\n" +
    "يمكنك أيضًا تغيير نوع المتغير بإعادة إسناد قيمة جديدة له.\n" +
    "أسماء المتغيرات حساسة لحالة الأحرف (case-sensitive)، أي أن (x) تختلف عن (X).\n" +
    "يجب أن يبدأ اسم المتغير بحرف أو بشرطة سفلية (_)، ولا يمكن أن يبدأ برقم.\n" +
    "كما يُمنع استخدام المسافات أو الرموز الخاصة داخل أسماء المتغيرات.\n" +
    "يمكنك تعيين قيم متعددة في سطر واحد، أو إسناد نفس القيمة لأكثر من متغير.\n" +
    "ويمكن جمع النصوص باستخدام +، لكن لا يمكن جمع نص مع رقم مباشرة.\n" +
    "المتغيرات يمكن استخدامها داخل الدوال، أو يمكن تعريفها خارجها لتكون متاحة على مستوى البرنامج (global variable).",

  example:
    'x = 5\n' +
    'y = "Hello"\n' +
    'print(x) \t # 5\n' +
    'print(y) \t # Hello\n' +
    '------------------------------------------------------------\n' +
    'x = 4 \t # x من النوع int \n' +
    'x = "Youssef" \t # x أصبح الآن من النوع str\n' +
    '----------------------------------------------------------\n' +
    'x = str(3) \t # x ستكون "3" (نص)\n' +
    'y = int(3) \t # y ستكون 3 (عدد صحيح)\n' +
    'z = float(3) \t # z ستكون 3.0 (عدد عشري)\n' +
    '-----------------------------------------------------------\n' +
    'x = 5\n' +
    'y = "Youssef"\n' +
    'print(type(x)) \t # نوع x = int\n' +
    'print(type(y)) \t # نوع y = str\n' +
    '------------------------------------------------------------\n' +
    'a = 4\n' +
    'A = "sally" \t # A لا تستبدل a لأن الأسماء حساسة لحالة الأحرف\n' +
    'a = 5 \t # هنا تم تغيير قيمة a\n' +
    '-------------------------------------------------------------\n' +
    'Legal (قانوني) variable names:\n' +
    'myvar = "John"\n' +
    'my_var = "John"\n' +
    '_my_var = "John"\n' +
    'myVar = "John"\n' +
    'MYVAR = "John"\n' +
    'myvar2 = "John"\n' +
    '**************************\n' +
    'Illegal (غير قانوني) variable names:\n' +
    '2myvar = "John"\n' +
    'my-var = "John"\n' +
    'my var = "John"\n' +
    '--------------------------------------------------------------\n' +
    'x, y, z = "Orange", "Banana", "Cherry"\n' +
    'print(x) \t # Orange\n' +
    'print(y) \t # Banana\n' +
    'print(z) \t # Cherry\n' +
    '**************************\n' +
    'x = y = z = "Orange"\n' +
    'print(x) \t # Orange\n' +
    'print(y) \t # Orange\n' +
    'print(z) \t # Orange\n' +
    '**************************\n' +
    'fruits = ["apple", "banana", "cherry"]\n' +
    'x, y, z = fruits\n' +
    'print(x) \t # apple\n' +
    'print(y) \t # banana\n' +
    'print(z) \t # cherry\n' +
    '-----------------------------------------------------------------\n' +
    'x = "Youssef"\n' +
    'y = "Ramy"\n' +
    'print(x + y) \t # يمكن الجمع بين النصوص باستخدام + => YoussefRamy\n' +
    '******************************\n' +
    'x = 5\n' +
    'y = 10\n' +
    'print(x + y) \t # لعمليات الجمع الحسابية بين الأرقام => 15\n' +
    '******************************\n' +
    'x = 5\n' +
    'y = "John"\n' +
    'print(x + y) \t # خطأ ❌ لا يمكن جمع نص مع رقم\n' +
    '----------------------------------------------------------------\n' +
    '# إنشاء متغير خارج الدالة واستخدامه بداخلها\n' +
    'x = "awesome"\n' +
    'def myfunc():\n' +
    '    print("Python is " + x)\n' +
    'myfunc()\n' +
    '------------------------------------------------------------------\n',

  imgSrc: "./imgPython/carbon(4).png",
},

 {
  id: 3,
  title: "Data Types",
  explain:
    "في لغة بايثون توجد عدة أنواع بيانات (Data Types) مدمجة تُستخدم لتخزين أنواع مختلفة من القيم.\n" +
    "كل نوع بيانات يُستخدم لغرض محدد حسب طبيعة القيمة التي نريد تخزينها.\n" +
    "من أهم الأنواع في بايثون:\n" +
    "- int: الأعداد الصحيحة (مثل 5 أو -10)\n" +
    "- float: الأعداد العشرية (مثل 3.14)\n" +
    "- str: النصوص (Strings) وتكتب بين علامات اقتباس\n" +
    "- list: قائمة تحتوي على عناصر متعددة يمكن تعديلها\n" +
    "- tuple: تشبه القائمة لكنها غير قابلة للتعديل\n" +
    "- dict: القواميس، تُستخدم لتخزين البيانات في شكل (مفتاح : قيمة)\n" +
    "- set: مجموعة عناصر غير مرتبة ولا تحتوي على تكرارات\n" +
    "- frozenset: تشبه الـ set ولكنها غير قابلة للتغيير\n" +
    "- bool: القيم المنطقية (True / False)\n" +
    "- complex: الأعداد المركبة (مثل 1j)\n" +
    "يتم تحديد نوع البيانات تلقائيًا عند إسناد القيمة للمتغير.",

  example:
    'x = 10        # int (عدد صحيح)\n' +
    'y = 3.14      # float (عدد عشري)\n' +
    'z = "Hello"   # str (نص)\n' +
    'a = [1, 2, 3]   # list (قائمة)\n' +
    'b = (1, 2, 3)   # tuple (تابل)\n' +
    'c = {"name": "Ali", "age": 25}  # dict (قاموس)\n' +
    'd = {1, 2, 3}   # set (مجموعة)\n' +
    'x = frozenset({"apple", "banana", "cherry"})  # frozenset (مجموعة ثابتة)\n' +
    'x = True   # bool (قيمة منطقية)\n' +
    'x = 1j     # complex (عدد مركّب)\n',

  imgSrc: "./imgPython/carbon(5).png",
},

 {
  id: 4,
  title: "Numbers",
  explain:
    "تحتوي لغة بايثون على ثلاثة أنواع رئيسية من الأرقام (Numbers):\n" +
    "- int: الأعداد الصحيحة مثل 1 أو -10\n" +
    "- float: الأعداد العشرية مثل 2.5 أو 3.14\n" +
    "- complex: الأعداد المركّبة التي تحتوي على الجزء التخيلي (مثل 1j)\n" +
    "يمكنك أيضًا تحويل نوع البيانات بين هذه الأنواع باستخدام دوال التحويل المدمجة مثل int() و float() و str().",

  example:
    'x = 1      \t # int (عدد صحيح)\n' +
    'y = 2.8    \t # float (عدد عشري)\n' +
    'z = 1j     \t # complex (عدد مركّب)\n' +
    '------------------------------------------------\n' +
    '# هل يمكنك تغيير نوع البيانات؟ نعم ✅\n' +
    'o = int(y)      \t # تحويل float (2.8) إلى int (2)\n' +
    'x = float(1)    \t # x ستكون 1.0\n' +
    'x = str("s1")   \t # x ستكون "s1" (نص)\n',

  imgSrc: "./imgPython/carbon(6).png",
},

 {
  id: 5,
  title: "String",
  explain:
    "في بايثون، يتم وضع النصوص (Strings) بين علامات اقتباس مفردة (' ') أو مزدوجة (\" \").\n" +
    "يمكنك استخدام أيٍّ منهما بحرية، فهما يؤديان نفس الغرض.\n" +
    "لإنشاء نص يحتوي على أكثر من سطر، يمكنك استخدام ثلاث علامات اقتباس متتالية (\"\"\" أو ''').\n" +
    "تُستخدم السلاسل النصية للتعامل مع النصوص مثل الجمل أو الكلمات أو الرموز.\n" +
    "يمكنك الوصول إلى أحرف النص عن طريق الفهرسة (Indexing)، أو تكرارها باستخدام حلقة for.\n" +
    "توفر بايثون العديد من الدوال الجاهزة لمعالجة النصوص مثل التقطيع (Slicing)، والتحويل إلى أحرف كبيرة أو صغيرة، والاستبدال، والتقسيم وغيرها.",

  example:
    'print("He is called Johnny") \t # باستخدام علامات اقتباس مزدوجة\n' +
    "print('He is called Johnny') \t # باستخدام علامات اقتباس مفردة\n" +
    '*************************\n' +
    'Multiline (نص متعدد الأسطر)\n' +
    'a = """Lorem ipsum dolor sit amet\n' +
    'consectetur adipiscing elit,\n' +
    'sed do eiusmod tempor incididunt \n' +
    'ut labore et dolore magna aliqua."""\n' +
    "print(a)\n" +
    "or\n" +
    "a = '''Lorem ipsum dolor sit amet,\n" +
    "consectetur adipiscing elit,\n" +
    "sed do eiusmod tempor incididunt\n" +
    "ut labore et dolore magna aliqua.'''\n" +
    "print(a)\n" +
    '--------------------------------------------------------------\n' +
    'Get character by index (الحصول على حرف بموقع محدد):\n' +
    'a = "Hello, World!"\n' +
    'print(a[1])\t  # e (لأن أول حرف موقعه 0)\n' +
    '----------------------------------------------------------------\n' +
    'Loop through a string (تكرار الحروف باستخدام for loop):\n' +
    'for x in "banana":\n' +
    '    print(x) \t # b a n a n a\n' +
    '-------------------------------------------------------------------\n' +
    'String length (طول النص):\n' +
    'a = "Hello, World!"\n' +
    'print(len(a)) \t # 13\n' +
    '--------------------------------------------------------------------\n' +
    'Check if substring exists (التحقق من وجود كلمة داخل النص):\n' +
    'txt = "The best things in life are free!"\n' +
    'if "free" in txt:\n' +
    '    print("Yes, \\"free\\" is present.")\n' +
    '--------------------------------------------------------------------\n' +
    'Slicing (تقطيع النص):\n' +
    'b = "Hello, World!"\n' +
    'print(b[2:5]) \t # llo\n' +
    'print(b[:5]) \t # Hello (من البداية)\n' +
    'print(b[2:]) \t # llo, World! (إلى النهاية)\n' +
    '*****************************\n' +
    'Negative Indexing (الفهرسة السالبة):\n' +
    'print(b[-5:-2]) \t # orl\n' +
    '------------------------------------------------------------------------\n' +
    'Upper Case (أحرف كبيرة):\n' +
    'a = "Hello, World!"\n' +
    'print(a.upper()) \t # HELLO, WORLD!\n' +
    '*****************************\n' +
    'Lower Case (أحرف صغيرة):\n' +
    'a = "Hello, World!"\n' +
    'print(a.lower()) \t # hello, world!\n' +
    '----------------------------------------------------------------------------\n' +
    'Remove Whitespace (إزالة المسافات الزائدة):\n' +
    'a = " Hello, World! "\n' +
    'print(a.strip()) \t # "Hello, World!"\n' +
    '-------------------------------------------------------------------------------\n' +
    'Replace String (استبدال النص):\n' +
    'a = "Hello, World!"\n' +
    'print(a.replace("H", "J")) \t # Jello, World!\n' +
    '---------------------------------------------------------------------------\n' +
    'Split String (تقسيم النص):\n' +
    'a = "Hello, World!"\n' +
    'print(a.split(",")) \t # ["Hello", " World!"]\n' +
    '---------------------------------------------------------------------------\n' +
    'String Concatenation (دمج النصوص):\n' +
    'a = "Hello"\n' +
    'b = "World"\n' +
    'c = a + b\n' +
    'print(c) \t # HelloWorld\n' +
    'c = a + " " + b\n' +
    'print(c) \t # Hello World\n' +
    '-----------------------------------------------------------------------------\n' +
    'String Format (تنسيق النصوص):\n' +
    'age = 36\n' +
    'txt = f"My name is John, I am {age}"\n' +
    'print(txt) \t # My name is John, I am 36\n' +
    '*********************************\n' +
    'Display the price with 2 decimals (عرض رقم بعدد منازل عشرية محدد):\n' +
    'price = 59\n' +
    'txt = f"The price is {price:.2f} dollars"\n' +
    'print(txt) \t # The price is 59.00 dollars\n' +
    '------------------------------------------------------------------------------\n' +
    'Escape Characters (محارف الهروب):\n' +
    "\\' \t Single Quote (علامة اقتباس مفردة)\n" +
    "\\\\ \t Backslash (شرطة مائلة للخلف)\n" +
    "\\\" \t Double Quote (علامة اقتباس مزدوجة)\n" +
    "\\n \t New Line (سطر جديد)\n" +
    "\\r \t Carriage Return (عودة للسطر)\n" +
    "\\t \t Tab (مسافة تبويب)\n" +
    "\\b \t Backspace (مسافة للخلف)\n" +
    "\\f \t Form Feed (تغذية نموذج)\n" +
    "\\ooo \t Octal value (قيمة ثُمانية)\n" +
    "\\xhh \t Hex value (قيمة ست عشرية)\n" +
    '------------------------------------------------------------------------------\n' +
    'String Methods (دوال النصوص):\n' +
    'capitalize() \t تحويل أول حرف إلى كبير\n' +
    'casefold() \t تحويل النص إلى أحرف صغيرة\n' +
    'center() \t محاذاة النص في المنتصف\n' +
    'count() \t حساب عدد مرات تكرار قيمة داخل النص\n' +
    'encode() \t إرجاع نسخة مشفرة من النص\n' +
    'endswith() \t التحقق مما إذا كان النص ينتهي بقيمة معينة\n' +
    'expandtabs() \t ضبط حجم مسافة التبويب\n' +
    'find() \t البحث عن قيمة داخل النص وإرجاع موضعها\n' +
    'format() \t تنسيق النص بالقيم المحددة\n' +
    'index() \t مثل find() ولكن يعطي خطأ إن لم توجد القيمة\n' +
    'isalnum() \t التحقق إن كان النص يحتوي فقط على حروف وأرقام\n' +
    'isalpha() \t التحقق إن كان النص يحتوي فقط على حروف\n' +
    'isdigit() \t التحقق إن كان النص يحتوي فقط على أرقام\n' +
    'islower() \t التحقق إن كان كل النص بأحرف صغيرة\n' +
    'isupper() \t التحقق إن كان كل النص بأحرف كبيرة\n' +
    'join() \t دمج عناصر قائمة داخل نص باستخدام فاصل محدد\n' +
    'replace() \t استبدال نص بآخر\n' +
    'split() \t تقسيم النص إلى قائمة\n' +
    'startswith() \t التحقق مما إذا كان النص يبدأ بقيمة معينة\n' +
    'strip() \t إزالة المسافات الزائدة من البداية والنهاية\n' +
    'swapcase() \t عكس حالة الأحرف\n' +
    'title() \t جعل أول حرف من كل كلمة كبير\n' +
    'upper() \t تحويل النص إلى أحرف كبيرة\n' +
    'zfill() \t ملء النص بأصفار في البداية حتى طول معين\n',

  imgSrc: "./imgPython/carbon(7).png",
},

  {
  id: 6,
  title: "Booleans",
  explain:
    "القيم المنطقية (Booleans) في بايثون تُستخدم لتمثيل حالتين فقط: True (صحيح) أو False (خطأ).\n" +
    "يتم استخدام القيم المنطقية في المقارنات، والشروط، والتحكم في تدفق البرنامج.\n" +
    "يمكن إنشاء القيم المنطقية مباشرة أو باستخدام دالة bool() لتقييم القيم المختلفة.\n" +
    "أي قيمة تحتوي على بيانات (مثل نص أو رقم غير صفري) تُعتبر True،\n" +
    "بينما القيم الفارغة (مثل 0 أو \"\" أو None) تُعتبر False.",

  example:
    'print(10 > 9) \t # True (10 أكبر من 9)\n' +
    'print(10 == 9) \t # False (10 لا يساوي 9)\n' +
    'print(10 < 9) \t # False (10 أصغر من 9؟ لا)\n' +
    '***************************************\n' +
    'يمكنك استخدام الدالة bool() لتقييم أي قيمة وإرجاع True أو False بناءً عليها:\n' +
    'print(bool("Hello")) \t # True (النص يحتوي على قيمة)\n' +
    'print(bool(15)) \t # True (الرقم غير صفري)\n' +
    '--------------------------------------------------------------------\n' +
    'القيم التالية تُرجع False:\n' +
    'bool(False)\n' +
    'bool(None)\n' +
    'bool(0)\n' +
    'bool("")\n' +
    'bool(())\n' +
    'bool([])\n' +
    'bool({})\n' +
    '-------------------------------------------------------------------\n' +
    'isinstance() \t تستخدم للتحقق من نوع المتغير:\n' +
    'x = 200\n' +
    'print(isinstance(x, int)) \t # True (x من النوع int)\n',

  imgSrc: "./imgPython/carbon(8).png",
},

 {
  id: 7,
  title: "Operators",
  explain:
    "تُستخدم العوامل (Operators) في لغة بايثون لتنفيذ عمليات على القيم أو المتغيرات.\n" +
    "العوامل تُستخدم في العمليات الحسابية، المقارنات، المنطق، الإسناد، العضوية، والبت (bitwise).\n" +
    "فيما يلي أهم أنواع العوامل في بايثون مع أمثلة عليها:",

  example:
    "--------------------\n" +
    "💡 **العوامل الحسابية (Arithmetic Operators)**\n" +
    "+\t الجمع (Addition)\t\t x + y\n" +
    "-\t الطرح (Subtraction)\t\t x - y\n" +
    "*\t الضرب (Multiplication)\t\t x * y\n" +
    "/\t القسمة (Division)\t\t x / y\n" +
    "%\t باقي القسمة (Modulus)\t\t x % y\n" +
    "**\t الأس (Exponentiation)\t\t x ** y\n" +
    "//\t القسمة الأرضية (Floor division)\t x // y\n\n" +

    "--------------------\n" +
    "⚖️ **عوامل المقارنة (Comparison Operators)**\n" +
    "==\t يساوي (Equal)\t\t x == y\n" +
    "!=\t لا يساوي (Not equal)\t\t x != y\n" +
    ">\t أكبر من (Greater than)\t\t x > y\n" +
    "<\t أصغر من (Less than)\t\t x < y\n" +
    ">=\t أكبر من أو يساوي (Greater or equal)\t x >= y\n" +
    "<=\t أصغر من أو يساوي (Less or equal)\t x <= y\n\n" +

    "--------------------\n" +
    "🔗 **العوامل المنطقية (Logical Operators)**\n" +
    "and\t (و)\t\t x and y\n" +
    "or\t (أو)\t\t x or y\n" +
    "not\t (ليس)\t\t not x\n\n" +

    "--------------------\n" +
    "🧮 **عوامل الإسناد (Assignment Operators)**\n" +
    "=\t إسناد (Assign)\t\t x = 5\n" +
    "+=\t جمع مع الإسناد\t\t x += 3\n" +
    "-=\t طرح مع الإسناد\t\t x -= 3\n" +
    "*=\t ضرب مع الإسناد\t\t x *= 3\n" +
    "/=\t قسمة مع الإسناد\t\t x /= 3\n" +
    "%=\t باقي قسمة مع الإسناد\t x %= 3\n" +
    "//=\t قسمة أرضية مع الإسناد\t x //= 3\n" +
    "**=\t أس مع الإسناد\t\t x **= 3\n" +
    "&=\t (AND) بتية مع الإسناد\t x &= 3\n" +
    "|=\t (OR) بتية مع الإسناد\t x |= 3\n" +
    "^=\t (XOR) بتية مع الإسناد\t x ^= 3\n" +
    ">>=\t إزاحة يمين مع الإسناد\t x >>= 3\n" +
    "<<=\t إزاحة يسار مع الإسناد\t x <<= 3\n\n" +

    "--------------------\n" +
    "🆔 **عوامل الهوية (Identity Operators)**\n" +
    "is\t يتحقق إذا كان المتغيران يشيران لنفس الكائن\t x is y\n" +
    "is not\t يتحقق إذا لم يكونا نفس الكائن\t x is not y\n\n" +

    "--------------------\n" +
    "📦 **عوامل العضوية (Membership Operators)**\n" +
    "in\t يتحقق إذا كانت القيمة موجودة داخل تسلسل\t x in y\n" +
    "not in\t يتحقق إذا لم تكن القيمة موجودة\t x not in y\n\n" +

    "--------------------\n" +
    "💡 **العوامل البتية (Bitwise Operators)**\n" +
    "&\t AND بتية\t\t x & y\n" +
    "|\t OR بتية\t\t x | y\n" +
    "^\t XOR بتية\t\t x ^ y\n" +
    "~\t NOT بتية\t\t ~x\n" +
    "<<\t إزاحة لليسار (Left shift)\t x << 2\n" +
    ">>\t إزاحة لليمين (Right shift)\t x >> 2\n",

  imgSrc: "./imgPython/carbon(9).png",
},

 {
  id: 7,
  title: "Lists",
  explain:
    "القوائم (Lists) في بايثون تُستخدم لتخزين مجموعة من العناصر داخل متغير واحد.\n" +
    "تُكتب القوائم بين أقواس مربعة [ ]، ويمكن أن تحتوي على أنواع بيانات مختلفة.\n" +
    'مثال:\n' +
    'mylist = ["apple", "banana", "cherry"]\n' +
    "القائمة تعتبر من أكثر التركيبات استخدامًا في بايثون لأنها قابلة للتعديل (Mutable).",

  example:
    "--------------------\n" +
    "📏 **طول القائمة (List Length)**\n" +
    'thislist = ["apple", "banana", "cherry"]\n' +
    "print(len(thislist))  # 3\n\n" +

    "--------------------\n" +
    "🧩 **أنواع البيانات داخل القوائم (List Items - Data Types)**\n" +
    'list1 = ["apple", "banana", "cherry"]\n' +
    'list2 = [1, 5, 7, 9, 3]\n' +
    'list3 = [True, False, False]\n' +
    'list4 = ["abc", 34, True, 40, "male"]\n\n' +

    "--------------------\n" +
    "🏗️ **إنشاء قائمة باستخدام الدالة list()**\n" +
    'thislist = list(("apple", "banana", "cherry"))  # لاحظ الأقواس المزدوجة\n\n' +

    "--------------------\n" +
    "🎯 **الوصول إلى العناصر (Access Items)**\n" +
    'thislist = ["apple", "banana", "cherry"]\n' +
    'print(thislist[1])   # banana\n' +
    'print(thislist[-1])  # cherry (آخر عنصر)\n\n' +

    "📍 **نطاق الفهارس (Range of Indexes)**\n" +
    'thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]\n' +
    'print(thislist[2:5])   # ["cherry", "orange", "kiwi"]\n' +
    'print(thislist[:4])    # من البداية إلى العنصر الرابع\n' +
    'print(thislist[2:])    # من العنصر الثاني إلى النهاية\n' +
    'print(thislist[-4:-1]) # ["orange", "kiwi", "melon"]\n\n' +

    "--------------------\n" +
    "🔍 **التحقق من وجود عنصر (Check if Item Exists)**\n" +
    'thislist = ["apple", "banana", "cherry"]\n' +
    'if "apple" in thislist:\n' +
    '    print("Yes, apple is in the fruits list")\n\n' +

    "--------------------\n" +
    "✏️ **تغيير القيم (Change Item Value)**\n" +
    'thislist = ["apple", "banana", "cherry"]\n' +
    'thislist[1] = "blackcurrant"\n' +
    'print(thislist)  # ["apple", "blackcurrant", "cherry"]\n\n' +
    'thislist[1:3] = ["blackcurrant", "watermelon"]\n' +
    'print(thislist)\n\n' +

    "--------------------\n" +
    "➕ **إضافة عناصر (Insert / Append / Extend)**\n" +
    "• insert(index, item) لإضافة عنصر في مكان محدد:\n" +
    'thislist = ["apple", "banana", "cherry"]\n' +
    'thislist.insert(2, "watermelon")\n' +
    'print(thislist)\n\n' +
    "• append(item) لإضافة عنصر في نهاية القائمة:\n" +
    'thislist.append("orange")\n' +
    'print(thislist)\n\n' +
    "• extend(list) لدمج قائمتين:\n" +
    'tropical = ["mango", "pineapple", "papaya"]\n' +
    'thislist.extend(tropical)\n' +
    'print(thislist)\n\n' +

    "--------------------\n" +
    "❌ **حذف العناصر (Remove Items)**\n" +
    "• remove(item): يحذف العنصر المحدد:\n" +
    'thislist.remove("banana")\n' +
    'print(thislist)\n\n' +
    "• pop(index): يحذف عنصر حسب الفهرس:\n" +
    'thislist.pop(1)\n' +
    'print(thislist)\n\n' +
    "• pop() بدون فهرس: يحذف آخر عنصر:\n" +
    'thislist.pop()\n' +
    'print(thislist)\n\n' +
    "• clear(): تفرّغ القائمة بالكامل:\n" +
    'thislist.clear()\n' +
    'print(thislist)  # []\n\n' +

    "--------------------\n" +
    "🔁 **التكرار (Loop Through a List)**\n" +
    'thislist = ["apple", "banana", "cherry"]\n' +
    'for x in thislist:\n' +
    '    print(x)\n\n' +

    "--------------------\n" +
    "📚 **الترتيب والعكس (Sort / Reverse)**\n" +
    "• sort(): لترتيب العناصر تصاعديًا:\n" +
    'thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]\n' +
    'thislist.sort()\n' +
    'print(thislist)\n\n' +
    "• reverse(): لعكس الترتيب الحالي:\n" +
    'thislist.reverse()\n' +
    'print(thislist)\n\n' +

    "--------------------\n" +
    "📋 **نسخ القوائم (Copy a List)**\n" +
    "يمكنك نسخ قائمة بعدة طرق:\n" +
    'mylist = thislist.copy()\n' +
    'mylist = list(thislist)\n' +
    'mylist = thislist[:]\n\n' +

    "--------------------\n" +
    "📖 **دوال القوائم (List Methods)**\n" +
    "append() → يضيف عنصرًا في النهاية\n" +
    "clear() → يزيل جميع العناصر\n" +
    "copy() → ينشئ نسخة من القائمة\n" +
    "count() → يحسب عدد مرات ظهور قيمة\n" +
    "extend() → يدمج عناصر من قائمة أخرى\n" +
    "index() → يرجع موضع أول ظهور للقيمة\n" +
    "insert() → يُدخل عنصرًا في موضع محدد\n" +
    "pop() → يحذف عنصرًا بناءً على الفهرس\n" +
    "remove() → يحذف أول عنصر يطابق القيمة\n" +
    "reverse() → يعكس الترتيب\n" +
    "sort() → يرتب العناصر تصاعديًا\n",

  imgSrc: "./imgPython/carbon(10).png",
},

    {
  id: 8,
  title: "Tuples",
  explain:
    "الـ **Tuple** (التابل) في بايثون تُستخدم لتخزين مجموعة من العناصر مثل القائمة (List)، لكنها **غير قابلة للتغيير (Immutable)**، أي لا يمكن تعديلها بعد إنشائها.\n" +
    'تُكتب التابل بين أقواس عادية ( )، والعناصر بداخلها مفصولة بفواصل.\n' +
    'مثال:\n' +
    'mytuple = ("apple", "banana", "cherry")\n',

  example:
    "------------------------\n" +
    "📏 **طول الـ Tuple (Tuple Length)**\n" +
    'thistuple = ("apple", "banana", "cherry")\n' +
    "print(len(thistuple))  # 3\n\n" +
    "لإنشاء تابل يحتوي على عنصر واحد فقط، يجب إضافة فاصلة بعد العنصر:\n" +
    'thistuple = ("apple",)\n' +
    "print(type(thistuple))  # tuple ✅\n\n" +
    "بدون فاصلة يعتبر **نص (string)** فقط:\n" +
    'thistuple = ("apple")\n' +
    "print(type(thistuple))  # str ❌\n\n" +

    "------------------------\n" +
    "🧩 **أنواع البيانات داخل Tuple (Tuple Items - Data Types)**\n" +
    'tuple1 = ("apple", "banana", "cherry")\n' +
    'tuple2 = (1, 5, 7, 9, 3)\n' +
    'tuple3 = (True, False, False)\n' +
    'tuple4 = ("abc", 34, True, 40, "male")\n\n' +

    "------------------------\n" +
    "🎯 **الوصول إلى العناصر (Access Tuple Items)**\n" +
    'thistuple = ("apple", "banana", "cherry")\n' +
    'print(thistuple[1])   # banana\n' +
    'print(thistuple[-1])  # cherry\n' +
    'print(thistuple[0:2]) # ("apple", "banana")\n' +
    'print(thistuple[1:])  # من العنصر الثاني للنهاية\n' +
    'print(thistuple[:2])  # من البداية إلى الثاني\n\n' +

    "------------------------\n" +
    "🔍 **التحقق من وجود عنصر (Check if Item Exists)**\n" +
    'thistuple = ("apple", "banana", "cherry")\n' +
    'if "apple" in thistuple:\n' +
    '    print("Yes, apple is in the fruits tuple")\n\n' +

    "------------------------\n" +
    "➕ **إضافة عناصر (Add Items)**\n" +
    "لا يمكن تعديل الـ Tuple مباشرة، لكن يمكن تحويلها إلى **List** ثم العودة إلى **Tuple**:\n" +
    'thistuple = ("apple", "banana", "cherry")\n' +
    'y = list(thistuple)\n' +
    'y.append("orange")\n' +
    'thistuple = tuple(y)\n' +
    "print(thistuple)  # ('apple', 'banana', 'cherry', 'orange')\n\n" +
    "طريقة أخرى باستخدام عملية الجمع:\n" +
    'thistuple = ("apple", "banana", "cherry")\n' +
    'y = ("orange",)\n' +
    'thistuple += y\n' +
    "print(thistuple)  # ('apple', 'banana', 'cherry', 'orange')\n\n" +

    "------------------------\n" +
    "❌ **حذف العناصر (Remove Items)**\n" +
    "لا يمكن حذف عنصر من الـ Tuple مباشرة، ولكن يمكن تحويلها إلى قائمة (List):\n" +
    'thistuple = ("apple", "banana", "cherry")\n' +
    'y = list(thistuple)\n' +
    'y.remove("apple")\n' +
    'thistuple = tuple(y)\n' +
    "print(thistuple)  # ('banana', 'cherry')\n\n" +

    "------------------------\n" +
    "📦 **تفريغ العناصر (Unpacking a Tuple)**\n" +
    "يمكنك تفريغ عناصر الـ Tuple في متغيرات:\n" +
    'fruits = ("apple", "banana", "cherry")\n' +
    '(green, yellow, red) = fruits\n' +
    "print(green)   # apple\n" +
    "print(yellow)  # banana\n" +
    "print(red)     # cherry\n\n" +
    "استخدم علامة * لتجميع باقي العناصر:\n" +
    'fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")\n' +
    '(green, yellow, *red) = fruits\n' +
    "print(green)   # apple\n" +
    "print(yellow)  # banana\n" +
    "print(red)     # ['cherry', 'strawberry', 'raspberry']\n\n" +

    "------------------------\n" +
    "🔗 **دمج اثنين من الـ Tuples (Join Two Tuples)**\n" +
    'tuple1 = ("a", "b", "c")\n' +
    'tuple2 = (1, 2, 3)\n' +
    'tuple3 = tuple1 + tuple2\n' +
    "print(tuple3)  # ('a', 'b', 'c', 1, 2, 3)\n\n" +

    "------------------------\n" +
    "📖 **دوال الـ Tuple (Tuple Methods)**\n" +
    "count() → تعيد عدد مرات ظهور قيمة محددة داخل التابل\n" +
    "index() → تعيد موقع أول ظهور لقيمة معينة داخل التابل\n",

  imgSrc: "./imgPython/carbon(11).png",
},

 {
  id: 9,
  title: "Sets",
  explain:
    "الـ **Set (المجموعة)** في بايثون تُستخدم لتخزين مجموعة من القيم، لكنها تختلف عن القوائم في أنها:\n" +
    "1️⃣ غير مرتبة (Unordered) — لا تحتفظ بترتيب العناصر.\n" +
    "2️⃣ لا تقبل التكرار (No duplicates) — لا يمكن أن تحتوي على نفس العنصر أكثر من مرة.\n" +
    "3️⃣ لا يمكن الوصول إلى العناصر عن طريق الفهرس (index).\n" +
    "يتم كتابة الـ Set باستخدام الأقواس المعقوفة `{}`:\n" +
    'myset = {"apple", "banana", "cherry"}\n',

  example:
    "---------------------------\n" +
    "📏 **طول المجموعة (Get the Length of a Set)**\n" +
    'thisset = {"apple", "banana", "cherry"}\n' +
    "print(len(thisset))  # 3\n\n" +

    "---------------------------\n" +
    "🧩 **أنواع البيانات داخل الـ Set (Set Items - Data Types)**\n" +
    'set1 = {"apple", "banana", "cherry"}\n' +
    'set2 = {1, 5, 7, 9, 3}\n' +
    'set3 = {True, False, False}\n' +
    'set4 = {"abc", 34, True, 40, "male"}\n\n' +

    "---------------------------\n" +
    "🎯 **الوصول إلى العناصر (Access Items)**\n" +
    "لا يمكن الوصول إلى عناصر الـ Set باستخدام رقم فهرس (index)، لأنها غير مرتبة.\n" +
    "لكن يمكنك التكرار عليها باستخدام حلقة for:\n" +
    'thisset = {"apple", "banana", "cherry"}\n' +
    "for x in thisset:\n" +
    "    print(x)  # apple, banana, cherry\n\n" +
    'print("banana" in thisset)  # ✅ True\n\n' +

    "---------------------------\n" +
    "➕ **إضافة عناصر (Add Items)**\n" +
    "استخدم `add()` لإضافة عنصر واحد:\n" +
    'thisset = {"apple", "banana", "cherry"}\n' +
    'thisset.add("orange")\n' +
    "print(thisset)  # {'apple', 'banana', 'cherry', 'orange'}\n\n" +

    "---------------------------\n" +
    "🔗 **دمج مجموعتين (Add Sets)**\n" +
    "استخدم `update()` لإضافة عناصر مجموعة أخرى:\n" +
    'thisset = {"apple", "banana", "cherry"}\n' +
    'tropical = {"pineapple", "mango", "papaya"}\n' +
    'thisset.update(tropical)\n' +
    "print(thisset)\n" +
    "# {'apple', 'banana', 'cherry', 'mango', 'pineapple', 'papaya'}\n\n" +

    "---------------------------\n" +
    "❌ **حذف عناصر (Remove Items)**\n" +
    "استخدم `remove()` لحذف عنصر معين، ولكن إذا لم يكن موجودًا ستظهر **خطأ**:\n" +
    'thisset = {"apple", "banana", "cherry"}\n' +
    'thisset.remove("banana")\n' +
    "print(thisset)  # {'apple', 'cherry'}\n\n" +
    "استخدم `discard()` لحذف عنصر بدون ظهور خطأ لو العنصر غير موجود:\n" +
    'thisset = {"apple", "banana", "cherry"}\n' +
    'thisset.discard("banana")\n' +
    "print(thisset)  # {'apple', 'cherry'}\n\n" +
    "استخدم `pop()` لحذف عنصر عشوائي من المجموعة:\n" +
    'thisset = {"apple", "banana", "cherry"}\n' +
    'x = thisset.pop()\n' +
    "print(x)        # العنصر الذي تم حذفه\n" +
    "print(thisset)  # المجموعة بعد الحذف\n\n" +

    "---------------------------\n" +
    "🧹 **تفريغ المجموعة (Clear Set)**\n" +
    'thisset = {"apple", "banana", "cherry"}\n' +
    "thisset.clear()\n" +
    "print(thisset)  # set()\n\n" +

    "---------------------------\n" +
    "📖 **دوال الـ Set (Set Methods)**\n" +
    "add() → إضافة عنصر جديد\n" +
    "clear() → حذف جميع العناصر\n" +
    "copy() → إنشاء نسخة من المجموعة\n" +
    "difference() → إرجاع العناصر الموجودة في مجموعة وغير موجودة في أخرى\n" +
    "difference_update() → تحديث المجموعة بحذف العناصر المشتركة\n" +
    "discard() → حذف عنصر بدون ظهور خطأ\n" +
    "intersection() → إرجاع العناصر المشتركة بين المجموعتين\n" +
    "intersection_update() → تحديث المجموعة بالعناصر المشتركة فقط\n" +
    "isdisjoint() → التحقق إذا كانت المجموعتان لا تحتويان على عناصر مشتركة\n" +
    "issubset() → التحقق إذا كانت مجموعة فرعية من أخرى\n" +
    "issuperset() → التحقق إذا كانت تحتوي على جميع عناصر مجموعة أخرى\n" +
    "pop() → حذف عنصر عشوائي\n" +
    "remove() → حذف عنصر محدد (يُظهر خطأ إن لم يوجد)\n" +
    "symmetric_difference() → إرجاع العناصر غير المشتركة بين المجموعتين\n" +
    "union() → إرجاع اتحاد المجموعتين (كل العناصر بدون تكرار)\n" +
    "update() → دمج مجموعتين معًا\n",

  imgSrc: "./imgPython/carbon(12).png",
},

 {
  id: 10,
  title: "Dictionaries",
  explain:
    "الـ **Dictionary (القاموس)** في بايثون يُستخدم لتخزين البيانات في شكل (مفتاح:قيمة) **key:value**.\n" +
    "يُكتب بين الأقواس المعقوفة `{}`، وكل عنصر فيه يحتوي على مفتاح فريد.\n" +
    "مثال:\n" +
    'thisdict = {\n' +
    '  "brand": "Ford",\n' +
    '  "model": "Mustang",\n' +
    '  "year": 1964\n' +
    '}\n',

  example:
    "----------------------------\n" +
    "📦 **الوصول إلى القيم (Accessing Items)**\n" +
    'thisdict = {\n' +
    '  "brand": "Ford",\n' +
    '  "model": "Mustang",\n' +
    '  "year": 1964\n' +
    '}\n' +
    'print(thisdict["brand"])  # Ford\n' +
    'x = thisdict.get("model")  # Mustang\n\n' +

    "----------------------------\n" +
    "📏 **عدد العناصر (Dictionary Length)**\n" +
    "print(len(thisdict))  # 3\n\n" +

    "----------------------------\n" +
    "🧩 **أنواع البيانات داخل القاموس (Data Types)**\n" +
    'thisdict = {\n' +
    '  "brand": "Ford",\n' +
    '  "electric": False,\n' +
    '  "year": 1964,\n' +
    '  "colors": ["red", "white", "blue"]\n' +
    '}\n\n' +

    "----------------------------\n" +
    "🗝️ **الحصول على المفاتيح (Get Keys)**\n" +
    'x = thisdict.keys()\n' +
    "print(x)  # dict_keys(['brand', 'model', 'year'])\n\n" +

    "💡 **الحصول على القيم (Get Values)**\n" +
    'x = thisdict.values()\n' +
    "print(x)  # dict_values(['Ford', 'Mustang', 1964])\n\n" +

    "----------------------------\n" +
    "🔁 **تحديث القيم (Update Values)**\n" +
    'car = {"brand": "Ford", "model": "Mustang", "year": 1964}\n' +
    'car["year"] = 2020\n' +
    "print(car)  # {'brand': 'Ford', 'model': 'Mustang', 'year': 2020}\n\n" +

    "----------------------------\n" +
    "🧮 **عرض العناصر (Get Items)**\n" +
    'x = thisdict.items()\n' +
    "print(x)  # dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964)])\n\n" +

    "----------------------------\n" +
    "➕ **إضافة عناصر (Add Items)**\n" +
    'thisdict["color"] = "red"\n' +
    "print(thisdict)\n" +
    "# {'brand': 'Ford', 'model': 'Mustang', 'year': 1964, 'color': 'red'}\n\n" +

    "----------------------------\n" +
    "🔧 **تحديث القاموس (Update Dictionary)**\n" +
    'thisdict.update({"color": "red"})\n' +
    "print(thisdict)\n\n" +

    "----------------------------\n" +
    "❌ **حذف عناصر (Remove Items)**\n" +
    'thisdict.pop("model")  # حذف عنصر محدد\n' +
    'thisdict.popitem()     # حذف آخر عنصر مضاف\n' +
    'del thisdict["brand"]  # حذف مفتاح معين\n' +
    'thisdict.clear()       # حذف كل العناصر\n\n' +

    "----------------------------\n" +
    "🔁 **التكرار داخل القاموس (Loop Through Dictionary)**\n" +
    "for x in thisdict:\n" +
    "    print(x)           # طباعة المفاتيح فقط\n" +
    "for x in thisdict:\n" +
    "    print(thisdict[x]) # طباعة القيم فقط\n" +
    "for x, y in thisdict.items():\n" +
    "    print(x, y)        # طباعة المفتاح والقيمة معًا\n\n" +

    "----------------------------\n" +
    "📄 **نسخ قاموس (Copy Dictionary)**\n" +
    'mydict = thisdict.copy()\n' +
    "print(mydict)\n\n" +

    "----------------------------\n" +
    "📘 **دوال القواميس (Dictionary Methods)**\n" +
    "clear() → يحذف جميع العناصر من القاموس\n" +
    "copy() → ينشئ نسخة من القاموس\n" +
    "fromkeys() → ينشئ قاموس جديد من قائمة مفاتيح\n" +
    "get() → يرجع قيمة مفتاح محدد\n" +
    "items() → يرجع قائمة من الأزواج (المفتاح، القيمة)\n" +
    "keys() → يرجع جميع المفاتيح\n" +
    "pop() → يحذف عنصر بالمفتاح المحدد\n" +
    "popitem() → يحذف آخر عنصر مضاف\n" +
    "setdefault() → يرجع القيمة إن وُجدت، أو يضيف المفتاح بالقيمة الجديدة\n" +
    "update() → يحدث القاموس بعناصر جديدة\n" +
    "values() → يرجع جميع القيم\n",

  imgSrc: "./imgPython/carbon(13).png",
},

  {
  id: 11,
  title: "If ... Else",
  explain:
    "تُستخدم الجملة الشرطية **if...else** في بايثون لتنفيذ كود معين إذا تحقق شرط معين.\n" +
    "✅ إذا كان الشرط **صحيح (True)** → يتم تنفيذ الكود داخل `if`.\n" +
    "❌ إذا كان الشرط **خاطئ (False)** → يتم تنفيذ الكود داخل `else`.\n" +
    "يمكن أيضًا استخدام `elif` لفحص شروط إضافية.\n",

  example:
    "----------------------------\n" +
    "🔢 **مقارنة القيم (Comparison Operators)**\n" +
    "Operator\tDescription\n" +
    "a == b\tيساوي (Equal)\n" +
    "a != b\tلا يساوي (Not Equal)\n" +
    "a < b\tأصغر من (Less than)\n" +
    "a <= b\tأصغر من أو يساوي (Less than or equal to)\n" +
    "a > b\tأكبر من (Greater than)\n" +
    "a >= b\tأكبر من أو يساوي (Greater than or equal to)\n\n" +

    "----------------------------\n" +
    "🧠 **مثال أساسي (Basic Example)**\n" +
    "a = 200\n" +
    "b = 33\n\n" +
    "if b > a:\n" +
    '    print("b is greater than a")\n' +
    "elif a == b:\n" +
    '    print("a and b are equal")\n' +
    "else:\n" +
    '    print("a is greater than b")\n' +
    "# الناتج: a is greater than b\n\n" +

    "----------------------------\n" +
    "⚙️ **مثال آخر باستخدام if فقط**\n" +
    "x = 10\n" +
    "if x > 5:\n" +
    '    print("x is greater than 5")\n' +
    "# الناتج: x is greater than 5\n\n" +

    "----------------------------\n" +
    "🪜 **استخدام elif مع أكثر من شرط**\n" +
    "x = 20\n" +
    "if x < 10:\n" +
    '    print("x is less than 10")\n' +
    "elif x < 30:\n" +
    '    print("x is less than 30")\n' +
    "else:\n" +
    '    print("x is 30 or more")\n' +
    "# الناتج: x is less than 30\n\n" +

    "----------------------------\n" +
    "🧩 **جملة If في سطر واحد (Short Hand If)**\n" +
    "a = 5\n" +
    "b = 2\n" +
    'if a > b: print("a is greater than b")\n\n' +

    "----------------------------\n" +
    "⚡ **If مختصرة مع Else (Short Hand If ... Else)**\n" +
    "a = 2\n" +
    "b = 330\n" +
    'print("A") if a > b else print("B")\n' +
    "# الناتج: B\n\n" +

    "----------------------------\n" +
    "🔄 **استخدام And / Or في الشروط**\n" +
    "a = 200\n" +
    "b = 33\n" +
    "c = 500\n" +
    "if a > b and c > a:\n" +
    '    print("Both conditions are True")\n\n' +
    "if a > b or a > c:\n" +
    'print("At least one condition is True")\n\n' +
      "----------------------------\n" +
    "🚫 **جملة فارغة (if بدون كود)**\n" +
    "لمنع حدوث خطأ عندما لا تريد تنفيذ أي كود داخل الشرط:\n" +
    "if a > b:\n" +
    "    pass  # لا تفعل شيئًا الآن\n",

  imgSrc: "./imgPython/carbon(14).png",
},

  {
  id: 12,
  title: "Match",
  explain:
    "🧩 تستخدم عبارة **match** في بايثون (بدءًا من الإصدار 3.10) لاختيار وتنفيذ كود معين بناءً على قيمة متغيّر.\n" +
    "تشبه جملة **switch** في لغات البرمجة الأخرى.\n\n" +
    "🔹 **الفكرة**:\n" +
    "يتم مقارنة القيمة (expression) بعدة حالات (case)، وعند تطابق الحالة يتم تنفيذ الكود الخاص بها.\n\n" +
    "مثلاً:\n" +
    "إذا كانت القيمة = 1 → نفذ كود معين.\n" +
    "إذا كانت = 2 → نفذ كود آخر.\n" +
    "وإذا لم تطابق أي حالة → يمكن استخدام `_` كحالة افتراضية (default case).\n",

  example:
    "----------------------------\n" +
    "🧱 **الصياغة العامة (Syntax)**\n" +
    "match expression:\n" +
    "    case x:\n" +
    "        # code block\n" +
    "    case y:\n" +
    "        # code block\n" +
    "    case _:\n" +
    "        # default code block (يُنفّذ إذا لم يتم التطابق)\n\n" +

    "----------------------------\n" +
    "📘 **مثال عملي**\n" +
    "day = 4\n" +
    "match day:\n" +
    "    case 1:\n" +
    '        print("Monday")\n' +
    "    case 2:\n" +
    '        print("Tuesday")\n' +
    "    case 3:\n" +
    '        print("Wednesday")\n' +
    "    case 4:\n" +
    '        print("Thursday")\n' +
    "    case 5:\n" +
    '        print("Friday")\n' +
    "    case 6:\n" +
    '        print("Saturday")\n' +
    "    case 7:\n" +
    '        print("Sunday")\n' +
    "    case _:\n" +
    '        print("Invalid day number")\n' +
    "# الناتج: Thursday\n\n" +

    "----------------------------\n" +
    "🎯 **مثال آخر مع أنماط متعددة (Multiple Patterns)**\n" +
    "status = 404\n" +
    "match status:\n" +
    "    case 200 | 201:\n" +
    '        print("Success")\n' +
    "    case 400:\n" +
    '        print("Bad Request")\n' +
    "    case 404:\n" +
    '        print("Not Found")\n' +
    "    case _:\n" +
    '        print("Unknown Status")\n' +
    "# الناتج: Not Found\n\n" +

    "----------------------------\n" +
    "💡 **ملاحظات مهمة:**\n" +
    "- لا تحتاج إلى كتابة `break` مثل لغات أخرى (كل case مستقل).\n" +
    "- `_` تعمل مثل (else) كحالة افتراضية.\n" +
    "- يمكن استخدام `|` للجمع بين أكثر من قيمة في نفس الحالة.\n" +
    "- تم إدخال match في بايثون 3.10 فما فوق.\n",

  imgSrc: "./imgPython/carbon(15).png",
},
{
  id: 13,
  title: "While Loops",
  explain:
    "🔁 في بايثون يوجد نوعان أساسيان من الحلقات التكرارية (Loops):\n" +
    "1️⃣ حلقة **while**\n" +
    "2️⃣ حلقة **for**\n\n" +
    "تُستخدم حلقة **while** لتكرار تنفيذ الكود طالما أن الشرط (condition) صحيح.\n" +
    "بمعنى آخر: «نفّذ الكود طالما الشرط = True».\n",

  example:
    "------------------------------------------\n" +
    "📘 **مثال بسيط على while**\n" +
    "i = 1\n" +
    "while i < 6:\n" +
    "    print(i)\n" +
    "    i += 1\n" +
    "# الناتج: 1 2 3 4 5\n\n" +
    "✅ التوضيح:\n" +
    "- تبدأ المتغيّر i بقيمة 1\n" +
    "- طالما i أقل من 6 يتم تنفيذ الكود\n" +
    "- في كل دورة نضيف 1 إلى i\n" +
    "- تتوقف الحلقة عندما تصبح i = 6 (لأن الشرط أصبح خطأ)\n\n" +

    "------------------------------------------\n" +
    "🚫 **جملة break**\n" +
    "تُستخدم لإيقاف الحلقة نهائيًا حتى لو كان الشرط ما زال True.\n\n" +
    "i = 1\n" +
    "while i < 6:\n" +
    "    print(i)\n" +
    "    if i == 3:\n" +
    "        break  # إيقاف الحلقة عند الرقم 3\n" +
    "    i += 1\n" +
    "# الناتج: 1 2 3\n\n" +

    "------------------------------------------\n" +
    "➡️ **جملة continue**\n" +
    "تُستخدم لتخطي (تجاهل) التكرار الحالي والانتقال للتكرار التالي مباشرة.\n\n" +
    "i = 0\n" +
    "while i < 6:\n" +
    "    i += 1\n" +
    "    if i == 3:\n" +
    "        continue  # تجاهل 3 وانتقل للرقم التالي\n" +
    "    print(i)\n" +
    "# الناتج: 1 2 4 5 6\n\n" +

    "------------------------------------------\n" +
    "💡 **ملاحظات مهمة:**\n" +
    "- تأكد دائمًا أن الشرط سيصبح False في النهاية حتى لا تدخل في حلقة لا نهائية.\n" +
    "- يمكنك استخدام break وcontinue للتحكم في سير الحلقة.\n" +
    "- يمكن أيضًا وضع else مع while، ليتم تنفيذها بعد انتهاء الحلقة طبيعيًا (بدون break).\n\n" +

    "📘 مثال على else مع while:\n" +
    "i = 1\n" +
    "while i < 3:\n" +
    "    print(i)\n" +
    "    i += 1\n" +
    "else:\n" +
    '    print("Loop finished!")\n' +
    "# الناتج:\n" +
    "# 1\n# 2\n# Loop finished!\n",

  imgSrc: "./imgPython/carbon(16).png",
},

     {
  id: 14,
  title: "For Loops",
  explain:
    "🔁 تُستخدم حلقة **for** في بايثون لتكرار تنفيذ مجموعة من الأوامر **لكل عنصر** في قائمة أو مجموعة أو سلسلة أو أي تسلسل آخر.\n" +
    "🧠 لا تحتاج حلقة for إلى متغيّر عدّاد (index) يتم تحديده مسبقًا كما في لغات أخرى.\n",

  example:
    "------------------------------------------\n" +
    "📘 **مثال بسيط**\n" +
    'fruits = ["apple", "banana", "cherry"]\n' +
    "for x in fruits:\n" +
    "    print(x)\n" +
    "# الناتج: apple  banana  cherry\n\n" +

    "------------------------------------------\n" +
    "🚫 **جملة break**\n" +
    "تُستخدم لإيقاف الحلقة عندما يتحقق شرط معين.\n\n" +
    'fruits = ["apple", "banana", "cherry"]\n' +
    "for x in fruits:\n" +
    "    print(x)\n" +
    '    if x == "banana":\n' +
    "        break\n" +
    "# الناتج: apple  banana\n\n" +

    "------------------------------------------\n" +
    "➡️ **جملة continue**\n" +
    "تُستخدم لتخطي العنصر الحالي ومتابعة الحلقة من العنصر التالي.\n\n" +
    'fruits = ["apple", "banana", "cherry"]\n' +
    "for x in fruits:\n" +
    '    if x == "banana":\n' +
    "        continue\n" +
    "    print(x)\n" +
    "# الناتج: apple  cherry\n\n" +

    "------------------------------------------\n" +
    "🔢 **دالة range()‎**\n" +
    "تُستخدم لتوليد سلسلة من الأرقام (تبدأ من 0 افتراضيًا وتزيد بمقدار 1 حتى تصل إلى العدد المحدد دون أن تشملَه).\n\n" +
    "for x in range(6):\n" +
    "    print(x)\n" +
    "# الناتج: 0 1 2 3 4 5\n\n" +

    "------------------------------------------\n" +
    "🧩 **جملة else مع for**\n" +
    "يمكن استخدام else مع حلقة for لتنفيذ كود بعد انتهاء الحلقة بشكل طبيعي (وليس بسبب break).\n\n" +
    "for x in range(6):\n" +
    "    print(x)\n" +
    "else:\n" +
    '    print("Finally finished!")\n' +
    "# الناتج:\n" +
    "# 0 1 2 3 4 5\n# Finally finished!\n\n" +
    "⚠️ ملاحظة: إذا توقفت الحلقة باستخدام break فلن يتم تنفيذ else.\n\n" +

    "------------------------------------------\n" +
    "🔁 **الحلقات المتداخلة (Nested Loops)**\n" +
    "الحلقة المتداخلة هي حلقة داخل حلقة أخرى.\n" +
    "يتم تنفيذ الحلقة الداخلية بالكامل لكل تكرار من الحلقة الخارجية.\n\n" +
    'adj = ["red", "big", "tasty"]\n' +
    'fruits = ["apple", "banana", "cherry"]\n' +
    "for x in adj:\n" +
    "    for y in fruits:\n" +
    "        print(x, y)\n" +
    "# الناتج:\n" +
    "# red apple, red banana, red cherry, big apple, big banana, big cherry, tasty apple, tasty banana, tasty cherry\n\n" +

    "------------------------------------------\n" +
    "⚙️ **جملة pass**\n" +
    "لا يمكن أن تكون حلقة for فارغة. إذا احتجت لإنشائها مؤقتًا بدون محتوى، استخدم pass لتجنب الخطأ.\n\n" +
    "for x in [0, 1, 2]:\n" +
    "    pass\n" +
    "# لا يحدث أي شيء، فقط يتخطى الحلقة بدون خطأ.\n",

  imgSrc: "./imgPython/carbon(17).png",
},

       {
  id: 15,
  title: "Functions",
  explain:
    "🔹 **الدالة (Function)** هي كتلة من الكود يتم تنفيذها فقط عند استدعائها.\n" +
    "🔹 يمكن تمرير بيانات إلى الدالة تُعرف باسم **المعاملات (Parameters)**.\n" +
    "🔹 يمكن للدالة أيضًا أن **تُرجع (return)** قيمة كنتيجة للتنفيذ.\n",

  example:
    "----------------------------------------------\n" +
    "📘 **إنشاء واستدعاء دالة**\n" +
    "def my_function():\n" +
    '    print("Hello from a function")\n' +
    "my_function()\n" +
    "# الناتج: Hello from a function\n\n" +

    "----------------------------------------------\n" +
    "📥 **المعاملات (Arguments)**\n" +
    "يمكن تمرير البيانات إلى الدالة كمعاملات.\n" +
    "def my_function(fname):\n" +
    '    print(fname + " Refsnes")\n' +
    'my_function("Emil")\n' +
    "# الناتج: Emil Refsnes\n\n" +

    "----------------------------------------------\n" +
    "🔹 **المعاملات العشوائية (*args)**\n" +
    "إذا لم تكن تعرف عدد المعاملات التي سيتم تمريرها إلى الدالة، ضع * قبل اسم المعامل.\n\n" +
    "def my_function(*kids):\n" +
    '    print("The youngest child is " + kids[2])\n' +
    'my_function("Emil", "Tobias", "Linus")\n' +
    "# الناتج: The youngest child is Linus\n\n" +

    "----------------------------------------------\n" +
    "🧾 **المعاملات بالكلمات المفتاحية (Keyword Arguments)**\n" +
    "يمكنك تمرير المعاملات باستخدام الصيغة key = value.\n\n" +
    "def my_function(child3, child2, child1):\n" +
    '    print("The youngest child is " + child3)\n' +
    'my_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus")\n' +
    "# الناتج: The youngest child is Linus\n\n" +

    "----------------------------------------------\n" +
    "🧩 **المعاملات بالكلمات المفتاحية العشوائية (**kwargs)**\n" +
    "تُستخدم إذا لم تكن تعرف أسماء المعاملات التي سيتم تمريرها.\n\n" +
    "def my_function(**kid):\n" +
    '    print("His last name is " + kid["lname"])\n' +
    'my_function(fname = "Tobias", lname = "Refsnes")\n' +
    "# الناتج: His last name is Refsnes\n\n" +

    "----------------------------------------------\n" +
    "🌍 **قيمة افتراضية للمعامل (Default Parameter)**\n" +
    "يمكنك تحديد قيمة افتراضية تُستخدم إذا لم يُمرر معامل عند الاستدعاء.\n\n" +
    "def my_function(country = 'Norway'):\n" +
    '    print("I am from " + country)\n' +
    'my_function("Sweden")\n' +
    'my_function("India")\n' +
    'my_function()\n' +
    "# الناتج:\n" +
    "# I am from Sweden\n# I am from India\n# I am from Norway\n\n" +

    "----------------------------------------------\n" +
    "⚙️ **عبارة pass**\n" +
    "تُستخدم عندما لا تريد كتابة محتوى الدالة الآن ولكنك لا تريد حدوث خطأ.\n\n" +
    "def my_function():\n" +
    "    pass\n" +
    "# لا تُنفذ شيئًا، فقط تتجاوز الدالة بدون خطأ.\n",

  imgSrc: "./imgPython/carbon(18).png",
},
{
  "id": 16,
  "title": "Functions 2",
  "explain": 
    "الدالة هي كتلة كود بتتنفذ لما تناديها.\n" +
    "ممكن تمرر بيانات (Parameters) وترجع قيمة باستخدام return.\n" +
    "ملاحظات بسيطة على الحاجات اللي ممكن تنساها:\n" +
    "- الدالة من غير return بترجع None تلقائيًا.\n" +
    "- print بيطبع القيمة على الشاشة بس، return بيرجع القيمة لمكان الاستدعاء.\n" +
    "- ممكن تستخدم قيم افتراضية للباراميترز.\n" +
    "- ممكن تستخدم *args لأكثر من قيمة بدون اسم.\n" +
    "- ممكن تستخدم **kwargs لأكثر من قيمة بأسماء.\n" +
    "- ممكن تعرف دالة فاضية باستخدام pass.\n",
  "example":
    "1- تعريف دالة بسيطة\n"+
    "def greet():\n"+
    "    print('Hello')\n"+
    "greet() \t # Hello\n"+
    "----------------------------------------\n"+
    "2- دالة مع باراميتر\n"+
    "def greet(name):\n"+
    "    print('Hello ' + name)\n"+
    "greet('Ali') \t # Hello Ali\n"+
    "----------------------------------------\n"+
    "3- دالة مع return\n"+
    "def add(a, b):\n"+
    "    return a + b\n"+
    "result = add(5, 3)\n"+
    "print(result) \t # 8\n"+
    "----------------------------------------\n"+
    "4- دالة مع قيمة افتراضية\n"+
    "def greet(name='Friend'):\n"+
    "    print('Hello ' + name)\n"+
    "greet() \t # Hello Friend\n"+
    "greet('Sara') \t # Hello Sara\n"+
    "----------------------------------------\n"+
    "5- دالة مع *args\n"+
    "def greet(*names):\n"+
    "    for name in names:\n"+
    "        print('Hello ' + name)\n"+
    "greet('Ali', 'Omar', 'Sara')\n"+
    "# Hello Ali\n# Hello Omar\n# Hello Sara\n"+
    "----------------------------------------\n"+
    "6- دالة مع **kwargs\n"+
    "def greet(**people):\n"+
    "    for key, value in people.items():\n"+
    "        print(key + ' -> ' + value)\n"+
    "greet(friend='Ali', sister='Sara')\n"+
    "# friend -> Ali\n# sister -> Sara\n"+
    "----------------------------------------\n"+
    "7- دالة بدون محتوى\n"+
    "def future_function():\n"+
    "    pass"
},


                        {
    id: 16,
    title: "oop",
    explain:
    'What is OOP?\n'+

'OOP stands for Object-Oriented Programming.\n'+

'Python is an object-oriented language, allowing you to structure your code using classes and objects for better organization and reusability.\n',

      example:

'Advantages of OOP\n'+

    'Provides a clear structure to programs\n'+
    'Makes code easier to maintain, reuse, and debug\n'+
    "Helps keep your code DRY (Don't Repeat Yourself)\n"+
    'Allows you to build reusable applications with less code\n'+
    ''


                        },
                    {
    id: 17,
    title: "Classes & Objects",
    explain:
    'Python is an object oriented programming language.\n'+

'Almost everything in Python is an object, with its properties and methods.\n'+

'A Class is like an object constructor, or a "blueprint" for creating objects.\n',

      example:
      'Create a Class\n'+
      'To create a class, use the keyword class:\n'+
      'class MyClass:\n'+
  'x = 5\n'+
  '-------------------------------------------------------------------------------------------------------------------------------\n'+
  'The __init__() Method\n'+
  'To understand the meaning of classes we have to understand the built-in __init__() method.\n'+
  'class Person:\n'+
'*****************************\n'+
'هنا ممكن تجط atrebut خاصه بالكلاس تحسب من خلالها عدد المستخدمين تعمل ليست\n'+
'*****************************\n'+
  'def __init__(self, name, age):\n'+
  '# The self parameter is a reference to the current instance of the class,\n and is used to access variables that belong to the class.\n'+
    'self.name = name\n'+
    'self.age = age\n'+

'p1 = Person("John", 36)\n'+

'print(p1.name)\t # John\n'+
'print(p1.age)\t # 36 \n'+
'***********************************************\n'+
'Note: The __init__() method is called automatically every time the class is being used to create a new object.\n'+
'************************************************\n'+
'--------------------------------------------------------------------------------------------------------------------------------------------\n'+
'Create Methods\n'+
'You can create your own methods inside objects. Methods in objects are functions that belong to the object.\n'+
'class Person:\n'+
  'def __init__(self, name, age):\n'+
    'self.name = name\n'+
    'self.age = age\n'+

  'def myfunc(self):\n'+
    'print("Hello my name is " + self.name)\n'+

'p1 = Person("John", 36)\n'+
'p1.myfunc() \t # Hello my name is John \n'+
 '---------------------------------------------------------------------------------------------------------------------\n'+
 'Delete Object Properties\n'+
 'You can delete properties on objects by using the del keyword:\n'+
 ' del p1.age \n'+
 "print(p1.age) \t #  AttributeError: 'Person' object has no attribute 'age' \n"+
 '----------------------------------------------------------------------------------------------------------------------------\n'+
'class Person:\n'+
   ' # Constructor \n'+
   ' def __init__(self, name, age): \n'+
       ' self.name = name \n'+
       ' self.age = age \n'+

   ' # Method عادية\n'+
    'def myfunc(self):\n'+
        'print("Hello my name is " + self.name)\n'+

    '# Class method\n'+
   '@classmethod\n'+
    'def show_users_count(cls):\n'+
        'print(f"We Have {cls.__name__} class defined")\n'+
        ' # Not useing selef but using cls\n'+

    '# Nested class\n'+
    'class Address:\n'+
       ' def __init__(self, city, country):\n'+
            'self.city = city\n'+
            'self.country = country\n'+

        'def show_address(self):\n'+
            'print(f"{self.city}, {self.country}")\n'+
            '****************************************************************************************\n'+
            'staticmethod\n'+
            'class Calculator:\n'+
   ' # Static method \n'+
   ' @staticmethod \t not using pramiter\n'+
   'def add():\n'+
        'print ("welcom")\n'+
        '-----------------------------------------------------------------------------------------------------------\n'+
        '_str_\n'+

        'لما بتطبع class بيطلع مكان العنصر فالمومرى str بتطلع القيمه \n'+
        'not use str \n'+
        'class Person:\n'+
 'def __init__(self, name, age):\n'+
    'self.name = name\n'+

'p1 = Person("John", 36)\n'+

'print(p1) \t # <__main__.Person object at 0x15039e602100> \n'+
'**************************************\n'+
'using str \n'+
'class Person:\n'+
  'def __init__(self, name, age):\n'+
    'self.name = name\n'+
    'self.age = age\n'+

  'def __str__(self):\n'+
    'return f"{self.name}({self.age})"\n'+    

'p1 = Person("John", 36)\n'+

'print(p1) \t # John(36) \n'+
'--------------------------------------------------------------------------------------------------------\n'+
''






                    },
  {
    id: 18,
    title: "SQLite",
    explain: "Learn how to deal with SQLite.",
    example: " import sqlite3 \t استيراد المكتبه الخاصه بئنشاء قاعده البيانات \n"+
    "db = sqlite3.connect('nameFile.db') \t انشاء الملف \n"+
    "cr = db.curser() \t ده اللى هيتحكم فالبيانات \n"+
    'انشاء جدول\n'+
    "cr.execute('create table \t انشئ جدول \n if not existe \t لو مشموجود \n name table \n الحقول \n (name text ,\n progress integer ,\n user_id integer,)')\n"+
    'اضافه البيانات الى الحقول\n'+
    'cr.execute("insert into skills\t ضيف البيانا فجدول اسمو skills \n (name , progress , user_id) value("youssef", 20 ,3)")\n'+
    'ممكن تعمل اضافه بشكل تانى\n'+
    'my_tuple=("go" , 20 , 4) \t ده tuple بيحتوى على القيم \n cr.execute("insert into skills values(? , ? , ?) ", my_tuple )\n'+
    '****************************************************\n'+
    'مهمين ولازم يتكتبو\n'+
    'db.commint() \t حفظ البيانات \n'+
    'db.close() \t لاغلاق الملف \n'+
    '********************************************************\n'+
    'الحصول على البيانات من الداتا\n'+
    'cr.execute("select name \t عايز الحقل اللى اسمو name \n ممكن تستخدم * للحصول على كل الحقول \n from user \t من جدول اسمو user ")\n'+
    'fetchone() \t الحصول على قيمه واحده \n'+
    'مثال \n'+
    'print(cr.fetchone()) \t هيطبع اول قيمه ولو كررته هيطبع تانى قيمه وهكدا لجد ميدى none \n'+
    'fetchall() \t الحصول على كل القيم اللى داخل الحقل \n'+
    'fetchmany ( numper ) \t بيعمل fetch لحد جزء معين انت اللى بتحدده \n'+
    '********************************************************\n'+
    'Update Data\n'+
    'cr.execute("update users \t حدث الجدول \n set name ="mohamed"\t لحد هنا هيخلى كل الاسماء اسمها mohamed \n where user_id = 1 \t هنا حددت id معين ")\n'+
    'Delete Data\n'+
    'cr.execute("delete from users \t useres لحد هنا هيمسح اى حاجه موجوده الجدول اللى اسمو \n where user_id = 4 \t هنا حددت  id  معين هوا اللى هيتمسح ")\n'+
    '----------------------------------------------------------------------------------------------------\n'+
    'لو عايز تعمل select لعنصر معين \n'+
    'cr.execute("select name from skiles \t وهنا انا بقولو هات الخانه اللى اسمها name من جدول skiles \n where name={name} and user_id ={numper} \t اللى اسمو كذا وid  بيساوى كذا \n'+
    '----------------------------------------------------------------------------------------------------------------------------------------------------------------\n'+
    'ازاى تتحكم فترتيب البيانات \n'+
    'cr.execute("select * from skills \t انا هنا حددت كل البيانات \n'+
    'order by name \t هيرتبهم حسب الاسم \n'+
    'لو زودت asc هيرتبهم تصاعدى \n لو زودت desc هيرتبهم تنازلى \n limit 2 \t هيجيب اول اتنين بس \n offset 2 \t هيشيل اول 2 ويعرض الباقى \n where user_id > 2 \t هيديك العناصر اللى user Id اكبر من 2 \n where user_id in (1 , 2 ,3 )\t هيدى العناصر اللى user_Id بيساوى 1 2 3 \nwhere user_id not in (1 , 2 ,3 )\t هيدى العناصر اللى user_Id لاتساوى 1 2 3 \n'

  }
];
  export default python