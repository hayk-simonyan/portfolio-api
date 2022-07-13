import { BaseMediumApiResponse, MediumArticle } from './blog.model';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
  constructor(private readonly httpService: HttpService) {}

  private articles: MediumArticle[] = [];

  async getArticles(): Promise<MediumArticle[]> {
    this.articles = await (await this.fetchMediumArticles()).data.items;
    return [...this.articles];
  }

  private fetchMediumArticles(): Promise<BaseMediumApiResponse> {
    return this.httpService.axiosRef.get(process.env.MEDIUM_API);
  }
}
