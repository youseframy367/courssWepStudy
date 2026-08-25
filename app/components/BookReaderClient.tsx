// Design reminder: The reader is an editorial object: uncluttered text column, Arabic prose, English code, and print-safe hierarchy.
"use client";

import Link from "next/link";
import { ArrowLeft, ChevronLeft, Download, Printer, TableOfContents } from "lucide-react";
import { useState } from "react";
import type { CSSProperties } from "react";
import type { StudyBook } from "@/app/lib/books";

export default function BookReaderClient({ book }: { book: StudyBook }) {
  const [activeChapter, setActiveChapter] = useState(book.chapters[0].id);
  const chapter = book.chapters.find((item) => item.id === activeChapter) ?? book.chapters[0];
  const chapterIndex = book.chapters.findIndex((item) => item.id === chapter.id);
  const goToChapter = (index: number) => { if (book.chapters[index]) { setActiveChapter(book.chapters[index].id); window.scrollTo({ top: 0, behavior: "smooth" }); } };
  return <div className="book-reader" style={{ "--book-accent": book.accent } as CSSProperties}>
    <header className="book-reader__top"><Link href="/"><ArrowLeft size={17} /> العودة للمكتبة</Link><div><a href={book.pdfPath} download><Download size={16} /> تنزيل PDF</a><button type="button" onClick={() => window.print()}><Printer size={16} /> طباعة / حفظ PDF</button></div></header>
    <main className="book-reader__layout"><aside className="book-toc"><div className="book-toc__cover"><img src={book.cover} alt="" /><span>{book.domain}</span></div><p><TableOfContents size={15} /> فهرس الكتاب</p><h1>{book.title}</h1><ol>{book.chapters.map((item, index) => <li key={item.id}><button type="button" className={item.id === chapter.id ? "is-active" : ""} onClick={() => goToChapter(index)}><span>{String(index + 1).padStart(2, "0")}</span>{item.title}</button></li>)}</ol></aside>
      <article className="book-page" dir="rtl"><header><p className="book-page__domain">{book.domain} · دليل تطبيقي</p><p className="book-page__chapter">{chapter.label}</p><h2>{chapter.title}</h2><p className="book-page__lede">{chapter.summary}</p></header><section className="book-keypoints"><h3>في هذا الفصل</h3><ul>{chapter.keyPoints.map((point) => <li key={point}>{point}</li>)}</ul></section><section className="book-code" dir="ltr"><div><p>Example</p><span>{book.courseSlug}</span></div><pre><code>{chapter.code}</code></pre></section><section className="book-exercise"><p>تمرين تطبيقي</p><h3>جرّب بنفسك</h3><p>{chapter.exercise}</p></section><footer><p>كتاب {book.title} · الفصل {chapterIndex + 1} من {book.chapters.length}</p><div><button disabled={chapterIndex === 0} type="button" onClick={() => goToChapter(chapterIndex - 1)}>السابق</button><button disabled={chapterIndex === book.chapters.length - 1} type="button" onClick={() => goToChapter(chapterIndex + 1)}>التالي <ChevronLeft size={15} /></button></div></footer></article>
    </main>
  </div>;
}
