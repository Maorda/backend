import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ValorizacionController } from './controllers/valorizacion.controller';
import { Valorizacion } from './entities/valorizacion.entity';
import { IVALORIZACION_REPOSITORY } from './patronAdapter/valorizacion.interface';
import { ValorizacionMongoRepository } from './patronAdapter/valorizacion.mongo.repository';
import { VALORIZACION_SCHEMA } from './schemas/valorizacion.schema';
import { ValorizacionService } from './services/valorizacion.servicio';

@Module({
  imports:[
      MongooseModule.forFeature([{name:Valorizacion.name,schema:VALORIZACION_SCHEMA}])
  ],
  providers: [ValorizacionService,{provide:IVALORIZACION_REPOSITORY,useClass:ValorizacionMongoRepository}],
  controllers: [ValorizacionController]
})
export class ValorizacionModule {}
