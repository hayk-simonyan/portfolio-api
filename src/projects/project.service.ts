import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import { notionToObjectMapper } from 'src/utils/notion';
import { Project } from './project.types';

@Injectable()
export class ProjectService {
  private notionClient = new Client({ auth: process.env.NOTION_API_KEY });

  async getProjects(): Promise<any> {
    const response = await this.notionClient.databases.query({
      database_id: process.env.NOTION_PROJECTS_DATABASE_ID,
    });

    return notionToObjectMapper(response);
  }
}
