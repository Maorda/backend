import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller("say")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("hello")
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("url")
  getUrl(@Req() req:Request): any {
    const protocol = req.protocol;
    const host = req.get("Host");
    const port = req.get('Port')
    const originUrl = req.originalUrl;
    const fullUrl = protocol + host + originUrl;
    console.log(`la ruta completa es:${fullUrl}`);
    return {
      "ruta":fullUrl,
      "puerto":port,
      "otropuerto":process.env.PORT,
      "ip":req.socket.remoteAddress
    }
  }
}
