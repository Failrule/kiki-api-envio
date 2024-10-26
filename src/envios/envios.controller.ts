import { Controller, Get, Post, Body } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { Envio } from './envio.interface';
import { CreateEnvioDto } from './dto/create-envio.dto';

@Controller('envios')
export class EnviosController {
  constructor(private readonly enviosService: EnviosService) {}

  @Post()
  async crearEnvio(@Body() createEnvioDto: CreateEnvioDto): Promise<Envio> {
    return await this.enviosService.crearEnvio(createEnvioDto);
  }

  @Get()
  async obtenerEnvios(): Promise<Envio[]> {
    return await this.enviosService.obtenerEnvios();
  }
}
