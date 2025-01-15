const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// Configuração do Pool do PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'portfolio',
    password: 'postgres',
    port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

// Rota para obter projetos
app.get('/api/projetos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM projetos');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao obter projetos');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
