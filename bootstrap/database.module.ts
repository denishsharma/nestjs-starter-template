import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ConfigurationService } from "~bootstrap/config/configuration.service";

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            name: "default",
            imports: [ConfigModule],
            useFactory: (config: ConfigurationService) => {
                return {
                    type: config.db("local.type"),
                    database: `.db/${config.db("local.database")!}`,
                    synchronize: true,
                };
            },
            inject: [ConfigurationService],
        }),
    ],
})
export class DatabaseModule {}
