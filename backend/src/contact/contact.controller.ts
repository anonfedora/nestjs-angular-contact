import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param
} from "@nestjs/common";
import { Contact } from "../entities/contact.entity";
import { ContactService } from "contact.service";

@Controller("contact")
export class ContactController {
    constructor(private contactService: ContactService) {}

    @Get()
    read(): Promise<Contact[]> {
        return await this.contactService.read();
    }

    @Post("create")
    async create(@Body() contact: Contact): Promise<Contact> {
        return await this.contactService.create(contact);
    }

    @Put(":id/update")
    async update(@Param("id") id, @Body() contact: Contact): Promise<any> {
        return this.contactService.update(contact);
    }

    @Delete(":id/delete")
    async delete(@Param("id") id): Promise<any> {
        return this.contactService.delete(id);
    }
}
