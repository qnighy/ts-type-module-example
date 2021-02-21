export default {
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  // See https://github.com/facebook/jest/pull/10823. Need to wait for jest 27
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^(.*)\\.js$": "$1",
  },
  rootDir: "./src",
};
