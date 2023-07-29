const eventSchema = require('../models/eventModel');

const createEvent = async (req, res) => {
    date = new Date(req.body.eventDate)
    console.log(date)
    console.log(typeof(date))
    try {
        const event = new eventSchema({
        name: req.body.name,
        venue: req.body.venue,
        eventDate: new Date(req.body.eventDate),
        eventTime: req.body.eventTime,
        eventType: req.body.eventType,
        teams:req.body.teams,
        price:req.body.price,
        totalSeat:req.body.totalSeat
        });
        await event.save();
        res.status(200).json({
        message: 'Event Added Successfully',
        event: event,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error While Adding Event',
        error: error,
        });
    }
}
const getEvent = async (req, res) => {
    try {
        const event = await eventSchema.find();
        res.status(200).json({
        message: 'All Events',
        event: event,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error While Getting Event',
        error: error,
        });
    }
    };
const getEventById = async (req, res) => {
    try {
        const event = await eventSchema.findById(req.params.id);
        res.status(200).json({
        message: 'Event By Id',
        event: event,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error While Getting Event By Id',
        error: error,
        });
    }
    };
const updateEvent = async (req, res) => {
    try {
        const event = await eventSchema.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        venue: req.body.venue,
        eventDate: req.body.eventDate,
        eventTime: req.body.eventTime,
        eventType: req.body.eventType,
        });
        res.status(200).json({
        message: 'Event Updated Successfully',
        event: event,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error While Updating Event',
        error: error,
        });
    }
    };
const deleteEvent = async (req, res) => {
    try {
        const event = await eventSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({
        message: 'Event Deleted Successfully',
        event: event,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error While Deleting Event',
        error: error,
        });
    }
    };
const addTeamToEvent = async (req, res) => {
    try {
        const event = await eventSchema.findByIdAndUpdate(req.params.id, {
        $push: { teams: req.body.teamId },
        });
        res.status(200).json({
        message: 'Team Added To Event Successfully',
        event: event,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error While Adding Team To Event',
        error: error,
        });
    }
    }
const removeTeamFromEvent = async (req, res) => {
    try {
        const event = await eventSchema.findByIdAndUpdate(req.params.id, {
        $pull: { teams: req.body.teamId },
        });
        res.status(200).json({
        message: 'Team Removed From Event Successfully',
        event: event,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error While Removing Team From Event',
        error: error,
        });
    }
    }

module.exports = {
    createEvent,
    getEvent,
    getEventById,
    updateEvent,
    deleteEvent,
    addTeamToEvent,
    removeTeamFromEvent,
};