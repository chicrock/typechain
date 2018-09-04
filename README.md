# Typechain

Making a Blockchain with Typescript

## Install

### typescript

```bash
]$ yarn global add typescript
]$ yarn add typescript
```

### tsc watch

```bash
]$ yarn add tsc-watch --dev
```

## Setup

### tsconfig.json

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2015",
    "sourceMap": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### package.json

```json
"scripts": {
  "start": "tsc-watch --onSuccess \"node dist/index.js\"",
}
```
