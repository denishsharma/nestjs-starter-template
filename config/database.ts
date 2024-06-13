import * as process from "node:process";

import type { IDatabaseConfiguration } from "~bootstrap/config/configuration.schema";
import type { MapConfigurationOf } from "~types/config";

const config: MapConfigurationOf<IDatabaseConfiguration> = {
    local: {
        type: process.env.DATABASE_LOCAL_TYPE ?? "sqlite",
        database: process.env.DATABASE_LOCAL_NAME ?? "db.sqlite",
    },
};

export default config;
