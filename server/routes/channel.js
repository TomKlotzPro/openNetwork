const express = require("express");
const router = express.Router();
const multer = require("multer");

const AuthController = require("../controllers/auth");
const ChannelController = require('../controllers/channel.js');

router.get(
    "",
    //AuthController.onlyAuthUser,
    //AuthController.onlyAdmin,
    ChannelController.getChannel
);

router.get(
    "/:_id",
    //AuthController.onlyAuthUser,
    //AuthController.onlyAdmin,
    ChannelController.getChannelById
);

router.post(
    "",
    //AuthController.onlyAuthUser,
    //AuthController.onlyAdmin,
    ChannelController.createChannel
);

router.put(
    "/:_id",
    //AuthController.onlyAuthUser,
    //AuthController.onlyAdmin,
    ChannelController.updateChannel
);

router.delete(
    "/:_id",
    AuthController.onlyAuthUser,
    //AuthController.onlyAdmin,
    ChannelController.deleteChannel
);

module.exports = router;