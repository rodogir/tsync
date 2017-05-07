const webpack = require("webpack");
const { join } = require("path");

const assetsPath = join(__dirname, "dist", "assets");

module.exports = {
  entry: {
    main: [
      "react-hot-loader/patch",
      "./src/client/index.tsx",
    ],
  },
  output: {
    filename: "[name].js",
    path: assetsPath,
    publicPath: "/assets",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devServer: {
    hot: true,
    contentBase: join(__dirname, "tools", "public"),
    publicPath: "/assets",
    compress: true,
    port: 3001,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3000",
    },
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks(module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      },
    }),
  ],
};
