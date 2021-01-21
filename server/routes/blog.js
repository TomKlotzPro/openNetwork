const express = require("express");
const router = express.Router();

const blogCtrl = require("../controllers/blog");
const AuthCtrl = require("../controllers/auth");

router.get("", blogCtrl.getBlogs);

/**
 * Allow to get blogs creater by the current logged user
 * @route GET /blogs/me
 * @group blogs - Operations about blogs
 * @returns {Array.<object>} 200 - An array of blogs created by the current user
 * @returns {Error} 422 - Error found
 */
router.get("/me", AuthCtrl.onlyAuthUser, blogCtrl.getUserBlogs);

/**
 * Allow to get blogs by id
 * @route GET /blogs/:id
 * @param {string} id - Blog id
 * @group blogs - Operations about blogs
 * @returns {object} 200 - The blog by ID
 * @returns {Error} 422 - Error found
 */
router.get("/:id", blogCtrl.getBlogById);

/**
 * Allow to get blogs by slug
 * @route GET /blogs/s/:slug
 * @param {string} slug - Blog slug
 * @group blogs - Operations about blogs
 * @returns {Array<object>} 200 - An array of blogs created by the current user
 * @returns {Error} 422 - Error found
 */
router.get("/s/:slug", blogCtrl.getBlogBySlug);

/**
 * Allow to create a blog
 * @route POST /blogs
 * @param {object} blog - The blog to add
 * @group blogs - Operations about blogs
 * @returns {object} 200 - Return the blog created
 * @returns {Error} 422 - Error found
 */
router.post("", AuthCtrl.onlyAuthUser, blogCtrl.createBlog);

/**
 * Allow to update a blog
 * @route PATCH /blogs
 * @param {object} blog - The blog to update
 * @group blogs - Operations about blogs
 * @returns {object} 200 - Return the blog created
 * @returns {Error} 422 - Error found
 */
router.patch("/:id", AuthCtrl.onlyAuthUser, blogCtrl.updateBlog);

/**
 * Allow to delete a blog
 * @route DELETE /blogs
 * @param {object} blog - The blog to update
 * @group blogs - Operations about blogs
 * @returns {object} 200 - Return the blog created
 * @returns {Error} 422 - Error found
 */
router.delete("/:id", AuthCtrl.onlyAuthUser, blogCtrl.deleteBlog);

module.exports = router;
