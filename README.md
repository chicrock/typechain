# Typechain

Making a Blockchain with Typescript

## Install

### typescript

```bash
]$ yarn global add typescript
```

## Setup

### tsconfig.json

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2015",
    "sourceMap": true
  },
  "include": ["index.ts"],
  "exclude": ["node_modules"]
}
```

### package.json

```json
"scripts": {
  "start": "node index.js",
  "prestart": "tsc"
}
```
