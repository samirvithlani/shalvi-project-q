const express = require('express');
const router = express.Router();
const teamController = require('../controller/teamController');
router.post('/create', teamController.createTeam);
router.get('/get/:eventid', teamController.getTeamByEventId);
router.get('/get/:id', teamController.getTeamById);
router.put('/update/:id', teamController.updateTeam);
router.delete('/delete/:id', teamController.deleteTeam);

router.put('/addplayer/:id', teamController.addPlayerToTeam);
router.put('/removeplayer/:id', teamController.removePlayerFromTeam);
module.exports = router;
