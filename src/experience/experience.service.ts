import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import { notionToObjectMapper } from 'src/utils/notion';
import { Experience } from './experience.model';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

@Injectable()
export class ExperienceService {
  private notionClient = new Client({ auth: process.env.NOTION_API_KEY });
  private experience: Experience[] = [];

  async getExperience(): Promise<Experience[]> {
    const notionExperience = await this.getExperienceFromNotionDB();
    this.experience = notionToObjectMapper<Experience>(notionExperience);
    return [...this.experience];
  }

  private async getExperienceFromNotionDB(): Promise<QueryDatabaseResponse> {
    return await this.notionClient.databases.query({
      database_id: process.env.NOTION_EXPERIENCE_DATABASE_ID,
    });
  }
}
