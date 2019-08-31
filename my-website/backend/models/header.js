const mongoose = require('mongoose');

const headerSchema = mongoose.Schema({
  header: {type: String, default: 'EDUCATION FOR ALL'},
  title: {type: String, default: 'Education is the key to unlock the golden door of freedom'},
});

module.exports = mongoose.model('Header', headerSchema);
