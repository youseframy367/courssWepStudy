// Design reminder: Course lessons retain the reference site's focused tutorial sidebar and reading flow.
import { notFound } from "next/navigation";
import CourseDetailClient from "@/app/components/CourseDetailClient";
import { courseBySlug } from "@/app/lib/courses";

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!courseBySlug[slug]) notFound();

  return <CourseDetailClient slug={slug} />;
}
