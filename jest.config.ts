export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  restoreMocks: true,
  coveragePathIgnorePatterns: ['node_modules', 'src/config', 'tests'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
};
