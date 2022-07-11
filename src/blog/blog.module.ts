import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

@Module({
  imports: [HttpModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
