import 'dotenv/config';
import express from 'express';
import User from './models/User.js';
import connectDb from './config/db.js';

const app = express();
const { PORT } = process.env;

app.get('/users', async (req, res) => {
  try {
    const usersDoc = await User.find();
    res.json(usersDoc);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// Aguarde a conexão antes de iniciar o servidor
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch((err) => {
  console.error("Erro ao conectar ao banco de dados. Servidor não iniciado.");
});
