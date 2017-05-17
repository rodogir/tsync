const webpack = require("webpack");
const path = require("path");
const AssetsPlugin = require("assets-webpack-plugin");

const assetsPath = path.join(__dirname, "dist", "assets");

module.exports = {
  entry: {
    main: "./src/client/index.tsx",
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: assetsPath,

  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
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
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    // TODO: find a way to make uglify work again. It has problems with the ES5 emitted by TS.
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks(module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
    }),
    new AssetsPlugin({
      path: assetsPath,
      filename: "assets.json",
    }),
  ],
};
