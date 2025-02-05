require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { createClient } = require("@supabase/supabase-js");

const app = express();
const port = 5000;

// Configuração do Supabase usando as variáveis do .env
const supabase = createClient(
  process.env.SUPABASE_HOST, 
  process.env.SUPABASE_SERVICE_ROLE
);

app.use(cors());
app.use(bodyParser.json());

// Rota para obter projetos do Supabase
app.get("/api/projetos", async (req, res) => {
  try {
    const { data, error } = await supabase.from("projetos").select("*");
    if (error) {
      console.error("Erro ao buscar projetos do Supabase:", error);
      return res.status(500).send("Erro ao buscar projetos");
    }

    res.json(data);
  } catch (error) {
    console.error("Erro inesperado ao buscar projetos:", error);
    res.status(500).send("Erro inesperado ao buscar projetos");
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
