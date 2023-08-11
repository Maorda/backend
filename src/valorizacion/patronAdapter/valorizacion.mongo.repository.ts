import { InjectModel } from "@nestjs/mongoose";

import { EvidenciaFotografica, Valorizacion } from "../entities/valorizacion.entity";
import { IValorizacionRepository } from "./valorizacion.interface";
import { randomUUID } from 'node:crypto';

import { FilterQuery, UpdateQuery } from "mongoose";
import { CreateValorizacionDto } from "../dtos/crud.valorizacion.dto";
import { ValorizacionModel } from "../schemas/valorizacion.schema";

export class ValorizacionMongoRepository implements IValorizacionRepository{
    constructor(
        @InjectModel(Valorizacion.name) private valorizacionModel:ValorizacionModel 
    ){}
    async creaValorizacion(creaValorizacionDto: CreateValorizacionDto): Promise<Valorizacion> {
       const nuevaValorizacion = new Valorizacion();
       nuevaValorizacion.obraId = creaValorizacionDto.obraId
       nuevaValorizacion.periodos = creaValorizacionDto.periodos
       
       let otropresupuesto  = await this.valorizacionModel.find({obraId:creaValorizacionDto.obraId})
       
       if(otropresupuesto === null || otropresupuesto.length === 0){
        return this.valorizacionModel.create(nuevaValorizacion)
       }else{
        return await this.valorizacionModel.
            findOneAndUpdate(
                {obraId:nuevaValorizacion.obraId},
                {
                    $push:{
                    "periodos":nuevaValorizacion.periodos
                    }
                },
                {
                    new: true,overwrite:false
                }
            ).exec()

       }
    }
    async buscaById(entityFilterQuery: FilterQuery<Valorizacion>, projection?: Record<string, unknown>): Promise<Valorizacion> {
        return this.valorizacionModel.findOne( entityFilterQuery,{
            _id: 0,
            __v: 0,
            ...projection
        }).exec()
    }
    actualizaValorizacion(entityFilterQuery: FilterQuery<Valorizacion>, updateEntityData: UpdateQuery<unknown>): Promise<Valorizacion> {
        throw new Error("Method not implemented.");
    }
    listaValorizaciones(entityFilterQuery: FilterQuery<Valorizacion>): Promise<Valorizacion[]> {
        return this.valorizacionModel.find(entityFilterQuery).exec()
    }
    async agregaevidenciafotografica(evidenciaFotografica:EvidenciaFotografica):Promise<EvidenciaFotografica>{
        const nuevaEvidenciaFotografica = new EvidenciaFotografica()
        nuevaEvidenciaFotografica.descripcionTrabajos ="haber",
        nuevaEvidenciaFotografica.partida="haber"
        nuevaEvidenciaFotografica.urlFoto="haber"
        const posicion = 1
        console.log("der")

        
        return await this.valorizacionModel
            .findOneAndUpdate(
                {obraId:"123asd"},
                {
                    /*$push:{
                        "periodos.panelFotografico":nuevaEvidenciaFotografica//"periodos.0.panelFotografico":nuevaEvidenciaFotografica->funciona
                    }*/
                    
                    $push:{
                        "periodos":{
                            $position:0,
                            "panelFotografico":nuevaEvidenciaFotografica
                        }
                    } 
                      

                },
                
            )
                
    }
    
}
    