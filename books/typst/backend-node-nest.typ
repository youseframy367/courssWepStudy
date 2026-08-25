#import "study-theme.typ": study-book, intro, outcomes, exercise, concept

#show: study-book.with("بناء API واضح بـ Node وNest", "Request → Validation → Service → Response", "BACKEND WITH NODE & NEST", rgb("#4E8CFF"))

#intro("", [الدليل يركز على الحدود الواضحة: ما يدخل إلى التطبيق، أين تتحقق منه، وأي نتيجة تعود إلى الواجهة. اكتب عقد endpoint قبل التفاصيل، ولا تسمح لأي سر أن يصل إلى المتصفح.], rgb("#4E8CFF"))
#outcomes(("تصميم عقد طلب واستجابة صغير", "فصل Controller عن Service", "تقديم أخطاء آمنة ومفهومة"), rgb("#4E8CFF"))

= العقد قبل الكود

قبل أن تكتب endpoint، دوّن المسار والطريقة وشكل البيانات. العقد لا يعني وثيقة ضخمة؛ يكفي أن تعرف الحقول المطلوبة، الرد الناجح، ورد التحقق الفاشل. الواجهة الأمامية لا يجب أن تخمّن أسماء الحقول أو معنى الخطأ.

```http
GET /api/study-domains/backend/challenges?difficulty=beginner

200 OK
{ "domain": "backend", "items": [{ "title": "Build a health endpoint" }] }
```

#grid(columns: (1fr, 1fr), gutter: 9pt,
  concept("INPUT", [طلب محدود الحقول ومتحقق منه عند أول نقطة دخول.], rgb("#4E8CFF")),
  concept("OUTPUT", [رد ثابت الشكل ورسالة خطأ لا تكشف تفاصيل داخلية.], rgb("#4E8CFF")),
)

#exercise("عقد ملاحظة", [صمّم `POST /notes`: ما الحقول الإلزامية؟ ما الاستجابة بعد الإنشاء؟ وما رسالة التحقق عند غياب العنوان؟], rgb("#4E8CFF"))

= افصل المسؤوليات في Nest

وظيفة Controller هي استقبال الطلب وتمريره ثم إعادة النتيجة. قواعد العمل تعيش في Service. أما DTO فهو الباب الذي يحدد شكل المدخلات. هذا الفصل يجعل كل جزء أقصر وأسهل في الاختبار من endpoint يحمل كل شيء.

```ts
@Get(':slug')
findOne(@Param('slug') slug: string) {
  return this.catalogService.findDomain(slug);
}

@Injectable()
export class CatalogService {
  findDomain(slug: string) {
    return this.domains.find((item) => item.slug === slug);
  }
}
```

لا تخلط `res.status()` والمنطق ومعالجة مصادر البيانات في نفس الدالة إلا عند الضرورة. إذا كان اسم الدالة لا يشرح ما تفعله، غالباً تحتاج إلى فصل أصغر.

#exercise("ثلاث حالات", [اكتب اختباراً لمسار التحديات يتعامل مع مستوى صحيح، مستوى غير معروف، ومجال غير موجود. حدّد status code المناسب لكل حالة قبل كتابة assertion.], rgb("#4E8CFF"))

= اربط الخدمات الخارجية بأمان

مفتاح AI أو قاعدة بيانات ليس إعداداً للعميل. احتفظ به في متغيرات بيئة الخادم، ومرر إلى الواجهة نتيجة مختصرة فقط. إذا لم تكن الخدمة مهيأة، أعد رسالة واضحة يمكن للمستخدم فهمها، ولا تحاول اختراع إجابة بديلة.

```ts
if (!process.env.AI_API_KEY) {
  throw new ServiceUnavailableException(
    'AI tutor is not configured on this server yet.',
  );
}
```

أضف حدوداً للطلبات عندما تكون الخدمة مكلفة أو يمكن إساءة استخدامها، ثم اختبر مسار النجاح ومسار غياب الإعداد. الأمان ليس ميزة تضيفها في النهاية؛ هو قرار في مكان اتصال البيانات أولاً.

#exercise("فشل مفهوم", [اختبر أن endpoint المحادثة يرجع 503 عندما يكون المفتاح غير موجود. تأكد أن الرد لا يعرض اسم المفتاح ولا stack trace.], rgb("#4E8CFF"))

= مراجعة قبل التسليم

#list([هل العقد موثق بمثال واحد على الأقل؟], [هل التحقق يحدث قبل قواعد العمل؟], [هل الأسرار على الخادم فقط؟], [هل يمكن للواجهة عرض رسالة الخطأ كما هي؟])
