import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './modules/app/app.module'
import { RedisIoAdapter } from './adapters/redis-io.adapter'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { CatsModule } from './modules/cats/cats.module'


async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useWebSocketAdapter(new RedisIoAdapter(app))
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()

  const options = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API description')
    .setVersion('4.6.0')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [
      CatsModule,
    ],
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT)
}

bootstrap()
