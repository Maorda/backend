import { FilterQuery, UpdateQuery } from "mongoose"
import { CreateValorizacionDto } from "../dtos/crud.valorizacion.dto"

import { EvidenciaFotografica, Valorizacion } from "../entities/valorizacion.entity"

export const  IVALORIZACION_REPOSITORY = 'IValorizacionRepository'
export interface IValorizacionRepository{
    creaValorizacion(creaValorizacionDto:CreateValorizacionDto):Promise<Valorizacion>
    buscaById(
        entityFilterQuery: FilterQuery<Valorizacion>,
        projection?: Record<string, unknown>
    ):Promise<Valorizacion>
    actualizaValorizacion(
        entityFilterQuery: FilterQuery<Valorizacion>,
        updateEntityData: UpdateQuery<unknown>
    ):Promise<Valorizacion>
    listaValorizaciones(entityFilterQuery: FilterQuery<Valorizacion>):Promise<Valorizacion[] | null> 
    agregaevidenciafotografica(EvidenciaFotografica:EvidenciaFotografica):Promise<EvidenciaFotografica>

}