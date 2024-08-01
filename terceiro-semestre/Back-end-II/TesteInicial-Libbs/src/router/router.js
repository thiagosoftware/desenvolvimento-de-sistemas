const { Router } = require("express");
const UserController = require("../controller/UserController");

const router = Router();

// Configurar as Rotas (CRUD)
router.post('/', (req, res) => {
    UserController.create(req, res);
})

router.get('/', (req, res) => {
    UserController.getAll(req, res);
})

router.get('/:id', (req, res) => {
    UserController.getOne(req, res);
})

router.delete('/:id', (req, res) => {
    UserController.delete(req, res);
})

router.put('/:id', (req, res) => {
    UserController.update(req, res);
})


module.exports = router;  