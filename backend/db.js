import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

sqlite3.verbose(); // .verbose() mas dellates en mensajes, quitar despues

const db = new sqlite3.Database(path.join(__dirname, "kiosco.db"), (err) => {
  if (err) {
    console.error("Error al conectar con la base de datos:", err.message);
  } else {
    console.log("Conectado a la base de datos SQLite");
  }
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    contraseña TEXT NOT NULL,
    tipo TEXT NOT NULL
    )`);

  db.run(`CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    codigoBarra TEXT,
    precio REAL NOT NULL,
    cantidad INTEGER NOT NULL,
    cantidadActual INTEGER NOT NULL,
    precioVenta REAL NOT NULL
    )`);

  db.run(`CREATE TABLE IF NOT EXISTS pedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER NOT NULL,
    producto_id INTEGER NOT NULL,
    cantidad INTEGER NOT NULL,
    enviado INTEGER DEFAULT 0,
    fecha TEXT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
    )`);
});

export { db };
