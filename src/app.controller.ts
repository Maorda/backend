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
  getUrl(@Req() req:Request): void {
    const protocol = req.protocol;
    const host = req.get("Host");
    const originUrl = req.originalUrl;
    const fullUrl = protocol + host + originUrl;
    console.log(fullUrl);
  }
}
