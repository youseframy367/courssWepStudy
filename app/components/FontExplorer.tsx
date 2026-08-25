// Design reminder: The font explorer keeps the reference app's immediate preview-and-copy learning interaction.
"use client";

import { Check, Copy, Search } from "lucide-react";
import { useMemo, useState } from "react";

const fonts = [
  { name: "Cairo", type: "Arabic", sample: "تعلّم البرمجة ببساطة" }, { name: "Amiri", type: "Arabic", sample: "تعلّم البرمجة ببساطة" }, { name: "El Messiri", type: "Arabic", sample: "تعلّم البرمجة ببساطة" }, { name: "Tajawal", type: "Arabic", sample: "تعلّم البرمجة ببساطة" }, { name: "Changa", type: "Arabic", sample: "تعلّم البرمجة ببساطة" }, { name: "Roboto", type: "English", sample: "Learn to code with confidence" }, { name: "Poppins", type: "English", sample: "Learn to code with confidence" }, { name: "Open Sans", type: "English", sample: "Learn to code with confidence" }, { name: "Lato", type: "English", sample: "Learn to code with confidence" }, { name: "Montserrat", type: "English", sample: "Learn to code with confidence" }, { name: "Raleway", type: "English", sample: "Learn to code with confidence" }, { name: "Merriweather", type: "English", sample: "Learn to code with confidence" }, { name: "Nunito", type: "English", sample: "Learn to code with confidence" },
];

export default function FontExplorer() {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState("");
  const results = useMemo(() => fonts.filter((font) => font.name.toLowerCase().includes(query.trim().toLowerCase())), [query]);
  const handleCopy = async (name: string) => {
    try { await navigator.clipboard.writeText(`font-family: '${name}', sans-serif;`); } catch { /* Clipboard unavailable. */ }
    setCopied(name); window.setTimeout(() => setCopied(""), 1200);
  };

  return (
    <section id="fonts" className="tool-section" aria-labelledby="fonts-title">
      <div className="section-heading"><span className="section-heading__icon">Aa</span><div><p className="eyebrow">Toolbox</p><h2 id="fonts-title">Explore Fonts</h2></div></div>
      <div className="font-tool">
        <label className="font-search"><Search size={18} /><span className="sr-only">Search fonts</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a font, for example Cairo" /></label>
        <p>{results.length} font{results.length !== 1 ? "s" : ""} available</p>
        <div className="font-grid">
          {results.map((font) => <article className="font-card" key={font.name}><div className="font-card__meta"><span>{font.type}</span><button type="button" onClick={() => void handleCopy(font.name)}>{copied === font.name ? <Check size={15} /> : <Copy size={15} />}{copied === font.name ? "Copied" : "Copy"}</button></div><h3 style={{ fontFamily: `'${font.name}', sans-serif` }}>{font.name}</h3><p lang={font.type === "Arabic" ? "ar" : "en"} style={{ fontFamily: `'${font.name}', sans-serif` }}>{font.sample}</p><code>font-family: &apos;{font.name}&apos;</code></article>)}
        </div>
      </div>
    </section>
  );
}
