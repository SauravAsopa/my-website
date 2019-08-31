const mongoose = require('mongoose');

const blogListSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  img_path: String,
  category: String,
  title: String,
  caption: String,
  author: String
})

module.exports = mongoose.model('BlogList', blogListSchema);
