import * as dotenv from "dotenv";

dotenv.config();

const config = {
  LOG_LEVEL: process.env.LOG_LEVEL,
  PORT: process.env.PORT,
  PUBLIC_ASSETS_PATH: "/assets",
};

export default config;
