import { Injectable } from '@nestjs/common';
import { Experience } from './experience.model';
import { NotionService } from 'src/notion/notion.service';

@Injectable()
export class ExperienceService {
  private experience: Experience[] = [];

  async getExperience(): Promise<Experience[]> {
    this.experience = await new NotionService().getExperience<Experience>();
    return [...this.experience];
  }
}
