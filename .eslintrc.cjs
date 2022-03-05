/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
const fs = require('fs');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  rules: {
    'prettier/prettier': ['warn', fs.readFileSync('.prettierrc')]
  }
};
