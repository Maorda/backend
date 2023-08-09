import { FilterQuery, UpdateQuery } from "mongoose"
import { CreaObraDto } from "../dtos/crud.obra"
import { Obra } from "../entities/obra.entity"

export const  IOBRA_REPOSITORY = 'IObraRepository'
export interface IObraRepository{
    creaObra(creaObraDto:CreaObraDto):Promise<Obra>
    buscaById(
        entityFilterQuery: FilterQuery<Obra>,
        projection?: Record<string, unknown>
    ):Promise<Obra>
    actualizaObra(
        entityFilterQuery: FilterQuery<Obra>,
        updateEntityData: UpdateQuery<unknown>
    ):Promise<Obra>
    listaObras(entityFilterQuery: FilterQuery<Obra>):Promise<Obra[] | null> 

}