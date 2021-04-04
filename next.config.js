const path = require('path');
const withReactSvg = require('next-react-svg');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  'react-material-ui-carousel',
]);

module.exports = withPlugins([
  withTM,
  [
    withReactSvg,
    {
      include: path.resolve(__dirname, 'public/svg'),
      webpack(config, options) {
        return config;
      },
    },
  ],
]);
