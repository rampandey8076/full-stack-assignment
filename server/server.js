// ─────────────────────────────────────────────────────────────
// Threadbase API — already implemented. You do NOT need to edit this.
// GET  /api/threads        → list threads
// POST /api/threads        → create a thread { title, body }
// ─────────────────────────────────────────────────────────────
import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); // dev: allow all origins (you configured this in LU 2.1)
app.use(express.json());

// in-memory store (resets on restart — fine for this assignment)
let threads = [
  { id: 1, title: "Welcome to Threadbase", body: "This thread came from your Express API." },
  { id: 2, title: "Axios > fetch for app code", body: "Auto JSON, response.data, throws on errors." },
  { id: 3, title: "One base URL to rule them all", body: "Set it once in axios.create()." },
];
let nextId = 4;

app.get("/api/threads", (req, res) => {
  res.json(threads);
});

app.post("/api/threads", (req, res) => {
  const { title, body } = req.body ?? {};
  if (!title || !body) {
    return res.status(400).json({ error: "title and body are required" });
  }
  const thread = { id: nextId++, title, body };
  threads = [thread, ...threads];
  res.status(201).json(thread);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Threadbase API running on http://localhost:${PORT}`);
});
