const webpack = require("webpack");
const { join, resolve } = require("path");

const assetsPath = join(__dirname, "dist", "assets");

module.exports = {
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./src/client/index.tsx",
  ],
  output: {
    filename: "bundle.js",
    path: assetsPath,
    publicPath: "/",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, "dist/assets"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
          configFileName: "tsconfig.client.json",
          useCache: true,
        },
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
};
