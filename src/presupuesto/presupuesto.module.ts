import { Module } from '@nestjs/common';
import { PresupuestoController } from './controllers/presupuesto.controller';

@Module({
  controllers: [PresupuestoController]
})
export class PresupuestoModule {}
