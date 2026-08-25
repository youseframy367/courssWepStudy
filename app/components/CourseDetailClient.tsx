// Design reminder: The tutorial reader preserves the source's sidebar-first lesson navigation and legible code examples.
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, ExternalLink, Home, Play, Sun, Moon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import CourseRail from "@/app/components/CourseRail";
import AppHeader from "@/app/components/AppHeader";
import { courseBySlug, courses } from "@/app/lib/courses";

const videoEmbed = (url: string) => {
  const videoId = url.match(/[?&]v=([^&]+)/)?.[1];
  return videoId ? `https://www.youtube.com/embed/${videoId}` : undefined;
};

export default function CourseDetailClient({ slug }: { slug: string }) {
  const router = useRouter();
  const course = courseBySlug[slug];
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [lessonIndex, setLessonIndex] = useState(0);
  const currentLesson = course.lessons[lessonIndex];
  const embedUrl = useMemo(() => videoEmbed(course.linkVideo), [course.linkVideo]);

  useEffect(() => {
    setDarkMode(window.localStorage.getItem("course-web-theme") === "dark");
    const saved = window.localStorage.getItem(`lesson-${slug}`);
    setLessonIndex(saved ? Math.min(Number(saved), course.lessons.length - 1) : 0);
  }, [course.lessons.length, slug]);
  useEffect(() => { window.localStorage.setItem(`lesson-${slug}`, String(lessonIndex)); }, [lessonIndex, slug]);
  const toggleTheme = () => setDarkMode((current) => {
    const next = !current; window.localStorage.setItem("course-web-theme", next ? "dark" : "light"); return next;
  });
  const previous = () => lessonIndex === 0 ? router.push("/") : setLessonIndex((current) => current - 1);
  const next = () => setLessonIndex((current) => Math.min(course.lessons.length - 1, current + 1));

  return (
    <div className={darkMode ? "app-shell app-shell--dark tutorial-shell" : "app-shell tutorial-shell"}>
      <AppHeader darkMode={darkMode} searchQuery={searchQuery} onSearchChange={setSearchQuery} onThemeChange={toggleTheme} />
      <CourseRail courses={courses.filter((item) => item.name.toLowerCase().includes(searchQuery.trim().toLowerCase()))} activeSlug={course.slug} onSelect={(item) => router.push(`/course/${item.slug}`)} />
      <main className="tutorial-layout">
        <aside className="lesson-sidebar">
          <div className="lesson-sidebar__title"><img src={course.icon} alt="" /><div><span>Tutorial</span><h1>{course.name}</h1></div></div>
          <ol>{course.lessons.map((lesson, index) => <li key={lesson.id}><button type="button" className={index === lessonIndex ? "is-active" : ""} onClick={() => setLessonIndex(index)}><span>{String(index + 1).padStart(2, "0")}</span>{lesson.title}</button></li>)}</ol>
        </aside>
        <article className="lesson-reader">
          <div className="lesson-reader__crumb"><Link href="/"><Home size={15} /> Home</Link><span>/</span><span>{course.name}</span></div>
          <header><p className="eyebrow">Lesson {String(lessonIndex + 1).padStart(2, "0")}</p><h2>{course.name} {currentLesson.title}</h2></header>
          <div className="lesson-nav"><button type="button" onClick={previous}><ChevronLeft size={18} /> {lessonIndex === 0 ? "Home" : "Previous"}</button><span>{lessonIndex + 1} / {course.lessons.length}</span><button type="button" onClick={next} disabled={lessonIndex === course.lessons.length - 1}>Next <ChevronRight size={18} /></button></div>
          <section className="lesson-explanation">{currentLesson.explain.split("\n").map((line, index) => <p key={`${index}-${line}`} dir={/[\u0600-\u06FF]/.test(line) ? "rtl" : "ltr"}>{line}</p>)}</section>
          <section className="lesson-example"><div><p className="eyebrow">Example</p><h3>Try it yourself</h3></div><pre><code>{currentLesson.example}</code></pre></section>
          <section className="lesson-video"><div><p className="eyebrow">Video course</p><h3>Continue learning with the course video</h3></div>{embedUrl ? <iframe src={embedUrl} title={`${course.name} video course`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> : <a href={course.linkVideo} target="_blank" rel="noreferrer">Watch course <ExternalLink size={15} /></a>}</section>
          <div className="lesson-nav lesson-nav--bottom"><button type="button" onClick={previous}><ChevronLeft size={18} /> Previous</button><button type="button" onClick={next} disabled={lessonIndex === course.lessons.length - 1}>Next <ChevronRight size={18} /></button></div>
        </article>
      </main>
      <footer className="tutorial-footer"> <Link href="/"><ChevronLeft size={16} /> Browse all courses</Link><span>{darkMode ? <Moon size={14} /> : <Sun size={14} />} {course.name} tutorial</span></footer>
    </div>
  );
}
