import { Module } from '@nestjs/common';
import { EducationController } from './education.controller';
import { EducationService } from './education.service';

@Module({
  imports: [],
  controllers: [EducationController],
  providers: [EducationService],
})
export class EducationModule {}
