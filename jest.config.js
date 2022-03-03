const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageReporters: ['text', 'html'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/models/**',
    '!**/environment/**',
    '!**/index.ts',
    '!**/*.interface.ts',
    '!**/*.enum.ts',
    '!**/*.mock.ts',
    '!**/*.props.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 45,
      functions: 50,
      lines: 60,
      statements: 60,
    },
  },
  projects: getJestProjects(),
};
