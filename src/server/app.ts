import * as express from "express";
import logger from "./logger";
import renderHTML from "./renderHTML";

const app = express();
app.disable("x-powered-by");
app.get("/", (req, res) => {
  res.send(renderHTML());
});

export default app;
