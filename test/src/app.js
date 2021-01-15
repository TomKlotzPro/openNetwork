require('dotenv').config();

const express = require('express');
const session = require("express-session");
const keys = require("../../server/keys");
const usersRoutes = require("../../server/routes/user");
const productRoutes = require("../../server/routes/product");
const categoryRoutes = require("../../server/routes/category");
const blogRoutes = require("../../server/routes/blog");
const apiRoutes = require("../../server/routes/api");
const passport = require("passport");
const databaseHelper = require('../../server/db');

require('../../server/services/passport')
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
    const sess = {
      name: "openetwork-secure-session",
      secret: keys.SESSION_SECRET,
      cookie: { maxAge: 2 * 60 * 60 * 1000 },
      resave: false,
      saveUninitialized: false,
      store: databaseHelper.initSessionStore()
    };
    this.express.use(express.json());
    this.express.use(session(sess));
    this.express.use(passport.initialize());
    this.express.use(passport.session());
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
