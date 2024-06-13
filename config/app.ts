import * as process from "node:process";

import type { IApplicationConfiguration } from "~bootstrap/config/configuration.schema";
import type { MapConfigurationOf } from "~types/config";

const config: MapConfigurationOf<IApplicationConfiguration> = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
};

export default config;
