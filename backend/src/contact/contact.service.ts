import { Injectable } from "@nestjs/common";
import { Respository, UpdateResult, DeleteResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Contact } from "../entities/contact.entity";

@Injectable()
export class ContactService {
    constructor(
        @InjectRepository(Contact)
        private contactRepository: Respository<Contact>
    ) {}

    async create(contact: Contact): Promise<Contact> {
        return await this.contactRepository.save(contact);
    }

    async readAll(): Promise<Contact[]> {
        return await this.contactRepository.find();
    }

    async update(contact: Contact): Promise<UpdateResult> {
        return await this.contactRepository.update(contact);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.contactRepository.delete(id);
    }
}
