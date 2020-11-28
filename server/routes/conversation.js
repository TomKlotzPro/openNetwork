
const express = require("express");
const router = express.Router();
const multer = require("multer");

import ConversationCtrl from '../controllers/conversation'

router.get(
    "/:id",
    //AuthController.onlyAuthUser,
    //AuthController.onlyAdmin,
    ConversationCtrl.getConversationByChannelId
);


module.exports = router;