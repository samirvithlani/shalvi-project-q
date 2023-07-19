const app = require('express');
const router = app.Router();
const PlayerRoleController = require('../controller/PlayerRoleController');
router.get('/', PlayerRoleController.getPlayerRole);
router.post('/', PlayerRoleController.addPlayerRole);
module.exports = router;