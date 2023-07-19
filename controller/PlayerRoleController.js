const playerRoleSchema = require("../models/PlayerRoleModel");
const addPlayerRole = async (req, res) => {
    try {
        const playerRole = new playerRoleSchema({
        name: req.body.name,
        description: req.body.description,
        });
        await playerRole.save();
        res.status(200).json({
        message: "Player Role Added Successfully",
        playerRole: playerRole,
        });
    } catch (error) {
        res.status(500).json({
        message: "Error While Adding Player Role",
        error: error,
        });
    }
}
const getPlayerRole = async (req, res) => {
    try {
        const playerRole = await playerRoleSchema.find();
        res.status(200).json({
        message: "All Player Roles",
        playerRole: playerRole,
        });
    } catch (error) {
        res.status(500).json({
        message: "Error While Getting Player Role",
        error: error,
        });
    }
    }
module.exports = {
    addPlayerRole,
    getPlayerRole,
}