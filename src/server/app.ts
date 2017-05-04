import * as express from "express";
import renderHTML from "./renderHTML";

const app = express();
app.disable("x-powered-by");

app.use("/assets", express.static(__dirname + "/../assets", {
  maxAge: "1y",
}));

app.get("/", (req, res) => {
  res.send(renderHTML());
});

export default app;
