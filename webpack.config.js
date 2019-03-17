const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const buildFolder = 'build/'

module.exports = {
  entry: ['./src/index.js'],
  devServer: {
    contentBase: `./${buildFolder}`,
    port: 3042,
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Decision Tool',
      hash: true,
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, buildFolder),
    publicPath: '/'
  }
}
