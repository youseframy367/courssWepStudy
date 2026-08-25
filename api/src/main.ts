import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const configuredOrigins = config.get<string>("FRONTEND_ORIGIN", "http://localhost:3000").split(",").map((origin) => origin.trim());

  app.setGlobalPrefix("api");
  app.enableCors({ origin: configuredOrigins, methods: ["GET", "POST"], credentials: false });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));

  await app.listen(config.get<number>("API_PORT", 4000));
}

void bootstrap();
