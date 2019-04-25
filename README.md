# Ryuuki's ESlint Config

  [![NPM Version][npm-image]][npm-url]
  [![NPM License][license-image]][license-url]
  <!-- [![NPM Downloads][downloads-image]][downloads-url] -->

## Description

This config extend react-app's config with my personal preferences.

## Usage

1. a. Install with `npm install -D eslint-config-ryuuki` or `yarn add -D eslint-config-ryuuki` for use with [Create-React-App](https://github.com/facebook/create-react-app).

    b. (Outside CRA)

    ```bash
    yarn add -D eslint-config-(ryuuki,react-app@3.x) @typescript-eslint/(eslint-plugin@1.x,parser@1.x) babel-eslint@9.x eslint@5.x eslint-plugin-(flowtype@2.x,import@2.x,jsx-a11y@6.x,react@7.x,react-hooks@1.x) typescript@3.x
    ```

2. Create `.eslintrc.yml` file:

    ```yaml
    extends: ryuuki
    ```

    or `.eslintrc.json` file in root folder:

    ```json
    {
      "extends": "ryuuki"
    }
    ```

<!-- VARIABLES -->
[npm-image]: https://img.shields.io/npm/v/eslint-config-ryuuki.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-ryuuki
[license-image]: https://img.shields.io/npm/l/eslint-config-ryuuki.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com
[license-url]: https://github.com/ryuukibeat/eslint-config-ryuuki/blob/master/LICENSE
