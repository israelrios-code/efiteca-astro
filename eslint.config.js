import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import astro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    ignores: [".astro/", ".vercel/", "dist/", "node_modules/", "tina/__generated__/"]
  },
  js.configs.recommended,
  ...astro.configs["flat/recommended"],
  {
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: false,
        sourceType: "module",
        ecmaVersion: "latest"
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      "no-undef": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_"
        }
      ]
    }
  },
  {
    files: ["**/*.astro"],
    rules: {
      "astro/no-set-html-directive": "off"
    }
  },
  {
    files: [
      "migrate.js",
      "src/components/about/ReactAboutPage.tsx",
      "src/components/blog/ReactBlogPage.tsx",
      "src/components/contact/ReactContactPage.tsx",
      "src/components/home/ReactHome.tsx",
      "src/components/simulator/ReactSimulatorPage.tsx",
      "src/components/solutions/ReactSolutionsPage.tsx",
      "tina/config.ts"
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-vars": "off"
    }
  },
  eslintConfigPrettier
];
