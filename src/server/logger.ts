import * as winston from "winston";
import config from "./config";

const consoleTransport = new winston.transports.Console({
  level: config.LOG_LEVEL,
  timestamp: true,
});

const logger = new winston.Logger({
  transports: [
    consoleTransport,
  ],
});

export default logger;
