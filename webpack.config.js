const path = require('path');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = {
  entry: {
    main: './src/index.js',
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.js$/,
      // eslint-disable-next-line no-undef
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/,
      loaders: 'babel-loader'
    }]
  },
  output: {
    filename: 'lib.js',
    // eslint-disable-next-line no-undef
    path: path.join(__dirname, 'dist'),
    library: 'validator-js',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
}
