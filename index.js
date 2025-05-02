import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import tseslint from "typescript-eslint";
import sonarjs from "eslint-plugin-sonarjs";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  sonarjs.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    rules: {
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "no-unused-vars": "off",
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
  }
);
