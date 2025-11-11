// src/app.js
require('dotenv').config();
const express = require('express');
const sequelize = require('../database');
const Produto = require('../models/produtoModel');

const app = express();
app.use(express.json());

// Middleware para interpretar JSON
app.use(express.json());

// Importamos o nosso arquivo de rotas de produtos

const produtoRoutes = require('../routes/produtoRoutes');
const usuarioRoutes = require('../routes/usuarioRoutes');

// Usamos o roteador na nossa aplicação, definindo um prefixo
// Todas as rotas em 'produtoRoutes' terão '/api/produtos' antes
app.use('/api/produtos', produtoRoutes);
app.use('/api/usuarios', usuarioRoutes); 

// Rota de teste
app.get('/', (req, res) => {
  res.send('API de Produtos funcionando!');
});

async function syncDatabase() {
  try {
      await sequelize.sync();
      console.log('Modelos sincronizados com o banco de dados.');
  } catch (error) {
      console.error('Erro ao sincronizar modelos:', error);
  }
}
syncDatabase();

module.exports = app;