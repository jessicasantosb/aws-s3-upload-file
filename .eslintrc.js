module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "plugin:tailwindcss/recommended"],
  plugins: ["@typescript-eslint", "tailwindcss", "import"],
  parser: "@typescript-eslint/parser",
  rules: {
    "tailwindcss/classnames-order": "warn",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
        projectService: true,
        tsconfigRootDir: __dirname,
      },
      extends: [
        "next/core-web-vitals",
        "plugin:tailwindcss/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:import/typescript",
        "plugin:import/recommended",
      ],
      rules: {
        "tailwindcss/classnames-order": "warn",
        "import/order": [
          "error",
          {
            groups: [
              "builtin",
              "external",
              "internal",
              ["parent", "sibling", "index", "type"],
            ],
            "newlines-between": "always",
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
            pathGroups: [
              {
                pattern: "@/",
                group: "internal",
              },
            ],
          },
        ],
      },
      settings: {
        "import/resolver": {
          typescript: true,
        },
      },
    },
  ],
};
