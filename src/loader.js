import path from 'path';
import loaderUtils from 'loader-utils';
import { validateOptions } from 'schema-utils';
import schema from './schema';

export default function () {}

export function pitch(remainingRequest) {
  const options = Object.assign({}, loaderUtils.getOptions(this), {});

  const validation = validateOptions(schema, options);
  if (!validation.isValid) {
    throw new Error(validation.error);
  }

  const cssRequest = loaderUtils.stringifyRequest(this, `!!${remainingRequest}`);
  const cssLoaderRequest = loaderUtils.stringifyRequest(this, `!${path.join(__dirname, 'css-loader')}`);

  return `
var url = require(${cssRequest});
var CssLoader = require(${cssLoaderRequest});
module.exports = new CssLoader(url, ${JSON.stringify(options)});
`;
}
