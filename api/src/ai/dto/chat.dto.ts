import { IsArray, IsOptional, IsString, MaxLength, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class ChatHistoryItemDto {
  @IsString()
  @MaxLength(20)
  role!: "user" | "assistant";

  @IsString()
  @MaxLength(2000)
  content!: string;
}

export class ChatDto {
  @IsString()
  @MaxLength(2000)
  message!: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  courseSlug?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChatHistoryItemDto)
  history: ChatHistoryItemDto[] = [];
}
