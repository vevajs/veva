const eslintConfig = require('@vipack/eslint-config');

module.exports = [
    ...eslintConfig,
    {
        ignorePatterns: [".eslintrc.js"],
    },
];
