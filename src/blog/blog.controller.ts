import { Controller, Get } from '@nestjs/common';
import { MediumArticle } from './blog.model';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  getArticles(): Promise<MediumArticle[]> {
    return this.blogService.getArticles();
  }
}
