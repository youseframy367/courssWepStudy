import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { AiService } from "../ai/ai.service";
import { GenerateQuestionsDto } from "./dto/generate-questions.dto";
import { CoursesService } from "./courses.service";

@Controller("courses")
export class CoursesController {
  constructor(private readonly coursesService: CoursesService, private readonly aiService: AiService) {}

  @Get(":courseSlug/questions")
  getQuestions(@Param("courseSlug") courseSlug: string) {
    return this.coursesService.getQuestions(courseSlug);
  }

  @Post(":courseSlug/questions/generate")
  generateQuestions(@Param("courseSlug") courseSlug: string, @Body() dto: GenerateQuestionsDto) {
    return this.aiService.generateQuestions(this.coursesService.getQuestionContext(courseSlug), dto.count, dto.level);
  }
}
