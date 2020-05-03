const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "eval-source-map",
  entry: path.resolve(__dirname, "src/index.js"),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
    alias: {
      "~": path.resolve(__dirname, "src/"),
    },
  },
  output: {
    path: path.resolve(__dirname, "public/"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
