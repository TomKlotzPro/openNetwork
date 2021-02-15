const express = require("express");
const router = express.Router();
const AuthCtrl = require("../controllers/auth");
const UpvoteCtrl = require("../controllers/upvote");

/**
 * Create a upvote
 * @route POST /upvotes
 * @group upvotes - Operations about upvotes
 * @returns {object} 200 - Return the upvote updated
 * @returns {Error} 422 - Error found
 */
router.post("", AuthCtrl.onlyAuthUser, UpvoteCtrl.createUpvote);

module.exports = router;
