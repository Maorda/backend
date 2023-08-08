import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreaUsuarioDto, ActualizaUsuarioDto } from '../dtos/crud.usuario';
import { Usuario } from '../entities/entidad.usuario';
import { UsuarioService } from '../services/servicios.usuario';

@Controller('usuario')
export class UsuarioController {
    constructor(
        private usuarioservice:UsuarioService
    ){}
    //rutas staticas
    @Get("listausuarios")
    async getUsers(): Promise<Usuario[]> {
        return this.usuarioservice.listaUsuarios();
    }
    @Get("listausuarios1")
    async getUsers1(): Promise<Usuario[]> {
        return this.usuarioservice.listaUsuarios();
    }
    @Get("accion")
    async adicional():Promise<string>{
        console.log("adicional")
        return "adicional"
    }
    //rutas dinamicas
    @Get(':usuarioId')
    async getUser(@Param('usuarioId') userId: string): Promise<Usuario> {
      return this.usuarioservice.buscaById(userId);
    }
    
    
    @Post()
    async createUser(@Body() creaUsuarioDto: CreaUsuarioDto): Promise<Usuario> {
        return this.usuarioservice.creaUsuario(creaUsuarioDto)
    }
      
    @Patch(':usuarioId')
    async updateUser(@Param('usuarioId') usuarioId: string, @Body() actualizaUsuarioDto: ActualizaUsuarioDto): Promise<Usuario> {
        return this.usuarioservice.actualizaUsuario(usuarioId, actualizaUsuarioDto);
    }
    
  
   
}
