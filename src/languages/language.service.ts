import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import { notionToObjectMapper } from 'src/utils/notion';
import { Language } from './language.model';

@Injectable()
export class LanguageService {
  private notionClient = new Client({ auth: process.env.NOTION_API_KEY });
  private languages: Language[] = [];

  async getLanguages(): Promise<Language[]> {
    const notionLanguages = await this.getLanguagesFromNotion();
    this.languages = notionToObjectMapper<Language>(notionLanguages);
    return [...this.languages];
  }

  private async getLanguagesFromNotion() {
    return await this.notionClient.databases.query({
      database_id: process.env.NOTION_LANGUAGES_DATABASE_ID,
    });
  }
}
