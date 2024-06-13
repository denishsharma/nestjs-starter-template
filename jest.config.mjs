import { jestBaseConfig } from "./.base/jest.config.mjs";

/** @type {import('jest').Config} */
export default {
    ...jestBaseConfig,
    testRegex: ".*\\.spec\\.ts$",
    collectCoverageFrom: ["**/*.(t|j)s"],
    coverageDirectory: "coverage",
};
