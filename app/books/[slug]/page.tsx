import { notFound } from "next/navigation";
import BookReaderClient from "@/app/components/BookReaderClient";
import { bookBySlug } from "@/app/lib/books";

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = bookBySlug[slug];
  if (!book) notFound();
  return <BookReaderClient book={book} />;
}
