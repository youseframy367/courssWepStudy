const django = [
  {
    id: 1,
    title: "install",
    explain:'introdation',
      example:'pip install virtualenv\t بتنزل الاساسيات اللى هتحتجها \n'+
      'virtualenv nameproject \t هتنزل البيئه الافتراضيه \n'+
      'python -m venv nameProject \t برضو هيسطب لبيئه الافتراضيه\n'+
      'nameProject\Scripts\activate \t هيفعل البيئه الافتراضيه \n'+
      'pip install django \t بتسطب الجاتنجو \n'+
      'django-admin startprogect nameProject \t بينشئ مشروع \n'+
      'python manage.py runserver \t بيعمل run للسرفر \n'+
      'code . \tهيفتح المكان اللى انت واقف فيه على فجول استديوكود \n'
      
  },
  {
    id: 2,
    title: "create apps",
    explain:
      'how to download apps\n' +
      'الشئ الاب اللي انا هشتغل عليه\n' +
      'شرح بسيط عن إنشاء وتشغيل التطبيقات داخل المشروع',
    example:
      'python manage.py startapp nameApp \t هنا بننشئ تطبيق جديد\n' +
      'هينشئ عندى جوه app ملفات زي:\n' +
      '   admin.py\n' +
      '   apps.py\n' +
      '   models.py\n' +
      '   tests.py\n' +
      '   views.py\n' +
      '   urls.py (انت اللي بتنشئو)\n' +
      '********************************************************\n' +
      'نيجي في ملف settings.py:\n' +
      'INSTALLED_APPS = [\n' +
      '    "nameApp.apps.NameAppConfig",\n' +
      ']\n' +
      '********************************************************\n' +
      'ونيجي في ملف urls.py الخاص بالمشروع:\n' +
      'من django.urls import path, include\n' +
      'urlpatterns = [\n' +
      '    path("admin/", admin.site.urls),   # ده مسار لوحة التحكم\n' +
      '    path("nameApp/", include("nameApp.urls")),   # ربط التطبيق بالـ urls بتاعته\n' +
      ']\n'
  },
{
  id: 4,
  title: "Django Views ",
  explain: "الفيو (View) في Django هو الجزء المسؤول عن استقبال الطلب (request) من المستخدم، ومعالجته، ورجّع الرد المناسب (response). ممكن يكون الرد ده صفحة HTML، أو JSON، أو ملف، أو redirect. جوّه الفيو بنقدر نتعامل مع قاعدة البيانات، نعمل استعلامات، نستخدم تيمبلِت، أو نرجّع بيانات خام.",

  example:
    "# 🌟 أنواع الفيوز في Django\n" +
    "\n" +
    "## 1️⃣ Function-Based View (الدالة العادية)\n" +
    "من خلال الدالة بنستقبل request ونرجّع response.\n" +
    "\n" +
    "from django.http import HttpResponse, JsonResponse\n" +
    "from django.shortcuts import render, get_object_or_404, redirect\n" +
    "from .models import Post\n" +
    "\n" +
    "# عرض نص بسيط\n" +
    "def home(request):\n" +
    "    return HttpResponse('أهلاً بيك في الموقع!')\n" +
    "\n" +
    "# عرض صفحة HTML من تيمبلِت\n" +
    "def about(request):\n" +
    "    return render(request, 'about.html')\n" +
    "\n" +
    "# جلب بيانات من قاعدة البيانات وعرضها في صفحة\n" +
    "def post_list(request):\n" +
    "    posts = Post.objects.all().order_by('-published')\n" +
    "    context = {'posts': posts}\n" +
    "    return render(request, 'blog/post_list.html', context)\n" +
    "\n" +
    'معرفه عدد المنتجات اللى موجوده فى قاعده البيانات \n'+
     "def post_list(request):\n" +
    "    posts = Post.objects.all().count()\n" +
    "    context = {'posts': posts} \t # عدد المنتجات اللى موجوده فى قاعده البيانات \n" +
    "    return render(request, 'blog/post_list.html', context)\n" +
    " اظهر شئ محدد او فيه خاصيه معينه\n"+
      "def post_list(request):\n" +
    "    posts = Post.objects.all().exclude( name='ahmed')\t معناها هات اى يوسر اسمو احمد \n" +
    "    context = {'posts': posts} \n" +
    "    return render(request, 'blog/post_list.html', context)\n" +
    "# عرض بوست محدد (تفاصيل)\n" +
    "def post_detail(request, pk):\n" +
    "    post = get_object_or_404(Post, pk=pk)\n" +
    "    return render(request, 'blog/post_detail.html', {'post': post})\n" +
    "\n" +
    "## 2️⃣ إرجاع بيانات JSON\n" +
    "من خلال JsonResponse نقدر نرجّع البيانات كـ object في شكل JSON.\n" +
    "\n" +
    "from django.forms.models import model_to_dict\n" +
    "\n" +
    "def post_json(request, pk):\n" +
    "    post = get_object_or_404(Post, pk=pk)\n" +
    "    data = model_to_dict(post, fields=['id', 'title', 'body'])\n" +
    "    return JsonResponse(data)\n" +
    "\n" +
    "# أو قائمة بوستات كـ JSON\n" +
    "def posts_json(request):\n" +
    "    posts = Post.objects.values('id', 'title', 'body')\n" +
    "    return JsonResponse(list(posts), safe=False)\n" +
    "\n" +
    "## 3️⃣ إضافة بيانات (POST Request)\n" +
    "من خلال request.method نتحقق من نوع الطلب وننشئ عنصر جديد.\n" +
    "\n" +
    "from django.views.decorators.csrf import csrf_exempt\n" +
    "import json\n" +
    "\n" +
    "@csrf_exempt\n" +
    "def create_post(request):\n" +
    "    if request.method == 'POST':\n" +
    "        payload = json.loads(request.body)\n" +
    "        post = Post.objects.create(\n" +
    "            title=payload.get('title'),\n" +
    "            body=payload.get('body'),\n" +
    "            author=request.user\n" +
    "        )\n" +
    "        return JsonResponse({'message': 'تم الحفظ', 'id': post.id}, status=201)\n" +
    "    return JsonResponse({'error': 'يجب إرسال POST'}, status=400)\n" +
    "\n" +
    "## 4️⃣ إعادة توجيه (Redirect)\n" +
    "def go_home(request):\n" +
    "    return redirect('home')\n" +
    "\n" +
    "## 5️⃣ Class-Based Views (الفيو بالكلاس)\n" +
    "دي طريقة منظمة للفيوز خصوصًا للمشاريع الكبيرة.\n" +
    "\n" +
    "from django.views.generic import ListView, DetailView\n" +
    "\n" +
    "class PostListView(ListView):\n" +
    "    model = Post\n" +
    "    template_name = 'blog/post_list.html'\n" +
    "    context_object_name = 'posts'\n" +
    "\n" +
    "class PostDetailView(DetailView):\n" +
    "    model = Post\n" +
    "    template_name = 'blog/post_detail.html'\n" +
    "\n" +
    "## 6️⃣ Pagination (تقسيم النتائج)\n" +
    "from django.core.paginator import Paginator\n" +
    "\n" +
    "def paged_posts(request):\n" +
    "    posts = Post.objects.all()\n" +
    "    paginator = Paginator(posts, 5)\n" +
    "    page_number = request.GET.get('page')\n" +
    "    page_obj = paginator.get_page(page_number)\n" +
    "    return render(request, 'blog/post_list.html', {'page_obj': page_obj})\n" +
    "\n" +
    "## 7️⃣ إرجاع ملف أو تحميل\n" +
    "from django.http import FileResponse\n" +
    "\n" +
    "def download_file(request):\n" +
    "    return FileResponse(open('media/file.pdf', 'rb'), as_attachment=True, filename='file.pdf')\n" +
    "\n" +
    "# ⚙️ الخلاصة:\n" +
    "# HttpResponse  → نص أو HTML\n" +
    "# render         → صفحة HTML من تيمبلِت\n" +
    "# JsonResponse   → بيانات JSON\n" +
    "# redirect       → تحويل لمسار تاني\n" +
    "# FileResponse   → إرسال ملف\n" +
    "# وكل ده ممكن جوّه الفيو تتعامل مع الداتا من قاعدة البيانات باستخدام ORM\n"
}
,
  {

  id: 4,
  title: "urls.py",
  explain: "learn how to create urls",
  example:
    'from django.urls import path\n' +
    'from . import views\n' +
    '\n' +
    'urlpatterns = [\n' +
    '    path("namePage/", views.nameFunction),  \n # هنا بتقوله لما تكتب namePage في الرابط اعرض الـ function دي\n' +
    ']\n'
},

  {
    id: 5,
    title: "templates files",
    explain: "learn how to create template files",
    example:
      'في طريقتين:\n' +
      '1- انك تعمل ملف templates برا المشروع كله ويحتوي على كل التصميمات.\n' +
      '2- أو تعمل ملف templates جوه كل app.\n' +
      '*****************************************\n' +
      'في ملف settings.py بتضيف:\n' +
      'import os\n' +
      'TEMPLATES = [\n' +
      '    {\n' +
      '        "BACKEND": "django.template.backends.django.DjangoTemplates",\n' +
      '        "DIRS": [os.path.join(BASE_DIR, "templates")],\n' +
      '        "APP_DIRS": True,\n' +
      '        "OPTIONS": {\n' +
      '            "context_processors": [\n' +
      '                "django.template.context_processors.debug",\n' +
      '                "django.template.context_processors.request",\n' +
      '                "django.contrib.auth.context_processors.auth",\n' +
      '                "django.contrib.messages.context_processors.messages",\n' +
      '            ],\n' +
      '        },\n' +
      '    },\n' +
      ']\n' +
      '*****************************************\n' +
      'وبعدين في ملف views.py:\n' +
      'from django.shortcuts import render   # دي علشان اعرض template جاهزة\n' +
      '\n' +
      'def about(request):\n' +
      '    return render(request, "about.html")   # المسار بيكون من بعد مجلد templates\n'
  },
  {
  id: 6,
  title: "DTL ",
  explain: "(Django Template Language)اتعلم ازاي تستخدم لغة القوالب الخاصة بـ Django عشان تخلي الصفحات بتاعتك ديناميكية",
  example:
    '*****************************************\n' +
    '📌 عرض متغير من views.py:\n' +
    'views.py:\n' +
    'def home(request):\n' +
    '    context = {"name": "Ahmed"}\n' +
    '    return render(request, "home.html", context)\n' +
    '\n' +
    'home.html:\n' +
    '<h1>اهلا {{ name }}</h1>\n' +
    '*****************************************\n' +
    '📌 استخدام if:\n' +
    '{% if age > 18 %} بالغ {% else %} صغير {% endif %}\n' +
    '*****************************************\n' +
    '📌 استخدام for:\n' +
    '{% for fruit in fruits %}\n' +
    '   <li>{{ fruit }}</li>\n' +
    '{% endfor %}\n' +
    '*****************************************\n' +
    '📌 extends & block:\n' +
    'base.html:\n' +
    '<body>\n' +
    '   {% block content %}{% endblock %}\n' +
    '</body>\n' +
    '\n' +
    'home.html:\n' +
    '{% extends "base.html" %}\n' +
    '{% block content %}<h1>اهلا بيك</h1>{% endblock %}\n' +
    '*****************************************\n' +
    '📌 include:\n' +
    '{% include "navbar.html" %}\n' +
    '*****************************************\n' +
    '📌 filters:\n' +
    '{{ name|upper }}  => يحول النص لحروف كبيرة\n' +
    '{{ fruits|length }} => يجيب عدد العناصر\n'
},
{
  id: 7,
  title: "Filters",
  explain: "الفلاتر في Django Template Language بتستخدم علشان تعدل على البيانات وانت بتعرضها جوه الـ template",
  example:
    '*****************************************\n' +
    '📌 upper: يحول النص لحروف كابيتال\n' +
    '{{ name|upper }}\n' +
    'مثال: لو name = "ahmed" ➝ AHMED\n' +
    '*****************************************\n' +
    '📌 lower: يحول النص لحروف صغيرة\n' +
    '{{ name|lower }}\n' +
    'مثال: لو name = "AHMED" ➝ ahmed\n' +
    '*****************************************\n' +
    '📌 title: يحول اول حرف من كل كلمة كابيتال\n' +
    '{{ name|title }}\n' +
    'مثال: "ahmed ali" ➝ Ahmed Ali\n' +
    '*****************************************\n' +
    '📌 length: يرجع عدد العناصر\n' +
    '{{ fruits|length }}\n' +
    'مثال: لو fruits = ["تفاح","موز","برتقال"] ➝ 3\n' +
    '*****************************************\n' +
    '📌 date: تنسيق التاريخ\n' +
    '{{ today|date:"Y-m-d" }}\n' +
    'مثال: 2025-10-05\n' +
    '*****************************************\n' +
    '📌 default: لو المتغير فاضي يعرض قيمة افتراضية\n' +
    '{{ name|default:"Guest" }}\n' +
    'مثال: لو name مش موجود ➝ Guest\n' +
    '*****************************************\n' +
    '📌 join: يدمج عناصر الليست بنص معين\n' +
    '{{ fruits|join:", " }}\n' +
    'مثال: "تفاح, موز, برتقال"\n'+
        '*****************************************\n' +
    '📌 لو عندك list:\n' +
    'fruits = ["تفاح", "موز", "برتقال", "عنب", "رمان"]\n' +
    '\n' +
    'في القالب:\n' +
    '{{ fruits|slice:":3" }}\n' +
    '➝ ["تفاح", "موز", "برتقال"]\n' +
    '*****************************************\n' +
    '📌 تبدأ من index معين:\n' +
    '{{ fruits|slice:"2:" }}\n' +
    '➝ ["برتقال", "عنب", "رمان"]\n' +
    '*****************************************\n' +
    '📌 على النصوص:\n' +
    'name = "Django"\n' +
    '{{ name|slice:":3" }}\n' +
    '➝ "Dja"\n' +
    '*****************************************\n' +
    '📌 اخر عنصر:\n' +
    '{{ fruits|slice:"-1:" }}\n' +
    '➝ ["رمان"]\n'+
       '*****************************************\n' +
    '📌 على النصوص:\n' +
    'name = "hello world"\n' +
    '{{ name|cut:" " }}\n' +
    '➝ "helloworld"   # شال المسافات\n' +
    '*****************************************\n' +
    '📌 تحذف حرف معين:\n' +
    'word = "banana"\n' +
    '{{ word|cut:"a" }}\n' +
    '➝ "bnn"\n' +
    '*****************************************\n' +
    '📌 مثال عملي:\n' +
    'email = "user@example.com"\n' +
    '{{ email|cut:"@" }}\n' +
    '➝ "userexample.com"\n'+
      '*****************************************\n' +
    '📌 مثال بسيط:\n' +
    'size = 1234   # ده الحجم بالـ bytes\n' +
    '{{ size|filesizeformat }}\n' +
    '➝ "1.2 KB"\n' +
    '*****************************************\n' +
    '📌 مثال اكبر:\n' +
    'size = 123456789\n' +
    '{{ size|filesizeformat }}\n' +
    '➝ "117.7 MB"\n' +
    '*****************************************\n' +
    '📌 استخدام عملي:\n' +
    'في صفحة لعرض ملفات:\n' +
    '<p>حجم الملف: {{ file.size|filesizeformat }}</p>\n' +
    '➝ "2.4 MB"\n'
},
{
  id: 8,
  title: "Template Tags",
  explain: "التاجز (Tags) في Django Template Language هي أوامر خاصة بتتحط بين {% %} وبتتحكم في عرض البيانات أو في منطق الصفحة زي if, for, include, extends ...",
  example:
    '*****************************************\n' +
    '📌 for tag:\n' +
    '{% for item in items %}\n' +
    '   <li>{{ item }}</li>\n' +
    '{% endfor %}\n' +
    '*****************************************\n' +
    '📌 if tag:\n' +
    '{% if age > 18 %}\n' +
    '   <p>انت بالغ</p>\n' +
    '{% else %}\n' +
    '   <p>انت صغير</p>\n' +
    '{% endif %}\n' +
    '*****************************************\n' +
    '📌 include tag:\n' +
    '{% include "navbar.html" %}\n' +
    '*****************************************\n' +
    '📌 extends + block:\n' +
    '{% extends "base.html" %}\n' +
    '{% block content %} <h1>اهلا بيك</h1> {% endblock %}\n' +
    '*****************************************\n' +
    '📌 comment tag:\n' +
    '{# ده تعليق مش هيظهر في الصفحة #}\n' +
    '*****************************************\n' +
    '📌 now tag (لعرض الوقت والتاريخ الحالي):\n' +
    '{% now "Y-m-d H:i" %}\n' +
    '➝ "2025-10-05 14:30"\n'
},

  {
    id: 9,
    title: "Static Files",
    explain:
      "الـ static files هي الملفات الثابتة زي (CSS, JS, Images) وDjango بيوفر طريقة لإدارتها.",
    example:
      '*****************************************\n' +
      '📌 في settings.py:\n' +
      'STATIC_URL = "/static/"\n' +
      'STATICFILES_DIRS = [ BASE_DIR / "static" ]\n' +
      'STATIC_ROOT = BASE_DIR / "staticfiles"\n' +
      '*****************************************\n' +
      '📌 جوه الـ template:\n' +
      '{% load static %}\t لازم تكتب التاج دى \n' +
      '<link rel="stylesheet" href="{% static "css/style.css" %}">\n' +
      '<img src="{% static "images/logo.png" %}" alt="logo">\n' +
      '*****************************************\n' +
      '📌 أمر لتجميع الملفات قبل النشر:\n' +
      'python manage.py collectstatic\n'
  },
  {
  id: 10,
  title: "url tag",
  explain:
    "التاج {% url %} بيستخدم داخل القوالب (templates) علشان ينادي على المسارات (urls) بالاسم بتاعها بدل ما تكتب الرابط صريح. ده بيسهّل التعديلات لأنك لو غيّرت الـ path في urls.py مش هتحتاج تغيّره في القالب.",
  example:
    '*****************************************\n' +
    '📌 في ملف urls.py:\n' +
    'from django.urls import path\n' +
    'from . import views\n\n' +
    'urlpatterns = [\n' +
    '   path("about/", views.about, name="about_page"),\n' +
    '   path("user/<int:id>/", views.user_detail, name="user_detail"),\n' +
    ']\n' +
    '*****************************************\n' +
    '📌 في القالب (template):\n' +
    '{% load static %}\n' +
    '<a href="{% url "about_page" %}">About Us</a>\n' +
    '➝ هيترجم الرابط لـ "/about/"\n\n' +
    '<a href="{% url "user_detail" 5 %}">User 5</a>\n' +
    '➝ هيترجم الرابط لـ "/user/5/"\n' +
    '*****************************************\n' +
    '📌 فايدته:\n' +
    '- تخلي الكود أنضف وأسهل في الصيانة.\n' +
    '- لو غيرت الرابط من "about/" لـ "about-us/" مش هتحتاج تعدل في القوالب، يكفي تغير في urls.py.\n'
},
{
  id: 11,
  title: "models.py",
  explain:
    "المودلز هى قلب مشروع Django، من خلالها بتصمم قاعدة البيانات باستخدام كود Python. كل كلاس = جدول في قاعدة البيانات، وكل خاصية (Field) = عمود.\n" +
    "بعد إنشاء أو تعديل المودلز لازم تعمل:\n" +
    "- python manage.py makemigrations \t لإنشاء ملفات الهجرة\n" +
    "- python manage.py migrate \t لتطبيق التغييرات على قاعدة البيانات\n\n" +
    "المودلز بتمكنك من التعامل مع الداتا باستخدام ORM من غير ما تكتب SQL يدوي.",
  example:
    '*****************************************\n' +
    '📌 مثال بسيط (مدونة):\n' +
    'from django.db import models\n\n' +
    'class Post(models.Model):\n' +
    '    title = models.CharField(max_length=200)\n' +
    '    content = models.TextField()\n' +
    '    created = models.DateTimeField(auto_now_add=True)\n' +
    '    updated = models.DateTimeField(auto_now=True)\n' +
    '\n' +
    '    def __str__(self):\n' +
    '        return self.title\n' +
    '*****************************************\n' +
    '📌 أنواع الحقول المشهورة:\n' +
      '*****************************************\n' +
    '📌 حقول النصوص:\n' +
    '- CharField(max_length=..) \t نص قصير (اسم، عنوان)\n' +
    '- TextField() \t نص طويل (مقالات)\n' +
    '- SlugField() \t نص للروابط (slug-article)\n' +
    '- EmailField() \t بريد إلكتروني\n' +
    '- URLField() \t روابط مواقع\n' +
    '*****************************************\n' +
    '📌 الحقول الرقمية:\n' +
    '- IntegerField() \t أعداد صحيحة\n' +
    '- PositiveIntegerField() \t أعداد صحيحة موجبة\n' +
    '- SmallIntegerField() \t أعداد صغيرة\n' +
    '- BigIntegerField() \t أعداد كبيرة\n' +
    '- FloatField() \t أعداد عشرية\n' +
    '- DecimalField(max_digits, decimal_places) \t أعداد عشرية دقيقة (فلوس)\n' +
    '*****************************************\n' +
    '📌 الحقول المنطقية:\n' +
    '- BooleanField(default=False) \t صح/غلط\n' +
    '*****************************************\n' +
    '📌 الحقول الزمنية:\n' +
    '- DateField() \t تاريخ فقط\n' +
    '- TimeField() \t وقت فقط\n' +
    '- DateTimeField() \t تاريخ + وقت\n' +
    '- auto_now_add=True \t يخزن وقت الإنشاء\n' +
    '- auto_now=True \t يخزن وقت آخر تعديل\n' +
    '*****************************************\n' +
    '📌 الحقول الخاصة بالملفات:\n' +
    '- FileField(upload_to="files/") \t رفع ملف\n' +
    '- ImageField(upload_to="images/") \t رفع صورة (محتاج مكتبة Pillow)\n' +
     '- ImageField(upload_to="images/%y/%m/%d ) \t هيديك اليوم والشهر والسنه \n'+
    '*****************************************\n' +
    '📌 الحقول الخاصة بالاختيارات:\n' +
    '- choices=[("draft","Draft"),("pub","Published")] \t لتحديد قيم ثابتة\n' +
    '*****************************************\n' +
    '📌 الحقول الخاصة بالعلاقات:\n' +
    '- ForeignKey(Model, on_delete=..) \t علاقة واحد لمجموعة\n' +
    '- OneToOneField(Model, on_delete=..) \t علاقة واحد لواحد\n' +
    '- ManyToManyField(Model) \t علاقة متعدد لمتعدد\n' +
    '*****************************************\n' +
    '📌 أمثلة عملية:\n' +
    'class Product(models.Model):\n' +
    '    name = models.CharField(max_length=100)\n' +
    '    price = models.DecimalField(max_digits=10, decimal_places=2)\n' +
    '    available = models.BooleanField(default=True)\n' +
    '    created = models.DateTimeField(auto_now_add=True)\n' +
    '    image = models.ImageField(upload_to="products/")\n' +
    '\n' +
    'class Order(models.Model):\n' +
    '    product = models.ForeignKey(Product, on_delete=models.CASCADE)\n' +
    '    quantity = models.PositiveIntegerField(default=1)\n' +

    '*****************************************\n' +
    '📌 مثال تاني (منتج في متجر):\n' +
    'class Product(models.Model):\n' +
    '    name = models.CharField(max_length=100)\n' +
    '    price = models.DecimalField(max_digits=10, decimal_places=2)\n' +
    '    available = models.BooleanField(default=True)\n' +
    '\n' +
    '    def __str__(self):\n' +
    '        return self.name\n' +
    '*****************************************\n' +
    '📌 بعد إنشاء المودلز:\n' +
    '- سجلها في admin.py علشان تقدر تتحكم فيها من لوحة الأدمن\n' +
    '- استعمل ORM في views/templates لعرض البيانات\n'
},
{
  id: 5,
  title: "control Models",
  explain: "المودل (Model) في Django هو الكلاس اللي بيمثل جدول في قاعدة البيانات. كل خاصية (Field) جواه بتتحول لعمود، وكل كائن منه بيبقى صف (Row). نقدر نتحكم في شكل الجدول، اسمه، ترتيب البيانات، الصلاحيات، والعلاقات بين الجداول عن طريق الـ Meta class والإعدادات الخاصة بكل فيلد.",

  example:
    "# 🧩 مثال على مودل أساسي\n" +
    "from django.db import models\n" +
    "\n" +
    "class Post(models.Model):\n" +
    "    title = models.CharField(max_length=200, verbose_name='العنوان')\n" +
    "    body = models.TextField(verbose_name='المحتوى')\n" +
    "    author = models.ForeignKey('auth.User', on_delete=models.CASCADE, related_name='posts', verbose_name='الكاتب')\n" +
    "    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاريخ الإنشاء')\n" +
    "    updated_at = models.DateTimeField(auto_now=True, verbose_name='آخر تعديل')\n" +
    "\n" +
    "    class Meta:\n" +
    "        db_table = 'blog_posts'              # 👈 اسم الجدول في قاعدة البيانات\n" +
    "        ordering = ['-created_at']           # 👈 ترتيب الداتا الافتراضي\n" +
    "        verbose_name = 'منشور'              # 👈 الاسم المفرد في لوحة الإدارة\n" +
    "        verbose_name_plural = 'المنشورات'   # 👈 الاسم الجمع\n" +
    "        permissions = [                     # 👈 صلاحيات مخصصة\n" +
    "            ('can_publish', 'يمكنه النشر'),\n" +
    "            ('can_edit_all', 'يمكنه التعديل على الكل'),\n" +
    "        ]\n" +
    "        indexes = [                         # 👈 إنشاء فهارس لتحسين الأداء\n" +
    "            models.Index(fields=['title']),\n" +
    "        ]\n" +
    "\n" +
    "    def __str__(self):\n" +
    "        return self.title\n" +
    "\n" +
    "# 🧠 شرح عناصر التحكم:\n" +
    "# db_table: اسم الجدول داخل قاعدة البيانات (افتراضيًا بيكون appname_modelname)\n" +
    "# ordering: ترتيب النتائج لما تعمل query بدون .order_by()\n" +
    "# verbose_name / verbose_name_plural: أسماء تظهر في Django Admin\n" +
    "# permissions: صلاحيات إضافية غير الافتراضية (add, change, delete, view)\n" +
    "# indexes: لإنشاء index في قاعدة البيانات لتحسين البحث والأداء\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# ⚙️ تحكم في الحقول (Fields Control)\n" +
    "# ممكن نضيف خيارات لكل عمود زي null, blank, default, unique, choices...\n" +
    "\n" +
    "class Category(models.Model):\n" +
    "    name = models.CharField(max_length=100, unique=True)\n" +
    "    active = models.BooleanField(default=True)\n" +
    "    description = models.TextField(blank=True, null=True)\n" +
    "\n" +
    "    def __str__(self):\n" +
    "        return self.name\n" +
    "\n" +
    "# unique=True  → يمنع التكرار\n" +
    "# null=True    → العمود يقبل NULL في قاعدة البيانات\n" +
    "# blank=True   → ممكن يكون فاضي في الفورم\n" +
    "# default=...  → القيمة الافتراضية لو المستخدم مدخلش قيمة\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# 🔗 العلاقات بين الجداول (Relationships)\n" +
    "# 1) ForeignKey: علاقة واحد لمتعدد (Many-to-One)\n" +
    "# 2) ManyToManyField: علاقة متعدد لمتعدد\n" +
    "# 3) OneToOneField: علاقة واحد لواحد\n" +
    "\n" +
    "class Author(models.Model):\n" +
    "    name = models.CharField(max_length=100)\n" +
    "\n" +
    "class Book(models.Model):\n" +
    "    title = models.CharField(max_length=100)\n" +
    "    author = models.ForeignKey(Author, on_delete=models.CASCADE)\n" +
    "\n" +
    "class Library(models.Model):\n" +
    "    name = models.CharField(max_length=100)\n" +
    "    books = models.ManyToManyField(Book)\n" +
    "\n" +
    "class Profile(models.Model):\n" +
    "    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)\n" +
    "    bio = models.TextField()\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# 🏗️ تعديل شكل الجدول بعد إنشائه:\n" +
    "# لما تعدّل على المودل، Django بيفهم التغيير وتعمل:\n" +
    "# python manage.py makemigrations\n" +
    "# python manage.py migrate\n" +
    "# وده بيحدث الجدول في قاعدة البيانات.\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# 🔒 تحكم إضافي من Meta:\n" +
    "class Comment(models.Model):\n" +
    "    text = models.TextField()\n" +
    "    created = models.DateTimeField(auto_now_add=True)\n" +
    "\n" +
    "    class Meta:\n" +
    "        get_latest_by = 'created'            # 👈 بيساعد تستخدم .latest()\n" +
    "        ordering = ['created']               # 👈 ترتيب افتراضي\n" +
    "        unique_together = [('text', 'created')]  # 👈 منع تكرار مجموعة قيم معينة\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# 📦 Custom Manager (للتحكم في استعلامات الجدول)\n" +
    "class ActivePostManager(models.Manager):\n" +
    "    def get_queryset(self):\n" +
    "        return super().get_queryset().filter(active=True)\n" +
    "\n" +
    "class Post(models.Model):\n" +
    "    title = models.CharField(max_length=200)\n" +
    "    active = models.BooleanField(default=True)\n" +
    "\n" +
    "    objects = models.Manager()          # الافتراضي\n" +
    "    active_posts = ActivePostManager()  # مخصص\n" +
    "\n" +
    "# كده تقدر تستخدم Post.active_posts.all() لعرض المنشورات الفعّالة بس.\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# 🧾 ملاحظات سريعة:\n" +
    "# - كل مودل بيتخزن في جدول منفصل.\n" +
    "# - Django بيعمل migrations عشان يطابق المودل مع قاعدة البيانات.\n" +
    "# - نقدر نتحكم في شكل الجدول عن طريق Meta، والحقول عن طريق الـ Field options.\n" +
    "# - تقدر تضيف signals أو managers للتحكم في السلوك.\n"
},

{
  id: 12,
  title: "create superuser",
  explain:
    "الـ Superuser هو المستخدم الرئيسي في Django Admin، بيكون ليه كل الصلاحيات (إضافة – تعديل – حذف – إدارة كل الجداول). لازم تعمل سوبر يوزر بعد ما تنشئ مشروع علشان تدخل على لوحة التحكم.",
  example:
    '*****************************************\n' +
    '📌 الخطوات:\n' +
    '1- افتح التيرمنال وانت واقف في مجلد المشروع.\n' +
    '2- فعل البيئة الافتراضية (لو مش مفعلة):\n' +
    '   nameProject\\Scripts\\activate   (ويندوز)\n' +
    '   source nameProject/bin/activate (لينكس/ماك)\n' +
    '3- نفذ الأمر:\n' +
    '   python manage.py createsuperuser\n\n' +
    '📌 هيطلب منك:\n' +
    '- Username: اسم المستخدم\n' +
    '- Email address: البريد (اختياري)\n' +
    '- Password: كلمة المرور\n' +
    '- Password (again): تأكيد كلمة المرور\n\n' +
    '📌 بعد الإنشاء:\n' +
    '- شغل السيرفر: python manage.py runserver\n' +
    '- افتح المتصفح على: http://127.0.0.1:8000/admin\n' +
    '- سجل دخول باليوزر اللي أنشأته\n' +
    '*****************************************\n' +
    '📌 ملاحظات:\n' +
    '- لو عايز تغير الباسورد بعدين:\n' +
    '   python manage.py changepassword <username>\n' +
    '- ممكن تعمل أكتر من Superuser.\n' +
    '- ممكن تعمل Staff عادي (مش Superuser) لو عايز يوزر يدخل الأدمن بس مش ليه كل الصلاحيات.\n'
},
{
  id: 13,
  title: "admin.py",
  explain:
    "ملف admin.py هو الملف اللي بيربط المودلز بتاعتك بلوحة التحكم Django Admin.\n" +
    "عن طريقه بتسجّل المودلز علشان تظهر في لوحة الأدمن وتقدر تضيف وتعدل وتحذف البيانات.\n" +
    "كمان تقدر تتحكم في شكل العرض (قوائم، بحث، فلاتر).",
  example:
    '*****************************************\n' +
    '📌 الخطوة الأولى: تسجيل مودل بسيط\n' +
    'from django.contrib import admin\n' +
    'from .models import Post\n\n' +
    'admin.site.register(Post)\n' +
    '➝ كده الـ Post هيظهر في لوحة الأدمن.\n' +
    '*****************************************\n' +
    '📌 تخصيص شكل العرض باستخدام ModelAdmin:\n' +
    'from django.contrib import admin\n' +
    'from .models import Post\n\n' +
    'class PostAdmin(admin.ModelAdmin):\n' +
    '    list_display = ("title", "author", "status", "created")  # الأعمدة المعروضة\n' +
    '    list_filter = ("status", "created", "author")            # فلاتر جانبية\n' +
    '    search_fields = ("title", "body")                        # البحث\n' +
    '    prepopulated_fields = {"slug": ("title",)}               # ملء تلقائي للـ slug من العنوان\n\n' +
    'admin.site.register(Post, PostAdmin)\n' +
    '*****************************************\n' +
    '📌 تخصيص مودل تاني (Category مثلاً):\n' +
    'from .models import Category\n\n' +
    'class CategoryAdmin(admin.ModelAdmin):\n' +
    '    list_display = ("name", "slug")\n' +
    '    prepopulated_fields = {"slug": ("name",)}\n\n' +
    'admin.site.register(Category, CategoryAdmin)\n' +
    '*****************************************\n' +
    '📌 ملاحظات:\n' +
    '- تقدر تستخدم decorator @admin.register(Model) بدل register العادية.\n' +
    '- في list_display تقدر تضيف دوال من الكلاس ترجع قيم محسوبة.\n' +
    '- تقدر تعمل inline لعرض مودلز مرتبطة (مثلاً عرض التعليقات مع البوستات).\n'
},
{
  id: 14,
  title: "show products ",
  explain:
    "بعد ما تعمل مودل للمنتجات (Product) في models.py وتسجله في admin.py وتضيف بيانات من لوحة الأدمن، تقدر تعرض المنتجات في صفحة HTML باستخدام views + templates.\n" +
    "الخطوات:\n" +
    "1- تعمل مودل Product.\n" +
    "2- تعمل View تجيب المنتجات من قاعدة البيانات.\n" +
    "3- تبعت المنتجات للـ template باستخدام context.\n" +
    "4- في القالب تستخدم for loop لعرض المنتجات.",
  example:
    '*****************************************\n' +
    '📌 1- في models.py:\n' +
    'class Product(models.Model):\n' +
    '    name = models.CharField(max_length=100)\n' +
    '    price = models.DecimalField(max_digits=10, decimal_places=2)\n' +
    '    description = models.TextField()\n' +
    '    image = models.ImageField(upload_to="products/")\n\n' +
    '    def __str__(self):\n' +
    '        return self.name\n' +
    '*****************************************\n' +
    '📌 2- في views.py:\n\n' +
   
      
    '📌 1- عرض كل المنتجات (Function-based view):\n' +
    'from django.shortcuts import render\n' +
    'from .models import Product\n\n' +
    'def product_list(request):\n' +
    '    products = Product.objects.all()  # كل المنتجات\n' +
    '    return render(request, "shop/product_list.html", {"products": products})\n' +
    '*****************************************\n' +
    '📌 2- عرض المنتجات المتاحة فقط:\n' +
    'def available_products(request):\n' +
    '    products = Product.objects.filter(available=True)\n' +
    '    return render(request, "shop/product_list.html", {"products": products})\n' +
    '*****************************************\n' +
    '📌 3- ترتيب المنتجات (مثلاً حسب السعر):\n' +
    'def sorted_products(request):\n' +
    '    products = Product.objects.order_by("price")  # تصاعدي\n' +
    '    # products = Product.objects.order_by("-price")  # تنازلي\n' +
    '    return render(request, "shop/product_list.html", {"products": products})\n' +
    '*****************************************\n' +
    '📌 4- عرض تفاصيل منتج واحد:\n' +
    'from django.shortcuts import get_object_or_404\n\n' +
    'def product_detail(request, pk):\n' +
    '    product = get_object_or_404(Product, pk=pk)\n' +
    '    return render(request, "shop/product_detail.html", {"product": product})\n' +
    '*****************************************\n\n' +
    '📌 3- في urls.py:\n' +
    'from django.urls import path\n' +
    'from . import views\n\n' +
    'urlpatterns = [\n' +
    '   path("products/", views.product_list, name="product_list"),\n' +
    ']\n' +
    '*****************************************\n' +
    '📌 4- في template (shop/product_list.html):\n' +
    '{% for product in products %}\n' +
    '   <div class="card">\n' +
    '       <img src="{{ product.image.url }}" alt="{{ product.name }}">\n' +
    '       <h2>{{ product.name }}</h2>\n' +
    '       <p>{{ product.description }}</p>\n' +
    '       <strong>{{ product.price }} $</strong>\n' +
    '   </div>\n' +
    '{% empty %}\n' +
    '   <p>لا يوجد منتجات متاحة حاليا</p>\n' +
    '{% endfor %}\n' +
    '*****************************************\n' +
    '📌 كده أي منتج تسجله من لوحة الأدمن هيظهر أوتوماتيك في القالب.\n'
},
{
  id: 15,
  title: "model field options",
  explain:
    "كل حقل في Django Models ممكن تضيف له خيارات (arguments) بتحدد سلوكه.\n" +
    "أشهرهم:\n" +
    "- default ➝ قيمة افتراضية للحقول.\n" +
    "- help_text ➝ شرح يظهر في admin.\n" +
    "- null / blank ➝ تحكم هل الحقل ممكن يبقى فاضي.\n" +
    "- choices ➝ تحدد قائمة قيم ثابتة للحقل.\n" +
    "- unique ➝ يمنع التكرار في هذا الحقل.\n",
  example:
    '*****************************************\n' +
    '📌 1- default (قيمة افتراضية):\n' +
    'class Product(models.Model):\n' +
    '    name = models.CharField(max_length=100)\n' +
    '    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)\n' +
    '    available = models.BooleanField(default=True)\n' +
    '*****************************************\n' +
    '📌 2- help_text (مساعدة في admin):\n' +
    'class Customer(models.Model):\n' +
    '    email = models.EmailField(help_text="اكتب البريد الإلكتروني الصحيح")\n' +
    '*****************************************\n' +
    '📌 3- null / blank:\n' +
    '- null=True ➝ يسمح أن العمود في قاعدة البيانات يكون NULL.\n' +
    '- blank=True ➝ يسمح أن الفورم يترسل من غير قيمة.\n\n' +
    'class Profile(models.Model):\n' +
    '    bio = models.TextField(null=True, blank=True)\n' +
    '*****************************************\n' +
    '📌 4- choices (قيم محددة مسبقًا):\n' +
    'class Order(models.Model):\n' +
    '    STATUS_CHOICES = [\n' +
    '        ("pending", "قيد الانتظار"),\n' +
    '        ("shipped", "تم الشحن"),\n' +
    '        ("delivered", "تم التوصيل"),\n' +
    '    ]\n\n' +
    '    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="pending")\n' +
    '*****************************************\n' +
    '📌 5- unique (قيمة لا تتكرر):\n' +
    'class User(models.Model):\n' +
    '    username = models.CharField(max_length=50, unique=True)\n' +
    '    email = models.EmailField(unique=True)\n' +
    '*****************************************\n' +
    '📌 ملاحظات:\n' +
    '- default بيشتغل تلقائي لو المستخدم مدخلش قيمة.\n' +
    '- help_text مفيد في لوحة الأدمن ونماذج الفورم.\n' +
    '- choices بتخلي الحقل يظهر كـ drop-down في الـ admin.\n' +
    '- unique بيمنع تكرار القيم في قاعدة البيانات.\n'
},

{
  id: 16,
  title: "relationships between tables",
  explain:
    "في Django عندنا 3 أنواع أساسية من العلاقات بين الجداول:\n" +
    "1- OneToOne ➝ علاقة واحد لواحد.\n" +
    "2- ForeignKey ➝ علاقة واحد لمتعدد (Many-to-One).\n" +
    "3- ManyToMany ➝ علاقة متعدد لمتعدد.\n" +
    "هنشرح كل نوع بمثال عملي.",
  example:
    '*****************************************\n' +
    '📌 1- OneToOne (واحد لواحد):\n' +
    'مثال: كل User له Profile خاص به.\n' +
    'class User(models.Model):\n' +
    '    username = models.CharField(max_length=100)\n\n' +
    'class Profile(models.Model):\n' +
    '    user = models.OneToOneField(User, on_delete=models.CASCADE)\n' +
    '    bio = models.TextField()\n' +
    '*****************************************\n' +
    '📌 2- ForeignKey (واحد لمتعدد):\n' +
    'مثال: كل Category تحتوي على منتجات كتير.\n' +
    'class Category(models.Model):\n' +
    '    name = models.CharField(max_length=100)\n\n' +
    'class Product(models.Model):\n' +
    '    name = models.CharField(max_length=100)\n' +
    '    category = models.ForeignKey(Category, on_delete=models.CASCADE)\n' +
    '*****************************************\n' +
    '📌 3- ManyToMany (متعدد لمتعدد):\n' +
    'مثال: المنتج ممكن يبقى ليه أكتر من Tag، والـ Tag يرتبط بأكتر من منتج.\n' +
    'class Tag(models.Model):\n' +
    '    name = models.CharField(max_length=50)\n\n' +
    'class Product(models.Model):\n' +
    '    name = models.CharField(max_length=100)\n' +
    '    tags = models.ManyToManyField(Tag)\n' +
    '*****************************************\n' +
    '📌 استخدام العلاقات في الكود:\n' +
    '# ForeignKey:\n' +
    'cat = Category.objects.create(name="Electronics")\n' +
    'p1 = Product.objects.create(name="Laptop", category=cat)\n' +
    'p2 = Product.objects.create(name="Phone", category=cat)\n' +
    'cat.product_set.all()   # يجيب كل المنتجات في Electronics\n\n' +
    '# OneToOne:\n' +
    'u = User.objects.create(username="ahmed")\n' +
    'Profile.objects.create(user=u, bio="مبرمج")\n' +
    'u.profile.bio  # تجيب البايو بتاع أحمد\n\n' +
    '# ManyToMany:\n' +
    't1 = Tag.objects.create(name="New")\n' +
    't2 = Tag.objects.create(name="Sale")\n' +
    'p1.tags.add(t1, t2)   # تضيف Tags للمنتج\n' +
    't1.product_set.all()  # يجيب المنتجات اللي عليها Tag New\n' +
    '*****************************************\n' +
    '📌 ملاحظات:\n' +
    '- on_delete=models.CASCADE ➝ لو الجدول الأساسي اتحذف، العلاقات هتتمسح.\n' +
    '- related_name ➝ تقدر تغير اسم الـ reverse relation بدل product_set.\n' +
    '- ManyToMany ممكن يبقى جوا مودل وسيط (through) لو محتاج بيانات إضافية.\n'
},

{
  id: 14,
  title: "Django - التعامل مع الصور (Images)",
  explain:
"📷 في Django، التعامل مع الصور بيكون عن طريق رفعها (Upload) وتخزين مسارها (Path) في قاعدة البيانات.\n"+
"Django بيوفر طريقة جاهزة لإدارة الصور باستخدام `ImageField` في الـ models.\n"+
"لكن لازم نجهز بعض الإعدادات في المشروع عشان الصور تترفع وتتعرض بشكل صحيح.\n"+
"-------------------------------------------\n"+
"🧩 الخطوات الأساسية للتعامل مع الصور:\n"+
"1️⃣ إعداد المشروع لقبول الملفات (MEDIA settings).\n"+
"2️⃣ تعريف حقل الصورة في الـ model.\n"+
"3️⃣ تعديل الـ forms و الـ templates لرفع الصور.\n"+
"4️⃣ عرض الصور في الصفحة.\n"+
"-------------------------------------------\n"+
"💡 مكتبة Pillow:\n"+
"قبل ما تستخدم الصور، لازم تثبّت مكتبة Pillow لأنها المسؤولة عن التعامل مع الصور:\n"+
"`pip install Pillow`\n"+
"-------------------------------------------\n"+
"📁 إعداد المسارات في settings.py:\n"+
"أضف السطور التالية:\n"+
"`MEDIA_URL = '/media/'`\n"+
"`MEDIA_ROOT = BASE_DIR / 'media'`\n"+
"وده بيحدد مكان حفظ الصور في مجلد اسمه media داخل مشروعك.\n"+
"-------------------------------------------\n"+
"📸 في ملف models.py:\n"+
"بنستخدم `ImageField` لحفظ الصور:\n"+
"`image = models.ImageField(upload_to='images/', null=True, blank=True)`\n"+
"- `upload_to='images/'`: الصور هتتحفظ داخل مجلد media/images\n"+
"- `null=True, blank=True`: عشان تكون اختيارية.\n"+
"-------------------------------------------\n"+
"🧾 في ملف forms.py (لو بتستخدم ModelForm):\n"+
"لازم تضيف enctype في الفورم وتسمح برفع الملفات:\n"+
"`enctype='multipart/form-data'`\n"+
"-------------------------------------------\n"+
"🖋 في ملف views.py:\n"+
"تتأكد إنك بتستقبل البيانات والملفات:\n"+
"`form = MyForm(request.POST, request.FILES)`\n"+
"-------------------------------------------\n"+
"🧠 في ملف urls.py:\n"+
"ضيف إعدادات عرض الملفات أثناء التطوير:\n"+
"```\n"+
"from django.conf import settings\n"+
"from django.conf.urls.static import static\n"+
"urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)\n"+
"```\n"+
"-------------------------------------------\n"+
"🌐 في ملف template (HTML):\n"+
"تقدر تعرض الصورة كده:\n"+
"`<img src='{{ item.image.url }}' alt='الصورة'>`\n"+
"-------------------------------------------\n"+
"⚠️ ملاحظات مهمة:\n"+
"- لازم تستخدم `request.FILES` مع `POST` في أي view فيها رفع ملفات.\n"+
"- استخدم `MEDIA_URL` و`MEDIA_ROOT` فقط في بيئة التطوير. في الإنتاج بتحتاج إعداد خاص في السيرفر.\n"+
"- تأكد إنك مثبت Pillow وإلا Django هيرجع Error عند محاولة حفظ الصور.\n"+
"-------------------------------------------\n"+
"✅ كده تقدر ترفع وتعرض الصور بسهولة في Django!",

  example:
"📁 models.py:\n"+
"-------------------------------------------\n"+
"from django.db import models\n\n"+
"class Product(models.Model):\n"+
"    name = models.CharField(max_length=100)\n"+
"    image = models.ImageField(upload_to='products/', null=True, blank=True)\n\n"+
"    def __str__(self):\n"+
"        return self.name\n"+
"-------------------------------------------\n"+
"📄 forms.py:\n"+
"-------------------------------------------\n"+
"from django import forms\n"+
"from .models import Product\n\n"+
"class ProductForm(forms.ModelForm):\n"+
"    class Meta:\n"+
"        model = Product\n"+
"        fields = ['name', 'image']\n"+
"-------------------------------------------\n"+
"⚙️ views.py:\n"+
"-------------------------------------------\n"+
"from django.shortcuts import render, redirect\n"+
"from .forms import ProductForm\n\n"+
"def upload_product(request):\n"+
"    if request.method == 'POST':\n"+
"        form = ProductForm(request.POST, request.FILES)\n"+
"        if form.is_valid():\n"+
"            form.save()\n"+
"            return redirect('home')\n"+
"    else:\n"+
"        form = ProductForm()\n"+
"    return render(request, 'upload.html', {'form': form})\n"+
"-------------------------------------------\n"+
"🧾 upload.html:\n"+
"-------------------------------------------\n"+
"<form method='POST' enctype='multipart/form-data'>\n"+
"  {% csrf_token %}\n"+
"  {{ form.as_p }}\n"+
"  <button type='submit'>رفع الصورة</button>\n"+
"</form>\n"+
"-------------------------------------------\n"+
"🖼 عرض الصور في صفحة أخرى (مثلاً home.html):\n"+
"-------------------------------------------\n"+
"{% for p in products %}\n"+
"  <h3>{{ p.name }}</h3>\n"+
"  <img src='{{ p.image.url }}' alt='{{ p.name }}' width='200'>\n"+
"{% endfor %}\n"+
"-------------------------------------------\n"+
"✅ كده المشروع جاهز لاستقبال الصور وعرضها بنجاح 🎯"
},

{
  id:15,
  title: "Controlling Django Admin Panel",
  explain:
    "Django Admin Panel هو واجهة قوية لإدارة بيانات التطبيقات بسهولة.\n" +
    "يمكنك التحكم في شكل عرض النماذج (Models) والحقول والأعمدة والفلاتر والبحث والعمليات الجماعية.\n\n" +
    "أهم الخصائص التي يمكنك التحكم فيها في Admin:\n" +
    "- list_display: لتحديد الأعمدة التي تظهر في جدول عرض السجلات\n" +
    "- list_filter: لإضافة فلاتر جانبية لتسهيل تصفية السجلات\n" +
    "- search_fields: لتحديد الحقول التي يمكن البحث فيها عبر شريط البحث\n" +
    "- ordering: لتحديد ترتيب عرض السجلات تلقائيًا\n" +
    "- fields: لتحديد ترتيب الحقول في نموذج الإضافة أو التعديل\n" +
    "- readonly_fields: لجعل بعض الحقول للعرض فقط دون تعديل\n" +
    "- list_display_links: لتحديد الأعمدة التي يمكن النقر عليها للذهاب لتفاصيل السجل\n" +
    "- list_editable: لتحديد الأعمدة التي يمكن تعديلها مباشرة من الجدول\n" +
    "- date_hierarchy: لإضافة ترشيح حسب التاريخ\n" +
    "- prepopulated_fields: لملء الحقول تلقائيًا من حقول أخرى\n" +
    "- actions: لإضافة خيارات مثل حذف جماعي أو تعديل الحالة\n" +
    "- inlines: لعرض نماذج مرتبطة داخل نموذج آخر\n" +
    "- list_per_page: لتحديد عدد السجلات في كل صفحة جدول\n" +
    "\n" +
    "باستخدام هذه الخصائص يمكنك جعل لوحة التحكم أكثر احترافية وسهولة في الاستخدام.",

  example:
    "from django.contrib import admin\n" +
    "from .models import Student\n\n" +
    "@admin.register(Student)\n" +
    "class StudentAdmin(admin.ModelAdmin):\n" +
    "    list_display = ('name', 'code', 'academic_level', 'active', 'created_at', 'updated_at')\n" +
    "    list_filter = ('academic_level', 'active')\n" +
    "    search_fields = ('name', 'code')\n" +
    "    ordering = ('-created_at',)\n" +
    "    fields = ('name', 'code', 'academic_level', 'active')\n" +
    "    readonly_fields = ('created_at', 'updated_at')\n" +
    "    list_display_links = ('name',)\n" +
    "    list_editable = ('active',)\n" +
    "    date_hierarchy = 'created_at'\n" +
    "    list_per_page = 20\n" +
    "    # actions و inlines يمكن اضافتها حسب الحاجة\n" +
    "\n" +
    "# بعد تسجيل الكلاس ده، ستتمكن من:\n" +
    "# - رؤية الطلاب مع كل التفاصيل في جدول مرتب\n" +
    "# - تصفية الطلاب حسب المرحلة أو الحالة\n" +
    "# - البحث عن الطلاب بالاسم أو الكود\n" +
    "# - تعديل حالة الطالب مباشرة من الجدول\n" +
    "# - عرض أحدث الطلاب أولاً\n" +
    "# - التحكم في ترتيب الحقول وقراءة الحقول المهمة دون تعديل",

  notes:
    "----------------------------------------\n" +
    "<!-- ملاحظات -->\n" +
    "<!-- list_display: أهم طريقة لعرض معلومات مختصرة عن السجلات -->\n" +
    "<!-- list_filter: لتسهيل البحث والتصفية السريعة -->\n" +
    "<!-- search_fields: يتيح للمستخدم البحث بسهولة عن سجلات معينة -->\n" +
    "<!-- ordering: يتحكم في ترتيب السجلات تلقائيًا -->\n" +
    "<!-- fields و readonly_fields: للتحكم في نموذج الإضافة والتعديل -->\n" +
    "<!-- list_display_links و list_editable: لتسهيل التنقل والتعديل السريع -->\n" +
    "<!-- date_hierarchy و prepopulated_fields: تسهيلات إضافية لإدارة البيانات -->\n" +
    "<!-- actions و inlines: للتحكم المتقدم والتعامل مع نماذج مرتبطة -->\n" +
    "<!-- list_per_page: تحكم في عدد السجلات المعروضة لكل صفحة -->"
},

{
  id: 16,
  title: "استخدام if و for في Django Templates",
  explain:
    "قالب Django Template يحتوي على لغة بسيطة للتحكم في منطق العرض.\n" +
    "من أهم أدوات التحكم فيه هما الجملتين الشرطيتين **if** و **for**.\n\n" +
    "✅ **{% if %}**:\n" +
    "تُستخدم للتحقق من شرط معين، وإذا تحقق يتم عرض جزء من الكود.\n" +
    "يمكنك أيضًا استخدام **{% elif %}** و **{% else %}**.\n\n" +
    "✅ **{% for %}**:\n" +
    "تُستخدم للتكرار على قائمة من العناصر (مثل قائمة الطلاب أو المقالات) وعرض كل عنصر في القالب.\n" +
    "يمكنك أيضًا استخدام **{% empty %}** لعرض رسالة عند عدم وجود عناصر.\n\n" +
    "باستخدام if و for، يمكنك جعل الصفحات ديناميكية وتعرض المحتوى بناءً على البيانات القادمة من الـ views.\n\n" +
    "⚙️ ملاحظة: لا يمكن استخدام جمل Python الحقيقية داخل القوالب مباشرة، بل فقط صيغة Django الخاصة.",
  
  example:
    "{% comment %} مثال على استخدام if و for داخل قالب Django {% endcomment %}\n\n" +
    "<h2>قائمة الطلاب</h2>\n" +
    "<ul>\n" +
    "  {% for student in students %}\n" +
    "    {% if student.active %}\n" +
    "      <li>{{ student.name }} - {{ student.code }} ✅</li>\n" +
    "    {% else %}\n" +
    "      <li>{{ student.name }} - {{ student.code }} ❌ (غير نشط)</li>\n" +
    "    {% endif %}\n" +
    "  {% empty %}\n" +
    "    <li>لا يوجد طلاب مسجلين بعد.</li>\n" +
    "  {% endfor %}\n" +
    "</ul>\n\n" +
    "{% comment %} مثال آخر {% endcomment %}\n" +
    "{% if user.is_authenticated %}\n" +
    "  <p>مرحباً {{ user.username }}!</p>\n" +
    "{% else %}\n" +
    "  <p>الرجاء تسجيل الدخول لمتابعة المحتوى.</p>\n" +
    "{% endif %}",

  notes:
    "----------------------------------------\n" +
    "<!-- ملاحظات -->\n" +
    "<!-- {% if %} تُستخدم للتحقق من شرط معين -->\n" +
    "<!-- {% elif %} و {% else %} لتحديد فروع أخرى في الشرط -->\n" +
    "<!-- {% for %} تُستخدم للتكرار على قائمة من البيانات -->\n" +
    "<!-- {% empty %} تُستخدم داخل for لعرض رسالة إذا لم توجد بيانات -->\n" +
    "<!-- القوالب لا تستخدم Python مباشرة، بل صيغة Django الخاصة -->\n" +
    "<!-- يمكنك أيضًا استخدام الفلاتر مثل {{ name|upper }} لتنسيق البيانات -->"
},

{
  id: 6,
  title: "imag in model",
  explain: "لما نرفع صور في Django، إحنا بنخزن **المسار** بتاع الصورة في قاعدة البيانات، مش الصورة نفسها. الصورة بتتحفظ في مجلد فعلي (زي media/)، والمودل بيحتفظ باللينك بتاعها. بعد كده بنستخدم الفيو والتيمبلِت لعرض الصورة باستخدام هذا المسار.",

  example:
    "# 🖼️ 1️⃣ إنشاء المودل اللي فيه حقل الصورة\n" +
    "from django.db import models\n" +
    "\n" +
    "class Product(models.Model):\n" +
    "    name = models.CharField(max_length=100)\n" +
    "    image = models.ImageField(upload_to='products/', blank=True, null=True)\n" +
    "\n" +
    "    def __str__(self):\n" +
    "        return self.name\n" +
    "\n" +
    "# 🔹 upload_to='products/' معناها إن الصورة هتتحفظ جوّه media/products/\n" +
    "# 🔹 Django هيخزن في قاعدة البيانات بس المسار (زي products/image.jpg)\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# ⚙️ 2️⃣ إعداد الإعدادات (settings.py)\n" +
    "MEDIA_URL = '/media/'           # المسار اللي الصور بتتعرض منه في الموقع\n" +
    "MEDIA_ROOT = BASE_DIR / 'media' # المكان اللي الصور بتتحفظ فيه فعلاً\n" +
    "\n" +
    "# ✅ وعلشان الصور تشتغل في التطوير (debug mode)، لازم تضيف ده في urls.py:\n" +
    "from django.conf import settings\n" +
    "from django.conf.urls.static import static\n" +
    "\n" +
    "urlpatterns = [\n" +
    "    # كل الروابط بتاعتك\n" +
    "] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# 🌐 3️⃣ الفيو لعرض الصور\n" +
    "from django.shortcuts import render\n" +
    "from .models import Product\n" +
    "\n" +
    "def product_list(request):\n" +
    "    products = Product.objects.all()\n" +
    "    return render(request, 'products/list.html', {'products': products})\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# 🧩 4️⃣ التيمبلِت (list.html) لعرض الصور\n" +
    "<!DOCTYPE html>\n" +
    "<html lang='ar'>\n" +
    "<head>\n" +
    "    <meta charset='UTF-8'>\n" +
    "    <title>المنتجات</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "    <h1>قائمة المنتجات</h1>\n" +
    "    {% for p in products %}\n" +
    "        <div>\n" +
    "            <h3>{{ p.name }}</h3>\n" +
    "            {% if p.image %}\n" +
    "                <img src='{{ p.image.url }}' width='200' height='200' alt='{{ p.name }}'>\n" +
    "            {% else %}\n" +
    "                <p>📷 لا توجد صورة</p>\n" +
    "            {% endif %}\n" +
    "        </div>\n" +
    "        <hr>\n" +
    "    {% endfor %}\n" +
    "</body>\n" +
    "</html>\n" +
    "\n" +
    "# 💡 {{ p.image.url }}  ← دي أهم حاجة، بترجع لينك الصورة داخل MEDIA_URL.\n" +
    "# لو مفيش صورة، لازم تتأكد من وجود if p.image.\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# 📤 5️⃣ رفع صورة جديدة من فورم\n" +
    "from django import forms\n" +
    "from .models import Product\n" +
    "\n" +
    "class ProductForm(forms.ModelForm):\n" +
    "    class Meta:\n" +
    "        model = Product\n" +
    "        fields = ['name', 'image']\n" +
    "\n" +
    "from django.shortcuts import redirect\n" +
    "\n" +
    "def upload_product(request):\n" +
    "    if request.method == 'POST':\n" +
    "        form = ProductForm(request.POST, request.FILES)\n" +
    "        if form.is_valid():\n" +
    "            form.save()\n" +
    "            return redirect('product_list')\n" +
    "    else:\n" +
    "        form = ProductForm()\n" +
    "    return render(request, 'products/upload.html', {'form': form})\n" +
    "\n" +
    "# ⚠️ مهم جدًا: لازم في الفورم تحط enctype='multipart/form-data'\n" +
    "# عشان الصور تتبعت صح.\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# 📄 6️⃣ مثال على فورم الرفع في HTML\n" +
    "<form method='POST' enctype='multipart/form-data'>\n" +
    "    {% csrf_token %}\n" +
    "    {{ form.as_p }}\n" +
    "    <button type='submit'>رفع الصورة</button>\n" +
    "</form>\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# 🧠 ملاحظات مهمة:\n" +
    "# ✅ الصور بتتحفظ فعليًا في مجلد media/، واللينك بيتخزن في الداتا بيز.\n" +
    "# ✅ دايمًا استخدم p.image.url في القالب لعرض الصورة.\n" +
    "# ✅ في الإنتاج لازم السيرفر يخدم ملفات media (زي Nginx أو S3).\n" +
    "# ✅ لو حبيت تمسح الصورة مع حذف العنصر، استخدم signal أو مكتبة django-cleanup.\n" +
    "\n" +
    "# 🔚 النتيجة: لما ترفع صورة وتعمل render في التيمبلِت، هتتعرض الصورة من المسار /media/products/... \n"
},

{
  id: 7,
  title: "Django Forms",
  explain: "الفورم (Form) في Django هو الطريقة اللي بنستقبل بيها بيانات من المستخدم. ممكن تكون فورم عادية (Form) أو مرتبطة بمودل (ModelForm). Django بيسهّل علينا جدًا عملية التحقق (validation)، والحفظ في قاعدة البيانات.",

  example:
    "# 🧩 1️⃣ أنواع الفورمات في Django\n" +
    "# - Form عادية: بتعملها يدوي وتتحكم في كل حقل بنفسك.\n" +
    "# - ModelForm: بتكون مربوطة بمودل معين وبتنشئ الحقول تلقائيًا.\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# ✳️ 2️⃣ مثال على Form عادية\n" +
    "from django import forms\n" +
    "\n" +
    "class ContactForm(forms.Form):\n" +
    "    name = forms.CharField(max_length=100, label='الاسم')\n" +
    "    email = forms.EmailField(label='البريد الإلكتروني')\n" +
    "    message = forms.CharField(widget=forms.Textarea, label='الرسالة')\n" +
    "\n" +
    "# 🧠 دي فورم مش مرتبطة بقاعدة البيانات، بتتحقق بس من صحة البيانات.\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# ⚙️ 3️⃣ استخدام الفورم في الفيو\n" +
    "from django.shortcuts import render\n" +
    "from django.http import HttpResponse\n" +
    "from .forms import ContactForm\n" +
    "\n" +
    "def contact_view(request):\n" +
    "    if request.method == 'POST':\n" +
    "        form = ContactForm(request.POST)\n" +
    "        if form.is_valid():\n" +
    "            name = form.cleaned_data['name']\n" +
    "            email = form.cleaned_data['email']\n" +
    "            message = form.cleaned_data['message']\n" +
    "            return HttpResponse(f'تم استلام الرسالة من {name}')\n" +
    "    else:\n" +
    "        form = ContactForm()\n" +
    "    return render(request, 'contact.html', {'form': form})\n" +
    "\n" +
    "# ✅ form.is_valid()  → بتتأكد إن كل الحقول صح.\n" +
    "# ✅ form.cleaned_data → فيها القيم بعد التحقق.\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# 💌 4️⃣ شكل الفورم في التيمبلِت (contact.html)\n" +
    "<form method='POST'>\n" +
    "    {% csrf_token %}\n" +
    "    {{ form.as_p }}\n" +
    "    <button type='submit'>إرسال</button>\n" +
    "</form>\n" +
    "\n" +
    "# 💡 {{ form.as_p }} بيرسم الفورم داخل <p> tags.\n" +
    "# ممكن تستخدم {{ form.as_table }} أو {{ form.as_ul }} حسب التنسيق.\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# 🧱 5️⃣ ModelForm (فورم مربوطة بجدول في قاعدة البيانات)\n" +
    "from django import forms\n" +
    "from .models import Product\n" +
    "\n" +
    "class ProductForm(forms.ModelForm):\n" +
    "    class Meta:\n" +
    "        model = Product\n" +
    "        fields = ['name', 'image']  # الحقول اللي هتظهر\n" +
    "\n" +
    "# ⚙️ 6️⃣ استخدام ModelForm في view\n" +
    "from django.shortcuts import redirect\n" +
    "\n" +
    "def add_product(request):\n" +
    "    if request.method == 'POST':\n" +
    "        form = ProductForm(request.POST, request.FILES)\n" +
    "        if form.is_valid():\n" +
    "            form.save()  # بيتخزن أوتوماتيك في الداتا بيز\n" +
    "            return redirect('product_list')\n" +
    "    else:\n" +
    "        form = ProductForm()\n" +
    "    return render(request, 'add_product.html', {'form': form})\n" +
    "\n" +
    "# ⚠️ لو الفورم فيها صور، لازم تكتب في HTML:\n" +
    "# <form method='POST' enctype='multipart/form-data'>\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# 🧰 7️⃣ تعديل بيانات (Edit Form)\n" +
    "def edit_product(request, pk):\n" +
    "    product = Product.objects.get(pk=pk)\n" +
    "    if request.method == 'POST':\n" +
    "        form = ProductForm(request.POST, request.FILES, instance=product)\n" +
    "        if form.is_valid():\n" +
    "            form.save()\n" +
    "            return redirect('product_list')\n" +
    "    else:\n" +
    "        form = ProductForm(instance=product)\n" +
    "    return render(request, 'edit_product.html', {'form': form})\n" +
    "\n" +
    "# 💡 instance=product → يعني الفورم هتتعامل مع كائن موجود مش جديد.\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# 🧩 8️⃣ حذف عنصر من خلال فورم تأكيد\n" +
    "def delete_product(request, pk):\n" +
    "    product = Product.objects.get(pk=pk)\n" +
    "    if request.method == 'POST':\n" +
    "        product.delete()\n" +
    "        return redirect('product_list')\n" +
    "    return render(request, 'confirm_delete.html', {'product': product})\n" +
    "\n" +
    "# التيمبلِت:\n" +
    "<form method='POST'>\n" +
    "    {% csrf_token %}\n" +
    "    <p>هل أنت متأكد من حذف {{ product.name }}؟</p>\n" +
    "    <button type='submit'>نعم</button>\n" +
    "    <a href='{% url 'product_list' %}'>إلغاء</a>\n" +
    "</form>\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# 🧠 9️⃣ نصائح مهمة:\n" +
    "# ✅ استخدم ModelForm لو الفورم مرتبط بجدول فعلاً.\n" +
    "# ✅ form.is_valid() لازم قبل save() عشان التحقق.\n" +
    "# ✅ استخدم request.FILES مع الصور.\n" +
    "# ✅ استخدم CSRF token دايمًا في أي POST form.\n" +
    "# ✅ ممكن تخصّص شكل الفورم بالـ widgets.\n" +
    "\n" +
    "--------------------------------------------\n" +
    "# 🎨 🔟 تخصيص شكل الحقول (Widgets)\n" +
    "class StyledForm(forms.Form):\n" +
    "    name = forms.CharField(\n" +
    "        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'اسمك'})\n" +
    "    )\n" +
    "    email = forms.EmailField(\n" +
    "        widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'بريدك الإلكتروني'})\n" +
    "    )\n" +
    "    message = forms.CharField(\n" +
    "        widget=forms.Textarea(attrs={'rows': 4, 'placeholder': 'اكتب رسالتك هنا'})\n" +
    "    )\n" +
    "\n" +
    "# 💡 attrs بتسمح تضيف CSS classes و HTML attributes عادي جدًا.\n"
}




];

export default django;