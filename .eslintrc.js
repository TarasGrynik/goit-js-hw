module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: "airbnb-base",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": "off",
    "linebreak-style": 0,
    "global-require": 0,
    "eslint linebreak-style": [0, "error", "windows"],
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}]
  }
};