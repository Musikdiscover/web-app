const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const PATHS = {
  app  : path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
}

module.exports = {
  devtool: 'eval',
  entry: PATHS.app + '/index.jsx',
  output: {
    path: PATHS.build,
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.app + '/index.html',
      inject: 'body'
    })
  ]
}