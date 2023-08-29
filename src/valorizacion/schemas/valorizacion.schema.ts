import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import mongoose, {  Document, Model, ObjectId } from 'mongoose'
import { EvidenciaFotografica, Periodo, Valorizacion } from "../entities/valorizacion.entity";

@Schema()
export class EvidenciaFotograficaSchema{
    @Prop()
    partida:string;
    @Prop()
    descripcionTrabajos:string;
    @Prop()
    urlFoto:string;
}
export const EVIDENCIAFOTOGRAFICA_SCHEMA = SchemaFactory.createForClass(EvidenciaFotograficaSchema)

@Schema()
export class PeriodoSchema{
    @Prop()
    periodoSeleccionado:string;
    @Prop()
    periodoMes:string;
    @Prop()
    periodoRangoEtiquetas:string;
    @Prop()
    sumaValorizacionActual:number;
    @Prop()
    sumaPorcentajeAcumuladoActual:number;
    @Prop()
    sumaCostoDirectoActual:number;
    
    @Prop([EvidenciaFotografica])
    panelFotografico:EvidenciaFotografica[]
}

export const PERIODO_SCHEMA = SchemaFactory.createForClass(PeriodoSchema)


@Schema()
export class ValorizacionSchema{
    @Prop({type:mongoose.Schema.Types.ObjectId})
    obraId:mongoose.Schema.Types.ObjectId;

    @Prop([Periodo])
    periodos:Periodo[]
}
export const VALORIZACION_SCHEMA = SchemaFactory.createForClass(ValorizacionSchema)
export type ValorizacionDocument = ValorizacionSchema & Document
export type ValorizacionModel = Model<ValorizacionSchema>
