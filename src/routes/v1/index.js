const express = require('express');
const UserController = require('../../controller/user');
const router = express.Router();

router.post('/user',UserController.create);
router.post('/signin',UserController.Signin);

module.exports = router;