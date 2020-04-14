module.exports = {
  'env': {
    'es6': true,
    'node': true,
  },
  'extends': [
    'plugin:@typescript-eslint/recommended',
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
  ],
  'overrides': [
    {
      'files': ['**/*(specs|tests)/**', '**/*.spec.ts'],
      'rules': {
        '@typescript-eslint/no-empty-function': 'off',
        'sonarjs/no-identical-functions': 'off',
        'sonarjs/no-duplicate-string': 'off'
      }
    }
  ],
  'rules': {
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/consistent-type-assertions': ['error', {
      assertionStyle: 'angle-bracket'
    }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
};