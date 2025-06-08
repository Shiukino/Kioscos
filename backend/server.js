import express from "express";
import dotenv from "dotenv";
import { db } from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

export { app, PORT };
