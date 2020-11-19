const path = require('path');

module.exports = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json', 'ejs', '.css'],
  },
};
