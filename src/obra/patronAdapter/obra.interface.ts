import { FilterQuery, UpdateQuery } from "mongoose"
import { CreaObraDto } from "../dtos/crud.obra"
import { Obra } from "../entities/obra.entity"

export const  IOBRA_REPOSITORY = 'IObraRepository'
export interface IObraRepository{
    creaObra(creaObraDto:CreaObraDto):Promise<any>
    buscaById(
        entityFilterQuery: FilterQuery<Obra>,
        projection?: Record<string, unknown>
    ):Promise<any>
    actualizaObra(
        entityFilterQuery: FilterQuery<Obra>,
        updateEntityData: UpdateQuery<unknown>
    ):Promise<any>
    listaObras(entityFilterQuery: FilterQuery<Obra>):Promise<any[] | null> 

}