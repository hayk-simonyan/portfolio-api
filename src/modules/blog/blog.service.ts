import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { MediumArticle, BaseMediumApiResponse } from './blog.model';

@Injectable()
export class BlogService {
  constructor(private readonly httpService: HttpService) {}

  private articles: MediumArticle[] = [];

  async getArticles(): Promise<MediumArticle[]> {
    this.articles = await (await this.fetchMediumArticles()).data.items;
    console.log(await this.fetchMediumArticles());
    return [...this.articles];
  }

  private fetchMediumArticles(): Promise<BaseMediumApiResponse> {
    return this.httpService.axiosRef.get(process.env.MEDIUM_API);
  }
}
