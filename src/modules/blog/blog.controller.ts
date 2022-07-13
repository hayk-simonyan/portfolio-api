import { Controller, Get } from '@nestjs/common';

import { BlogService } from './blog.service';
import { MediumArticle } from './blog.model';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  getArticles(): Promise<MediumArticle[]> {
    return this.blogService.getArticles();
  }
}
