const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  // Enables webpack hot module replacement
  devServer: {
    hot: true,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  // Define our own env variables
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('MMB - DEV'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
