const { Router } = require("express");
const UserController = require("../controller/UserController");
const ProdutoController = require("../controller/ProdutoController");

const router = Router();

// Configurar as Rotas (CRUD)



// Rotas para User
router.post('/user', (req, res) => {
    UserController.create(req, res);
})

router.get('/user', (req, res) => {
    UserController.getAll(req, res);
})

router.get('/user/:id', (req, res) => {
    UserController.getOne(req, res);
})

router.delete('/user/:id', (req, res) => {
    UserController.delete(req, res);
})

router.put('/user/:id', (req, res) => {
    UserController.update(req, res);
})


// Rotas para Produto
router.post('/produto', (req, res) => {
    ProdutoController.create(req, res);
})

router.get('/produto', (req, res) => {
    ProdutoController.getAll(req, res);
})

router.get('/produto/:id', (req, res) => {
    ProdutoController.getOne(req, res);
})

router.delete('/produto/:id', (req, res) => {
    ProdutoController.delete(req, res);
})

router.put('/produto/:id', (req, res) => {
    ProdutoController.update(req, res);
})

module.exports = router;  