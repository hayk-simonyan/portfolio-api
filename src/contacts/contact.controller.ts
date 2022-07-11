import { Controller, Get } from '@nestjs/common';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  getContacts(): Promise<Contact[]> {
    return this.contactService.getContacts();
  }
}
