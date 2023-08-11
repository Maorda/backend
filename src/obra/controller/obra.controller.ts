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
    async createObra(@Body() creaObraDto: CreaObraDto): Promise<Obra> {
        const nuevaObra:CreaObraDto={
            contratista: {
                razon_social: "cacapara",
                representante_legal: "alcalde",
                ruc_operador_tributario: "123654"
            },
            ejecucion: {
                fecha_contrato: "30/06/82",
                fecha_entrega_terreno: "31/06/82",
                fecha_inicio_contractual: "01/07/82",
                modalidad: "contrato",
                nro_ajudicacion: "123",
                nro_contrato: "321",
                obra: "mejoramiento",
                plazo_ejecucion_contractual: "60",
                proceso_selección: "asd123",
                sistema_Contrato: "suma alzada"
            },
            inversion: {
                factor_relacion: 1.1,
                fuente_financiamiento: "canon",
                gastos_generales: 0.20,
                igv: 18.5,
                monto_adjudicado_con_igv: 118123.123,
                presupuesto_base: 2123123123.321,
                utilidad: 232132132121.123,
                valor_referencial_con_igv: 3123123123.123
            },
            residente: {
                nombres_apellidos: "colonia ramos",
                numero_colegiatura: "123123"
            },
            supervisor: {
                nombres_apellidos: "cesar augusto",
                numero_colegiatura: "4677654"
            },
            propietario: {
                entidad_contratante: "municipalidad de cascapara",
                gerente_desarrollo: "algun gerente de desarrollo",
            },
            ubicacion_geografica: {
                area_geografica: "A18",
                departamento: "ancash",
                distrito: "independencia",
                localidad: "punta",
                provincia: "huaraz"
            },
            otros: {
                adelanto_directo: false,
                adelanto_materiales: false,
                garantia_fiel_cumplimiento: false
            },
            
            usuarioId: '7df92f6d-b4e6-4d7d-ab1f-2078ddb89507',
             
        }
        creaObraDto = nuevaObra
        
        return this.obraService.creaObra(creaObraDto)
        
    }
  
    @Patch(':obraId')
    async updateObra(@Param('obraId') obraId: string, @Body() actualizaObraDto: ActualizaObraDto): Promise<Obra> {
        return this.obraService.actualizaObra(obraId, actualizaObraDto);
    }
}
