import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {  Document, Model } from 'mongoose'


@Schema()
class UsuarioSchema {
    @Prop()
    usuarioId:string;
    @Prop()
    email:string;
    @Prop()
    password:string;
} 
export const USUARIO_SCHEMA =  SchemaFactory.createForClass(UsuarioSchema)
export type UsuarioDocument = UsuarioSchema & Document
export type UsuarioModel = Model<UsuarioSchema>

