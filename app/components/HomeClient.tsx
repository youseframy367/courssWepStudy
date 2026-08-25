// Design reminder: Recreate the reference course portal as a clear sequence of learning and utility tools.
"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import AppHeader from "@/app/components/AppHeader";
import CheatSheetModal from "@/app/components/CheatSheetModal";
import ColorExplorer from "@/app/components/ColorExplorer";
import CourseCard from "@/app/components/CourseCard";
import CourseRail from "@/app/components/CourseRail";
import FontExplorer from "@/app/components/FontExplorer";
import IconExplorer from "@/app/components/IconExplorer";
import CodePlayground from "@/app/components/CodePlayground";
import SiteFooter from "@/app/components/SiteFooter";
import { courses, type Course } from "@/app/lib/courses";
import StudyPathExplorer from "@/app/components/StudyPathExplorer";
import PracticeHub from "@/app/components/PracticeHub";
import { studyDomains, type StudyDomain } from "@/app/lib/study-domains";
import StudyWorkspace from "@/app/components/StudyWorkspace";
import BookLibrary from "@/app/components/BookLibrary";

export default function HomeClient() {
  const searchParams = useSearchParams();
  const [darkMode, setDarkMode] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeDomainSlug, setActiveDomainSlug] = useState(studyDomains[0].slug);
  const [showCheatSheet, setShowCheatSheet] = useState(false);

  useEffect(() => {
    setDarkMode(window.localStorage.getItem("course-web-theme") === "dark");
  }, []);
  useEffect(() => {
    const requestedDomain = studyDomains.find((domain) => domain.slug === searchParams.get("domain"));
    if (!requestedDomain) return;
    setActiveDomainSlug(requestedDomain.slug);
    const courseIndex = courses.findIndex((course) => course.slug === requestedDomain.recommendedCourse);
    if (courseIndex >= 0) setActiveIndex(courseIndex);
  }, [searchParams]);

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
  const selectDomain = (domain: StudyDomain) => {
    setActiveDomainSlug(domain.slug);
    const courseIndex = courses.findIndex((course) => course.slug === domain.recommendedCourse);
    if (courseIndex >= 0) setActiveIndex(courseIndex);
    window.setTimeout(() => document.getElementById("study-path")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };
  const activeDomain = studyDomains.find((domain) => domain.slug === activeDomainSlug) ?? studyDomains[0];

  return (
    <div className={darkMode ? "app-shell app-shell--dark" : "app-shell"}>
      <AppHeader darkMode={darkMode} searchQuery={query} onSearchChange={setQuery} onThemeChange={toggleTheme} onCheatSheets={() => setShowCheatSheet(true)} onSelectDomain={selectDomain} />
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
          <StudyPathExplorer domain={activeDomain} />
          <PracticeHub domain={activeDomain} />
          <StudyWorkspace course={activeCourse} />
          <BookLibrary />
          <ColorExplorer />
          <FontExplorer />
          <IconExplorer />
          <CodePlayground initialCode={activeCourse.lessons[0]?.example} />
        </div>
      </main>
      <SiteFooter courseSlug={activeCourse.slug} />
      {showCheatSheet && <CheatSheetModal course={activeCourse} onClose={() => setShowCheatSheet(false)} />}
    </div>
  );
}
