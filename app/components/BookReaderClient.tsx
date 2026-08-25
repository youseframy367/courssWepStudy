// Design reminder: The reader is a focused Arabic-first study desk: one detailed chapter at a time, English code in a separate visual rhythm, and tangible practice before navigation.
"use client";

import Link from "next/link";
import { AlertTriangle, ArrowLeft, ChevronLeft, Download, Lightbulb, Printer, TableOfContents, Target } from "lucide-react";
import { useState } from "react";
import type { CSSProperties } from "react";
import type { StudyBook } from "@/app/lib/books";

export default function BookReaderClient({ book }: { book: StudyBook }) {
  const [activeChapter, setActiveChapter] = useState(book.chapters[0].id);
  const chapter = book.chapters.find((item) => item.id === activeChapter) ?? book.chapters[0];
  const chapterIndex = book.chapters.findIndex((item) => item.id === chapter.id);
  const goToChapter = (index: number) => {
    if (!book.chapters[index]) return;
    setActiveChapter(book.chapters[index].id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <div className="book-reader" style={{ "--book-accent": book.accent } as CSSProperties}>
    <header className="book-reader__top">
      <Link href="/#books"><ArrowLeft size={17} /> العودة للمكتبة</Link>
      <div><a href={book.pdfPath} download><Download size={16} /> تنزيل PDF</a><button type="button" onClick={() => window.print()}><Printer size={16} /> طباعة / حفظ PDF</button></div>
    </header>
    <main className="book-reader__layout">
      <aside className="book-toc">
        <div className="book-toc__cover"><img src={book.cover} alt={`غلاف ${book.title}`} /><span>{book.domain}</span></div>
        <p><TableOfContents size={15} /> فهرس الكتاب</p>
        <h1>{book.title}</h1>
        <p className="book-toc__description">{book.description}</p>
        <ol>{book.chapters.map((item, index) => <li key={item.id}><button type="button" className={item.id === chapter.id ? "is-active" : ""} onClick={() => goToChapter(index)}><span>{String(index + 1).padStart(2, "0")}</span>{item.title}</button></li>)}</ol>
      </aside>
      <article className="book-page" dir="rtl">
        <header>
          <p className="book-page__domain">{book.selectorLabel} · منهج تطبيقي تفصيلي</p>
          <p className="book-page__chapter">{chapter.label}</p>
          <h2>{chapter.title}</h2>
          <p className="book-page__lede">{chapter.summary}</p>
        </header>
        <section className="book-deep-dive">
          <h3>الشرح بالتدريج</h3>
          {chapter.deepDive.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
        <section className="book-keypoints"><h3>في هذا الفصل</h3><ul>{chapter.keyPoints.map((point) => <li key={point}>{point}</li>)}</ul></section>
        <section className="book-code" dir="ltr"><div><p>Code example</p><span>{book.domain}</span></div><pre><code>{chapter.code}</code></pre></section>
        <section className="book-practice-grid">
          <div className="book-exercise"><p><Target size={15} /> تمرين تطبيقي</p><h3>جرّب بنفسك</h3><p>{chapter.exercise}</p></div>
          <div className="book-hint"><p><Lightbulb size={15} /> تلميح قبل الحل</p><p>{chapter.hint}</p></div>
          <div className="book-mistake"><p><AlertTriangle size={15} /> خطأ شائع</p><p>{chapter.commonMistake}</p></div>
        </section>
        <section className="book-project-step"><p>خطوة داخل المشروع المصغّر</p><h3>ابنِ شيئاً حقيقياً</h3><p>{chapter.miniProjectStep}</p></section>
        {chapterIndex === 0 && <section className="book-outcomes"><h3>بعد إنهاء الكتاب ستستطيع أن</h3><ul>{book.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul><p>روابط المتابعة الرسمية: {book.sources.map((source, index) => <span key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a>{index < book.sources.length - 1 ? " · " : ""}</span>)}</p></section>}
        <footer><p>كتاب {book.title} · الفصل {chapterIndex + 1} من {book.chapters.length}</p><div><button disabled={chapterIndex === 0} type="button" onClick={() => goToChapter(chapterIndex - 1)}>السابق</button><button disabled={chapterIndex === book.chapters.length - 1} type="button" onClick={() => goToChapter(chapterIndex + 1)}>التالي <ChevronLeft size={15} /></button></div></footer>
      </article>
    </main>
  </div>;
}
