import * as dotenv from "dotenv";

dotenv.config();

const config = {
  LOG_LEVEL: process.env.LOG_LEVEL,
  PORT: process.env.PORT,
};

export default config;
