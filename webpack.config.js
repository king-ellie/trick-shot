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
  };