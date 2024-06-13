import { Module } from "@nestjs/common";

import { ApplicationModule } from "~app/app.module";
import { ConfigurationModule } from "~bootstrap/config/configuration.module";

@Module({
    imports: [ConfigurationModule, ApplicationModule],
})
export class BootstrapModule {}
