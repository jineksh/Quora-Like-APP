const express = require('express');
const UserController = require('../../controller/user');
const router = express.Router();

router.post('/user',UserController.create);
router.post('/signin',UserController.Signin);
router.get('/user',UserController.get);
router.put('/user/:id',UserController.update);
router.delete('/user/:id',UserController.Delete);


module.exports = router;