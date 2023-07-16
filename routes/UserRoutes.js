const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');

router.post('/user', userController.addUser);
router.get('/user', userController.getUsers);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);
router.get('/user/:id', userController.getUserById);
router.post('/user/login', userController.loginUser);
module.exports = router;