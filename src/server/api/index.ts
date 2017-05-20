import * as express from "express";
import * as proxy from "express-http-proxy";
import authentication from "./authentication";

const app = express();

app.use(authentication);

app.use("/toggle", proxy("www.toggle.com", {
  https: true,
  proxyReqPathResolver: (req: express.Request) => {
    return req.path;
  },
}));

app.get("/verify-token", (req, res) => {
  res.status(200).send();
});

export default app;
