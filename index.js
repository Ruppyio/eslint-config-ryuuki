module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    './react-app',
    'eslint-config-prettier',
    'eslint-config-prettier/flowtype',
    'eslint-config-prettier/react',
  ].map(require.resolve),
  plugins: [
    'import',
    'flowtype',
    'jsx-a11y',
    'react',
    'react-hooks',
    'prettier',
  ],
  rules: {
    'no-console': 'warn',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'func-names': ['warn', 'never'],
    'no-mixed-operators': 'off',

    'jsx-a11y/anchor-is-valid': 'off',

    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],

    'prettier/prettier': 'error',
  },
};
