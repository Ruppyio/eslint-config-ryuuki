# Ruppy's Base ESlint Config

[![NPM Version][npm-image]][npm-url]
[![NPM License][license-image]][license-url]

  <!-- [![NPM Downloads][downloads-image]][downloads-url] -->

## Description

This config extend airbnb-base config. I adjust some configs and integrate it
with Prettier.

## Usage

1. Install with commands:

   ```bash
   yarn add -D eslint-config-ruppy eslint-plugin-import eslint-plugin-prettier eslint prettier
   ```

   or

   ```bash
   npm install -D eslint-config-ruppy eslint-plugin-import eslint-plugin-prettier eslint prettier
   ```

2. Create `.eslintrc.yml` file in root directory:

   ```yaml
   extends: ryuuki
   ```

   or `.eslintrc.js` file in root directory:

   ```js
   module.exports = {
     extends: ["ryuuki"],
   };
   ```

3. Create `.prettierrc` file in root directory:

   ```json
   {
     "singleQuote": true
   }
   ```

## Hacking to the Gate~

<!-- VARIABLES -->

[npm-image]: https://img.shields.io/npm/v/eslint-config-ruppy-base.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-ruppy-base
[license-image]: https://img.shields.io/npm/l/eslint-config-ruppy-base.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com
[license-url]: https://github.com/Ruppyio/eslint-configs/blob/master/packages/eslint-config-ruppy-base/LICENSE
