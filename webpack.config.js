const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    bundle: "./src/main.js",
  },
  output: {
    path: "public",
    filename: "[name].js",
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint",
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
      },
      {
        test: /\.json$/,
        loader: "json",
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap"),
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: "file",
        query: {
          name: "res/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
  ],
  devtool: "source-map",
};
