import { IsString, IsNumber, Min, MaxLength } from 'class-validator';

export class CreateEnvioDto {
  @IsString()
  @MaxLength(100)
  destinatario: string;

  @IsString()
  @MaxLength(100)
  remitente: string;

  @IsString()
  @MaxLength(255)
  contenido: string;

  @IsNumber()
  @Min(0)
  distancia: number;
}
