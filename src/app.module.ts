import { BioModule } from './modules/bio/bio.module';
import { BlogModule } from './modules/blog/blog.module';
import { ConfigModule } from '@nestjs/config';
import { ContactModule } from './modules/contacts/contact.module';
import { EducationModule } from './modules/education/education.module';
import { ExperienceModule } from './modules/experience/experience.module';
import { LanguageModule } from './modules/languages/language.module';
import { Module } from '@nestjs/common';
import { ProjectModule } from './modules/projects/project.module';
import { SkillModule } from './modules/skills/skill.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BioModule,
    BlogModule,
    ContactModule,
    EducationModule,
    ExperienceModule,
    LanguageModule,
    ProjectModule,
    SkillModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
