import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.API_PORT);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  console.log(`Listening on port: ${process.env.API_PORT}`);
}
bootstrap();
