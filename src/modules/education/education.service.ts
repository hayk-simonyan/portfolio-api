import { Education } from './education.model';
import { Injectable } from '@nestjs/common';
import { NotionService } from 'src/notion/notion.service';

@Injectable()
export class EducationService {
  private education: Education[] = [];

  async getEducation(): Promise<Education[]> {
    this.education = await new NotionService().getEducation<Education>();
    return [...this.education];
  }
}
