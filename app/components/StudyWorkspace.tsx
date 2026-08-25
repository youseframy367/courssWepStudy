// Design reminder: A focused local-first study desk: information-dense, calm, and action-oriented rather than dashboard decoration.
"use client";

import { BookMarked, BrainCircuit, Check, ClipboardCheck, Code2, FileText, Plus, RotateCcw, Sparkles } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import type { Course } from "@/app/lib/courses";
import { getCourseCheckpoints } from "@/app/lib/courses";
import { makeId, readWorkspace, saveQuizAttempt, scheduleRevision, seedRevisionCard, updateWorkspace, type RevisionGrade, type WorkspaceState } from "@/app/lib/study-storage";

const emptyWorkspace: WorkspaceState = { completedLessonIds: [], quizAttempts: {}, notes: [], revisionCards: [], snippets: [], applications: [], interviewScores: [] };

export default function StudyWorkspace({ course }: { course: Course }) {
  const [workspace, setWorkspace] = useState<WorkspaceState>(emptyWorkspace);
  const [ready, setReady] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [snippetTitle, setSnippetTitle] = useState("");
  const [snippetCode, setSnippetCode] = useState("");
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizResult, setQuizResult] = useState<"idle" | "correct" | "wrong">("idle");

  const refresh = () => setWorkspace(readWorkspace());
  useEffect(() => { refresh(); setReady(true); }, []);

  const courseCompletion = useMemo(() => {
    const done = course.lessons.filter((lesson) => workspace.completedLessonIds.includes(`${course.slug}:${lesson.id}`)).length;
    return { done, total: course.lessons.length, percent: Math.round((done / course.lessons.length) * 100) };
  }, [course.lessons, course.slug, workspace.completedLessonIds]);
  const checkpoint = getCourseCheckpoints(course)[0];
  const savedAttempt = workspace.quizAttempts[course.slug];
  const learningMode = !savedAttempt ? "تشخيص البداية" : savedAttempt.score / savedAttempt.total < 0.7 ? "مراجعة الأساسيات" : "تحدٍّ تالٍ";
  const dueCard = workspace.revisionCards
    .filter((card) => new Date(card.dueAt).getTime() <= Date.now())
    .sort((a, b) => a.dueAt.localeCompare(b.dueAt))[0]
    ?? seedRevisionCard(`${course.name}: ${course.lessons[0]?.title ?? "Core concept"}`, course.lessons[0]?.objective ?? "راجع الفكرة ثم جرّب المثال.", course.name);

  const completeLesson = (lessonId: string) => {
    updateWorkspace((state) => {
      const id = `${course.slug}:${lessonId}`;
      return state.completedLessonIds.includes(id) ? state : { ...state, completedLessonIds: [...state.completedLessonIds, id] };
    });
    refresh();
  };
  const saveNote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!noteTitle.trim() || !noteBody.trim()) return;
    updateWorkspace((state) => ({
      ...state,
      notes: [{ id: makeId("note"), courseSlug: course.slug, lessonId: course.lessons[0]?.id ?? "general", title: noteTitle.trim(), body: noteBody.trim(), updatedAt: new Date().toISOString() }, ...state.notes],
    }));
    setNoteTitle(""); setNoteBody(""); refresh();
  };
  const saveSnippet = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!snippetTitle.trim() || !snippetCode.trim()) return;
    updateWorkspace((state) => ({
      ...state,
      snippets: [{ id: makeId("snippet"), title: snippetTitle.trim(), language: course.name, code: snippetCode.trim(), tags: [course.slug], updatedAt: new Date().toISOString() }, ...state.snippets],
    }));
    setSnippetTitle(""); setSnippetCode(""); refresh();
  };
  const gradeRevision = (grade: RevisionGrade) => { scheduleRevision(dueCard, grade); refresh(); };
  const checkAdaptiveQuestion = () => {
    if (quizAnswer === null) return;
    const correct = quizAnswer === checkpoint.answerIndex;
    setQuizResult(correct ? "correct" : "wrong");
    saveQuizAttempt(course.slug, correct ? 1 : 0, 1);
    refresh();
  };

  return (
    <section className="study-workspace tool-section" id="study-desk" aria-labelledby="study-desk-title">
      <div className="workspace-heading">
        <div><p className="eyebrow">Personal study desk</p><h2 id="study-desk-title">مساحة مذاكرتك لـ {course.name}</h2><p>كل ما تضيفه هنا يُحفظ على هذا المتصفح فقط إلى أن تربطه بقاعدة بيانات وحساب مستخدم.</p></div>
        <span className="local-badge"><FileText size={15} /> Local-first</span>
      </div>
      <div className="workspace-overview">
        <article className="progress-card"><span className="progress-card__icon"><ClipboardCheck size={20} /></span><p>تقدم الكورس</p><strong>{courseCompletion.done} <small>/ {courseCompletion.total}</small></strong><div className="progress-track"><span style={{ width: `${courseCompletion.percent}%` }} /></div><em>{courseCompletion.percent}% مكتمل</em></article>
        <article className="progress-card"><span className="progress-card__icon"><RotateCcw size={20} /></span><p>مراجعات مستحقة</p><strong>{workspace.revisionCards.filter((card) => new Date(card.dueAt).getTime() <= Date.now()).length}</strong><em>بطاقة اليوم جاهزة أدناه</em></article>
        <article className="progress-card"><span className="progress-card__icon"><BookMarked size={20} /></span><p>ملاحظاتك</p><strong>{workspace.notes.filter((note) => note.courseSlug === course.slug).length}</strong><em>مرتبطة بالكورس الحالي</em></article>
        <article className="progress-card"><span className="progress-card__icon"><Code2 size={20} /></span><p>Snippets محفوظة</p><strong>{workspace.snippets.length}</strong><em>صندوق إعادة الاستخدام</em></article>
      </div>

      <div className="workspace-grid">
        <article className="workspace-panel workspace-panel--lessons"><div className="workspace-panel__head"><div><p className="eyebrow">Learning flow</p><h3>قائمة إنجاز الدروس</h3></div><Sparkles size={19} /></div><ol className="lesson-checklist">{course.lessons.map((lesson, index) => {
          const done = workspace.completedLessonIds.includes(`${course.slug}:${lesson.id}`);
          return <li key={lesson.id} className={done ? "is-done" : ""}><button type="button" onClick={() => completeLesson(lesson.id)} aria-label={`تعليم ${lesson.title} كمكتمل`}><Check size={14} /></button><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{lesson.title}</strong><small>{lesson.objective}</small></div></li>;
        })}</ol></article>

        <article className="workspace-panel workspace-panel--revision"><div className="workspace-panel__head"><div><p className="eyebrow">Spaced revision</p><h3>بطاقة اليوم</h3></div><BrainCircuit size={19} /></div><p className="revision-source">من: {dueCard.source}</p><h4>{dueCard.title}</h4><p>{dueCard.body}</p><div className="revision-grades"><span>بعد المراجعة، قيّم تذكرك:</span><div><button onClick={() => gradeRevision(1)} type="button">نسيت</button><button onClick={() => gradeRevision(2)} type="button">صعب</button><button onClick={() => gradeRevision(3)} type="button">جيد</button><button onClick={() => gradeRevision(4)} type="button">سهل</button></div></div></article>

        <article className="workspace-panel workspace-panel--quiz"><div className="workspace-panel__head"><div><p className="eyebrow">Adaptive checkpoint</p><h3>{learningMode}</h3></div><span className="adaptive-dot" /></div><p className="adaptive-copy">السؤال يتغير كنقطة انطلاق حسب آخر نتيجة، بينما اختبار الكورس الكامل يظل موجوداً داخل الدرس.</p><p className="adaptive-question">{checkpoint.prompt}</p><div className="adaptive-options">{checkpoint.options.map((option, index) => <button className={quizAnswer === index ? "is-selected" : ""} type="button" key={option} onClick={() => { setQuizAnswer(index); setQuizResult("idle"); }}><span>{String.fromCharCode(65 + index)}</span>{option}</button>)}</div><div className="adaptive-action"><button type="button" onClick={checkAdaptiveQuestion} disabled={quizAnswer === null}>تحقق الآن</button>{quizResult !== "idle" && <p className={quizResult === "correct" ? "is-correct" : "is-wrong"}>{quizResult === "correct" ? "إجابة صحيحة — اختر بطاقة أكثر صعوبة في المرة التالية." : checkpoint.explanation}</p>}</div></article>

        <article className="workspace-panel workspace-panel--notes"><div className="workspace-panel__head"><div><p className="eyebrow">Lesson notes</p><h3>اكتب ملاحظة قابلة للرجوع</h3></div><FileText size={19} /></div><form className="mini-form" onSubmit={saveNote}><input value={noteTitle} onChange={(event) => setNoteTitle(event.target.value)} placeholder="عنوان واضح للملاحظة" aria-label="عنوان الملاحظة" /><textarea value={noteBody} onChange={(event) => setNoteBody(event.target.value)} placeholder="ما الذي فهمته؟ وما الذي تريد مراجعته؟" aria-label="نص الملاحظة" rows={4} /><button type="submit"><Plus size={15} /> حفظ الملاحظة</button></form>{ready && <div className="saved-list">{workspace.notes.filter((note) => note.courseSlug === course.slug).slice(0, 2).map((note) => <article key={note.id}><strong>{note.title}</strong><p>{note.body}</p></article>)}{workspace.notes.filter((note) => note.courseSlug === course.slug).length === 0 && <p className="empty-local">لا توجد ملاحظات لهذا الكورس بعد.</p>}</div>}</article>

        <article className="workspace-panel workspace-panel--snippets"><div className="workspace-panel__head"><div><p className="eyebrow">Snippet library</p><h3>احفظ جزء كود مفيداً</h3></div><Code2 size={19} /></div><form className="mini-form" onSubmit={saveSnippet}><input value={snippetTitle} onChange={(event) => setSnippetTitle(event.target.value)} placeholder="مثال: Button state" aria-label="عنوان الجزء البرمجي" /><textarea value={snippetCode} onChange={(event) => setSnippetCode(event.target.value)} placeholder="الصق الجزء الذي تريد الرجوع إليه" aria-label="الكود" rows={4} spellCheck={false} /><button type="submit"><Plus size={15} /> إضافة إلى المكتبة</button></form>{ready && <div className="saved-list">{workspace.snippets.slice(0, 2).map((snippet) => <article key={snippet.id}><strong>{snippet.title}<small>{snippet.language}</small></strong><pre><code>{snippet.code}</code></pre></article>)}{workspace.snippets.length === 0 && <p className="empty-local">احتفظ هنا بالكود الذي فهمته فعلاً، لا بالكود المنسوخ فقط.</p>}</div>}</article>
      </div>
    </section>
  );
}
