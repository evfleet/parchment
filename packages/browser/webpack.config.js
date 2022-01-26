const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', ".tsx"]
  },
  plugins: [
    new HtmlPlugin({
      template: './public/index.html',
      filename: '../dist/index.html'
    })
  ]
}