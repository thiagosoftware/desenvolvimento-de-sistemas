const { Router } = require("express");
const routerUser = require("./routerUser");
const routerProduto = require("./routerProduto");
const UserController = require("../controller/UserController");
const uploadRoutes = require('./routerUpload')
const authenticateToken = require('../middlewares/authenticateToken');
const { uploadImage } = require("../controller/UploadController");

const router = Router();

router.use('/image', uploadRoutes)

router.use('/user', routerUser);
router.use('/produto', routerProduto);

router.post('/login', (req, res) => {
    UserController.login(req, res);
});

module.exports = router;
