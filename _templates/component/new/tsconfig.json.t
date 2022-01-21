---
to: packages/<%= h.changeCase.param(name) %>/tsconfig.json
---
{
    "extends": "../../tsconfig.json",
    "compilerOptions": {
      "outDir": "./dist",
    "types": ["jest", "node"]
    },
    "include": [
      "src/**/*",
      "src/**/*.ts",
      "src/**/*.tsx",
      "src/**/*.vue",
      "tests/**/*.ts",
      "tests/**/*.tsx"
    ]
}
