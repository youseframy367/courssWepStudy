import { Injectable, ServiceUnavailableException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ChatDto } from "./dto/chat.dto";

type AiMessage = { role: "system" | "user" | "assistant"; content: string };

@Injectable()
export class AiService {
  constructor(private readonly config: ConfigService) {}

  async chat(dto: ChatDto) {
    const courseContext = dto.courseSlug ? ` The learner is currently studying ${dto.courseSlug.replace(/-/g, " ")}.` : "";
    const reply = await this.requestCompletion([
      { role: "system", content: `You are a precise, encouraging web-development tutor. Explain in small steps, use accurate code, and never claim to run code you have not run.${courseContext}` },
      ...dto.history.map((item) => ({ role: item.role, content: item.content })),
      { role: "user", content: dto.message },
    ]);
    return { reply };
  }

  async generateQuestions(course: string, count: number, level: "beginner" | "intermediate") {
    const prompt = `Return JSON only, with a key named questions. Generate exactly ${count} ${level} multiple-choice questions about ${course}. Each question needs id, prompt, options (exactly 4 strings), answerIndex (0-3), and explanation. Avoid trick questions.`;
    const raw = await this.requestCompletion([{ role: "system", content: "You create valid educational JSON." }, { role: "user", content: prompt }]);
    try {
      return { source: "ai", ...JSON.parse(raw) };
    } catch {
      throw new ServiceUnavailableException("The AI provider returned an invalid question format. Please try again.");
    }
  }

  private async requestCompletion(messages: AiMessage[]) {
    const apiUrl = this.config.get<string>("AI_API_URL");
    const apiKey = this.config.get<string>("AI_API_KEY");
    const model = this.config.get<string>("AI_MODEL", "gpt-4o-mini");
    if (!apiUrl || !apiKey) throw new ServiceUnavailableException("AI is not configured yet. Add AI_API_URL and AI_API_KEY to the server secrets.");

    const response = await fetch(apiUrl, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` }, body: JSON.stringify({ model, messages, temperature: 0.35 }) });
    if (!response.ok) throw new ServiceUnavailableException("The AI service is temporarily unavailable.");
    const data = await response.json() as { choices?: Array<{ message?: { content?: string } }> };
    const content = data.choices?.[0]?.message?.content?.trim();
    if (!content) throw new ServiceUnavailableException("The AI service returned an empty response.");
    return content;
  }
}
