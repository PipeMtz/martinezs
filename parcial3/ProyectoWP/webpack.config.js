const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


console.log(module);

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins:[new HtmlWebpackPlugin()]
};
