const mongoose = require('mongoose');
const { commentSchema } = require("./comment");
const mongooseAlgolia = require('mongoose-algolia');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  slug: { type: String, unique: true, sparse: true },
  title: { type: String, maxlength: 96 },
  subtitle: { type: String },
  paragraph: { type: String },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "Upvote" }],
  content: { type: String, required: true },
  comments: [commentSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  featured: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ['active', 'inactive', 'deleted', 'published'],
    default: 'active'
  },
  author: { type: Schema.Types.ObjectId, ref: 'User' }
});
// Specify your Algolia credentials which you can find into your dashboard
blogSchema.plugin(mongooseAlgolia, {
  appId: process.env.APPID,
  apiKey: process.env.APPKEY,
  indexName: 'blogs' + process.env.INDEX_NAME
})

module.exports = mongoose.model('Blog', blogSchema);
