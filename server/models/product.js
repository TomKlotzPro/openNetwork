const mongoose = require("mongoose");
const { commentSchema } = require("./comment");
const mongooseAlgolia = require("mongoose-algolia");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  slug: { type: String, unique: true, sparse: true },
  title: { type: String, required: true },
  subtitle: String,
  upvotes: [{ type: Schema.Types.ObjectId, ref: "Upvote" }],
  image: String,
  description: String,
  wsl: [{ type: Schema.Types.Mixed, value: String }],
  requirements: [{ type: Schema.Types.Mixed, value: String }],
  tasks: [{
    description: String,
    difficulty: {
      type: String,
      enum: ['very easy', 'easy', 'medium', 'hard', 'very hard']
    },
    title: String
  }],
  gitLink: String,
  tags: Array,
  status: {
    type: String,
    enum: ["active", "inactive", "deleted", "published"],
    default: "active"
  },
  comments: [commentSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  author: { type: Schema.Types.ObjectId, ref: "User" }
});

productSchema.plugin(mongooseAlgolia, {
  appId: process.env.APPID,
  apiKey: process.env.APPKEY,
  indexName: "projects" + process.env.INDEX_NAME
});

module.exports = mongoose.model("Product", productSchema);
