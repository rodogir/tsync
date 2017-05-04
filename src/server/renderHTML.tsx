import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import config from "./config";
import HTML, { Assets } from "./HTML";

// const assets: Assets = require("../assets/assets.json");

function renderHTML(): string {
  return renderToStaticMarkup(
    <HTML
      isDevMode
      assetsPath={config.PUBLIC_ASSETS_PATH}
    />);
}

export default renderHTML;
