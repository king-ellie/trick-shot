const webpack = require('webpack');
require('dotenv').config(); // Load .env variables

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './client/index.js',
    output: {
      filename: './public/bundle.js',
      path: __dirname,
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          exclude: /(node_modules)/,
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.REACT_APP_NETLIFY_API_KEY': JSON.stringify(process.env.REACT_APP_NETLIFY_API_KEY),
      }),
      new webpack.DefinePlugin({
        'process.env.REACT_APP_NETLIFY_SITE_ID': JSON.stringify(process.env.REACT_APP_NETLIFY_SITE_ID),
      }),
    ],
  };