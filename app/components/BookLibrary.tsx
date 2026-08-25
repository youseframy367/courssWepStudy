// Design reminder: The book shelf uses editorial covers, large readable metadata, and a direct reading path rather than product-card clutter.
import Link from "next/link";
import { ArrowUpRight, BookOpenCheck, Download, FileText } from "lucide-react";
import type { CSSProperties } from "react";
import { studyBooks } from "@/app/lib/books";

export default function BookLibrary({ courseSlug }: { courseSlug?: string }) {
  const visibleBooks = courseSlug ? studyBooks.filter((book) => book.courseSlug === courseSlug) : studyBooks;
  const books = visibleBooks.length ? visibleBooks : studyBooks;
  return (
    <section className="book-library tool-section" id="books" aria-labelledby="book-library-title">
      <div className="book-library__heading"><div><p className="eyebrow">Course books</p><h2 id="book-library-title">مكتبة كتب المذاكرة</h2><p>كتب قصيرة مصممة للقراءة الهادئة: فهرس، شرح عربي، كود إنجليزي، وتمرين عملي في كل فصل.</p></div><span><BookOpenCheck size={18} /> Read · Print · Save</span></div>
      <div className="book-shelf">{books.map((book) => <article key={book.slug} className="book-card" style={{ "--book-accent": book.accent } as CSSProperties}>
        <div className="book-card__cover"><img src={book.cover} alt={`غلاف ${book.title}`} /><span>{book.domain}</span></div>
        <div className="book-card__body"><p className="book-card__domain">{book.domain}</p><h3>{book.title}</h3><p>{book.subtitle}</p><dl><div><dt>الفصول</dt><dd>{book.chapters.length}</dd></div><div><dt>القراءة</dt><dd>{book.estimatedMinutes} د</dd></div><div><dt>الصفحات</dt><dd>{book.pages}</dd></div></dl><div className="book-card__actions"><Link href={`/books/${book.slug}`}><FileText size={15} /> اقرأ الكتاب <ArrowUpRight size={14} /></Link><a href={book.pdfPath} download><Download size={15} /> PDF</a></div></div>
      </article>)}</div>
    </section>
  );
}
