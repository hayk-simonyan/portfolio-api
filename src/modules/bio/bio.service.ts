import { Injectable } from '@nestjs/common';
import { NotionService } from 'src/notion/notion.service';

@Injectable()
export class BioService {
  private bio: string;

  async getBio(): Promise<string> {
    this.bio = await new NotionService().getBio();
    return this.bio;
  }
}
