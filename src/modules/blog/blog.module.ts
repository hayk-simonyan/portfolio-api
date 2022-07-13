import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
