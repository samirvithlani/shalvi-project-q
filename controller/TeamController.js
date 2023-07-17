const teamSchema = require('../models/TeamModel');
const createTeam = async (req, res) => {
  try {
    console.log(req.body);
    const team = new teamSchema(req.body)
    await team.save();
    console.log(team);
    res.status(200).json({
      message: 'Team Added Successfully',
      team: team,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error While Adding Team',
      error: error,
    });
  }
};
const getTeamByEventId = async (req, res) => {
    try {
        const team = await teamSchema.find({event:req.params.eventid}).populate('players');
        res.status(200).json({
        message: 'Team By Event Id',
        team: team,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error While Getting Team By Event Id',
        error: error,
        });
    }    }

const getTeam = async (req, res) => {
    try {
        const team = await teamSchema.find().populate('players');
        res.status(200).json({
        message: 'All Teams',
        team: team,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error While Getting Team',
        error: error,
        });
    }
    };
const getTeamById = async (req, res) => {
    try {
        const team = await teamSchema.findById(req.params.id).populate('players');
        res.status(200).json({
        message: 'Team By Id',
        team: team,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error While Getting Team By Id',
        error: error,
        });
    }
    };
const updateTeam = async (req, res) => {
    try {
        const team = await teamSchema.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        });
        res.status(200).json({
        message: 'Team Updated Successfully',
        team: team,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error While Updating Team',
        error: error,
        });
    }
    };
const deleteTeam = async (req, res) => {
    try {
        const team = await teamSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({
        message: 'Team Deleted Successfully',
        team: team,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error While Deleting Team',
        error: error,
        });
    }
    };
const addPlayerToTeam = async (req, res) => {
    try {
        const team = await teamSchema.findByIdAndUpdate(req.params.id, {
        $push: { players: req.body.playerId },
        });
        res.status(200).json({
        message: 'Player Added To Team Successfully',
        team: team,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error While Adding Player To Team',
        error: error,
        });
    }
    }
const removePlayerFromTeam = async (req, res) => {
    try {
        const team = await teamSchema.findByIdAndUpdate(req.params.id, {
        $pull: { players: req.body.playerId },
        });
        res.status(200).json({
        message: 'Player Removed From Team Successfully',
        team: team,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error While Removing Player From Team',
        error: error,
        });
    }
    }
const getPlayerByTeamIdAndEventId = async (req, res) => {
    try {
        const team = await teamSchema.find({
        _id: req.params.teamid,
        event: req.params.eventid,
        });
        res.status(200).json({
        message: 'Player By Team Id And Event Id',
        team: team,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error While Getting Player By Team Id And Event Id',
        error: error,
        });
    }
}
module.exports = {
    createTeam,
    getTeam,
    getTeamById,
    updateTeam,
    deleteTeam,
    addPlayerToTeam,
    removePlayerFromTeam,
    getTeamByEventId,
    getPlayerByTeamIdAndEventId,
};