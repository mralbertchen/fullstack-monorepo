// eslint-disable-next-line import/no-extraneous-dependencies
const commonEslintConfig = require('config/eslint-preset');
const path = require('path');

module.exports = {
  ...commonEslintConfig,
  rules: {
    ...commonEslintConfig.rules,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          path.join(__dirname, './.storybook/**'),
          path.join(__dirname, './**/*.stories.tsx'),
        ],
      },
    ],
  },
};
