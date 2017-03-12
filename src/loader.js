import loaderUtils from 'loader-utils';

export default function dynamicCSSLoader(content) {
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
