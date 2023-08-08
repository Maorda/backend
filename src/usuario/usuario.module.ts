import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario } from './entities/entidad.usuario';
import { IUSUARIO_REPOSITORY } from './patronAdapter/usuario.interface.repository';
import { UsuarioMongoRepository } from './patronAdapter/usuario.mongo.repository';
import { USUARIO_SCHEMA } from './schema/usuario.schema';
import { UsuarioService } from './services/servicios.usuario';
import { UsuarioController } from './controllers/usuario.controller';

@Module({
    imports:[
    MongooseModule.forFeature(
        [
            {
                name:Usuario.name,schema:USUARIO_SCHEMA
            }
        ])
],
providers: [UsuarioService,{provide:IUSUARIO_REPOSITORY,useClass:UsuarioMongoRepository}],
controllers: [UsuarioController]})
export class UsuarioModule {}
