import eslint from "@eslint/js";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";
import sonarjs from "eslint-plugin-sonarjs";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  jsxA11y.flatConfigs.recommended,
  sonarjs.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
      },
    },
    rules: {
      // base rule needs to be disabled to prevent errors with the ts version
      // see https://typescript-eslint.io/rules/#extension-rules
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/consistent-type-assertions": [
        "error",
        { assertionStyle: "angle-bracket" },
      ],
      "import/no-unresolved": "off",
    },
  },
  // overriding rules specifically for test files
  {
    files: ["**/*(specs|tests)/**", "**/*.spec.ts"],
    rules: {
      "@typescript-eslint/no-empty-function": "off",
      "sonarjs/no-identical-functions": "off",
      "sonarjs/no-duplicate-string": "off",
    },
  }
);
