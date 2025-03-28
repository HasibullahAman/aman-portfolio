import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import next from "eslint-plugin-next";

const compat = new FlatCompat();

const eslintConfig = [
  js.configs.recommended, // Base JavaScript rules
  next.configs.recommended, // Next.js rules
  ...compat.extends("next/core-web-vitals"), // Core Web Vitals rules
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/quotes": "off",
      quotes: "off",
    },
  },
];

export default eslintConfig;
