module.exports = {
  extends: ['eslint-config-airbnb'].map(require.resolve),
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'off',
    'object-curly-newline': ['error', { multiline: true }],
    'arrow-parens': ['error', 'as-needed'],
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
};
