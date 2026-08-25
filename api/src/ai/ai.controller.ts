import { Body, Controller, Post } from "@nestjs/common";
import { Throttle } from "@nestjs/throttler";
import { ChatDto } from "./dto/chat.dto";
import { AiService } from "./ai.service";

@Controller("chat")
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post()
  @Throttle({ default: { limit: 8, ttl: 60_000 } })
  chat(@Body() dto: ChatDto) {
    return this.aiService.chat(dto);
  }
}
