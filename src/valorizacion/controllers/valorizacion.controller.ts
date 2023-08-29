import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateValorizacionDto, EvidenciaFotograficaDto } from '../dtos/crud.valorizacion.dto';
import { EvidenciaFotografica, Valorizacion } from '../entities/valorizacion.entity';
import { ValorizacionService } from '../services/valorizacion.servicio';

@Controller('valorizacion')
export class ValorizacionController {
    constructor(
        private valorizacion:ValorizacionService
    ){}
    
    @Get('lista')
    async listaValorizaciones():Promise<Valorizacion[]>
    {
        return this.valorizacion.listaValorizaciones()
    }

    @Get('buscaPorId')
    async buscaPorId(obraId:string):Promise<Valorizacion>{
        return await this.valorizacion.buscaById(obraId)
    }

    @Post('agregaevfoto')
    async evidenciafotografica(
        @Body() evidenciaFotografica: any,
        
    ):Promise<EvidenciaFotograficaDto>{
        return await this.valorizacion.agregaevidenciafotografica(evidenciaFotografica)
    }

    @Post('creavalorizacion')
    async createValorizacion(@Body() valorizacion:any){ 
        
        return await this.valorizacion.creaValorizacion(valorizacion)
    }
}
