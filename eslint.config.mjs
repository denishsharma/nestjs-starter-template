import antfu from "@antfu/eslint-config";

export default antfu({
    formatters: true,
    stylistic: {
        indent: 4,
        quotes: "double",
        semi: true,
        overrides: {
            "style/array-bracket-newline": ["error", { multiline: true }],
            "style/array-element-newline": ["error", "consistent"],
            "style/brace-style": ["error", "1tbs", { allowSingleLine: true }],
            "style/max-statements-per-line": ["error", { max: 2 }],
            "style/function-call-argument-newline": ["error", "consistent"],
            "style/no-mixed-operators": "error",
            "style/no-mixed-spaces-and-tabs": "error",
            "style/no-tabs": "error",
        },
    },
    typescript: {
        tsconfigPath: "./tsconfig.json",
        parserOptions: {
            project: "./tsconfig.json",
            sourceType: "module",
        },
        overrides: {
            "ts/explicit-module-boundary-types": "error",
        },
    },
    rules: {
        "antfu/if-newline": "off",
        "import/order": [
            "error",
            {
                "newlines-between": "always",
                "groups": [
                    ["external"],
                    [
                        "parent",
                        "internal",
                        "builtin",
                        "sibling",
                        "index",
                    ],
                    "object",
                    "type",
                ],
                "alphabetize": { order: "asc", caseInsensitive: true },
            },
        ],
        "import/newline-after-import": ["error", { count: 1 }],
        "no-console": ["error", { allow: ["warn", "error"] }],
    },
});
