import { Contact } from './contact.model';
import { Injectable } from '@nestjs/common';
import { NotionService } from 'src/notion/notion.service';

@Injectable()
export class ContactService {
  private contacts: Contact[] = [];

  async getContacts(): Promise<Contact[]> {
    this.contacts = await new NotionService().getContacts<Contact>();
    return [...this.contacts];
  }
}
