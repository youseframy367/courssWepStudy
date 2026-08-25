import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ThrottlerModule } from "@nestjs/throttler";
import { AiModule } from "./ai/ai.module";
import { CatalogModule } from "./catalog/catalog.module";
import { CoursesModule } from "./courses/courses.module";
import { HealthController } from "./health.controller";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: [".env.local", ".env"] }),
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 30 }]),
    AiModule,
    CatalogModule,
    CoursesModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
