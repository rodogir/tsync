import * as express from "express";
import config from "./config";
import logger from "./logger";
import renderHTML from "./renderHTML";

const app = express();
app.disable("x-powered-by");
app.get("/", (req, res) => {
  res.send(renderHTML());
});

const port = config.PORT;
const listener = app.listen(port, () =>  logger.info(`Server listening on port ${port}`));

export default listener;
