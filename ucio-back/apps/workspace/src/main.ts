import { NestFactory } from '@nestjs/core';
import { WorkspaceModule } from './workspace.module';

async function bootstrap() {
  const app = await NestFactory.create(WorkspaceModule);
  await app.listen(3000);
}
bootstrap();
