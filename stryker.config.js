export default {
  coverageAnalysis: "perTest",
  inPlace: false,
  mutate: [
    "src/**/*.ts",
    "!src/index.ts",
    "!src/**/*.d.ts",
    "!src/**/__mocks__/**/*.ts",
  ],
  commandRunner: {
    command: "npm run test:unit -- --runInBand",
  },

  timeoutMS: 25000,
  timeoutFactor: 2.5,

  disableTypeChecks: "{src,test}/**/*.ts",
  checkers: ["typescript"],
  tsconfigFile: "tsconfig.json",

  reporters: [
    "clear-text",
    "dashboard",
    "html",
    "progress",
  ],
  htmlReporter: {
    fileName: "_reports/mutation/index.html",
  },
  thresholds: {
    high: 95,
    low: 85,
    break: 80,
  },

  tempDirName: ".temp/stryker",
  cleanTempDir: false,
};
