# NestJS API

توجد خدمة API مستقلة داخل مجلد `api/` لحماية مفاتيح مزود الذكاء الاصطناعي وإتاحة بيانات التعلّم للواجهة.

## التشغيل المحلي

```bash
cd api
cp .env.example .env
pnpm install
pnpm start:dev
```

تشغّل الخدمة افتراضياً على `http://127.0.0.1:4000/api`. تشغّل واجهة Next.js على منفذ آخر، وتستخدم تلقائياً المسار الداخلي `/learning-api` عبر rewrite في `next.config.ts`.

## المسارات الحالية

| Method | Endpoint | الغرض |
|---|---|---|
| `GET` | `/api/health` | فحص حالة الخدمة |
| `GET` | `/api/study-domains` | قائمة مجالات المذاكرة |
| `GET` | `/api/study-domains/:slug` | تفاصيل مسار مذاكرة |
| `GET` | `/api/study-domains/:slug/challenges` | تمارين ومسائل المجال |
| `GET` | `/api/courses/:courseSlug/questions` | أسئلة الكورس الأساسية |
| `POST` | `/api/courses/:courseSlug/questions/generate` | إنشاء أسئلة عبر AI عند تفعيل المزود |
| `POST` | `/api/chat` | محادثة مساعد المذاكرة |

## الأسرار المطلوبة للذكاء الاصطناعي

لا تضع المفاتيح في ملفات الواجهة أو في متغيرات تبدأ بـ `NEXT_PUBLIC_`. أضفها في بيئة خدمة NestJS فقط:

```env
AI_API_URL=https://your-provider.example/v1/chat/completions
AI_API_KEY=your-secret-key
AI_MODEL=your-model-name
```

تعمل قوائم المصادر والتمارين والأسئلة الأساسية بدون هذه الأسرار؛ تحتاجها فقط المحادثة الحية وتوليد الأسئلة.
