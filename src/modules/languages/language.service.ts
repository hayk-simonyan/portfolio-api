import { Injectable } from '@nestjs/common';
import { Language } from './language.model';
import { NotionService } from 'src/notion/notion.service';

@Injectable()
export class LanguageService {
  private languages: Language[] = [];

  async getLanguages(): Promise<Language[]> {
    this.languages = await new NotionService().getLanguages<Language>();
    return [...this.languages];
  }
}
