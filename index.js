module.exports = {
  extends: ['eslint-config-airbnb'].map(require.resolve),
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'off',
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
};
