import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ObraController } from './controller/obra.controller';
import { Obra } from './entities/obra.entity';
import { IOBRA_REPOSITORY } from './patronAdapter/obra.interface';
import { ObraMongoRepository } from './patronAdapter/obra.mongo.repository';
import { OBRA_SCHEMA } from './schema/obra.schema';
import { ObraService } from './services/obra.servicio';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:Obra.name,schema:OBRA_SCHEMA
      }
    ])
  ],
  providers:[ObraService,{provide:IOBRA_REPOSITORY,useClass:ObraMongoRepository}],
  controllers: [ObraController]
})
export class ObraModule {}
