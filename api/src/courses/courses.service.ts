import { Injectable, NotFoundException } from "@nestjs/common";

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

const questionBank: Record<string, QuizQuestion[]> = {
  html: [{ id: "html-elements", prompt: "Which HTML element is the main page heading?", options: ["<p>", "<h1>", "<head>", "<title>"], answerIndex: 1, explanation: "Use one <h1> for the primary page heading." }],
  css: [{ id: "css-selector", prompt: "Which property changes text color in CSS?", options: ["font-style", "background", "color", "text-align"], answerIndex: 2, explanation: "The color property controls the foreground text color." }],
  javascript: [{ id: "javascript-const", prompt: "Which keyword declares a value that should not be reassigned?", options: ["var", "let", "const", "function"], answerIndex: 2, explanation: "const creates a binding that cannot be reassigned." }],
};

@Injectable()
export class CoursesService {
  getQuestions(courseSlug: string) {
    return { courseSlug, source: "curated", questions: questionBank[courseSlug] ?? [] };
  }

  getQuestionContext(courseSlug: string) {
    if (!courseSlug.trim()) throw new NotFoundException("Course slug is required.");
    return courseSlug.replace(/-/g, " ");
  }
}
