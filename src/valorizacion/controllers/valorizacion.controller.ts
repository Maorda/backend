import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateValorizacionDto, EvidenciaFotograficaDto } from '../dtos/crud.valorizacion.dto';
import { EvidenciaFotografica, Valorizacion } from '../entities/valorizacion.entity';
import { ValorizacionService } from '../services/valorizacion.servicio';

@Controller('valorizacion')
export class ValorizacionController {
    constructor(
        private valorizacion:ValorizacionService
    ){}
    @Get('listavalorizaciones')
    async listaValorizaciones():Promise<Valorizacion[]>
    {
        return this.valorizacion.listaValorizaciones()
    }
    @Post('agregaevidenciafotografica')
    async evidenciafotografica(@Body() evidenciaFotograficaDto: EvidenciaFotograficaDto):Promise<EvidenciaFotograficaDto>{
        
        return this.valorizacion.agregaevidenciafotografica(evidenciaFotograficaDto)

    }

    @Post('creavalorizacion')
    async createValorizacion(){
        const valorizacion:CreateValorizacionDto = {
            obraId:"eba77b76-dd6e-4fde-bf0b-1444050155b2",
            periodos:[
                {
                    panelFotografico:[
                        {
                            descripcionTrabajos:"foto1",
                            partida:"partida1",
                            urlFoto:"url1"
                        },
                        {
                            descripcionTrabajos:"foto2",
                            partida:"partida2",
                            urlFoto:"url2"
                        }
                    ],
                    periodoMes:"marzo",
                    periodoRangoEtiquetas:"A1:M11",
                    periodoSeleccionado:"asd",
                    sumaCostoDirectoActual:10,
                    sumaPorcentajeAcumuladoActual:10,
                    sumaValorizacionActual:20
                        
                    
                },
                {
                    panelFotografico:[
                        {
                            descripcionTrabajos:"foto3",
                            partida:"partida3",
                            urlFoto:"url3"
                        },
                        {
                            descripcionTrabajos:"foto4",
                            partida:"partida4",
                            urlFoto:"url4"
                        }
                    ],
                    periodoMes:"abril",
                    periodoRangoEtiquetas:"A1:M5",
                    periodoSeleccionado:"asd",
                    sumaCostoDirectoActual:50,
                    sumaPorcentajeAcumuladoActual:50,
                    sumaValorizacionActual:50
                        
                    
                }
            ]
        } 
        return this.valorizacion.creaValorizacion(valorizacion)
    }
}
