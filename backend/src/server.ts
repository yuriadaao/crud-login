import express from "express";
import pool from "./db.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

// TESTE DE CONEXÃOO
// app.get("/test-db", async (_req, res) => {
//   try {
//     const result = await pool.query("SELECT NOW()");

//     res.json({
//       message: "PostgreSQL conectado!",
//       time: result.rows[0].now,
//     });
//   } catch (error) {
//     console.error("Erro ao conectar ao PostgreSQL:", error);

//     res.status(500).json({
//       message: "Erro ao conectar ao banco",
//     });
//   }
// });

app.post("/users", async (req, res) => {
  try {
    console.log(req.body);

    res.status(201).json({
      message: "Usuário Recebido",
      user: req.body,
    });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);

    res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
});

app.listen(3000, () => {
  console.log("Backend rodando em http://localhost:3000");
});
