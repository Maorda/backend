import { Body, Controller, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreaPresupuestoDto } from '../dtos/crud.presupuestoDto';
import { Presupuesto } from '../entities/presupuesto.entity';
import { PresupuestoService } from '../services/presupuesto.servicio';
@Controller('presupuesto')
export class PresupuestoController {
    constructor(
        private presupuestoService:PresupuestoService
    ){}
    /*@Get(':presupuestoId')
    async getPresupuesto(@Param('presupuestoId') presupuestoId: string): Promise<Presupuesto> {
      return this.presupuestoService.buscaById(presupuestoId);
    }
  
    @Get()
    async getPresuestos(): Promise<Presupuesto[]> {
        return this.presupuestoService.listaPresupuestos();
    }*/
  
    @Post('creapresupuesto')
    async createPresupuesto(@Body() creaPresupuestoDto: Presupuesto)
    : Promise<Presupuesto> {
        
        const nuevoPresupuesto:CreaPresupuestoDto = {
            presupuestoId:randomUUID(),
            obraId:"eba77b76-dd6e-4fde-bf0b-1444050155b2",
	        partidas: [
		        {
			        partidaId:"numero que viene del archivo excel",
    	            descripcion:"string",
    	            u_medida:"string",
   	                metrado:50,
    	            p_unitario:20,
    	            parcial:1200
		        },
                {
			        partidaId:"string;//numero que viene del archivo excel",
    	            descripcion:"string",
    	            u_medida:"string",
   	                metrado:50.26,
    	            p_unitario:20.03,
    	            parcial:1200.26
		        }
	        ]}
            creaPresupuestoDto = nuevoPresupuesto

        return this.presupuestoService.creaPresupuesto(creaPresupuestoDto)
        
    }
  
    /*@Patch(':presupuestoId')
    async updatePresupuesto(@Param('presupuestoId') presupuestoId: string, @Body() actualizaPresupuestoDto: ActualizaPresupuestoDto): Promise<Presupuesto> {
        return this.presupuestoService.actualizaPresupuesto(presupuestoId, actualizaPresupuestoDto);
    }*/
}
