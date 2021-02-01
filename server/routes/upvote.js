const express = require("express");
const router = express.Router();
const AuthCtrl = require("../controllers/auth");
const UpvoteCtrl = require("../controllers/upvote");

router.post("", AuthCtrl.onlyAuthUser, UpvoteCtrl.createUpvote);

module.exports = router;
