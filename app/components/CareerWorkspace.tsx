// Design reminder: A pragmatic career board with visible next actions, not an inflated productivity dashboard.
"use client";

import { BriefcaseBusiness, CheckCircle2, ClipboardList, CodeXml, Lightbulb, MessageSquareText, Plus, Send, TimerReset } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { makeId, readWorkspace, updateWorkspace, type ApplicationStatus, type WorkspaceState } from "@/app/lib/study-storage";

const emptyWorkspace: WorkspaceState = { completedLessonIds: [], quizAttempts: {}, notes: [], revisionCards: [], snippets: [], applications: [], interviewScores: [] };
const statuses: { id: ApplicationStatus; label: string }[] = [{ id: "saved", label: "محفوظة" }, { id: "applied", label: "تم التقديم" }, { id: "interview", label: "مقابلة" }, { id: "offer", label: "عرض" }, { id: "closed", label: "مغلقة" }];
const projects = [
  { title: "Study Tracker API", domain: "Backend", level: "مبتدئ → متوسط", brief: "صمّم API للجلسات والملاحظات مع validation ورسائل خطأ واضحة.", checklist: ["API contract", "DTO validation", "README + smoke test"] },
  { title: "Responsive Course Reader", domain: "Frontend", level: "مبتدئ → متوسط", brief: "ابنِ قارئ درس متجاوب يضم قائمة، تقدماً، ووضع طباعة بسيط.", checklist: ["Mobile layout", "Keyboard states", "Lighthouse review"] },
  { title: "Revision Mobile Flow", domain: "Flutter", level: "متوسط", brief: "تطبيق بسيط يعرض بطاقة مراجعة يومية وينقلها للموعد التالي.", checklist: ["Widget map", "Local state", "Three empty states"] },
];
const interviewQuestions = [
  { prompt: "اشرح الفرق بين authentication وauthorization بمثال API صغير.", guide: "ابدأ بتعريف قصير، ثم مثال دخول مستخدم وصلاحية قراءة مورد. اختم بكيفية منع الوصول غير المصرح." },
  { prompt: "كيف تشخّص بطئاً مفاجئاً في صفحة Next.js؟", guide: "حدّد هل التأخير في الشبكة أو JavaScript أو الصور، ثم ابدأ بقياس واحد يمكن تكراره قبل أي تعديل." },
  { prompt: "ما الاختبار الذي ستكتبه أولاً لـ endpoint يحفظ ملاحظة؟", guide: "تحقق من المدخلات المطلوبة أولاً، ثم حالة نجاح، ثم تعامل واضح مع المستخدم أو الكورس غير الموجود." },
];

function localReview(code: string) {
  const feedback: { type: "good" | "watch"; text: string }[] = [];
  if (!code.trim()) return [{ type: "watch" as const, text: "أضف مقطعاً صغيراً من الكود لتشغيل الفحص المحلي." }];
  if (/console\.log/.test(code)) feedback.push({ type: "watch", text: "يوجد console.log؛ قرّر هل هو للتشخيص المؤقت أم يجب حذفه قبل التسليم." });
  if (/\bvar\s/.test(code)) feedback.push({ type: "watch", text: "يوجد var؛ استخدم const أو let لتوضيح قابلية التغيير." });
  if (/[^=]==[^=]/.test(code)) feedback.push({ type: "watch", text: "يوجد ==؛ راجع إن كنت تحتاج المقارنة الصارمة ===." });
  if (code.split("\n").some((line) => line.length > 120)) feedback.push({ type: "watch", text: "هناك سطر طويل؛ فكّره إلى تعبير أو دالة ذات اسم واضح." });
  if (!feedback.length) feedback.push({ type: "good", text: "لا توجد الإشارات المحلية الأساسية. اشرح وظيفة الكود واختبر الحالات الحدّية قبل اعتباره مراجعة كاملة." });
  return feedback;
}

export default function CareerWorkspace() {
  const [workspace, setWorkspace] = useState<WorkspaceState>(emptyWorkspace);
  const [appCompany, setAppCompany] = useState("");
  const [appRole, setAppRole] = useState("");
  const [appSource, setAppSource] = useState("");
  const [appDeadline, setAppDeadline] = useState("");
  const [reviewCode, setReviewCode] = useState("");
  const [reviewed, setReviewed] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerVisible, setAnswerVisible] = useState(false);
  const [interviewScore, setInterviewScore] = useState<number | null>(null);
  const refresh = () => setWorkspace(readWorkspace());
  useEffect(() => { refresh(); }, []);
  const review = useMemo(() => localReview(reviewCode), [reviewCode]);
  const currentQuestion = interviewQuestions[questionIndex];
  const addApplication = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!appCompany.trim() || !appRole.trim()) return;
    updateWorkspace((state) => ({ ...state, applications: [{ id: makeId("application"), company: appCompany.trim(), role: appRole.trim(), source: appSource.trim() || "غير محدد", deadline: appDeadline || undefined, status: "saved", createdAt: new Date().toISOString() }, ...state.applications] }));
    setAppCompany(""); setAppRole(""); setAppSource(""); setAppDeadline(""); refresh();
  };
  const changeApplicationStatus = (id: string, status: ApplicationStatus) => { updateWorkspace((state) => ({ ...state, applications: state.applications.map((application) => application.id === id ? { ...application, status } : application) })); refresh(); };
  const saveInterviewScore = (score: number) => { setInterviewScore(score); updateWorkspace((state) => ({ ...state, interviewScores: [...state.interviewScores, score] })); refresh(); };

  return (
    <main className="career-page">
      <section className="career-hero"><div><p className="eyebrow">Career lab</p><h1>حوّل المذاكرة إلى شغل يمكن عرضه.</h1><p>خطط لمشروعك التالي، راجع كوداً صغيراً بوضوح، تمرّن على إجاباتك، وسجّل التقديمات من دون بعثرة في ملفات منفصلة.</p></div><aside><BriefcaseBusiness size={28} /><strong>{workspace.applications.length}</strong><span>تقديمات محفوظة محلياً</span></aside></section>
      <section className="career-section" aria-labelledby="projects-title"><div className="career-section__heading"><div><p className="eyebrow">Project roadmap</p><h2 id="projects-title">مشروعات تبني بها Portfolio</h2></div><p>كل مشروع يبدأ بمخرج صغير واضح، لا بفكرة ضخمة غير قابلة للتسليم.</p></div><div className="project-roadmap">{projects.map((project, index) => <article key={project.title}><span>{String(index + 1).padStart(2, "0")}</span><p>{project.domain} · {project.level}</p><h3>{project.title}</h3><p>{project.brief}</p><ul>{project.checklist.map((item) => <li key={item}><CheckCircle2 size={15} />{item}</li>)}</ul></article>)}</div></section>
      <section className="career-section career-grid"><article className="career-card"><div className="career-card__heading"><CodeXml size={20} /><div><p className="eyebrow">Code review starter</p><h2>فحص محلي سريع</h2></div></div><p>هذه مراجعة قواعد بسيطة داخل المتصفح وليست بديلاً عن مراجعة إنسان أو نموذج AI مهيأ على الخادم.</p><textarea value={reviewCode} onChange={(event) => { setReviewCode(event.target.value); setReviewed(false); }} placeholder="الصق كوداً قصيراً هنا…" rows={9} spellCheck={false} /><button type="button" className="career-primary" onClick={() => setReviewed(true)}><ClipboardList size={16} /> افحص المقطع</button>{reviewed && <div className="review-results">{review.map((item) => <p key={item.text} className={item.type === "good" ? "is-good" : "is-watch"}>{item.text}</p>)}</div>}</article>
      <article className="career-card"><div className="career-card__heading"><MessageSquareText size={20} /><div><p className="eyebrow">Mock interview</p><h2>تمرّن بصوتك أولاً</h2></div></div><span className="question-index">سؤال {questionIndex + 1} من {interviewQuestions.length}</span><h3>{currentQuestion.prompt}</h3><button type="button" className="career-secondary" onClick={() => setAnswerVisible((visible) => !visible)}>{answerVisible ? "إخفاء دليل الإجابة" : "اعرض دليل الإجابة بعد المحاولة"}</button>{answerVisible && <p className="answer-guide"><Lightbulb size={17} />{currentQuestion.guide}</p>}<div className="interview-score"><span>قيّم وضوح إجابتك:</span>{[1, 2, 3, 4, 5].map((score) => <button key={score} type="button" className={interviewScore === score ? "is-active" : ""} onClick={() => saveInterviewScore(score)}>{score}</button>)}</div><button type="button" className="text-step" onClick={() => { setQuestionIndex((index) => (index + 1) % interviewQuestions.length); setAnswerVisible(false); setInterviewScore(null); }}><TimerReset size={15} /> سؤال جديد</button></article></section>
      <section className="career-section" aria-labelledby="applications-title"><div className="career-section__heading"><div><p className="eyebrow">Application tracker</p><h2 id="applications-title">متابعة شغل وفريلانس</h2></div><p>تخزين محلي على هذا المتصفح؛ لا تُحفظ أي بيانات توظيف على خادم المنصة حالياً.</p></div><div className="applications-layout"><form className="application-form" onSubmit={addApplication}><label>الشركة أو العميل<input required value={appCompany} onChange={(event) => setAppCompany(event.target.value)} placeholder="مثال: Acme Studio" /></label><label>الدور أو المشروع<input required value={appRole} onChange={(event) => setAppRole(event.target.value)} placeholder="Frontend Developer" /></label><label>المصدر<input value={appSource} onChange={(event) => setAppSource(event.target.value)} placeholder="LinkedIn, Upwork…" /></label><label>موعد المتابعة<input value={appDeadline} onChange={(event) => setAppDeadline(event.target.value)} type="date" /></label><button className="career-primary" type="submit"><Plus size={16} /> إضافة للتتبع</button></form><div className="applications-board">{statuses.map((status) => <section key={status.id}><h3>{status.label}<span>{workspace.applications.filter((application) => application.status === status.id).length}</span></h3>{workspace.applications.filter((application) => application.status === status.id).map((application) => <article key={application.id}><strong>{application.company}</strong><p>{application.role}</p><small>{application.source}{application.deadline ? ` · ${application.deadline}` : ""}</small><select value={application.status} onChange={(event) => changeApplicationStatus(application.id, event.target.value as ApplicationStatus)} aria-label={`حالة ${application.company}`}>{statuses.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}</select></article>)}</section>)}</div></div></section>
    </main>
  );
}
