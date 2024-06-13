import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { BootstrapModule } from "~bootstrap/bootstrap.module";
import { ConfigurationService } from "~bootstrap/config/configuration.service";

async function bootstrap() {
    const app = await NestFactory.create(BootstrapModule);
    const configService = app.get(ConfigurationService);
    await app.listen(configService.get("app.port"));

    Logger.log(`Server running on http://localhost:${configService.get("app.port")}`, "BootstrapKernel");
}

void bootstrap();
