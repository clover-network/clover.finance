module.exports = {
  compact: false,
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          include: ['@babel/plugin-transform-unicode-regex'],
        },
      },
    ],
  ],
  plugins: [
    ['babel-plugin-styled-components'],
    [
      '@babel/plugin-transform-typescript',
      {
        allowDeclareFields: true,
      },
    ],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ],
};
