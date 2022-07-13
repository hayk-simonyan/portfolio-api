import { BioController } from './bio.controller';
import { BioService } from './bio.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [BioController],
  providers: [BioService],
})
export class BioModule {}
