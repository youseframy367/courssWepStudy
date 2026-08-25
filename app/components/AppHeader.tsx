// Design reminder: Preserve the practical course portal header while keeping controls accessible and organized.
"use client";

import { BookOpen, Code2, Moon, Search, Sun } from "lucide-react";

type HeaderProps = {
  darkMode: boolean;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onThemeChange: () => void;
  onCheatSheets?: () => void;
};

export default function AppHeader({ darkMode, searchQuery, onSearchChange, onThemeChange, onCheatSheets }: HeaderProps) {
  const menuItems = ["Small projects", "Courses video", "Libraries", "Cheat Sheets", "Quizzes"];

  return (
    <header className="site-header">
      <a href="/" className="brand-mark" aria-label="Course Web Study home">
        <span className="brand-mark__icon" aria-hidden="true"><Code2 size={17} /></span>
        <span>Course Web Study</span>
      </a>
      <nav aria-label="Primary navigation" className="header-nav">
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
        <button type="button" className="mobile-book-button" onClick={onCheatSheets} aria-label="Open Cheat Sheets"><BookOpen size={18} /></button>
      </div>
    </header>
  );
}
