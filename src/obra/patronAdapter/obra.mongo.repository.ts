import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, UpdateQuery } from 'mongoose';
import { randomUUID } from 'node:crypto';
import { CreaObraDto } from '../dtos/crud.obra';
import { Obra } from '../entities/obra.entity';
import { ObraModel } from '../schema/obra.schema';
import { IObraRepository } from './obra.interface';

export class ObraMongoRepository implements IObraRepository{
    constructor(
        @InjectModel(Obra.name) private obraModel:ObraModel
    ){}
    async creaObra(creaObraDto: CreaObraDto): Promise<Obra> {
        const nuevaObra = new Obra();
        nuevaObra.obraId = randomUUID();
        nuevaObra.usuarioId = creaObraDto.usuarioId;
        nuevaObra.contratista = creaObraDto.contratista;
        nuevaObra.supervisor = creaObraDto.supervisor;
        nuevaObra.residente = creaObraDto.residente;
        nuevaObra.ejecucion = creaObraDto.ejecucion;
        nuevaObra.inversion = creaObraDto.inversion;
        nuevaObra.propietario = creaObraDto.propietario;
        nuevaObra.ubicacion_geografica = creaObraDto.ubicacion_geografica;
        nuevaObra.otros = creaObraDto.otros
        
        return await new this.obraModel(nuevaObra).save()
        
    }
    async buscaById(
        entityFilterQuery: FilterQuery<Obra>,
        projection?: Record<string, unknown>): Promise<Obra> {
        return this.obraModel.findOne( entityFilterQuery,{
            _id: 0,
            __v: 0,
            ...projection
        }).exec()
          
    }
    async actualizaObra(
        entityFilterQuery: FilterQuery<Obra>,
        updateEntityData: UpdateQuery<unknown>
        ): Promise<Obra> {
        return this.obraModel.findOneAndUpdate(entityFilterQuery,
            updateEntityData,
            {
              new: true 
            })
    }
    async listaObras(entityFilterQuery: FilterQuery<Obra>): Promise<Obra[]> {
        return this.obraModel.find(entityFilterQuery).exec()
    }
    
}