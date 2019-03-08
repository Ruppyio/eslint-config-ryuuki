module.exports = {
  extends: ['eslint-config-airbnb'].map(require.resolve),
  rules: {
    'no-console': 'off',
    'consistent-return': 'off',
    'object-curly-newline': 'off',
    'function-paren-newline': 'off',
    'func-names': ['warn', 'never'],
    'implicit-arrow-linebreak': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'operator-linebreak': ['error', 'after'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-underscore-dangle': ['error', { allow: ['_id', '_doc'] }],
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
};
