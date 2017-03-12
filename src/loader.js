import loaderUtils from 'loader-utils';
import { validateSchema } from 'schema-utils';
import schema from './schema';

export default function dynamicCSSLoader(content) {
  const options = loaderUtils.getOptions(this);
  const validation = validateSchema(schema, options);

  if (!validation.isValid) {
    throw new Error(validation.error);
  }

  const url = loaderUtils.interpolateName(this, '[hash].[ext]', { content });

  this.emitFile(url, content);

  const stylePath = `__webpack_public_path__ + ${JSON.stringify(url)}`;

  return `
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = ${stylePath};
document.head.appendChild(link);
`;
}
