import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BioModule } from './bio/bio.module';
import { EducationModule } from './education/education.module';
import { ExperienceModule } from './experience/experience.module';
import { LanguageModule } from './languages/language.module';
import { ProjectModule } from './projects/project.module';
import { SkillModule } from './skills/skill.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BioModule,
    EducationModule,
    ExperienceModule,
    LanguageModule,
    ProjectModule,
    SkillModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
