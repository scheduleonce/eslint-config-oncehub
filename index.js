module.exports = {
  'env': {
    'es6': true,
    'node': true,
  },
  'extends': [
    'google',
    'plugin:sonarjs/recommended',
    'prettier'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
    'sonarjs'
  ]
};