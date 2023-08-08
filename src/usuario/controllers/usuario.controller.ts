import { Controller, Get } from '@nestjs/common';

@Controller('usuario')
export class UsuarioController {
    @Get('lista')
    lista(){
        console.log("lista")
        return "lista";
    }
}
