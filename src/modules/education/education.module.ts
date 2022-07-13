import { EducationController } from './education.controller';
import { EducationService } from './education.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [EducationController],
  providers: [EducationService],
})
export class EducationModule {}
