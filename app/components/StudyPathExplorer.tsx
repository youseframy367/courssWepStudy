// Design reminder: Present study paths as a clear learning utility, not a decorative marketing section.
"use client";

import { ArrowUpRight, CheckCircle2, ExternalLink, ListChecks } from "lucide-react";
import type { StudyDomain } from "@/app/lib/study-domains";

type StudyPathExplorerProps = {
  domain: StudyDomain;
};

export default function StudyPathExplorer({ domain }: StudyPathExplorerProps) {
  return (
    <section id="study-path" className="study-path tool-section" aria-labelledby="study-path-title">
      <div className="section-heading">
        <span className="section-heading__icon"><ListChecks size={19} /></span>
        <div>
          <p className="eyebrow">مسار مذاكرة قابل للتنفيذ</p>
          <h2 id="study-path-title">{domain.label}</h2>
        </div>
      </div>
      <div className="study-path__intro">
        <span style={{ background: domain.color }} aria-hidden="true" />
        <p>{domain.description}</p>
      </div>
      <div className="study-path__grid">
        <article className="study-path__steps">
          <p className="study-path__label">رتّب مذاكرتك</p>
          <ol>
            {domain.steps.map((step, index) => (
              <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p><CheckCircle2 size={17} /></li>
            ))}
          </ol>
        </article>
        <article className="study-path__sources">
          <p className="study-path__label">مصادر للشرح</p>
          <div>
            {domain.resources.map((resource) => (
              <a key={resource.href} href={resource.href} target="_blank" rel="noreferrer">
                <span><strong>{resource.name}</strong><small>{resource.note}</small></span><ExternalLink size={16} />
              </a>
            ))}
          </div>
        </article>
        <article className="study-path__practice">
          <p className="study-path__label">أسئلة ومسائل</p>
          <div>
            {domain.practice.map((resource) => (
              <a key={resource.href} href={resource.href} target="_blank" rel="noreferrer">
                <span><strong>{resource.name}</strong><small>{resource.note}</small></span><ArrowUpRight size={17} />
              </a>
            ))}
          </div>
        </article>
      </div>
      <p className="study-path__disclosure">الموقع يعرض مسارات مختصرة وروابط للمصادر الأصلية؛ المحتوى التفصيلي والتمارين يبقيان لدى أصحابها.</p>
    </section>
  );
}
