const Product = require("../models/product");
const slugify = require("slugify");
import { gfs } from '../db/index'

exports.getProducts = function(req, res) {
  Product.find({ status: "published" })
    .populate("author -_id -password -project -email -role")
    .populate("category")
    .sort({ updatedAt: -1 })
    .exec((errors, products) => {
      if (errors) {
        return res.status(422).send(errors);
      }

      return res.json(products);
    });
};

exports.getInstructorProducts = function(req, res) {
  const userId = req.user.id;

  Product.find({ author: userId })
    .populate("author")
    .sort({ updatedAt: -1 })
    .exec((errors, products) => {
      if (errors) {
        return res.status(422).send(errors);
      }

      return res.json(products);
    });
};

exports.getProductById = (req, res) => {
  const id = req.params.id;

  Product.findById(id)
    .populate("category")
    .exec((errors, product) => {
      if (errors) {
        return res.status(422).send(errors);
      }

      return res.json(product);
    });
};

exports.getProductBySlug = (req, res) => {
  const slug = req.params.slug;

  Product.findOne({ slug })
    .populate("author -_id -password -products -email -role")
    .exec((errors, product) => {
      if (errors) {
        return res.status(422).send(errors);
      }

      return res.json(product);
    });
};

// Needs recheck
exports.createProduct = function(req, res) {
  const productData = req.body;
  const user = req.user;
  const product = new Product(productData);
  product.author = user;

  product.save((errors, createdProduct) => {
    if (errors) {
      return res.status(422).send(errors);
    }

    return res.json(createdProduct);
  });
};

exports.getProjectImage = function(req, res) {
  console.log(req.headers)
  gfs.files.findOne({ filename: req.body }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) { return res.status(404).json({ err: "No file exists" }); }
    // Check if image
    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({ err: "Not an image" });

      return "Hello"
    }
  });
};

exports.updateProduct = async function(req, res) {
  const productId = req.params.id;
  const productData = req.body;

  Product.findById(productId)
    .populate("category")
    .exec((errors, product) => {
      if (errors) {
        return res.status(422).send(errors);
      }
      if (
        productData.status &&
        productData.status === "published" &&
        !product.slug
      ) {
        product.slug = slugify(product.title, {
          replacement: "-", // replace spaces with replacement
          remove: null, // regex to remove characters
          lower: true // result in lower case
        });
      }

      product.set(productData);
      product.save((errors, savedProduct) => {
        if (errors) {
          return res.status(422).send(errors);
        }

        return res.json(savedProduct);
      });
    });
};
