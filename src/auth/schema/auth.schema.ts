import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {  Document, Model } from 'mongoose'


@Schema()
class AuthSchema {
    @Prop()
    usuarioId:string;
    @Prop()
    email:string;
    @Prop()
    password:string;
} 
export const AUTH_SCHEMA =  SchemaFactory.createForClass(AuthSchema)
export type AuthDocument = AuthSchema & Document
export type AuthModel = Model<AuthSchema>