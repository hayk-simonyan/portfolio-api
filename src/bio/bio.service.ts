import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import { notionBlockParser } from 'src/utils/notion';

@Injectable()
export class BioService {
  private notionClient = new Client({ auth: process.env.NOTION_API_KEY });
  private bio: string;

  async getBio(): Promise<string> {
    const notionBioBlock = await this.getBioFromNotion();
    this.bio = notionBlockParser(notionBioBlock);
    return this.bio;
  }

  private async getBioFromNotion() {
    return await this.notionClient.blocks.retrieve({
      block_id: process.env.NOTION_BIO_BLOCK_ID,
    });
  }
}
