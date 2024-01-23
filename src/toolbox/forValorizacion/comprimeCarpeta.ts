import { COMPRESSION_LEVEL, zip } from "zip-a-folder";
import  * as path from 'path';

export class compressIntereFolder{
    static  main(usuarioId:string | { [key: string]: any; },obraId:string,mesSeleccionado:string="Enero"){
        console.log(`${path.join(process.cwd(),`./uploads/${usuarioId}/${obraId}`)}`)
      return zip(`${path.join(process.cwd(),`./uploads/${usuarioId}/${obraId}/SEPARADOR`)}`,`${path.join(process.cwd(),`./uploads/${usuarioId}/${obraId}`)}/valorizacion.zip`,{compression:COMPRESSION_LEVEL.high})
      //console.log(`${__dirname}/projects/${carpeta.idusuario}/${carpeta.idproyecto}/consolidado`)
      //return zip(`${__dirname}/projects/${carpeta.idusuario}/${carpeta.idproyecto}/consolidado`,`${__dirname}/projects/${carpeta.idusuario}/${carpeta.idproyecto}/consolidado.zip`,{compression:COMPRESSION_LEVEL.high})
    }
  }
  