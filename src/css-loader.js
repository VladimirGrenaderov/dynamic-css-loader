class CssLoader {
  constructor(url, options) {
    this.url = url;
    this.options = options;
  }

  attach(callback) {
    if (this.link) {
      return;
    }

    if (callback) {
      this.link.addEventListener('load', (event) => {
        callback(null, event.target);
      });
      this.link.addEventListener('error', () => {
        callback('dynamic-css-loader: can\'t load css!');
      });
    }

    this.attachLink();
  }

  detach() {
    if (this.link) {
      document.head.removeChild(this.link);
      this.link = null;
    }
  }

  createLink() {
    const link = document.createElement('link');

    link.href = this.url;
    link.type = 'text/css';
    link.rel = 'stylesheet';

    if (this.options.crossOriginLoading) {
      link.crossOrigin = this.options.crossOriginLoading;
    }

    if (this.options.attrs) {
      for (const [name, value] of Object.entries(this.options.attrs)) {
        link.setAttribute(name, value);
      }
    }

    return link;
  }

  attachLink() {
    if (this.options.insertAt === 'top') {
      if (document.head.hasChildNodes()) {
        document.head.insertBefore(this.link, document.head.firstChild);
      } else {
        document.head.appendChild(this.link);
      }
    } else {
      document.head.appendChild(this.link);
    }
  }
}

module.exports = CssLoader;
