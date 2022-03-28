const process = require("process");

const coverageSubDir = process.argv.includes("test/integration") ?
  "integration" :
  "unit";

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  cacheDirectory: "./.cache/jest",
  modulePathIgnorePatterns: [
    "<rootDir>/.temp/.*",
    "<rootDir>/src/.*/__mocks__/.*",
  ],

  coverageDirectory: `_reports/coverage/${coverageSubDir}`,
  collectCoverageFrom: [
    "src/**/*.ts",
  ],
  coveragePathIgnorePatterns: [
    "lib",
    "node_modules",
    "test",
  ],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
    },
  },
};
