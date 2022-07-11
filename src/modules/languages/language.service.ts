import { Injectable } from '@nestjs/common';
import { NotionService } from 'src/notion/notion.service';
import { Language } from './language.model';

@Injectable()
export class LanguageService {
  private languages: Language[] = [];

  async getLanguages(): Promise<Language[]> {
    this.languages = await new NotionService().getLanguages<Language>();
    return [...this.languages];
  }
}
