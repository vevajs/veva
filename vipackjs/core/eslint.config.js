const eslintConfig = require('@vipack/eslint-config');

module.exports = [
    ...eslintConfig,
    {
        ignores: [
          "node_modules",
          "eslint.config.js",
          "prettier.config.js"
        ],
    },
];

