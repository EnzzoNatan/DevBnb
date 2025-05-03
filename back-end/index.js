import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = 3000;
const MONGO_URL = process.env.MONGO_URL

process.env.PORT

app.get('/', (req, resp) =>{
    resp.json('Olá mundo!')
} )

app.listen(PORT,() => {console.log(`Servidor rodando na porta ${PORT}`)});