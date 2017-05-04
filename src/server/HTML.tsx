import * as React from "react";

interface JsSrc {
  js: string;
}

interface Assets {
  manifest: JsSrc;
  main: JsSrc;
  vendor: JsSrc;
}
interface Props {
  isDevMode: boolean;
  assetsPath: string;
  assets?: Assets;
}

function HTML({ isDevMode, assetsPath, assets }: Props) {
  const { manifest = null, main = null, vendor = null } = assets ? assets : {};
  function appendPath(src: string) {
    return `${assetsPath}/${src}`;
  }
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>tsync</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        👋 Hello World <br />
        🚧 tsync is being created here
        <div id="app" />
        {manifest && <script type="text/javascript" src={appendPath(manifest.js)} />}
        {vendor && <script type="text/javascript" src={appendPath(vendor.js)} />}
        {main && <script type="text/javascript" src={appendPath(main.js)} />}
        {isDevMode && <script type="text/javascript" src={appendPath("vendor.js")} />}
        {isDevMode && <script type="text/javascript" src={appendPath("main.js")} />}
      </body>
    </html>
  );
}

export default HTML;
export {
  JsSrc,
  Assets,
};
