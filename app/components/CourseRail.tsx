// Design reminder: The horizontal course rail mirrors the source site and makes course navigation immediate.
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Course } from "@/app/lib/courses";

type CourseRailProps = {
  courses: Course[];
  activeSlug?: string;
  onSelect?: (course: Course) => void;
};

export default function CourseRail({ courses, activeSlug, onSelect }: CourseRailProps) {
  const scroll = (direction: "left" | "right") => {
    document.getElementById("course-rail")?.scrollBy({ left: direction === "left" ? -260 : 260, behavior: "smooth" });
  };

  return (
    <section className="course-rail-wrap" aria-label="Course navigation">
      <button className="rail-arrow" onClick={() => scroll("left")} aria-label="Scroll courses left"><ChevronLeft size={20} /></button>
      <div id="course-rail" className="course-rail">
        {courses.map((course) => (
          <button
            type="button"
            key={course.slug}
            onClick={() => onSelect?.(course)}
            className={activeSlug === course.slug ? "course-rail__item is-active" : "course-rail__item"}
          >
            {course.name}
          </button>
        ))}
      </div>
      <button className="rail-arrow" onClick={() => scroll("right")} aria-label="Scroll courses right"><ChevronRight size={20} /></button>
    </section>
  );
}
