const { resolve } = require('path');

module.exports = {
  entry: resolve('./app.ts'),
  mode: 'development',
  output: {
    path: resolve('./'),
    filename: 'bundle.min.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.ts$/i,
        use: [
          'awesome-typescript-loader?module=es6'
        ],
        exclude: [/node_modules/]
      }
    ]
  }
}
