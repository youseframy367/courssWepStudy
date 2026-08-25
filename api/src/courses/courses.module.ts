import { Module } from "@nestjs/common";
import { AiModule } from "../ai/ai.module";
import { CoursesController } from "./courses.controller";
import { CoursesService } from "./courses.service";

@Module({ imports: [AiModule], controllers: [CoursesController], providers: [CoursesService] })
export class CoursesModule {}
