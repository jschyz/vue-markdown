const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/install.md',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.md/,
        loader: 'vue-markdown-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}
