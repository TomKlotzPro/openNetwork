const Channel = require('../models/channel');
const passport = require('passport');

exports.getChannel = function (req, res, next) {
    Channel.find((error, channels) => {
        if (error) return next(error)
        res.json(channels)
    })
};

exports.getChannelById = function (req, res, next) {
    Channel.findById(req.params._id, (error, channel) => {
        if (error) return next(error)
        res.json(channel)
    })
};

exports.createChannel = function (req, res, next) {
    Channel.create(req.body, (error, channel) => {
        if (error) return next(error)
        res.json(channel)
    })
};

exports.updateChannel = function (req, res, next) {
    Channel.findByIdAndUpdate(req.params._id, req.body, (error, channel) => {
        if (error) return next(error)
        res.json(channel)
    })
};

exports.deleteChannel = function (req, res, next) {
    Channel.findByIdAndDelete(req.params._id, req.body, (error, channel) => {
        if (error) return next(error)
        res.json(channel)
    })
};
