import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import { notionToObjectMapper } from 'src/utils/notion';
import { Education } from './education.model';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

@Injectable()
export class EducationService {
  private notionClient = new Client({ auth: process.env.NOTION_API_KEY });
  private education: Education[] = [];

  async getEducation(): Promise<Education[]> {
    const notionEducation = await this.getEducationFromNotionDB();
    this.education = notionToObjectMapper<Education>(notionEducation);
    return [...this.education];
  }

  private async getEducationFromNotionDB(): Promise<QueryDatabaseResponse> {
    return await this.notionClient.databases.query({
      database_id: process.env.NOTION_EDUCATION_DATABASE_ID,
    });
  }
}
