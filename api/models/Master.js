const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Master = new Schema({
  name: {
    type: String
  },
  position: {
    type: String
  },
  joining_year: {
    type: String
  },
   address: {
    type: String
  },
  age: {
    type: Number
  }
},{
    collection: 'master'
});

module.exports = mongoose.model('Master', Master);