import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BioModule } from './bio/bio.module';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contacts/contact.module';
import { EducationModule } from './education/education.module';
import { ExperienceModule } from './experience/experience.module';
import { LanguageModule } from './languages/language.module';
import { NotionService } from './notion/notion.service';
import { ProjectModule } from './projects/project.module';
import { SkillModule } from './skills/skill.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BioModule,
    BlogModule,
    ContactModule,
    EducationModule,
    ExperienceModule,
    LanguageModule,
    NotionService,
    ProjectModule,
    SkillModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
