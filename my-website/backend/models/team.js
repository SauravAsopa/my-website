const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  bio: String
});

module.exports = mongoose.model('Team', teamSchema);
