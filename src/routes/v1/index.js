const express = require('express');
const UserController = require('../../controller/user');
const TopicController = require('../../controller/topic');
const QueController = require('../../controller/que');
const Auth = require('../../utils/passport-jwt');
const router = express.Router();

router.post('/user',UserController.create);
router.post('/signin',UserController.Signin);
router.get('/user',UserController.get);
router.put('/user/:id',UserController.update);
router.delete('/user/:id',UserController.Delete);


router.post('/topics',TopicController.create);
router.get('/topics',TopicController.get);


router.post('/questions',QueController.create);
router.get('/questions', QueController.getAll);
module.exports = router;