const { merge } = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  devServer: {
    historyApiFallback: true,
    hot: true,
    publicPath: "/",
    port: 8081
  },
  devtool: "inline-source-map",
  entry: ["webpack-dev-server/client?http://localhost:8081", "webpack/hot/only-dev-server", "./index.tsx"],
  mode: "development",
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
