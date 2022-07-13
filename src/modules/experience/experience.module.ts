import { ExperienceController } from './experience.controller';
import { ExperienceService } from './experience.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ExperienceController],
  providers: [ExperienceService],
})
export class ExperienceModule {}
