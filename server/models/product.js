const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  slug: { type: String, unique: true, sparse: true },
  title: { type: String, required: true },
  subtitle: String,
  image: String,
  description: String,
  wsl: [{type: Schema.Types.Mixed, value: String}],
  requirements: [{type: Schema.Types.Mixed, value: String}],
  gitLink: String,
  tags: Array,
  status: {
    type: String,
    enum: ['active', 'inactive', 'deleted', 'published'],
    default: 'active'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  author: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Product', productSchema );
