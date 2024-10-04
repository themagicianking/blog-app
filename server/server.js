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

APP.get("/post", async (req, res) => {
  const DATABASE = await pool.connect();
  DATABASE.release();
  const POST = await DATABASE.query(
    `SELECT * FROM blogposts WHERE blogposts.id=${req.query.id}`
  );
  res.json(POST.rows);
});

APP.post("/posts", async (req, res) => {
  const DATABASE = await pool.connect();
  DATABASE.release();
  try {
    const POST = await DATABASE.query(
      `INSERT INTO blogposts (body, author) VALUES ('${req.body.body}', '${req.body.author}');`
    );
    res.send(POST);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

APP.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
