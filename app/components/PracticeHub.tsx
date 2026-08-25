// Design reminder: Make practice choices direct and useful; link to original challenges rather than reproducing protected problem statements.
"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Code2, Filter, LoaderCircle } from "lucide-react";
import { getDomainChallenges, type ApiChallenge } from "@/app/lib/api";
import type { StudyDomain } from "@/app/lib/study-domains";

type PracticeHubProps = { domain: StudyDomain };
type FilterValue = "all" | "beginner" | "intermediate";

const labels: Record<FilterValue, string> = { all: "الكل", beginner: "مبتدئ", intermediate: "متوسط" };

export default function PracticeHub({ domain }: PracticeHubProps) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [challenges, setChallenges] = useState<ApiChallenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setUsingFallback(false);
    getDomainChallenges(domain.slug, filter === "all" ? undefined : filter)
      .then((response) => active && setChallenges(response.challenges))
      .catch(() => {
        if (!active) return;
        setUsingFallback(true);
        setChallenges(domain.practice.map((item, index) => ({ id: `${domain.slug}-${index}`, title: item.name, summary: item.note, difficulty: "beginner", provider: item.name, href: item.href, tags: [domain.label] })));
      })
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [domain, filter]);

  const shownChallenges = useMemo(() => filter === "all" ? challenges : challenges.filter((challenge) => challenge.difficulty === filter), [challenges, filter]);

  return (
    <section className="practice-hub tool-section" aria-labelledby="practice-title">
      <div className="section-heading">
        <span className="section-heading__icon"><Code2 size={19} /></span>
        <div><p className="eyebrow">تدريب عملي</p><h2 id="practice-title">أسئلة ومسائل {domain.label}</h2></div>
      </div>
      <div className="practice-hub__toolbar">
        <p>اختر مسألة، فكّر في الحل، واختبره في المحرر قبل مراجعة أي حل جاهز.</p>
        <div role="group" aria-label="فلتر مستوى المسائل"><Filter size={15} />{(Object.keys(labels) as FilterValue[]).map((value) => <button key={value} type="button" className={filter === value ? "is-active" : ""} onClick={() => setFilter(value)}>{labels[value]}</button>)}</div>
      </div>
      {loading ? <div className="practice-hub__loading"><LoaderCircle size={19} /> جارٍ تحضير التمارين...</div> : (
        <div className="practice-hub__grid">
          {shownChallenges.map((challenge) => (
            <article key={challenge.id}>
              <div><span className={`difficulty difficulty--${challenge.difficulty}`}>{challenge.difficulty === "beginner" ? "مبتدئ" : "متوسط"}</span><span className="practice-hub__provider">{challenge.provider}</span></div>
              <h3>{challenge.title}</h3><p>{challenge.summary}</p>
              <ul>{challenge.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <a href={challenge.href} target="_blank" rel="noreferrer">افتح التمرين الأصلي <ArrowUpRight size={16} /></a>
            </article>
          ))}
        </div>
      )}
      {usingFallback && <p className="practice-hub__fallback">تظهر روابط التدريب الأساسية الآن؛ شغّل خدمة NestJS لعرض كتالوج التمارين المفلتر كاملاً.</p>}
    </section>
  );
}
