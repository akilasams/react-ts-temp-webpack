const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'), // Points to the entry point
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Allows us to leave out file extensions when importing
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    //Inject the bundle.js file into the index.html file and place that html file in the build folder
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
};
