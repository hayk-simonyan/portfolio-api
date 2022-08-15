import { Client } from '@notionhq/client';
import { Injectable } from '@nestjs/common';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

@Injectable()
export class NotionService {
  private notionClient = new Client({ auth: process.env.NOTION_API_KEY });

  public async getBio(): Promise<string> {
    const bio = await this.notionClient.blocks.retrieve({
      block_id: process.env.NOTION_BIO_BLOCK_ID,
    });
    return this.notionBlockParser(bio);
  }

  public async getContacts<T>(): Promise<T[]> {
    const contacts = await this.notionClient.databases.query({
      database_id: process.env.NOTION_CONTACTS_DATABASE_ID,
      sorts: [{ property: 'name', direction: 'descending' }],
    });
    return this.notionToObjectMapper<T>(contacts);
  }

  public async getEducation<T>(): Promise<T[]> {
    const education = await this.notionClient.databases.query({
      database_id: process.env.NOTION_EDUCATION_DATABASE_ID,
      sorts: [{ property: 'dates', direction: 'descending' }],
    });
    return this.notionToObjectMapper<T>(education);
  }

  public async getExperience<T>(): Promise<T[]> {
    const experience = await this.notionClient.databases.query({
      database_id: process.env.NOTION_EXPERIENCE_DATABASE_ID,
      sorts: [{ property: 'dates', direction: 'descending' }],
    });
    return this.notionToObjectMapper<T>(experience);
  }

  public async getLanguages<T>(): Promise<T[]> {
    const languages = await this.notionClient.databases.query({
      database_id: process.env.NOTION_LANGUAGES_DATABASE_ID,
      sorts: [{ property: 'language', direction: 'ascending' }],
    });
    return this.notionToObjectMapper<T>(languages);
  }

  public async getProjects<T>(): Promise<T[]> {
    const projects = await this.notionClient.databases.query({
      database_id: process.env.NOTION_PROJECTS_DATABASE_ID,
    });
    return this.notionToObjectMapper<T>(projects);
  }

  public async getSkills<T>(): Promise<T[]> {
    const skills = await this.notionClient.databases.query({
      database_id: process.env.NOTION_SKILLS_DATABASE_ID,
    });
    return this.notionToObjectMapper<T>(skills);
  }

  private notionToObjectMapper<T>(response: QueryDatabaseResponse): T[] {
    const objects = [];
    response.results.forEach((result: any) => {
      const object = new Object({ id: result.id });
      const properties = result.properties;

      if (result.icon) {
        object['icon'] = result.icon[result.icon.type];
      }

      Object.keys(properties).forEach((property: any) => {
        const type = properties[property].type;
        const column = properties[property][type]
          ? properties[property][type][0]
          : null;

        // console.log(properties[property][type]);

        switch (type) {
          case 'date':
            object[property] = properties[property][type];
            break;
          case 'url':
            object[property] = properties[property][type];
            break;
          case 'multi_select':
            object[property] = column?.name;
            break;
          default:
            object[property] = column?.plain_text;
        }
      });
      objects.push(object);
    });
    return objects as any;
  }

  private notionBlockParser(response): string {
    return response.paragraph.rich_text[0].text.content;
  }
}
