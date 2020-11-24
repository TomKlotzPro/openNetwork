const express = require("express");
const router = express.Router();
const multer = require("multer");

const AuthCtrl = require("../controllers/auth");
const ProductCtrl = require('../controllers/product.js');
const UploadController = require("../controllers/upload");

/* const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10
  },
  fileFilter: fileFilter
}); */

router.get("", ProductCtrl.getProducts);
router.get(
  "/user-products",
  AuthCtrl.onlyAuthUser,
  //AuthCtrl.onlyAdmin,
  ProductCtrl.getInstructorProducts
);
router.get("/image", ProductCtrl.getProjectImage);
router.get("/:id", ProductCtrl.getProductById);
router.get("/s/:slug", ProductCtrl.getProductBySlug);

router.post(
  "",
  AuthCtrl.onlyAuthUser,
  //AuthCtrl.onlyAdmin,
  ProductCtrl.createProduct
);
router.patch(
  "/upload",
  AuthCtrl.onlyAuthUser,
  UploadController.uploadFile,
);
router.patch(
  "/:id",
  AuthCtrl.onlyAuthUser,
  //AuthCtrl.onlyAdmin,
  ProductCtrl.updateProduct
);

module.exports = router;
