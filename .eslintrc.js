module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:jest/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    project: 'tsconfig.eslint.json',
  },
  env: {
    'react-native/react-native': true,
    'jest/globals': true,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
  },
};
