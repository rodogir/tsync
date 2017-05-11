import * as express from "express";
import config from "./config";

const app = express();
app.disable("x-powered-by");

app.use("/assets", express.static(__dirname + "/../assets", {
  maxAge: "1y",
}));

if (config.isProd) {
  const renderHTML = require("./renderHTML").default;
  app.get("*", (req, res) => {
    res.send(renderHTML());
  });
}

export default app;
