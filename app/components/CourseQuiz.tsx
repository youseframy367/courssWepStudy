// Design reminder: The quiz is an honest API-ready learning checkpoint with a useful fallback, never a fabricated result.
"use client";

import { CheckCircle2, LoaderCircle, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { getCourseQuestions, type ApiQuestion } from "@/app/lib/api";
import type { CourseQuestion } from "@/app/lib/courses";

export default function CourseQuiz({ courseSlug, fallbackQuestions }: { courseSlug: string; fallbackQuestions: CourseQuestion[] }) {
  const [questions, setQuestions] = useState<ApiQuestion[]>(fallbackQuestions);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("Using the lesson checkpoint while the API connects.");

  const loadQuestions = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getCourseQuestions(courseSlug);
      if (result.questions.length) {
        setQuestions(result.questions);
        setNotice(result.source === "curated" ? "Loaded from the NestJS question API." : "Loaded from the course API.");
      } else {
        setNotice("This course has no published API questions yet. The lesson checkpoint is ready below.");
      }
    } catch {
      setNotice("The NestJS API is not connected in this preview, so the local lesson checkpoint is shown.");
    } finally {
      setLoading(false);
    }
  }, [courseSlug]);

  useEffect(() => { void loadQuestions(); }, [loadQuestions]);

  const score = questions.reduce((total, question) => total + Number(answers[question.id] === question.answerIndex), 0);
  const restart = () => { setAnswers({}); setSubmitted(false); };

  return (
    <section className="course-quiz" aria-labelledby="course-quiz-title">
      <div className="course-quiz__heading">
        <div><p className="eyebrow">Knowledge check</p><h3 id="course-quiz-title">Test your understanding</h3><p>{notice}</p></div>
        <button type="button" onClick={() => void loadQuestions()} disabled={loading} className="plain-action"><RefreshCw size={15} className={loading ? "is-spinning" : ""} /> Refresh</button>
      </div>
      {questions.map((question, questionIndex) => {
        const selected = answers[question.id];
        return <fieldset key={question.id} className="quiz-question" disabled={submitted}><legend><span>{String(questionIndex + 1).padStart(2, "0")}</span>{question.prompt}</legend><div>{question.options.map((option, optionIndex) => {
          const isCorrect = submitted && optionIndex === question.answerIndex;
          const isWrong = submitted && selected === optionIndex && optionIndex !== question.answerIndex;
          return <label key={option} className={`${isCorrect ? "is-correct" : ""} ${isWrong ? "is-wrong" : ""}`}><input type="radio" name={question.id} checked={selected === optionIndex} onChange={() => setAnswers((current) => ({ ...current, [question.id]: optionIndex }))} /><span>{option}</span></label>;
        })}</div>{submitted && <p className="quiz-question__explanation"><CheckCircle2 size={16} /> {question.explanation}</p>}</fieldset>;
      })}
      <div className="course-quiz__actions">{submitted ? <><strong>{score} / {questions.length} correct</strong><button type="button" className="quiz-primary" onClick={restart}>Try again</button></> : <button type="button" className="quiz-primary" disabled={Object.keys(answers).length !== questions.length || loading} onClick={() => setSubmitted(true)}>{loading ? <><LoaderCircle size={16} className="is-spinning" /> Loading</> : "Check answers"}</button>}</div>
    </section>
  );
}
