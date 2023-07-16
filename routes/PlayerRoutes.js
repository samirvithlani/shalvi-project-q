const express = require('express');
const router = express.Router();
const playerController = require('../controller/playerController');

router.get('/get', playerController.getPlayer);
router.get('/get/:id', playerController.getPlayerById);
router.put('/update/:id', playerController.updatePlayer);
router.delete('/delete/:id', playerController.deletePlayer);
module.exports = router;
