import { Logger, Module } from "@nestjs/common";

import { ApplicationController } from "~app/app.controller";
import { ApplicationService } from "~app/app.service";
import { ConfigurationService } from "~bootstrap/config/configuration.service";

@Module({
    imports: [],
    controllers: [ApplicationController],
    providers: [ApplicationService],
})
export class ApplicationModule {
    constructor(private readonly configService: ConfigurationService) {
        Logger.log(`App configuration: ${JSON.stringify(this.configService.db("local"))}`, "ApplicationModule");
    }
}
