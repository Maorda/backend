import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//const port = process.env.PORT || 3000; // PORT must be in caps
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
  /*await app.listen(port, () => {
    console.info(`escuchando en el puerto::${port}`);
   });*/
   
}
bootstrap();
