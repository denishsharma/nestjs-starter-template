import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { IConfiguration, IDatabaseConfiguration } from "~bootstrap/config/configuration.schema";
import { DatabaseConnectionKey, DatabaseConnectionKeyValue } from "~config/database";
import { HConfigurationKeyOf, HConfigurationValueType } from "~types/config";

@Injectable()
export class ConfigurationService {
    constructor(private readonly configService: ConfigService) {}

    get<T extends HConfigurationKeyOf<IConfiguration>>(key: T): HConfigurationValueType<IConfiguration, T> {
        return this.configService.get(key) as HConfigurationValueType<IConfiguration, T>;
    }

    app<T extends HConfigurationKeyOf<IConfiguration["app"]>>(key: T): HConfigurationValueType<IConfiguration["app"], T> {
        return this.get(`app.${key}`) as HConfigurationValueType<IConfiguration["app"], T>;
    }

    db<T extends DatabaseConnectionKey>(key: T): DatabaseConnectionKeyValue<T> {
        const configList = this.configService.get<IDatabaseConfiguration>("db");
        if (!configList) {
            throw new Error("Database configuration not found");
        }

        const keys = key.split(".");
        const connectionName = keys.length === 1 ? key : keys[0];

        const dbConfig = configList.find(config => config.name === connectionName);
        if (!dbConfig) {
            throw new Error(`Database configuration not found for ${key}`);
        }

        if (keys.length === 1) {
            return dbConfig as unknown as DatabaseConnectionKeyValue<T>;
        }

        return dbConfig[keys[1] as keyof typeof dbConfig] as unknown as DatabaseConnectionKeyValue<T>;
    }
}
