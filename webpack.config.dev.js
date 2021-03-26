const path = require('path')
const prod = require('./webpack.config')

module.exports = {
  ...prod,
  mode: 'development',
  entry: './src/development.js',
  output: {
    path: path.resolve('build'),
    filename: "index.js"
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build'
  },
  externals: {}
}
