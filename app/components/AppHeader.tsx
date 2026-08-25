// Design reminder: Preserve the practical course portal header while making study-domain choice fast and focused.
"use client";

import { BookOpen, ChevronDown, Code2, Moon, Search, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { studyDomains, type StudyDomain } from "@/app/lib/study-domains";

type HeaderProps = {
  darkMode: boolean;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onThemeChange: () => void;
  onCheatSheets?: () => void;
  onSelectDomain?: (domain: StudyDomain) => void;
};

export default function AppHeader({ darkMode, searchQuery, onSearchChange, onThemeChange, onCheatSheets, onSelectDomain }: HeaderProps) {
  const menuItems = ["Small projects", "Courses video", "Libraries", "Cheat Sheets", "Quizzes"];
  const [isDomainDrawerOpen, setIsDomainDrawerOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setIsDomainDrawerOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const chooseDomain = (domain: StudyDomain) => {
    onSelectDomain?.(domain);
    setIsDomainDrawerOpen(false);
  };

  return (
    <header className="site-header">
      <a href="/" className="brand-mark" aria-label="Course Web Study home">
        <span className="brand-mark__icon" aria-hidden="true"><Code2 size={17} /></span>
        <span>Course Web Study</span>
      </a>
      <nav aria-label="Primary navigation" className="header-nav">
        <button className="domain-trigger" type="button" onClick={() => setIsDomainDrawerOpen((open) => !open)} aria-expanded={isDomainDrawerOpen} aria-controls="study-domain-drawer">
          مجالات المذاكرة <ChevronDown size={14} aria-hidden="true" />
        </button>
        {menuItems.map((item) => (
          <button key={item} type="button" onClick={() => item === "Cheat Sheets" && onCheatSheets?.()}>
            {item}
          </button>
        ))}
      </nav>
      <div className="header-controls">
        <label className="header-search">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Search courses</span>
          <input value={searchQuery} onChange={(event) => onSearchChange(event.target.value)} placeholder="Search..." />
        </label>
        <button type="button" className="theme-toggle" onClick={onThemeChange} aria-label="Change color theme">
          {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          <span className="theme-toggle__track" aria-hidden="true"><span /></span>
        </button>
        <button type="button" className="mobile-domain-button" onClick={() => setIsDomainDrawerOpen((open) => !open)} aria-label="Open study domains" aria-expanded={isDomainDrawerOpen}><ChevronDown size={18} /></button>
        <button type="button" className="mobile-book-button" onClick={onCheatSheets} aria-label="Open Cheat Sheets"><BookOpen size={18} /></button>
      </div>
      {isDomainDrawerOpen && (
        <div id="study-domain-drawer" className="study-domain-drawer" role="dialog" aria-label="اختر مجال المذاكرة">
          <div className="study-domain-drawer__head">
            <div><p>ابدأ من هدفك</p><h2>ماذا تريد أن تذاكر؟</h2></div>
            <button type="button" onClick={() => setIsDomainDrawerOpen(false)} aria-label="إغلاق قائمة مجالات المذاكرة"><X size={18} /></button>
          </div>
          <div className="study-domain-drawer__grid">
            {studyDomains.map((domain) => (
              <button key={domain.slug} type="button" onClick={() => chooseDomain(domain)}>
                <span style={{ background: domain.color }} aria-hidden="true" />
                <strong>{domain.label}</strong>
                <small>{domain.description}</small>
                <em>افتح المسار</em>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
