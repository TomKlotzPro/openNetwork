const express = require("express");
const app = express();
const session = require("express-session");
const db = require("../db");
const path = require("path");

const bodyParser = require("body-parser");
const keys = require("../keys");
const passport = require("passport");
const cors = require("cors")

const usersRoutes = require("./user");
const productRoutes = require("./product");
const categoryRoutes = require("./category");
const apiRoutes = require("./api");
const formidable = require('express-formidable')

require("../services/passport");

// connect to DB
db.connect();

const store = db.initSessionStore();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

const sess = {
  name: "openetwork-secure-session",
  secret: keys.SESSION_SECRET,
  cookie: { maxAge: 2 * 60 * 60 * 1000 },
  resave: false,
  saveUninitialized: false,
  store
};

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
  sess.cookie.secure = true;
  sess.cookie.httpOnly = true;
  sess.cookie.sameSite = true;
  sess.cookie.domain = process.env.DOMAIN; // .yourdomain.com
}

app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());

app.use("", apiRoutes);
app.use("/users", usersRoutes);
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);

module.exports = {
  path: "/api/v1",
  handler: app
};
