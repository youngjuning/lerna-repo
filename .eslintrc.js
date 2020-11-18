module.exports = {
  extends: [
    'airbnb-typescript',
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
  },
}
