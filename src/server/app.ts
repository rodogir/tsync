import * as express from "express";
import * as webpack from "webpack";
import * as webpackDevMiddleware from "webpack-dev-middleware";
import logger from "./logger";
import renderHTML from "./renderHTML";

const app = express();
app.disable("x-powered-by");

const compiler = webpack(require("./webpack.config"));

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/", // Same as `output.publicPath` in most cases.
}));

app.use("/assets", express.static(__dirname + "/../assets", {
  maxAge: "1y",
}));

app.get("/", (req, res) => {
  res.send(renderHTML());
});

export default app;
