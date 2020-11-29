const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const AuthCtrl = require("../controllers/auth");
const ProductCtrl = require("../controllers/product.js");
const upload = require("../controllers/upload");
const singleUpload = upload.single("image");

router.get("", ProductCtrl.getProducts);
router.get(
  "/user-products",
  AuthCtrl.onlyAuthUser,
  //AuthCtrl.onlyAdmin,
  ProductCtrl.getInstructorProducts
);
router.get("/:id", ProductCtrl.getProductById);
router.get("/s/:slug", ProductCtrl.getProductBySlug);

router.post(
  "",
  AuthCtrl.onlyAuthUser,
  //AuthCtrl.onlyAdmin,
  ProductCtrl.createProduct
);
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
router.patch(
  "/:id",
  AuthCtrl.onlyAuthUser,
  //AuthCtrl.onlyAdmin,
  ProductCtrl.updateProduct
);

module.exports = router;
