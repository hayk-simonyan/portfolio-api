import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import { notionToObjectMapper } from 'src/utils/notion';
import { ISkillGroup, Skill } from './skill.model';

@Injectable()
export class SkillService {
  private notionClient = new Client({ auth: process.env.NOTION_API_KEY });
  private skills: Skill[] = [];
  private skillGroup: ISkillGroup = {};

  async getSkills(): Promise<ISkillGroup> {
    const notionSkills = await this.getSkillsFromNotion();
    this.skills = notionToObjectMapper<Skill>(notionSkills);
    this.skillGroup = this.groupSkillsByTag(this.skills);
    return { ...this.skillGroup };
  }

  private async getSkillsFromNotion() {
    return await this.notionClient.databases.query({
      database_id: process.env.NOTION_SKILLS_DATABASE_ID,
    });
  }

  private groupSkillsByTag(skills: Skill[]): ISkillGroup {
    const groupByCategory = skills.reduce((group, skill) => {
      const { category } = skill;
      console.log(skill);
      group[category] = group[category] ?? [];
      group[category].push(skill);
      return group;
    }, {});
    return groupByCategory;
  }
}
