import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Contact } from "./entities/contact.entity";
import { ContactService } from './contact/contact.service';
import { ContactController } from './contact/contact.controller';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            database: "nestngdb",
            username: "root",
            password: "jb395566",
            entities: [__dirname + "/**/*.entity{.ts,.js}"],
            synchronize: true
        }),
        TypeOrmModule.forFeature([Contact])
    ],
    controllers: [AppController, ContactController],
    providers: [AppService, ContactService]
})
export class AppModule {}
