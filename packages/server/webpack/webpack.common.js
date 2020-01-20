const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, '..', 'node_modules')],
        test: /\.ts$/,
        use: 'ts-loader'
      },
      { test: /\.graphql?$/, loader: 'webpack-graphql-loader' },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }
    ]
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  resolve: {
    extensions: ['.ts', '.mjs', '.js']
  },
  target: 'node'
};
