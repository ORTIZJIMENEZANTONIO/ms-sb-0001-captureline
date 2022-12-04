import { Module } from '@nestjs/common';
import { PkComerLcController } from './pk-comer-lc.controller';
import { PkComerLcService } from './pk-comer-lc.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComerParametrosmodEntity } from './entitis/ComerParametrosmod.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComerParametrosmodEntity])],
  controllers: [PkComerLcController],
  providers: [PkComerLcService]
})
export class PkComerLcModule { }
