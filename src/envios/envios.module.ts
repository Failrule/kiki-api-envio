import { Module } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { EnviosController } from './envios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Envio } from './envio.entity';

@Module({
  controllers: [EnviosController],
  providers: [EnviosService],
  imports: [TypeOrmModule.forFeature([Envio])],
})
export class EnviosModule {}
