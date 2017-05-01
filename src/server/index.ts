import * as express from "express";
import renderHTML from "./renderHTML";

const app = express();
app.disable("x-powered-by");
app.get("/", (req, res) => {
  res.send(renderHTML());
});

const port = process.env.PORT || 3000;
const listener = app.listen(port, () =>
  console.log(`Server listening on port ${port}`),
);

export default listener;
