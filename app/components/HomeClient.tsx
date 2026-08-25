// Design reminder: Recreate the reference course portal as a clear sequence of learning and utility tools.
"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import AppHeader from "@/app/components/AppHeader";
import CheatSheetModal from "@/app/components/CheatSheetModal";
import ColorExplorer from "@/app/components/ColorExplorer";
import CourseCard from "@/app/components/CourseCard";
import CourseRail from "@/app/components/CourseRail";
import FontExplorer from "@/app/components/FontExplorer";
import IconExplorer from "@/app/components/IconExplorer";
import SiteFooter from "@/app/components/SiteFooter";
import { courses, type Course } from "@/app/lib/courses";

export default function HomeClient() {
  const [darkMode, setDarkMode] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [showCheatSheet, setShowCheatSheet] = useState(false);

  useEffect(() => {
    setDarkMode(window.localStorage.getItem("course-web-theme") === "dark");
  }, []);

  const activeCourse = courses[activeIndex] ?? courses[0];
  const filteredCourses = useMemo(() => {
    const safeQuery = query.trim().toLowerCase();
    return safeQuery ? courses.filter((course) => `${course.name} ${course.title}`.toLowerCase().includes(safeQuery)) : courses;
  }, [query]);

  const selectCourse = (course: Course) => setActiveIndex(courses.findIndex((item) => item.slug === course.slug));
  const rotateCourse = (direction: -1 | 1) => setActiveIndex((current) => (current + direction + courses.length) % courses.length);
  const toggleTheme = () => {
    setDarkMode((current) => {
      const next = !current;
      window.localStorage.setItem("course-web-theme", next ? "dark" : "light");
      return next;
    });
  };
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (filteredCourses[0]) selectCourse(filteredCourses[0]);
    document.getElementById("featured-course")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className={darkMode ? "app-shell app-shell--dark" : "app-shell"}>
      <AppHeader darkMode={darkMode} searchQuery={query} onSearchChange={setQuery} onThemeChange={toggleTheme} onCheatSheets={() => setShowCheatSheet(true)} />
      <CourseRail courses={filteredCourses} activeSlug={activeCourse.slug} onSelect={selectCourse} />
      <main>
        <section className="home-hero">
          <img className="home-hero__art" src="/manus-storage/course-code-hero_2e2e5407.png" alt="" />
          <div className="home-hero__content">
            <p className="hero-kicker">Build skills, one lesson at a time</p>
            <h1>Learn to Code</h1>
            <p>Learn the web with us simply</p>
            <form className="hero-search" onSubmit={handleSearch}>
              <label><span className="sr-only">Search tutorials</span><input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search our tutorials, e.g. HTML" /></label>
              <button aria-label="Search courses" type="submit"><Search size={22} /></button>
            </form>
          </div>
          <svg className="hero-wave" viewBox="0 0 200 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0,43 C 31,96 71,12 108,48 C 142,82 170,68 200,31 L200,120 L0,120 Z" /></svg>
        </section>
        <div className="page-content">
          <div id="featured-course"><CourseCard course={activeCourse} darkMode={darkMode} onPrevious={() => rotateCourse(-1)} onNext={() => rotateCourse(1)} /></div>
          <ColorExplorer />
          <FontExplorer />
          <IconExplorer />
        </div>
      </main>
      <SiteFooter />
      {showCheatSheet && <CheatSheetModal course={activeCourse} onClose={() => setShowCheatSheet(false)} />}
    </div>
  );
}
