const express = require('express');
const router = express.Router();
const roleController = require('../controller/RoleController');

//get post put delete
//get data fetch data
//post data add data
//put data update data
//delete data delete data
router.post('/role',roleController.addRole)
router.get('/role',roleController.getRoles)


module.exports = router;
