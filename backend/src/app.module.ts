import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            database: "nestngdb",
            username: "root",
            password: "jb395566",
            entities: [__dirname + "/**/*.entity{.ts,.js}"],
            synchronize: true
        })
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
