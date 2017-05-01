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
  assetsPath: string;
  assets: Assets;
}

function HTML({ assetsPath, assets }: Props) {
  const { manifest, main, vendor } = assets;
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
        {/*<script type="text/javascript" src={appendPath(manifest.js)} async />
        <script type="text/javascript" src={appendPath(vendor.js)} async />*/}
        <script type="text/javascript" src={appendPath(main.js)} async />
      </body>
    </html>
  );
}

export default HTML;
export {
  JsSrc,
  Assets,
};
