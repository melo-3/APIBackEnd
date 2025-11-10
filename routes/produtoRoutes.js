// src/routes/produtoRoutes.js
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Importamos nosso guardião
const { verificaToken } = require('../middlewares/authMiddleware');

// Rotas Públicas (qualquer um pode ver)
router.get('/', produtoController.listarTodos);
router.get('/:id', produtoController.buscarPorId);

// Rotas Protegidas (apenas usuários autenticados podem acessar)
// O middleware `verificaToken` é executado ANTES das funções do controller
router.post('/', verificaToken, produtoController.criar);
router.put('/:id', verificaToken, produtoController.atualizar);
router.delete('/:id', verificaToken, produtoController.deletar);

module.exports = router;