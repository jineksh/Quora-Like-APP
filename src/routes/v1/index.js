const express = require('express');
const UserController = require('../../controller/user');
const router = express.Router();

router.post('/user',UserController.create);

module.exports = router;