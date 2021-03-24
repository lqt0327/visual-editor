const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const devMode = process.env.NODE_ENV !== 'production';
const path = require("path");

const basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: ["@babel/polyfill", "./index.jsx"],
  output: {
    path: path.join(basePath, "dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist", // Content base
    inline: true, // Enable watch and live reload
    host: "localhost",
    port: 8082,
    stats: "errors-only",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
            presets: ['@babel/preset-env','@babel/preset-react']
        },
      },
      {
        test: /\.(sa|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader, 
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]",
          esModule: false,
        },
      },
    ],
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
