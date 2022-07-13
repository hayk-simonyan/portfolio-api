import { LanguageController } from './language.controller';
import { LanguageService } from './language.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [LanguageController],
  providers: [LanguageService],
})
export class LanguageModule {}
