const express = require('express');
const router = express.Router();

const CategoriesCtrl = require('../controllers/category');

/**
 * Allow to get all categories
 * @route GET /categories
 * @group categories - Operations about categories
 * @returns {Array<object>} 200 - An array of categories 
 * @returns {Error} 422 - Error found
 */
router.get('', CategoriesCtrl.getCategories);

module.exports = router;
