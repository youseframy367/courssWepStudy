// Design reminder: The AI chat is transparent about service state and communicates only through the secure NestJS API boundary.
"use client";

import { ArrowUp, Bot, LoaderCircle, MessageCircleMore } from "lucide-react";
import { FormEvent, useState } from "react";
import { askTutor } from "@/app/lib/api";

type ChatMessage = { role: "user" | "assistant"; content: string };

export default function AiChat({ courseSlug }: { courseSlug?: string }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = draft.trim();
    if (!message || busy) return;
    const nextHistory = [...messages, { role: "user" as const, content: message }];
    setMessages(nextHistory); setDraft(""); setError(""); setBusy(true);
    try { const result = await askTutor({ message, courseSlug, history: messages }); setMessages((current) => [...current, { role: "assistant", content: result.reply }]); }
    catch (caught) { setError(caught instanceof Error ? caught.message : "The tutor could not answer right now."); }
    finally { setBusy(false); }
  };
  return <section className="ai-chat" aria-labelledby="ai-chat-title"><div className="ai-chat__head"><span><Bot size={18} /></span><div><p>AI study assistant</p><h3 id="ai-chat-title">Ask about your next step</h3></div></div><div className="ai-chat__messages" aria-live="polite">{messages.length === 0 ? <p className="ai-chat__empty"><MessageCircleMore size={17} /> Ask for an explanation, a code review, or a practice idea.</p> : messages.map((message, index) => <p key={`${message.role}-${index}`} className={`ai-message ai-message--${message.role}`}>{message.content}</p>)}{busy && <p className="ai-message ai-message--assistant"><LoaderCircle size={15} className="is-spinning" /> Thinking…</p>}</div>{error && <p className="ai-chat__error">{error}</p>}<form onSubmit={submit}><label className="sr-only" htmlFor="ai-message">Message the study assistant</label><input id="ai-message" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Ask a learning question…" maxLength={2000} /><button type="submit" disabled={!draft.trim() || busy} aria-label="Send message"><ArrowUp size={17} /></button></form></section>;
}
