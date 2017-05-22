// Type definitions for express-http-proxy

import { Application, Request } from "express";
import * as proxy from "express-http-proxy";

declare function proxy(host: string, options: ExpressHttpProxy.Options): Application;

declare namespace ExpressHttpProxy {
  interface Options {
    https: boolean;
    proxyReqPathResolver: (req: Request) => string | Promise<string>;
  }
}

export = proxy;
