import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginUnicorth from "eslint-plugin-unicorn";

const config = tseslint.config(
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      prettier: prettierPlugin,
      unicorn: eslintPluginUnicorth,
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        project: [
          "tsconfig.json"
        ],
      },
    },
  },
  {
    files: ["/src/**.{ts,js,}"],
    rules: {
      "prefer-const": "error",
      "max-lines": ["warn", { max: 124 }],
      "max-params": ["error", 3],
      "no-unused-vars": ["error", {
        "vars": "all",
        "args": "after-used",
        "caughtErrors": "all",
        "ignoreRestSiblings": false,
        "reportUsedIgnorePattern": false
    }]
    },
  },
  eslintConfigPrettier
);

export default config;
// Add support for CommonJS `require`.
module.exports = config;
