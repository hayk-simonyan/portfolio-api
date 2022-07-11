export interface BaseMediumApiResponse {
  data: {
    status: string;
    feed: {
      url: string;
      title: string;
      author: string;
      description: string;
      image: string;
    };
    items: MediumArticle[];
  };
}

export class MediumArticle {
  constructor(
    public author: string,
    public categories: string[],
    public content: string,
    public description: string,
    public enclosure: unknown,
    public guid: string,
    public link: string,
    public pubDate: string,
    public thumbnail: string,
    public title: string,
  ) {}
}
