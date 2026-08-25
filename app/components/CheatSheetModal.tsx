// Design reminder: The cheat sheet is a focused overlay that exposes useful course reference without leaving the learning flow.
"use client";

import { BookOpen, X } from "lucide-react";
import type { Course } from "@/app/lib/courses";

type CheatSheetModalProps = { course: Course; onClose: () => void };

export default function CheatSheetModal({ course, onClose }: CheatSheetModalProps) {
  return (
    <div className="cheat-overlay" role="dialog" aria-modal="true" aria-labelledby="cheat-title" onMouseDown={onClose}>
      <section className="cheat-sheet" onMouseDown={(event) => event.stopPropagation()}>
        <div className="cheat-sheet__head"><div><span><BookOpen size={18} /></span><div><p className="eyebrow">Quick reference</p><h2 id="cheat-title">{course.name} Cheat Sheet</h2></div></div><button type="button" onClick={onClose} aria-label="Close cheat sheet"><X size={20} /></button></div>
        <div className="cheat-sheet__body"><p>Use these starter patterns while you study the featured {course.name} course.</p>{course.lessons.map((lesson, index) => <article key={lesson.id}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{lesson.title}</h3><pre><code>{lesson.example}</code></pre></div></article>)}</div>
      </section>
    </div>
  );
}
