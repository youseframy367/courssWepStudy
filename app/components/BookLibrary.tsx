// Design reminder: The book shelf behaves like an editorial course selector: choose a language, understand the learning promise, then start reading without product-card clutter.
"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpenCheck, Download, FileText, ListFilter } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { studyBooks } from "@/app/lib/books";

export default function BookLibrary({ courseSlug }: { courseSlug?: string }) {
  const getBookSlugForCourse = (slug?: string) => studyBooks.find((book) => slug && book.courseSlugs.includes(slug))?.slug ?? "all";
  const initialSelection = getBookSlugForCourse(courseSlug);
  const [selectedCourse, setSelectedCourse] = useState(initialSelection);

  useEffect(() => {
    setSelectedCourse(getBookSlugForCourse(courseSlug));
  }, [courseSlug]);

  const books = useMemo(() => selectedCourse === "all" ? studyBooks : studyBooks.filter((book) => book.slug === selectedCourse), [selectedCourse]);

  return (
    <section className="book-library tool-section" id="books" aria-labelledby="book-library-title">
      <div className="book-library__heading">
        <div>
          <p className="eyebrow">Detailed course library</p>
          <h2 id="book-library-title">اختَر اللغة أو المسار، ثم اقرأ منهجاً كاملاً</h2>
          <p>كل كتاب هو مسار تفصيلي: شرح عربي، مثال كود، خطأ شائع، تلميح، تمرين، وخطوة داخل مشروع صغير. لا نعرض محتوى منسوخاً من مصادر خارجية.</p>
        </div>
        <span><BookOpenCheck size={18} /> Read · Practice · Build</span>
      </div>

      <label className="book-library__selector">
        <span><ListFilter size={16} /> اختر اللغة أو المسار</span>
        <select value={selectedCourse} onChange={(event) => setSelectedCourse(event.target.value)}>
          <option value="all">كل المسارات التفصيلية</option>
          {studyBooks.map((book) => <option key={book.slug} value={book.slug}>{book.selectorLabel}</option>)}
        </select>
      </label>

      {selectedCourse !== "all" && books.length === 0 ? (
        <div className="book-library__empty"><p>تعذّر العثور على الكتاب المحدد حالياً. اعرض الكتب المتاحة ثم اختر المسار الذي يناسب هدفك.</p><button type="button" onClick={() => setSelectedCourse("all")}>عرض كل الكتب</button></div>
      ) : <div className="book-shelf">{books.map((book) => <article key={book.slug} className="book-card" style={{ "--book-accent": book.accent } as CSSProperties}>
        <div className="book-card__cover"><img src={book.cover} alt={`غلاف ${book.title}`} /><span>{book.domain}</span></div>
        <div className="book-card__body">
          <p className="book-card__domain">{book.selectorLabel}</p>
          <h3>{book.title}</h3>
          <p>{book.subtitle}</p>
          <p className="book-card__description">{book.description}</p>
          <dl><div><dt>الفصول</dt><dd>{book.chapters.length}</dd></div><div><dt>القراءة</dt><dd>{book.estimatedMinutes} د</dd></div><div><dt>الصفحات</dt><dd>{book.pages}</dd></div></dl>
          <div className="book-card__actions"><Link href={`/books/${book.slug}`}><FileText size={15} /> ابدأ المنهج <ArrowUpRight size={14} /></Link><a href={book.pdfPath} download><Download size={15} /> PDF</a></div>
        </div>
      </article>)}</div>}
    </section>
  );
}
