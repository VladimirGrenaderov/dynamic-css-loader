[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![test][test]][test-url]
[![coverage][cover]][cover-url]
[![chat][chat]][chat-url]

**Important! Work in progress**

<div align="center">
  <!-- replace with accurate logo e.g from https://worldvectorlogo.com/ -->
  <img width="200" height="200" src="https://cdn.worldvectorlogo.com/logos/javascript.svg">
  <a href="https://webpack.js.org/">
    <img width="200" height="200" vspace="" hspace="25" src="https://cdn.rawgit.com/webpack/media/e7485eb2/logo/icon-square-big.svg">
  </a>
  <h1>dynamic-css-loader</h1>
  <p>Dynamic CSS loader useful for code splitting</p>
</div>

**dynamic-css-loader** has been designed to enable dynamic loading of CSS when code splits (i.e. `import()`) are used. It is meant to be used with **extract-text-webpack-plugin** and **extract-loader**. It writes CSS (no need for **file-loader**) and maintains a single reference to it based on the way you access code splits.

<h2 align="center">Install</h2>

```bash
npm install --save-dev dynamic-css-loader
```

<h2 align="center">Usage</h2>

**TODO**

<h2 align="center">Examples</h2>

**webpack.config.js**

```js
{
  test: /.../,
  use: ExtractTextPlugin.extract({
    use: [ ... ],
    fallback: [
      'dynamic-css-loader',
      'extract-loader',
    ],
  }),
},
```

**file.ext**

```js
// Source code here...
```

**bundle.js**

```js
require("dynamic-css-loader!./file.EXT");

// Bundle code here...
```

<h2 align="center">Maintainers</h2>

```bash
https://api.github.com/users/MAINTAINER
```

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/">
          <img width="150" height="150" src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
          </br>
          Name
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/">
          <img width="150" height="150" src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
          </br>
          Name
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/">
          <img width="150" height="150" src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
          </br>
          Name
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/">
          <img width="150" height="150" src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
          </br>
          Name
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/">
          <img width="150" height="150" src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
          </br>
          Name
        </a>
      </td>
    </tr>
  <tbody>
</table>

[npm]: https://img.shields.io/npm/v/dynamic-css-loader.svg
[npm-url]: https://npmjs.com/package/dynamic-css-loader

[deps]: https://david-dm.org/webpack-contrib/dynamic-css-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/dynamic-css-loader

[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack

[test]: http://img.shields.io/travis/webpack-contrib/dynamic-css-loader.svg
[test-url]: https://travis-ci.org/webpack-contrib/dynamic-css-loader

[cover]: https://codecov.io/gh/webpack-contrib/dynamic-css-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/dynamic-css-loader
