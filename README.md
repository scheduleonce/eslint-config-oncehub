# eslint-config-oncehub

[![Build status](https://github.com/scheduleonce/eslint-config-oncehub/actions/workflows/node.js.yml/badge.svg)](https://github.com/scheduleonce/eslint-config-oncehub/actions) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> ESLint configuration for services built with Node.js and TypeScript.

The configuration extends `@typescript-eslint/recommended`, `eslint-plugin-sonarjs`, `prettier` ESLint configurations.

It is compatible with ESlint >= v9 configuration format (flat config).

## Installation

To install this module, run the following command:

```sh
$ npm install --save-dev @oncehub/eslint-config
```

Note that it requires ESlint v9 and above.

## Usage

In your `.eslintrc` file, put `@oncehub/eslint-config` under `extends` array as shown below.

```js
module.exports = {
  extends: ["@oncehub/eslint-config"],
};
```

## Development

### Tests

Run tests via `npm test`.
The tests are comparing the eslint configuration against a previously saved snapshot of the rules so if you are adding or removing any rule, make sure to update the tests.

As a byproduct, the tests are also checking that the configuration is valid and all is okay with it.
You can also further debug the config via:

```sh
$ npx eslint --debug -c index.js index.js
```

To generate a new rules snapshot file:

```sh
$ npx eslint --print-config index.js -c index.js > output.json
```

Copy the rules from the output file into `test/rules-snapshot.json`

### Deployment

Package is automatically published to npm when [creating a new release](.github/workflows/npm-publish.yml) on Github. Check out the release section in the repo. Read more about releases [here](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository).

## License

This module is licensed under the MIT License. See the LICENSE file for details.
