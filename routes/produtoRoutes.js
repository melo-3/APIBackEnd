// src/routes/produtoRoutes.js
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Importamos nosso guardião
const { verificaToken } = require('../src/middlewares/authMiddleware');

// Rotas Públicas (qualquer um pode ver)
router.get('/', produtoController.getAllProdutos);
router.get('/:id', produtoController.getProdutoById);

// Rotas Protegidas (apenas usuários autenticados podem acessar)
// O middleware `verificaToken` é executado ANTES das funções do controller
router.post('/', verificaToken, produtoController.createProduto);
router.put('/:id', verificaToken, produtoController.updateProduto);
router.delete('/:id', verificaToken, produtoController.deleteProduto);

module.exports = router;