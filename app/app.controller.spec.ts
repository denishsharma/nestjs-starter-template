import { Test } from "@nestjs/testing";

import type { TestingModule } from "@nestjs/testing";

import { ApplicationController } from "~app/app.controller";
import { ApplicationService } from "~app/app.service";

describe("application controller", () => {
    let applicationController: ApplicationController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [ApplicationController],
            providers: [ApplicationService],
        }).compile();

        applicationController = app.get<ApplicationController>(ApplicationController);
    });

    describe("root", () => {
        it("should return \"Hello World!\"", () => {
            expect(applicationController.getHello()).toBe("Hello World!");
        });
    });
});
