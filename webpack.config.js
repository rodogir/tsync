module.exports = {
  entry: "./src/client/index.tsx",
  output: {
    filename: "index.js",
    path: __dirname + "/dist/client"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
          configFileName: "tsconfig.client.json",
          useCache: true,
        }
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
};
