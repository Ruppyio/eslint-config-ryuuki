module.exports = {
  extends: ['eslint-config-airbnb'].map(require.resolve),
  rules: {
    'no-console': 'off',
    'consistent-return': 'off',
    'func-names': ['warn', 'never'],
    'implicit-arrow-linebreak': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'operator-linebreak': ['error', 'after'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': ['warn', 'never'],
    'object-curly-newline': ['error', { multiline: true }],
    'no-underscore-dangle': ['error', { allow: ['_id', '_doc'] }],
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
};
