// Design reminder: All browser requests use the NestJS API boundary; API secrets never reach the client bundle.
export type ApiQuestion = {
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type ApiChallenge = {
  id: string;
  title: string;
  summary: string;
  difficulty: "beginner" | "intermediate";
  provider: string;
  href: string;
  tags: string[];
};

const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "/learning-api").replace(/\/$/, "");

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = Array.isArray(data.message) ? data.message.join(" ") : data.message;
    throw new Error(message || "The learning API is temporarily unavailable.");
  }
  return data as T;
}

export function getCourseQuestions(courseSlug: string) {
  return request<{ courseSlug: string; source: string; questions: ApiQuestion[] }>(`/courses/${encodeURIComponent(courseSlug)}/questions`);
}

export function askTutor(input: { message: string; courseSlug?: string; history: { role: "user" | "assistant"; content: string }[] }) {
  return request<{ reply: string }>("/chat", { method: "POST", body: JSON.stringify(input) });
}

export function getDomainChallenges(domainSlug: string, difficulty?: "beginner" | "intermediate") {
  const query = difficulty ? `?difficulty=${difficulty}` : "";
  return request<{ domain: string; source: string; challenges: ApiChallenge[] }>(`/study-domains/${encodeURIComponent(domainSlug)}/challenges${query}`);
}
