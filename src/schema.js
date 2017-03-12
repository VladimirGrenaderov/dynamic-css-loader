export default {
  $schema: 'http://json-schema.org/draft-04/schema#',
  additionalProperties: false,
  type: 'object',
  properties: {
    useable: {
      type: 'boolean',
      default: false,
      description: 'Expose use/unuse API',
    },
    insertAt: {
      enum: ['top', 'bottom'],
      default: 'top',
      description: 'Where to insert the style element',
    },
    singleton: {
      type: 'boolean',
      default: false,
      description: 'Reuse the same style element for all',
    },
    attrs: {
      type: 'object',
      default: {},
      description: 'Additional attributes to inject',
    },
    crossOriginLoading: {
      enum: [false, 'anonymous', 'use-credentials'],
      default: false,
      description: 'Cross-origin loading',
    },
    cacheLinks: {
      type: 'boolean',
      description: 'Toggle node linking caching',
    },
  },
};

