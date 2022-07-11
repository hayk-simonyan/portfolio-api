import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import { notionToObjectMapper } from 'src/utils/notion';
import { Contact } from './contact.model';

@Injectable()
export class ContactService {
  private notionClient = new Client({ auth: process.env.NOTION_API_KEY });
  private contacts: Contact[] = [];

  async getContacts(): Promise<Contact[]> {
    const notionContacts = await this.getContactsFromNotion();
    this.contacts = notionToObjectMapper<Contact>(notionContacts);
    return [...this.contacts];
  }

  private async getContactsFromNotion() {
    return await this.notionClient.databases.query({
      database_id: process.env.NOTION_CONTACTS_DATABASE_ID,
    });
  }
}
