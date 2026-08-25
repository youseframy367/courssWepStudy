// Design reminder: The icon picker stays compact and code-oriented, matching the reference tool's purpose.
"use client";

import { Activity, ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Bell, Camera, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Code2, Copy, Cpu, Database, Download, FileText, Folder, Heart, Home, Image, KeyRound, Laptop, Lock, Mail, Menu, MessageSquare, Moon, Search, Settings, Star, Terminal, Unlock, Upload, User, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";

const iconList: { name: string; icon: LucideIcon }[] = [
  ["Home", Home], ["Search", Search], ["User", User], ["Settings", Settings], ["Bell", Bell], ["Heart", Heart], ["Star", Star], ["Camera", Camera], ["Check", Check], ["X", X], ["ArrowLeft", ArrowLeft], ["ArrowRight", ArrowRight], ["ArrowUp", ArrowUp], ["ArrowDown", ArrowDown], ["ChevronLeft", ChevronLeft], ["ChevronRight", ChevronRight], ["ChevronUp", ChevronUp], ["ChevronDown", ChevronDown], ["Menu", Menu], ["Download", Download], ["Upload", Upload], ["Mail", Mail], ["Lock", Lock], ["Unlock", Unlock], ["Folder", Folder], ["FileText", FileText], ["Image", Image], ["Laptop", Laptop], ["Cpu", Cpu], ["Database", Database], ["Code", Code2], ["Terminal", Terminal], ["Activity", Activity], ["Moon", Moon], ["Key", KeyRound], ["MessageSquare", MessageSquare],
].map(([name, icon]) => ({ name: name as string, icon: icon as LucideIcon }));

export default function IconExplorer() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<"jsx" | "import">("jsx");
  const [copied, setCopied] = useState("");
  const icons = useMemo(() => iconList.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())), [query]);
  const handleCopy = async (name: string) => {
    const code = mode === "jsx" ? `<${name} />` : `import { ${name} } from 'lucide-react';`;
    try { await navigator.clipboard.writeText(code); } catch { /* Clipboard unavailable. */ }
    setCopied(name); window.setTimeout(() => setCopied(""), 900);
  };
  return (
    <section id="icons" className="tool-section" aria-labelledby="icons-title">
      <div className="section-heading"><span className="section-heading__icon"><Code2 size={20} /></span><div><p className="eyebrow">Toolbox</p><h2 id="icons-title">Icon picker</h2></div></div>
      <div className="icon-tool">
        <div className="icon-tool__head"><label className="font-search"><Search size={18} /><span className="sr-only">Search icons</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search icons" /></label><div className="mode-switch" aria-label="Copy mode"><button type="button" onClick={() => setMode("jsx")} className={mode === "jsx" ? "is-active" : ""}>JSX</button><button type="button" onClick={() => setMode("import")} className={mode === "import" ? "is-active" : ""}>Import</button></div><p>{icons.length} icons</p></div>
        <div className="icon-grid">{icons.map(({ name, icon: Icon }) => <button type="button" className="icon-card" key={name} onClick={() => void handleCopy(name)}><Icon size={26} strokeWidth={1.7} /><span>{name}</span><code>{copied === name ? "Copied ✓" : mode === "jsx" ? `<${name} />` : "Copy import"}</code></button>)}</div>
      </div>
    </section>
  );
}
