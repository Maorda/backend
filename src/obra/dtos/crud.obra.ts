import { IsString } from "class-validator"
import { UbicacionGeografica, Propietario, Contratista, Residente, Supervisor, Ejecucion, Inversion, Otros } from "../entities/obra.entity";
export class CreaObraDto{
    @IsString()
    usuarioId:string;
    ubicacion_geografica:UbicacionGeografica;
    propietario:Propietario;//la entidad que pide hacer la obra
    contratista:Contratista;
    residente:Residente;
    supervisor:Supervisor;
    ejecucion:Ejecucion;
    inversion:Inversion;
    otros:Otros;
    
}
export class listaObrasDto{}
export class ActualizaObraDto{
    ubicacion_geografica:UbicacionGeografica;
    propietario:Propietario;
    contratista:Contratista;
    residente:Residente;
    supervisor:Supervisor
    ejecucion:Ejecucion
    inversion:Inversion
    otros:Otros
}
export class EliminaObraDto{}