import { Controller, Get, Post, Body } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { Envio } from './envio.interface';
import { CreateEnvioDto } from './dto/create-envio.dto';

@Controller('envios')
export class EnviosController {
  constructor(private readonly enviosService: EnviosService) {}

  @Post()
  crearEnvio(@Body() createEnvioDto: Omit<Envio, 'id_envio' | 'tarifa' | 'fecha_envio'>): Envio {
    return this.enviosService.crearEnvio(createEnvioDto);
  }

  @Get()
  obtenerEnvios(): Envio[] {
    return this.enviosService.obtenerEnvios();
  }
}
