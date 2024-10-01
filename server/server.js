import express from "express";
import cors from "cors";
import pkg from "pg";
import "dotenv/config";

const APP = express();
const PORT = 5000;
const { Pool } = pkg;
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});

APP.use(express.json());
APP.use(cors());

APP.get("/posts", async (req, res) => {
  const DATABASE = await pool.connect();
  DATABASE.release();
  const POSTS = await DATABASE.query("SELECT * FROM blogposts;");
  res.json(POSTS.rows);
});

APP.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
