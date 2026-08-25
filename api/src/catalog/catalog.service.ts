import { Injectable, NotFoundException } from "@nestjs/common";

type Source = { name: string; note: string; href: string };
type PracticeChallenge = { id: string; title: string; summary: string; difficulty: "beginner" | "intermediate"; provider: string; href: string; tags: string[] };
type StudyDomain = { slug: string; label: string; summary: string; resources: Source[]; challenges: PracticeChallenge[] };

const domains: StudyDomain[] = [
  {
    slug: "frontend", label: "Frontend Development", summary: "من HTML إلى واجهات تفاعلية قابلة للتسليم.",
    resources: [
      { name: "MDN Learn", note: "مسار ويب منظم للمبتدئين", href: "https://developer.mozilla.org/en-US/docs/Learn_web_development" },
      { name: "web.dev", note: "دروس متخصصة في CSS والأداء", href: "https://web.dev/learn/" },
      { name: "React Learn", note: "المرجع الرسمي لـ React", href: "https://react.dev/learn" },
    ],
    challenges: [
      { id: "frontend-responsive-component", title: "ابنِ مكوّناً متجاوباً", summary: "اختر تصميماً قصيراً ونفّذه مع حالات hover وتخطيط هاتف سليم.", difficulty: "beginner", provider: "Frontend Mentor", href: "https://www.frontendmentor.io/challenges", tags: ["HTML", "CSS", "Responsive"] },
      { id: "frontend-accessibility", title: "راجع قابلية الوصول", summary: "طبّق تسميات النماذج والتنقل بلوحة المفاتيح وتباين الألوان.", difficulty: "intermediate", provider: "MDN", href: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility", tags: ["A11y", "Semantic HTML"] },
    ],
  },
  {
    slug: "backend", label: "Backend Development", summary: "صمّم API مفهوماً، آمناً، وسهل الاختبار.",
    resources: [
      { name: "Node.js Learn", note: "دليل Node.js الرسمي", href: "https://nodejs.org/en/learn" },
      { name: "NestJS Docs", note: "توثيق NestJS الرسمي", href: "https://docs.nestjs.com/" },
      { name: "Postman Academy", note: "اختبار وتوثيق APIs", href: "https://academy.postman.com/" },
    ],
    challenges: [
      { id: "backend-api-contract", title: "صمّم API للكورسات", summary: "حدد الموارد وطلبات GET/POST وأخطاء التحقق قبل كتابة التنفيذ.", difficulty: "beginner", provider: "Postman", href: "https://academy.postman.com/", tags: ["REST", "HTTP", "API"] },
      { id: "backend-sql-filter", title: "فلترة بيانات الدروس", summary: "اكتب استعلامات آمنة لإظهار الدروس بحسب المجال أو المستوى.", difficulty: "intermediate", provider: "HackerRank", href: "https://www.hackerrank.com/domains/sql", tags: ["SQL", "Data"] },
    ],
  },
  {
    slug: "flutter", label: "Flutter & Dart", summary: "أنشئ تطبيق موبايل منظم من Widgets حتى إدارة الحالة.",
    resources: [
      { name: "Flutter Pathway", note: "مسار Flutter الرسمي", href: "https://docs.flutter.dev/learn/pathway" },
      { name: "Learn Dart", note: "دروس Dart الرسمية", href: "https://dart.dev/learn" },
      { name: "Flutter Codelabs", note: "مشروعات تطبيقية قصيرة", href: "https://docs.flutter.dev/codelabs" },
    ],
    challenges: [
      { id: "flutter-layout", title: "صمّم شاشة تطبيق متجاوبة", summary: "استخدم Column وRow وListView لعرض قائمة دروس على الهاتف.", difficulty: "beginner", provider: "Flutter Codelabs", href: "https://docs.flutter.dev/codelabs", tags: ["Widgets", "Layout"] },
      { id: "flutter-state", title: "حوّل الشاشة إلى حالة تفاعلية", summary: "أضف حالة بسيطة لحفظ الدرس المكتمل واختبر تحديث الواجهة.", difficulty: "intermediate", provider: "Flutter Docs", href: "https://docs.flutter.dev/data-and-backend/state-mgmt/intro", tags: ["State", "Dart"] },
    ],
  },
  {
    slug: "algorithms", label: "Problem Solving", summary: "حلّل المسألة ثم اختبر حلاً صغيراً قبل تحسينه.",
    resources: [
      { name: "VisuAlgo", note: "تصور بصري للخوارزميات", href: "https://visualgo.net/en" },
      { name: "LeetCode Study Plan", note: "خطط تدريب على المسائل", href: "https://leetcode.com/studyplan/" },
      { name: "HackerRank Algorithms", note: "تدرج للمسائل والخوارزميات", href: "https://www.hackerrank.com/domains/algorithms" },
    ],
    challenges: [
      { id: "algorithms-two-sum", title: "Two Sum", summary: "استخدم Hash Map لتقليل البحث المتكرر وفهم التعقيد الزمني.", difficulty: "beginner", provider: "LeetCode", href: "https://leetcode.com/problems/two-sum/", tags: ["Array", "Hash Map"] },
      { id: "algorithms-queue", title: "Queue using Two Stacks", summary: "طبّق بنية بيانات مع عمليات إدخال وإخراج واختبر الحالات الطرفية.", difficulty: "intermediate", provider: "HackerRank", href: "https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks", tags: ["Stack", "Queue"] },
    ],
  },
];

@Injectable()
export class CatalogService {
  getDomains() {
    return domains.map(({ challenges, ...domain }) => ({ ...domain, challengeCount: challenges.length }));
  }

  getDomain(slug: string) {
    const domain = domains.find((item) => item.slug === slug);
    if (!domain) throw new NotFoundException("Study domain was not found.");
    return domain;
  }

  getChallenges(slug: string, difficulty?: string) {
    const domain = this.getDomain(slug);
    const challenges = difficulty ? domain.challenges.filter((challenge) => challenge.difficulty === difficulty) : domain.challenges;
    return { domain: domain.slug, source: "curated-links", challenges };
  }
}
