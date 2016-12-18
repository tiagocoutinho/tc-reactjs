var production = process.env.NODE_ENV == "production";
var webpack = require("webpack");

module.exports = {
  context: __dirname,
  devtool: production ? null : "inline-sourcemap",
  entry: "./js/tcreact.js",
  output: {
    path: __dirname + "/js",
    filename: "tcreact.min.js"
  },
  plugins: production ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false})
  ] : [],
};
