const webpack = require('webpack');
const dotenv = require('dotenv');

// Cargar variables de entorno desde .env
const env = dotenv.config().parsed;

// Reducir las variables de entorno a un objeto para DefinePlugin
const envKeys = Object.keys(env || {}).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  plugins: [
    new webpack.DefinePlugin(envKeys)
  ]
};
