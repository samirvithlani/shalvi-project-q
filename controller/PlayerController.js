const playerSchema = require("../models/PlayerModel");
const addPlayer = async (req, res) => {
  try {
    const player = new playerSchema({
      user: req.body.user,
      playerRole: req.body.playerRole,
    });
    await player.save();
    res.status(200).json({
      message: "Player Added Successfully",
      player: player,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error While Adding Player",
      error: error,
    });
  }
};
const getPlayer = async (req, res) => {
  try {
    const player = await playerSchema
      .find()
      .populate("user")
      .populate("playerRole");
    res.status(200).json({
      message: "All Players",
      player: player,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error While Getting Player",
      error: error,
    });
  }
};
const getPlayerById = async (req, res) => {
  try {
    const player = await playerSchema
      .findById(req.params.id)
      .populate("user")
      .populate("playerRole");
    res.status(200).json({
      message: "Player By Id",
      player: player,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error While Getting Player By Id",
      error: error,
    });
  }
};
const updatePlayer = async (req, res) => {
  try {
    const player = await playerSchema.findByIdAndUpdate(req.params.id, {
      user: req.body.user,
      playerRole: req.body.playerRole,
    });
    res.status(200).json({
      message: "Player Updated Successfully",
      player: player,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error While Updating Player",
      error: error,
    });
  }
};
const deletePlayer = async (req, res) => {
  try {
    const player = await playerSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Player Deleted Successfully",
      player: player,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error While Deleting Player",
      error: error,
    });
  }
};
module.exports = {
    addPlayer,
    getPlayer,
    getPlayerById,
    updatePlayer,
    deletePlayer,
    
    
}