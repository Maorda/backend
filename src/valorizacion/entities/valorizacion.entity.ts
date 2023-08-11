export class EvidenciaFotografica{
    partida:string;
    descripcionTrabajos:string;
    urlFoto:string;
}
export class Periodo{
    periodoSeleccionado:string;
    periodoMes:string;
    periodoRangoEtiquetas:string;
    sumaValorizacionActual:number;
    sumaPorcentajeAcumuladoActual:number;
    sumaCostoDirectoActual:number;
    panelFotografico:EvidenciaFotografica[]

}
export class Valorizacion{
    obraId:string;
    periodos:Periodo[];
}