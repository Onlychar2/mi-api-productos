// db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./productos.db');

// Crear la tabla si no existe
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS productos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL
    )
  `);
});

module.exports = db;
