import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  DocumentBuilder,
  SwaggerModule,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = new DocumentBuilder()
    .setTitle('CRUD')
    .setDescription('Description for my CRUD')
    .setVersion('1.0')
    .addTag('crud')
    .build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (_controllerKey: string, methodKey: string) =>
      methodKey,
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  app
    .listen(9000)
    .then(() => {
      console.log('successfully stared on port 9000');
    })
    .catch((error) => {
      console.log(error);
    });
}
bootstrap();
