import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { configurationSchema } from "~bootstrap/config/configuration.schema";
import { ConfigurationService } from "~bootstrap/config/configuration.service";
import appConfig from "~config/app";
import dbConfig from "~config/database";

function loadParsedConfiguration() {
    const config = {
        app: appConfig,
        db: dbConfig,
    };
    return configurationSchema.parse(config);
}

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            load: [loadParsedConfiguration],
            ignoreEnvVars: true,
            ignoreEnvFile: true,
        }),
    ],
    providers: [ConfigurationService],
    exports: [ConfigurationService],
})
export class ConfigurationModule {}
