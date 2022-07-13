import { Controller, Get } from '@nestjs/common';

import { Education } from './education.model';
import { EducationService } from './education.service';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Get()
  getEducation(): Promise<Education[]> {
    return this.educationService.getEducation();
  }
}
