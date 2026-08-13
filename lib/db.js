import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";

const dataDir = path.join(process.cwd(), "data");
const dbPath = path.join(dataDir, "cappuccino.db");

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const globalForDb = globalThis;
const db = globalForDb.__cappuccinoDb ?? new Database(dbPath);

db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

if (process.env.NODE_ENV !== "production") globalForDb.__cappuccinoDb = db;

export default db;
