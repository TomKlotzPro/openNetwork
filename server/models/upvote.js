const mongoose = require("mongoose");
const mongooseAlgolia = require("mongoose-algolia");

const Schema = mongoose.Schema;

const upvoteSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: "User" }
});

upvoteSchema.plugin(mongooseAlgolia, {
  appId: process.env.APPID,
  apiKey: process.env.APPKEY,
  indexName: "upvotes" + process.env.INDEX_NAME
});

module.exports = mongoose.model("Upvote", upvoteSchema);
