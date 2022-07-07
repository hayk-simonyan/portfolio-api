import { Module } from '@nestjs/common';
import { ExperienceController } from './experience.controller';
import { ExperienceService } from './experience.service';

@Module({
  imports: [],
  controllers: [ExperienceController],
  providers: [ExperienceService],
})
export class ExperienceModule {}
