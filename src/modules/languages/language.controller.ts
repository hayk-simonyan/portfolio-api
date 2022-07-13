import { Controller, Get } from '@nestjs/common';

import { Language } from './language.model';
import { LanguageService } from './language.service';

@Controller('languages')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Get()
  getLanguages(): Promise<Language[]> {
    return this.languageService.getLanguages();
  }
}
