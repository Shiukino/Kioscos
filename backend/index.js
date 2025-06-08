import { app, PORT } from "./server.js";

app.listen(PORT, () => {
  console.log(`Sercidor corriendo en http://localhost:${PORT}`);
});
