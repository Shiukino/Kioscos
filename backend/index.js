const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(PORT, () => {
  console.log(`Sercidor corriendo en http://localhost:${PORT}`);
});
