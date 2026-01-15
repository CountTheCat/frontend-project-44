import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.js"],
    plugins: {
      js,
    },
    extends: ["js/recommended"],
  },
  {
    files: ["src/**/*.js", "bin/**/*.js"], 
    languageOptions: {
      globals: {
        ...globals.node, 
        ...globals.es2025,
      },
      ecmaVersion: "latest",
      sourceType: "module", 
    },
    rules: {
      
      "no-unused-vars": "warn",
      "no-console": "off", 
    },
  },
]);