// Design reminder: The personal workspace is local-first, explicit about its browser-only persistence, and ready for a future Nest database adapter.
export type RevisionGrade = 1 | 2 | 3 | 4;

export type RevisionCard = {
  id: string;
  title: string;
  body: string;
  source: string;
  dueAt: string;
  intervalDays: number;
  repetitions: number;
};

export type StudyNote = {
  id: string;
  courseSlug: string;
  lessonId: string;
  title: string;
  body: string;
  updatedAt: string;
};

export type StudySnippet = {
  id: string;
  title: string;
  language: string;
  code: string;
  tags: string[];
  updatedAt: string;
};

export type ApplicationStatus = "saved" | "applied" | "interview" | "offer" | "closed";

export type CareerApplication = {
  id: string;
  company: string;
  role: string;
  source: string;
  status: ApplicationStatus;
  deadline?: string;
  notes?: string;
  createdAt: string;
};

export type WorkspaceState = {
  completedLessonIds: string[];
  quizAttempts: Record<string, { score: number; total: number; updatedAt: string }>;
  notes: StudyNote[];
  revisionCards: RevisionCard[];
  snippets: StudySnippet[];
  applications: CareerApplication[];
  interviewScores: number[];
};

const KEY = "course-web-study-workspace-v1";

const emptyState = (): WorkspaceState => ({
  completedLessonIds: [],
  quizAttempts: {},
  notes: [],
  revisionCards: [],
  snippets: [],
  applications: [],
  interviewScores: [],
});

export const readWorkspace = (): WorkspaceState => {
  if (typeof window === "undefined") return emptyState();
  try {
    const parsed = JSON.parse(window.localStorage.getItem(KEY) ?? "null") as Partial<WorkspaceState> | null;
    return { ...emptyState(), ...parsed };
  } catch {
    return emptyState();
  }
};

export const writeWorkspace = (state: WorkspaceState) => {
  if (typeof window !== "undefined") window.localStorage.setItem(KEY, JSON.stringify(state));
  return state;
};

export const updateWorkspace = (updater: (state: WorkspaceState) => WorkspaceState) => writeWorkspace(updater(readWorkspace()));

export const makeId = (prefix: string) => `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

export const markLessonComplete = (courseSlug: string, lessonId: string) => updateWorkspace((state) => {
  const id = `${courseSlug}:${lessonId}`;
  if (state.completedLessonIds.includes(id)) return state;
  return { ...state, completedLessonIds: [...state.completedLessonIds, id] };
});

export const saveQuizAttempt = (courseSlug: string, score: number, total: number) => updateWorkspace((state) => ({
  ...state,
  quizAttempts: { ...state.quizAttempts, [courseSlug]: { score, total, updatedAt: new Date().toISOString() } },
}));

export const scheduleRevision = (card: RevisionCard, grade: RevisionGrade) => updateWorkspace((state) => {
  const intervals: Record<RevisionGrade, number> = { 1: 1, 2: 2, 3: 5, 4: 10 };
  const index = state.revisionCards.findIndex((item) => item.id === card.id);
  const existing = index >= 0 ? state.revisionCards[index] : card;
  const multiplier = grade >= 3 ? 2 : 1;
  const nextDays = Math.max(intervals[grade], Math.round(existing.intervalDays * multiplier));
  const next: RevisionCard = {
    ...existing,
    intervalDays: nextDays,
    repetitions: existing.repetitions + 1,
    dueAt: new Date(Date.now() + nextDays * 86_400_000).toISOString(),
  };
  const revisionCards = index >= 0 ? state.revisionCards.map((item, itemIndex) => itemIndex === index ? next : item) : [...state.revisionCards, next];
  return { ...state, revisionCards };
});

export const seedRevisionCard = (title: string, body: string, source: string): RevisionCard => ({
  id: makeId("revision"),
  title,
  body,
  source,
  dueAt: new Date().toISOString(),
  intervalDays: 1,
  repetitions: 0,
});
