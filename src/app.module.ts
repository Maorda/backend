import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { configLoader } from 'config-loader';
import { envSchema } from 'env-schema';


@Module({
  imports: [ //modulo de configuracion del entorno .env
  ConfigModule.forRoot({
    load:[configLoader],
    validationSchema:envSchema
  }),
  //modulo de configuracion de la base de datos mongo con mongoose
  MongooseModule.forRootAsync({
    imports:[ConfigModule],
    inject: [ConfigService],
    useFactory:(configService:ConfigService)=> {
      const mongoConfig = configService.get("mongo")
      return {
          uri: mongoConfig.uri
        }
      }, 
    }),
  ],
  //modulos de negocio
  controllers: [AppController],
  providers: [AppService,ConfigModule],
})
export class AppModule {}