const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  category_name: String,
  category_desc: String
})

module.exports = mongoose.model('Category', categorySchema);
