const webpack = require('webpack');
const dotenv = require('dotenv');

// Solo cargar .env para development
if (process.env['NODE_ENV'] !== 'production') {
  const env = dotenv.config().parsed || {};

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  module.exports = {
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ]
  };
} else {
  module.exports = {};
}
