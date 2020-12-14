const Product = require("../models/product");
const Blog = require("../models/blog");

exports.initSyncWithAlgolia = function () {
    Blog.SyncToAlgolia();
    Product.SyncToAlgolia();
};