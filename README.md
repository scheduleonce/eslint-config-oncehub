Introduction
=
ESLint configuration for micro-services built using Node.js and TypeScript. 

The configuration extends `@typescript-eslint/recommended`, `eslint-plugin-sonarjs`, `prettier` ESLint configurations.

## Installation
Using **NPM**
```sh
npm i --save-dev @oncehub/eslint-config
```

Using **Yarn**
```sh
yarn add --dev @oncehub/eslint-config
```

## Usage
In your `.eslintrc` file, put `@oncehub/eslint-config` under `extends` array as shown below.
```js
module.exports = {
  'extends': [
    '@oncehub/eslint-config'
  ]
};
```