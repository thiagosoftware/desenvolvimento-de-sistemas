const { Router } = require("express");
const routerUser = require("./routerUser");
const routerProduto = require("./routerProduto");
const UserController = require("../controller/UserController");
const authenticateToken = require('../middlewares/authenticateToken');

const router = Router();

router.use('/user', routerUser);
router.use('/produto', routerProduto);

router.post('/login', (req, res) => {
    UserController.login(req, res);
});

module.exports = router;
