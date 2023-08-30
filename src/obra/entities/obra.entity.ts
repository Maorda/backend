import { Prop } from '@nestjs/mongoose';
export class UbicacionGeografica{
    departamento:string;
    provincia:string;
    distrito:string;
    localidad:string;
    area_geografica:string;
}
export class Propietario{
    entidad_contratante	:string;
    gerente_desarrollo:string;	
}
export class Contratista{
    representante_legal:string;		
    ruc_operador_tributario	:string;	
    razon_social:string;
}
export class Residente{
    nombres_apellidos:string;			
    numero_colegiatura:string;


}
export class Supervisor{
    nombres_apellidos:string;			
    numero_colegiatura:string;

}
export class Ejecucion{
    obra:string;		
    nro_ajudicacion	:string;	
    proceso_seleccion:string;		
    modalidad	:string;	
    sistema_Contrato:string;		
    nro_contrato	:string;	
    fecha_entrega_terreno:string;		
    fecha_contrato		:string;
    fecha_inicio_contractual	:string;	
    plazo_ejecucion_contractual:string;
}
export class Inversion{
    
    valor_referencial_con_igv:any;
    monto_adjudicado_con_igv:any;
    factor_relacion	:any;
    presupuesto_base	:any;
    fuente_financiamiento	:string
    gastos_generales:any;
    utilidad	:any;
    igv:any;
}
export class Otros{
    garantia_fiel_cumplimiento:boolean;
    adelanto_directo:boolean;
    adelanto_materiales:boolean;

}
export class Obra {
    usuarioId:string;
    obraId:string
    ubicacion_geografica:UbicacionGeografica;
    propietario:Propietario;
    contratista:Contratista;
    residente:Residente;
    supervisor:Supervisor;
    ejecucion:Ejecucion;
    inversion:Inversion;
    otros:Otros;
    
}