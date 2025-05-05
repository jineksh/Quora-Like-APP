const express = require('express');
const UserController = require('../../controller/user');
const TopicController = require('../../controller/topic');
const router = express.Router();

router.post('/user',UserController.create);
router.post('/signin',UserController.Signin);
router.get('/user',UserController.get);
router.put('/user/:id',UserController.update);
router.delete('/user/:id',UserController.Delete);


router.post('/topics',TopicController.create);
router.get('/topics',TopicController.get);

module.exports = router;