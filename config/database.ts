import * as process from "node:process";

import { IDatabaseConfiguration } from "~bootstrap/config/configuration.schema";
import { HDatabaseConfigurationKeyValue, HDatabaseConnectionKey, HDatabaseConnectionName, MapConfigurationOf } from "~types/config";

const config = [
    {
        name: "local",
        default: true,
        type: process.env.DATABASE_LOCAL_TYPE ?? "sqlite",
        database: process.env.DATABASE_LOCAL_NAME ?? "db.sqlite",
    },
] as const satisfies MapConfigurationOf<IDatabaseConfiguration>;

export default config;

export type DatabaseConnectionName = HDatabaseConnectionName<typeof config>;
export type DatabaseConnectionKey = HDatabaseConnectionKey<typeof config>;
export type DatabaseConnectionKeyValue<T extends DatabaseConnectionKey> = HDatabaseConfigurationKeyValue<typeof config, T>;
