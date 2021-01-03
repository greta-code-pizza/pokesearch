const { resolve } = require('path');

module.exports = {
  entry: resolve('./app.js'),
  mode: 'development',
  output: {
    path: resolve('./'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
}
