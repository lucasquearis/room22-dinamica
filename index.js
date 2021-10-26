const auth = require("./middleware/auth")
const express = require('express');
const readApi = require('./middleware/readApi.js')

// const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(auth);
app.get("/btc/price", async (_req, res, _next) => {
  const api = await readApi();
  res.status(202).json(api);
});
app.listen(3000, () => console.log("ouvindo na porta 3000"));
