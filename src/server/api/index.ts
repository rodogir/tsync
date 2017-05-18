import * as express from "express";
import authentication from "./authentication";

const app = express();

app.use(authentication);

app.get("/verify-token", (req, res) => {
  res.status(200).send();
});

export default app;
