const mongoose = require("mongoose");
const keys = require("../keys");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const Grid = require('gridfs-stream')

require("../models/user");
require("../models/product");
require("../models/category");
//require("../models/product-hero");
require("../models/blog");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};

exports.initSessionStore = function() {
  const store = new MongoDBStore({
    uri: keys.DB_URI,
    collection: "opeNetworkSessions"
  });

  store.on("error", error => console.log(error));

  return store;
};

export let gfs;

exports.connect = function() {
  const conn = mongoose.connect(keys.DB_URI, options);
  let init = mongoose.connection;
  init.once("open", () => {
    gfs = Grid(init.db, mongoose.mongo)
    gfs.collection("photos")
    console.log("DB Connected Successfully!");
  });
  return conn;
};
