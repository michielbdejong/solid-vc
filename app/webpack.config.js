// Experimental version of webpack config
const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css!'
      },
      /*{
        test: /node_modules\/jsonld/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: [
            ['transform-object-rest-spread', {useBuiltIns: true}],
            ['@babel/plugin-transform-runtime'],
          ]
        }
      },*/
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env'],
          plugins: [
            ['transform-object-rest-spread', {useBuiltIns: true}],
            ['@babel/plugin-transform-modules-commonjs'],
            ['@babel/plugin-transform-regenerator'],
            ['@babel/plugin-transform-runtime']
          ]
        }
      }
    ]
  }
}
