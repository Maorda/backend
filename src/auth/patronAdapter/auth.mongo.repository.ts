import { Injectable } from "@nestjs/common";
import { InjectModel, } from "@nestjs/mongoose";
import {  FilterQuery, UpdateQuery } from 'mongoose';
import { randomUUID } from 'node:crypto';
import { AuthDto } from "../dtos/auth.dto";
import { AuthEntity, AuthFindOne } from "../entity/auth.entity";
import { AuthModel } from "../schema/auth.schema";
import { IAuthRepository } from "./auth.interface.repository";

@Injectable()
export class AuthMongoRepository implements IAuthRepository{
    constructor(
        @InjectModel(AuthEntity.name) private authModel:AuthModel
    ){}
    lista(): Promise<any[]> {
        return this.authModel.find({}).exec()
    }
    findOne(entityFilterQuery: FilterQuery<AuthFindOne>, projection?: Record<string, unknown>): Promise<any> {
        return this.authModel.findOne( entityFilterQuery,{
            _id: 0,
            __v: 0,
            ...projection
        }).exec()
    }
    async register(registra: AuthDto): Promise<any> {
        const nuevoUsuario = new AuthEntity()
        nuevoUsuario.usuarioId = randomUUID()
        nuevoUsuario.email = registra.email;
        nuevoUsuario.password = registra.password
        
        return await new this.authModel(nuevoUsuario).save()
    }
    //userId: string
    //busca por {userId}
    async login(
        entityFilterQuery: FilterQuery<AuthEntity>,
        projection?: Record<string, unknown>): Promise<any> {
        return this.authModel.findOne( entityFilterQuery,{
            _id: 0,
            __v: 0,
            ...projection
        }).exec()
          
    }
    //(userId: string, userUpdates: UpdateUserDto) son los parametros
    //{ userId }, userUpdates, es o que ingresa es decir entityfilterquery
       
}