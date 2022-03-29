const commonjs = require("@rollup/plugin-commonjs");
const json = require("@rollup/plugin-json");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const typescript = require("@rollup/plugin-typescript");
const { terser } = require("rollup-plugin-terser");

module.exports = {
  input: "src/index.ts",
  output: {
    dir: "lib",
    format: "cjs",
  },
  plugins: [
    typescript(),
    commonjs(),
    json(),
    nodeResolve(),
    terser(),
  ],
};
