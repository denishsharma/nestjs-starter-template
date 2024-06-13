/** @type {import("jest").Config} */
export const jestBaseConfig = {
    verbose: true,
    moduleFileExtensions: ["js", "json", "ts"],
    rootDir: ".",
    moduleNameMapper: {
        "~app/(.*)": "<rootDir>/app/$1",
        "~bootstrap/(.*)": "<rootDir>/bootstrap/$1",
        "~config/(.*)": "<rootDir>/config/$1",
        "~kernel/(.*)": "<rootDir>/kernel/$1",
        "~types/(.*)": "<rootDir>/types/$1",
        "~utils/(.*)": "<rootDir>/utils/$1",
    },
    transform: {
        "^.+\\.(t|j)s$": "ts-jest",
    },
    testEnvironment: "node",
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/dist/",
        "/test/",
        "/coverage/",
        "/.vscode/",
        "/.base/",
    ],
};
