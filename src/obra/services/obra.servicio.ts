import { Inject, Injectable } from '@nestjs/common';
import { CreaObraDto, ActualizaObraDto } from '../dtos/crud.obra';
import { Obra } from '../entities/obra.entity';
import { IObraRepository, IOBRA_REPOSITORY } from '../patronAdapter/obra.interface';

@Injectable()
export class ObraService {
    constructor(
        @Inject(IOBRA_REPOSITORY) private iobraRepository:IObraRepository
    ){}
    async creaObra(creaObraDto: CreaObraDto): Promise<Obra> {
        return await  this.iobraRepository.creaObra(creaObraDto)
    }
    async buscaById(obraId:string ): Promise<Obra> {
        return await this.iobraRepository.buscaById({obraId})
    }
    async actualizaObra(obraId:string, actualizaObraDto:ActualizaObraDto): Promise<Obra> {
        return await this.iobraRepository.actualizaObra({obraId},actualizaObraDto)
    }
    async listaObras(){
        return await this.iobraRepository.listaObras({})
    }
}
