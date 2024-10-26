import { Injectable } from '@nestjs/common';
import { Envio } from './envio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEnvioDto } from './dto/create-envio.dto';

@Injectable()
export class EnviosService {

  constructor(
    @InjectRepository(Envio)
    private readonly envioRepository: Repository<Envio>,
  ) {}

  private calcularTarifa(distancia: number): number {
    const tarifaBase = 5;
    const costoPorKm = 0.5;
    const tarifaTotal = tarifaBase + (distancia * costoPorKm);
    return tarifaTotal;
  }

  async crearEnvio(createEnvioDto: CreateEnvioDto): Promise<Envio> {
    const tarifa = this.calcularTarifa(createEnvioDto.distancia);
    const nuevoEnvio = this.envioRepository.create({
      ...createEnvioDto,
      tarifa,
      fecha_envio: new Date(),
    });
    return await this.envioRepository.save(nuevoEnvio);
  }

  async obtenerEnvios(): Promise<Envio[]> {
    return await this.envioRepository.find();
  }
}
