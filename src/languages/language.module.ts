import { Module } from '@nestjs/common';
import { LanguageController } from './language.controller';
import { LanguageService } from './language.service';

@Module({
  imports: [],
  controllers: [LanguageController],
  providers: [LanguageService],
})
export class LanguageModule {}
