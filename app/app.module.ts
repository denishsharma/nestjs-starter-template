import { Logger, Module } from "@nestjs/common";

import { ApplicationController } from "~app/app.controller";
import { ApplicationService } from "~app/app.service";
import { TodosModule } from "~app/modules/todos/todos.module";
import { ConfigurationService } from "~bootstrap/config/configuration.service";

@Module({
    imports: [TodosModule],
    controllers: [ApplicationController],
    providers: [ApplicationService],
})
export class ApplicationModule {
    constructor(private readonly configService: ConfigurationService) {}
}
