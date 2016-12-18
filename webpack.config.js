var production = process.env.NODE_ENV == "production";
var webpack = require("webpack");
var lodash_webpack_plugin = require('lodash-webpack-plugin');

var plugins = [new lodash_webpack_plugin];
if (production) {
  plugins = plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false}),
  ]);
}

module.exports = {
  context: __dirname,
  devtool: production ? null : "inline-sourcemap",
  entry: "./js/tcreact.js",
  output: {
    path: __dirname + "/js",
    filename: "tcreact.min.js"
  },
  plugins: plugins,
  module: {
    loaders: [
      // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['lodash'],
        }
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['', '.js', '.json']
  }
};
