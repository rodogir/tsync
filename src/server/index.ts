import * as express from 'express';

const app = express();
app.disable('x-powered-by');

const port = 3000;
const listener = app.listen(port, () =>
  console.log(`Server listening on port ${port}`),
);

export default listener;
