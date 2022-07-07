import { Controller, Get } from '@nestjs/common';
import { BioService } from './bio.service';

@Controller('bio')
export class BioController {
  constructor(private readonly bioService: BioService) {}

  @Get()
  getBio(): Promise<string> {
    return this.bioService.getBio();
  }
}
