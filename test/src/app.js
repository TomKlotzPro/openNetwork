require('dotenv').config();

const express = require('express');
const usersRoutes = require("../../server/routes/user");
const productRoutes = require("../../server/routes/product");
const categoryRoutes = require("../../server/routes/category");
const blogRoutes = require("../../server/routes/blog");
const apiRoutes = require("../../server/routes/api");

const databaseHelper = require('../../server/db');

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    databaseHelper.connect();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use("", apiRoutes);
    this.express.use("/users", usersRoutes);
    this.express.use("/products", productRoutes);
    this.express.use("/categories", categoryRoutes);
    this.express.use("/blogs", blogRoutes);
  }
}

module.exports = new App().express;
