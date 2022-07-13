import { Controller, Get } from '@nestjs/common';

import { ISkillGroup } from './skill.model';
import { SkillService } from './skill.service';

@Controller('skills')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Get()
  getSkills(): Promise<ISkillGroup> {
    return this.skillService.getSkills();
  }
}
