import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';

import * as fs from 'fs'
import { ValidationPipe } from '@nestjs/common';


const httpsOptions ={
  key: fs.readFileSync('./private.pem'),
  cert: fs.readFileSync('./certificate.crt'),

}
async function bootstrap() {
  const app = await NestFactory.create(AppModule
    ,{
    httpsOptions
    }
    
  );
/**
   * configura el cors correctamente desde el backend
   */
  const writelist = [
    "https://localhost:4200",
    "http://localhost:4200",
    "http://localhost:4200/*",
   // "https://192.168.1.86:4444/*",
    "https://192.168.1.86:4444"
  ]
  const corsOptions = {
    origin: function(origin,callback){
      if(writelist.indexOf(origin) !== -1 || !origin ){
        callback(null,true);
      }else{
        callback(new Error("not alloe by corsw"))
      }
    }
  }
  app.enableCors(corsOptions)
  app.useGlobalPipes(
    new ValidationPipe({whitelist:true,forbidNonWhitelisted:true})
  )
 
  useContainer(app.select(AppModule), {fallbackOnErrors: true}); 
  await app.listen(3033,'192.168.1.86',()=>{//ip de la maquiandonde esta el backend aplicativo, se usa ipconfig
    console.log(`on port: ${3033}`)
  });
}
bootstrap();
