import { Periodo } from "../entities/valorizacion.entity";

export class CreateValorizacionDto{
    obraId:string;
    periodos:Periodo[];
}
export class ActualizaValorizacionDto{
    periodos:Periodo[]
}
export class EvidenciaFotograficaDto {
    partida:string;
    descripcionTrabajos:string;
    urlFoto:string;

}
export class Agregaevidenciafotografica{
    obraId:string;
    periodoMes:string
}