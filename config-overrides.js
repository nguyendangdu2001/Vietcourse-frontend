const { override, addWebpackPlugin, addWebpackResolve } = require("customize-cra");
var DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");

module.exports = override([
  addWebpackResolve({
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  }),
  addWebpackPlugin(new DuplicatePackageCheckerPlugin()),
  addWebpackPlugin(new webpack.optimize.AggressiveMergingPlugin()), //Merge chunks
  addWebpackPlugin(new CompressionPlugin()),
]);
