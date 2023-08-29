import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreaObraDto, ActualizaObraDto } from '../dtos/crud.obra';
import { Obra } from '../entities/obra.entity';
import { ObraService } from '../services/obra.servicio';
import { Decimal128 } from "mongoose";
@Controller('obra')
export class ObraController {
    constructor(
        private obraService:ObraService
    ){}
    @Get('listaobras')
    async getObras(): Promise<Obra[]> {
        return this.obraService.listaObras();
    }
    
    @Get(':obraId')
    async getObra(@Param('obraId') obraId: string): Promise<Obra> {
      return this.obraService.buscaById(obraId);
    }  
  
    @Post('creaobra')
    async createObra(@Body() creaObraDto: any): Promise<any> {
        console.log(creaObraDto)
        
        return this.obraService.creaObra(creaObraDto)
        
    }
  
    @Patch(':obraId')
    async updateObra(@Param('obraId') obraId: string, @Body() actualizaObraDto: ActualizaObraDto): Promise<Obra> {
        return this.obraService.actualizaObra(obraId, actualizaObraDto);
    }
}
