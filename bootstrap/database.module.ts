import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";

import { Todo } from "~app/modules/todos/entities/todo.entity";
import { ConfigurationService } from "~bootstrap/config/configuration.service";

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            name: "default",
            imports: [ConfigModule],
            useFactory: (config: ConfigurationService) => {
                return {
                    name: config.db("local.default") ? "default" : config.db("local.name"),
                    type: config.db("local.type"),
                    database: `.db/${config.db("local.database")}`,
                    entities: [Todo],
                    synchronize: true,
                };
            },
            inject: [ConfigurationService],
        }),
    ],
})
export class DatabaseModule {}
