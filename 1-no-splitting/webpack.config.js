const webpack = require('webpack');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: './src/index.js',
  plugins: [
    new WebpackBundleAnalyzer(),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
};
