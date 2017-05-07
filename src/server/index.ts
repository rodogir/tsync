import * as express from "express";
import app from "./app";
import config from "./config";
import logger from "./logger";
import renderHTML from "./renderHTML";

const port = config.PORT;
const listener = app.listen(port, () =>  logger.info(`Server listening on port ${port}`));

export default listener;
