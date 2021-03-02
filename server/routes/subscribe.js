const express = require("express");
const router = express.Router();
const SubscribeCtrl = require("../controllers/subscribe");

/**
 * Subscribe to newsletter
 * @route POST /subscribe
 * @group subscribe - Operations about subscribe
 * @returns {object} 200 -
 * @returns {Error} 422 -
 */
router.post("", SubscribeCtrl.subscribeToNewsletter);

module.exports = router;
