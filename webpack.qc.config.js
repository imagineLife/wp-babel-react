const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCss = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
 
//DOCS
//  https://webpack.js.org/concepts/
 
module.exports = {
  /*
    An entry point indicates which module webpack should use
     to begin building out its internal dependency graph.
      webpack will figure out which other modules and libraries
       that entry point depends on (directly and indirectly).
  */
  entry:'./src/index.js',
 
  /*
    The output property tells webpack where to emit the bundles
     it creates and how to name these files. It defaults
      to ./dist/main.js for the main output file and to
       the ./dist folder for any other generated file.
  */
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
 
      //  https://github.com/babel/babel-loader
      // This package allows transpiling JavaScript files using Babel and webpack.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
 
      // https://github.com/webpack-contrib/html-loader
      // Exports HTML as string. HTML is minimized when the compiler demands.
 
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
 
      // https://github.com/webpack-contrib/css-loader
      // The css-loader interprets @import and url() like import/require() and will resolve them.
 
      {
        test: /\.css$/,
        use: [MiniCss.loader, "css-loader"]
      },
 
      // https://github.com/webpack-contrib/file-loader
      // The file-loader resolves import/require() on a file into a url and emits the file into the output directory.
 
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static'
            }
          }
        ]
      }
    ]
  },
  plugins: [
 
    // https://github.com/johnagan/clean-webpack-plugin
    //  A webpack plugin to remove the build folder(s) before building
    new CleanWebpackPlugin(),
 
    // https://github.com/jantimon/html-webpack-plugin
    // Simplifies creation of HTML files to serve your webpack bundles
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
 
    // https://github.com/webpack-contrib/mini-css-extract-plugin
    // This plugin extracts CSS into separate files.
    // It creates a CSS file per JS file which contains CSS.
    // It supports On-Demand-Loading of CSS and SourceMaps.
    new MiniCss({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
 
    // https://github.com/webpack-contrib/copy-webpack-plugin
    // Copy files and directories with webpack
    new CopyWebpackPlugin([
      { from: 'appconfig/config.qc.js', to: 'appconfig/config.js'},
      { from: 'qcAPI', to: 'qcAPI'}
    ])
  ],
  devServer: {
    historyApiFallback: true
  }
};