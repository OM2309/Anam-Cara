import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Set up path utilities
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create an ESLint compatibility object for extending configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define the ESLint configuration
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"), // Extend Next.js core and TypeScript configs
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
