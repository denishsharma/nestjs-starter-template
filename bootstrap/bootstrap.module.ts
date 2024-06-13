import { Module } from "@nestjs/common";

import { ApplicationModule } from "~app/app.module";
import { ConfigurationModule } from "~bootstrap/config/configuration.module";
import { DatabaseModule } from "~bootstrap/database.module";

@Module({
    imports: [ConfigurationModule, DatabaseModule, ApplicationModule],
})
export class BootstrapModule {}
