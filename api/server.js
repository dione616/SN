const express = require("express");
const app = express();

app.get("/:name", (req, res) => {
  console.log(req.params);
  return res.send(`Hello ${req.params.name} !`);
});

app.listen(3001, () => {
  console.log(`Server is running on 3001:-------------`);
});
