const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  entry: [path.join(__dirname, '..', 'src/index.ts')],
  externals: [nodeExternals({})],
  mode: 'development',
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '..', 'dist/dev/'),
  },
});
