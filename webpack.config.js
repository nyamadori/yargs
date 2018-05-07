const path = require('path')

module.exports = {
  mode: 'development',
  target: 'node',

  entry: {
    index: './index.js',
  },

  resolve: {
    extensions: [
      '.js'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist/'),
    libraryTarget: 'commonjs2'
  },

  devtool: 'sourcemap',
}
