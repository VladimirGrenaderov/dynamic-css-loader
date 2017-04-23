export default {
  $schema: 'http://json-schema.org/draft-04/schema#',
  additionalProperties: false,
  type: 'object',
  properties: {
    insertAt: {
      enum: ['top', 'bottom'],
      default: 'bottom',
      description: 'Where to insert the style element',
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
  },
};

