# Ryuuki's ESlint Config

  [![NPM Version][npm-image]][npm-url]
  [![NPM License][license-image]][license-url]
  <!-- [![NPM Downloads][downloads-image]][downloads-url] -->

## Description

This config extend react-app's config with my personal preferences.

## Usage

1. Install with commands:

    ```bash
    yarn add -D eslint-config-ryuuki eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-eslint eslint eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier
    ```

2. Create `.eslintrc.yml` file:

    ```yaml
    extends: ryuuki
    ```

    or `.eslintrc.js` file in root folder:

    ```js
    module.exports = {
      extends: ['ryuuki'],
    };
    ```

<!-- VARIABLES -->
[npm-image]: https://img.shields.io/npm/v/eslint-config-ryuuki.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-ryuuki
[license-image]: https://img.shields.io/npm/l/eslint-config-ryuuki.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com
[license-url]: https://github.com/ryuukibeat/eslint-config-ryuuki/blob/master/LICENSE
