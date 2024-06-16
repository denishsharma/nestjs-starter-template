import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { App } from "supertest/types";

import { ApplicationModule } from "~app/app.module";
import { BootstrapModule } from "~bootstrap/bootstrap.module";

describe("ApplicationController (e2e)", () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [BootstrapModule, ApplicationModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it("/ (GET)", () => {
        return request(app.getHttpServer() as unknown as App)
            .get("/")
            .expect(200)
            .expect("Hello World!");
    });
});
