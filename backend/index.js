const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sercidor corriendo en http://localhost:${PORT}`);
});
