const Event = require("../models/Event");
const mongoose = require("mongoose");

// GET /api/v1/events
exports.getEvents = async (req, res, next) => {
  try {
    const events = await Event.find();
    res.status(200).json({
      success: true,
      events,
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/v1/events/:slug
exports.getEvent = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const event = await Event.findOne({ slug });
    res.status(200).json({
      success: true,
      event,
    });
  } catch (error) {
    next(error);
  }
};
