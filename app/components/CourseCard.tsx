// Design reminder: The featured course card remains the central, practical call-to-action in the reference flow.
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink, Play } from "lucide-react";
import type { Course } from "@/app/lib/courses";

type CourseCardProps = {
  course: Course;
  darkMode: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

export default function CourseCard({ course, darkMode, onPrevious, onNext }: CourseCardProps) {
  return (
    <section className={darkMode ? "featured-course is-dark" : "featured-course"} aria-label={`Featured ${course.name} course`}>
      <button type="button" className="featured-course__arrow featured-course__arrow--left" onClick={onPrevious} aria-label="Previous featured course"><ChevronLeft size={31} /></button>
      <div className="featured-course__visual">
        <img className="featured-course__learning-art" src="/manus-storage/course-code-learning_e593999a.png" alt="" />
        <img src={course.icon} alt={`${course.name} logo`} />
      </div>
      <div className="featured-course__content">
        <p className="eyebrow">Featured course</p>
        <h2>{course.name}</h2>
        <p>{course.title}</p>
        <div className="featured-course__actions">
          <Link href={`/course/${course.slug}`} className="action-link action-link--learn"><Play size={17} fill="currentColor" /> Learn {course.name}</Link>
          <a href={course.linkVideo} target="_blank" rel="noreferrer" className="action-link action-link--video"><ExternalLink size={17} /> Show Course</a>
        </div>
      </div>
      <button type="button" className="featured-course__arrow featured-course__arrow--right" onClick={onNext} aria-label="Next featured course"><ChevronRight size={31} /></button>
    </section>
  );
}
