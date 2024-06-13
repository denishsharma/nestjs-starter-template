import { jestBaseConfig } from "./.base/jest.config.mjs";

/** @type {import('jest').Config} */
export default {
    ...jestBaseConfig,
    testRegex: ".e2e-spec.ts$",
};
