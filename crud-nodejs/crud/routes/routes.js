var express = require('express');
var router = express.Router();

var controllers = require('.././controllers');

/* GET home page. */
router.get('/', controllers.homecontroller.index);

// rotas para produtos
router.get('/produtos', controllers.produtoscontroller.getProdutos);
router.get('/novo', controllers.produtoscontroller.getNewProduto);
router.post('/cadastrarProduto', controllers.produtoscontroller.postNovoProduto);
router.post('/deletarProduto', controllers.produtoscontroller.deletarProduto);
router.get('/modificar/:id', controllers.produtoscontroller.getModificarProduto);
router.post('/editar', controllers.produtoscontroller.postModificarProduto);

module.exports = router;
