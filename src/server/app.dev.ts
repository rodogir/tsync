import * as express from "express";
import { join, resolve } from "path";
import * as webpack from "webpack";
import * as webpackDevMiddleware from "webpack-dev-middleware";
import * as webpackHotMiddleware from "webpack-hot-middleware";
import renderHTML from "./renderHTML";

const app = express();
app.disable("x-powered-by");

const compiler = webpack(require("../../webpack.config"));

app.use(webpackDevMiddleware(compiler, {
  headers: {
    "Access-Control-Allow-Origin": "localhost:3000",
  },
  publicPath: "/assets",
}));
app.use(webpackHotMiddleware(compiler));

app.get("/", (req, res) => {
  res.send(renderHTML());
});

export default app;
