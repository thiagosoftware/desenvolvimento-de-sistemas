const { Router } = require("express");
const UserController = require("../controller/UserController");

const router = Router();

router.post('/create', UserController.create);
router.get('/', UserController.getAll);
router.get('/:id', UserController.getOne);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router;
