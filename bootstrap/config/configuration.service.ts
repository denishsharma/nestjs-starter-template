import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import type { ConfigurationKeyOf, ConfigurationValueType } from "~types/config";

import { IConfiguration } from "~bootstrap/config/configuration.schema";

@Injectable()
export class ConfigurationService {
    constructor(private readonly configService: ConfigService) {}

    get<T extends ConfigurationKeyOf<IConfiguration>>(key: T): ConfigurationValueType<IConfiguration, T> {
        return this.configService.get(key) as ConfigurationValueType<IConfiguration, T>;
    }

    app<T extends ConfigurationKeyOf<IConfiguration["app"]>>(key: T): ConfigurationValueType<IConfiguration["app"], T> {
        return this.get("app")[key] as ConfigurationValueType<IConfiguration["app"], T>;
    }

    db<T extends ConfigurationKeyOf<IConfiguration["db"]>>(key: T): ConfigurationValueType<IConfiguration["db"], T> {
        return this.get("db")[key] as ConfigurationValueType<IConfiguration["db"], T>;
    }
}
