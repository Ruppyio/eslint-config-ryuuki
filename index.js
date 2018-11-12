module.exports = {
  extends: ['eslint-config-airbnb'].map(require.resolve),
  rules: {
    'no-console': 'off',
    'func-names': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': ['warn', 'never'],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'object-curly-newline': ['error', { multiline: true }],
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
};
