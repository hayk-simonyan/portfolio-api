import { ISkillGroup, Skill } from './skill.model';

import { Injectable } from '@nestjs/common';
import { NotionService } from 'src/notion/notion.service';

@Injectable()
export class SkillService {
  private skills: Skill[] = [];
  private skillGroup: ISkillGroup = {};

  async getSkills(): Promise<ISkillGroup> {
    this.skills = await new NotionService().getSkills<Skill>();
    this.skillGroup = this.groupSkillsByTag(this.skills);
    return { ...this.skillGroup };
  }

  private groupSkillsByTag(skills: Skill[]): ISkillGroup {
    const groupByCategory = skills.reduce((group, skill) => {
      const { category } = skill;
      group[category] = group[category] ?? [];
      group[category].push(skill);
      return group;
    }, {});
    return groupByCategory;
  }
}
