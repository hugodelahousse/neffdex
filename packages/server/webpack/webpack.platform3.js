const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  entry: [path.join(__dirname, '..', 'src/graphql_handler.ts')],
  externals: process.env.STANDALONE_BUILD ? [] : [nodeExternals({})],
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: 'handlers.js',
    path: path.resolve(__dirname, '..', 'dist/platform3/'),
    library: 'handlers',
    libraryTarget: 'umd',
  }
});
