import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './projects/project.module';
import { SkillModule } from './skills/skill.module';

@Module({
  imports: [ConfigModule.forRoot(), ProjectModule, SkillModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
