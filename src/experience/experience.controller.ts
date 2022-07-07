import { Controller, Get } from '@nestjs/common';
import { Experience } from './experience.model';
import { ExperienceService } from './experience.service';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  getExperience(): Promise<Experience[]> {
    return this.experienceService.getExperience();
  }
}
