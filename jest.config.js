module.exports = {
  preset: 'react-native',
  verbose: true,
  moduleNameMapper: {
    '^image![a-zA-Z0-9$_-]+$': 'GlobalImageStub',
    '^[@./a-zA-Z0-9$_-]+\\.(png|gif)$': 'RelativeImageStub',
  },
  coverageDirectory: './coverage/',
  collectCoverageFrom: [
    'src/basic/**/*.js',
    '!**/interface.js',
    '!src/basic/battery-stats/**/*.js',
    '!src/basic/timer/**/*.js',
    '!src/basic/timer-classic/**/*.js',
    '!src/basic/popup/**/*.js',
    '!src/basic/f2-chart/**/*.js',
    '!src/basic/dialog/**/*.js',
    '!src/basic/toast/**/*.js',
    '!src/basic/timer-picker/**/*.js',
  ],
  modulePathIgnorePatterns: ['<rootDir>/example', '<rootDir>/demos'],
  collectCoverage: true,
  globals: {
    __DEV__: true,
  },
};
