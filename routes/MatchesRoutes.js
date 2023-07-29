const matchController = require("../controller/MatchesController")
const express = require("express")
const router = express.Router()

router.post("/addMatch",matchController.addMatches),
router.get("/get/match/:id",matchController.getAllMatchesById)
router.get("/get/allmatches",matchController.getAllMatchs)
router.delete("/delete/match/:id",matchController.deleteMatch)

module.exports = router;


