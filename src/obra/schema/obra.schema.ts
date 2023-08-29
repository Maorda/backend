import { Prop, SchemaFactory,Schema } from "@nestjs/mongoose";
import mongoose, { Model,  SchemaTypes,  Types } from "mongoose";
import {Type} from 'class-transformer'

import { UbicacionGeografica, Propietario, Contratista, Residente, Supervisor, Ejecucion, Inversion, Otros } from "../entities/obra.entity";

@Schema()
class UbicacionGeograficaSchema{
    @Prop()
    departamento:string;
    @Prop()
    provincia:string;
    @Prop()
    distrito:string;
    @Prop()
    localidad:string;
    @Prop()
    area_geografica:string;
}
export const UBICACIONGEOGRAFICA_SCHEMA = SchemaFactory.createForClass(UbicacionGeograficaSchema)
export type UbicacionGeograficaDocument = UbicacionGeograficaSchema & Document
export type UbicacionGeograficaModel = Model<UbicacionGeograficaSchema>


@Schema()
class PropietarioSchema{
    @Prop()
    entidad_contratante	:string;
    @Prop()
    gerente_desarrollo:string;	
}
export const PROPIETARIO_SCHEMA = SchemaFactory.createForClass(PropietarioSchema)
export type PropietarioDocument = PropietarioSchema & Document
export type PropietarioModel = Model<PropietarioSchema>


@Schema()
class ContratistaSchema{
    @Prop()
    representante_legal:string;		
    @Prop()
    ruc_operador_tributario	:string;	
    @Prop()
    razon_social:string;
}


export const CONTRATISTA_SCHEMA = SchemaFactory.createForClass(ContratistaSchema)
export type ContratistaDocument = ContratistaSchema & Document
export type ContratistaModel = Model<ContratistaSchema>


@Schema()
class ResidenteSchema{
    @Prop()
    nombres_apellidos:string;			
    @Prop()
    numero_colegiatura:string;


}
export const RESIDENTE_SCHEMA = SchemaFactory.createForClass(ResidenteSchema)
export type ResidenteDocument = ResidenteSchema & Document
export type ResidenteModel = Model<ResidenteSchema>


@Schema()
class SupervisorSchema{
    @Prop()
    nombres_apellidos:string;			
    @Prop()
    numero_colegiatura:string;

}
export const SUPERVISOR_SCHEMA = SchemaFactory.createForClass(SupervisorSchema)
export type SupervisorDocument = SupervisorSchema & Document
export type SupervisorModel = Model<SupervisorSchema>


@Schema()
class EjecucionSchema{
    @Prop()
    obra:string;		
    @Prop()
    nro_ajudicacion	:string;	
    @Prop()
    proceso_selección:string;		
    @Prop()
    modalidad	:string;	
    @Prop()
    sistema_Contrato:string;		
    @Prop()
    nro_contrato	:string;	
    @Prop()
    fecha_entrega_terreno:string;		
    @Prop()
    fecha_contrato		:string;
    @Prop()
    fecha_inicio_contractual	:string;	
    @Prop()
    plazo_ejecucion_contractual:string;
}
export const EJECUCION_SCHEMA = SchemaFactory.createForClass(EjecucionSchema)
export type EjecucionDocument = EjecucionSchema & Document
export type EjecucionModel = Model<EjecucionSchema>


@Schema()
class InversionSchema{
    @Prop()
    valor_referencial_con_igv:number;
    @Prop()
    monto_adjudicado_con_igv:number;
    @Prop()
    factor_relacion	:number;
    @Prop()
    presupuesto_base	:number;
    @Prop()
    fuente_financiamiento	:string
    @Prop()
    gastos_generales:number;
    @Prop()
    utilidad	:number;
    @Prop()
    igv:number;
}
export const INVERSION_SCHEMA = SchemaFactory.createForClass(InversionSchema)
export type InversionDocument = InversionSchema & Document
export type InversionModel = Model<InversionSchema>


@Schema()
class OtrosSchema{
    @Prop()
    garantia_fiel_cumplimiento:boolean;
    @Prop()
    adelanto_directo:boolean;
    @Prop()
    adelanto_materiales:boolean;

}
export const OTROS_SCHEMA = SchemaFactory.createForClass(OtrosSchema)
export type OtrosDocument = OtrosSchema & Document
export type OtrosModel = Model<OtrosSchema>


@Schema()
export class ObraSchema {
    @Prop({required: true, unique: true, type: mongoose.Schema.Types.ObjectId })
    obraId:mongoose.Schema.Types.ObjectId;
    @Prop()
    usuarioId:string
    
    @Prop({type:UBICACIONGEOGRAFICA_SCHEMA})
    @Type(()=>UbicacionGeografica)
    ubicacion_geografica:UbicacionGeografica;
    
    @Prop({type:PROPIETARIO_SCHEMA})
    @Type(()=>Propietario)
    propietario:Propietario;
    
    @Prop({type:CONTRATISTA_SCHEMA})
    @Type(()=>Contratista)
    contratista:Contratista;
    
    @Prop({type:RESIDENTE_SCHEMA})
    @Type(()=>Residente)
    residente:Residente;
    
    @Prop({type:SUPERVISOR_SCHEMA})
    @Type(()=>Supervisor)
    supervisor:Supervisor
    
    @Prop({type:EJECUCION_SCHEMA})
    @Type(()=>Ejecucion)
    ejecucion:Ejecucion
    
    @Prop({type:INVERSION_SCHEMA})
    @Type(()=>Inversion)
    inversion:Inversion
    
    @Prop({type:OTROS_SCHEMA})
    @Type(()=>Otros)
    otros:Otros

}

export const OBRA_SCHEMA = SchemaFactory.createForClass(ObraSchema)
export type ObraDocument = ObraSchema & Document
export type ObraModel = Model<ObraSchema>