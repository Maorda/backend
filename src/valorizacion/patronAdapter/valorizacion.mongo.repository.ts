import { InjectModel } from "@nestjs/mongoose";

import { Valorizacion } from "../entities/valorizacion.entity";
import { IValorizacionRepository } from "./valorizacion.interface";
import { randomUUID } from 'node:crypto';

import { FilterQuery, UpdateQuery } from "mongoose";
import { CreateValorizacionDto, EvidenciaFotograficaDto } from "../dtos/crud.valorizacion.dto";
import { ValorizacionModel } from "../schemas/valorizacion.schema";

export class ValorizacionMongoRepository implements IValorizacionRepository{
    constructor(
        @InjectModel(Valorizacion.name) private valorizacionModel:ValorizacionModel 
    ){}
    async creaValorizacion(creaValorizacionDto: CreateValorizacionDto): Promise<any> {
       const nuevaValorizacion = new Valorizacion();
       nuevaValorizacion.obraId = creaValorizacionDto.obraId
       nuevaValorizacion.periodos = creaValorizacionDto.periodos
       
       let otropresupuesto  = await this.valorizacionModel.find({obraId:creaValorizacionDto.obraId})
       
       if(otropresupuesto === null || otropresupuesto.length === 0){
        return this.valorizacionModel.create(nuevaValorizacion)
       }
       else{
        return await this.valorizacionModel.
            findOneAndUpdate(
                {obraId:nuevaValorizacion.obraId},//obra encontrada
                {
                    $push:{
                    "periodos":nuevaValorizacion.periodos[0]
                    }
                },
                {
                    new: true,overwrite:false
                }
            ).exec()

       }
    }
    async buscaById(entityFilterQuery: FilterQuery<Valorizacion>, projection?: Record<string, unknown>): Promise<any> {
        return this.valorizacionModel.findOne( entityFilterQuery,{
            _id: 0,
            __v: 0,
            ...projection
        }).exec()
    }
    actualizaValorizacion(entityFilterQuery: FilterQuery<Valorizacion>, updateEntityData: UpdateQuery<unknown>): Promise<Valorizacion> {
        throw new Error("Method not implemented.");
    }
    listaValorizaciones(entityFilterQuery: FilterQuery<Valorizacion>): Promise<any[]> {
        return this.valorizacionModel.find(entityFilterQuery).exec()
    }
    async agregaevidenciafotografica(
            evidenciaFotografica:any,
            
    ):Promise<EvidenciaFotograficaDto>{
        const nuevaEvidenciaFotografica = new EvidenciaFotograficaDto()
        nuevaEvidenciaFotografica.descripcionTrabajos =evidenciaFotografica.descripcionTrabajos;
        nuevaEvidenciaFotografica.partida=evidenciaFotografica.partida;
        nuevaEvidenciaFotografica.urlFoto=evidenciaFotografica.urlFoto;
        
        
        /*
            { <query conditions> },
            { <update operator>: { "<array>.$[<identifier>]" : value } },
            { arrayFilters: [ { <identifier>: <condition> } ] }
        */
       
        return await this.valorizacionModel
            .findOneAndUpdate(
                {"obraId":evidenciaFotografica.obraId},
                {
                    
                    $push:{
                        "periodos.$[periodo].panelFotografico":{
                            $each:[nuevaEvidenciaFotografica],
                            $position:0

                        }
                        
                    }
                },
                {
                    arrayFilters:[{"periodo.periodoMes":evidenciaFotografica.periodoMes}]
                }
            )
    }
    async listavalorizacionObraId(obraId:string):Promise<any>{
        return await this.valorizacionModel.findOne({"obraId":obraId}).exec()

    }
}
    