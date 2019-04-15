module.exports = {
  root: true,

  plugins: ['import', 'flowtype', 'jsx-a11y', 'react', 'react-hooks', 'prettier'],

  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:import/typescript',
    'prettier/@typescript-eslint',
  ],

  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },

  overrides: {
    files: ['**/*.ts', '**/*.tsx'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },

      // typescript-eslint specific options
      warnOnUnsupportedTypeScriptVersion: true,
    },
    plugins: ['@typescript-eslint'],
    rules: {
      camelcase: 'off',
      indent: 'off',
      'no-array-constructor': 'off',
      'no-unused-vars': 'off',

      '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-array-constructor': 'warn',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'none',
          ignoreRestSiblings: true,
        },
      ],
    },
  },

  rules: {
    'no-console': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'func-names': ['warn', 'never'],
    'implicit-arrow-linebreak': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'operator-linebreak': ['error', 'after'],
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
  },
};
