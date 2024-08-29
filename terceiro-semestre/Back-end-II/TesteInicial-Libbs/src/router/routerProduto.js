const ProdutoController = require("../controller/ProdutoController");
const { ValidateProduto, ValidateProdutoId } = require("../middlewares/ValidateProduto");
const router = require("express").Router(); // Instância correta de Router

// Rotas para Produto
router.post('/', ValidateProduto, (req, res) => {
    ProdutoController.create(req, res);
});

router.get('/', (req, res) => {
    ProdutoController.getAll(req, res);
});

router.get('/:id', ValidateProdutoId, (req, res) => {
    ProdutoController.getOne(req, res);
});

router.delete('/:id', ValidateProdutoId, (req, res) => {
    ProdutoController.delete(req, res);
});

router.put('/:id', ValidateProduto, ValidateProdutoId, (req, res) => {
    ProdutoController.update(req, res);
});

module.exports = router;
