import { IsIn, IsInt, IsOptional, Max, Min } from "class-validator";

export class GenerateQuestionsDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(10)
  count = 5;

  @IsOptional()
  @IsIn(["beginner", "intermediate"])
  level: "beginner" | "intermediate" = "beginner";
}
