import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "bloglist-frontend/node_modules/**"
    ]
  },

  {
    files: ["**/*.js"],
    ignores: ["bloglist-frontend/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        require: "readonly",
        module: "readonly",
        process: "readonly",
        console: "readonly",
        __dirname: "readonly",
        __filename: "readonly"
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-console": "off",
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }]
    }
  },

  {
    files: ["bloglist-frontend/src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true }
      },
      globals: {
        window: "readonly",
        document: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly"
      }
    },
    plugins: {
      react,
      "react-hooks": reactHooks
    },
    settings: {
      react: { version: "detect" }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }]
    }
  },

  {
    files: ["bloglist-frontend/src/**/*.test.{js,jsx}"],
    languageOptions: {
      globals: {
        describe: "readonly",
        test: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        vi: "readonly"
      }
    },
    rules: {
      "no-undef": "off"
    }
  },

  {
    files: ["bloglist-frontend/tests-frontend/**/*.{js,jsx}"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
      globals: {
        process: "readonly",
        require: "readonly",
        module: "readonly"
      }
    }
  }
];


