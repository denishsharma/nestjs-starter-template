import * as process from "node:process";

import { IApplicationConfiguration } from "~bootstrap/config/configuration.schema";
import { MapConfigurationOf } from "~types/config";

const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
} as const satisfies MapConfigurationOf<IApplicationConfiguration>;

export default config;
