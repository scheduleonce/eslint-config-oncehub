import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import * as typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import sonarjs from "eslint-plugin-sonarjs";

export default [
  js.configs.recommended,
  sonarjs.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        es6: true,
        node: true,
      },
      parser: typescriptEslintPlugin.parser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      // sonarjs,
    },
    rules: {
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/consistent-type-assertions": [
        "error",
        { assertionStyle: "angle-bracket" },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
  {
    files: ["**/*(specs|tests)/**", "**/*.spec.ts"],
    rules: {
      "@typescript-eslint/no-empty-function": "off",
    },
  },
];
