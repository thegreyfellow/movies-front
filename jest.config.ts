module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        preset: 'ts-jest',
        testEnvironment: 'jest-environment-jsdom',
      },
    ],
  },
  moduleNameMapper: {
    '\\./(css)$': 'identity-obj-proxy',
  },
  resolver: 'jest-ts-webcompat-resolver',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
    },
  },
};
