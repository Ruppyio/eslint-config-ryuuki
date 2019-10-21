# Ryuuki's ESlint Config

  [![NPM Version][npm-image]][npm-url]
  [![NPM License][license-image]][license-url]
  <!-- [![NPM Downloads][downloads-image]][downloads-url] -->

## Description

This config extend react-app's config with my personal preferences.

## Usage

1. Install with commands:

    ```bash
    yarn add -D eslint-config-ryuuki @typescript-eslint/eslint-plugin@2.x @typescript-eslint/parser@2.x babel-eslint@10.x eslint@6.x eslint-config-prettier@6.x eslint-plugin-flowtype@3.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-prettier@3.x eslint-plugin-react@7.x eslint-plugin-react-hooks@1.x prettier@1.x
    ```
 
   optionally add typescript as devDependencies if you use typescript as language:

   ```bash
   yarn add -D typescript
   ```

2. Create `.eslintrc.yml` file in root directory:

    ```yaml
    extends: ryuuki
    ```

    or `.eslintrc.js` file in root directory:

    ```js
    module.exports = {
      extends: ['ryuuki'],
    };
    ```

3. Create `.prettierrc` file in root directory:

    ```json
    {
      "semi": true,
      "tabWidth": 2,
      "useTabs": false,
      "printWidth": 80,
      "singleQuote": true,
      "bracketSpacing": true,
      "jsxSingleQuote": false,
      "jsxBracketSameLine": false,
      "quoteProps": "as-needed",
      "trailingComma": "es5",
      "arrowParens": "avoid",
      "endOfLine": "lf"
    }
    ```

4. (Optional) Create `.editorconfig` file in root directory:

    ```php
    # http://editorconfig.org
    root = true

    [*]
    indent_style = space
    indent_size = 2
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
    max_line_length = off

    # Use 4 spaces for the Python and HTML files
    [*.py, *.html]
    indent_size = 4

    # Minified JavaScript files shouldn't be changed
    [**.min.js]
    indent_style = ignore
    insert_final_newline = ignore

    [*.md]
    trim_trailing_whitespace = false
    ```

## Hacking to the Gate~

<!-- VARIABLES -->
[npm-image]: https://img.shields.io/npm/v/eslint-config-ryuuki.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-ryuuki
[license-image]: https://img.shields.io/npm/l/eslint-config-ryuuki.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com
[license-url]: https://github.com/ryuukibeat/eslint-config-ryuuki/blob/master/LICENSE
