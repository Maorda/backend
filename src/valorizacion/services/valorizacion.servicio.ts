import { Inject, Injectable } from '@nestjs/common';
import { CreateValorizacionDto, ActualizaValorizacionDto, EvidenciaFotograficaDto } from '../dtos/crud.valorizacion.dto';

import { Valorizacion } from '../entities/valorizacion.entity';
import { IVALORIZACION_REPOSITORY, IValorizacionRepository } from '../patronAdapter/valorizacion.interface';

@Injectable()
export class ValorizacionService {
    constructor(
        @Inject(IVALORIZACION_REPOSITORY) private ivalorizacionRepository:IValorizacionRepository
    ){}

    async creaValorizacion(creaValorizacionDto: CreateValorizacionDto): Promise<Valorizacion> {
        return await  this.ivalorizacionRepository.creaValorizacion(creaValorizacionDto)
    }

    async buscaById(obraId:string ): Promise<Valorizacion> {
        return await this.ivalorizacionRepository.buscaById({obraId})
    }

    async actualizaValorizacion(obraId:string, actualizaObraDto:ActualizaValorizacionDto): Promise<Valorizacion> {
        return await this.ivalorizacionRepository.actualizaValorizacion({obraId},actualizaObraDto)
    }

    async listaValorizaciones(){
        return await this.ivalorizacionRepository.listaValorizaciones({})
    }

    async agregaevidenciafotografica(evidenciaFotografica:any):Promise<EvidenciaFotograficaDto>{
        return await this.ivalorizacionRepository.agregaevidenciafotografica(evidenciaFotografica)
    }
}

