const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const AuthCtrl = require("../controllers/auth");
const ProductCtrl = require("../controllers/product.js");
const upload = require("../controllers/upload");
const singleUpload = upload.single("image");

/**
 * Allow to get all products
 * @route GET /products
 * @group products - Operations about products
 * @returns {Array<object>} 200 - An array of products 
 * @returns {Error} 422 - Error found
 */
router.get("", ProductCtrl.getProducts);

/**
 * Allow to get all products of the users
 * @route GET /products/user-products
 * @group products - Operations about products
 * @returns {Array<object>} 200 - An array of products of the user
 * @returns {Error} 422 - Error found
 */
router.get(
  "/user-products",
  AuthCtrl.onlyAuthUser,
  ProductCtrl.getInstructorProducts
);

/**
 * Allow to get a product by id
 * @route GET /products/:id
 * @group products - Operations about products
 * @param {string} id - The id of the product
 * @returns {object} 200 - The product queried with id
 * @returns {Error} 422 - Error found
 */
router.get("/:id", ProductCtrl.getProductById);

/**
 * Allow to get a product by slug
 * @route GET /products/s/:slug
 * @group products - Operations about products
 * @param {string} slug - The slug of the product
 * @returns {object} 200 - The product queried with slug
 * @returns {Error} 422 - Error found
 */
router.get("/s/:slug", ProductCtrl.getProductBySlug);

/**
 * Allow to create a product
 * @route POST /products
 * @group products - Operations about products
 * @param {string} product - The slug of the product
 * @returns {object} 200 - The product created
 * @returns {Error} 422 - Error found
 */
router.post(
  "",
  AuthCtrl.onlyAuthUser,
  //AuthCtrl.onlyAdmin,
  ProductCtrl.createProduct
);

/**
 * Allow to add an image to a product
 * @route POST /products/:id/add-project-image
 * @group products - Operations about products
 * @param {string} id - The id of the product
 * @param {object} image - The image in the body
 * @returns {object} 200 - Return the product updated with image
 * @returns {Error} 400 - Image upload error
 */
router.post("/:id/add-project-image", function(req, res) {
  const uid = req.params.id;

  singleUpload(req, res, function(error) {
    if (error) {
      return res.json({
        success: false,
        errors: {
          title: "Image Upload Error",
          detail: error.message,
          error: error
        }
      });
    }
    let update = { image: req.file.location };
    Product.findByIdAndUpdate(uid, update, { new: true })
      .then(product => res.status(200).json({ success: true, product: product }))
      .catch(error => res.status(400).json({ success: false, error: error }));
  });
});

/**
 * Allow to update a product
 * @route POST /products
 * @group products - Operations about products
 * @param {object} product - The product in the body
 * @returns {object} 200 - Return the product updated
 * @returns {Error} 422 - Error found
 */
router.patch(
  "/:id",
  AuthCtrl.onlyAuthUser,
  ProductCtrl.updateProduct
);

/**
 * Tries to add an upvote to the blog post, if the author already upvoted, it removes it, else it add it
 * @route PATCH /products/:id/upvote
 * @param {object} upvote - The blog to update
 * @group products - Operations about products
 * @returns {object} 200 - Return the product updated
 * @returns {Error} 422 - Error found
 */
router.patch(
  "/:id/upvote",
  AuthCtrl.onlyAuthUser,
  ProductCtrl.updateProductUpvotes
);

module.exports = router;
