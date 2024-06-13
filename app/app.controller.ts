import { Controller, Get } from "@nestjs/common";

import { ApplicationService } from "~app/app.service";

@Controller()
export class ApplicationController {
    constructor(public readonly appService: ApplicationService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
