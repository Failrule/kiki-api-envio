import { Injectable } from '@nestjs/common';
import { Envio } from './envio.interface';

@Injectable()
export class EnviosService {
  private envios: Envio[] = [];
  private idCounter = 1;

  private calcularTarifa(distancia: number): number {
    const tarifaBase = 5; // Tarifa base en unidades monetarias
    const costoPorKm = 0.5; // Costo por kilómetro
    return tarifaBase + distancia * costoPorKm;
  }

  crearEnvio(envioData: Omit<Envio, 'id_envio' | 'tarifa' | 'fecha_envio'>): Envio {
    const nuevoEnvio: Envio = {
      id_envio: this.idCounter++,
      fecha_envio: new Date(),
      tarifa: this.calcularTarifa(envioData.distancia),
      ...envioData,
    };
    this.envios.push(nuevoEnvio);
    return nuevoEnvio;
  }

  obtenerEnvios(): Envio[] {
    return this.envios;
  }
}
