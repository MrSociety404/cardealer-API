const mongoose = require('mongoose')

const dealerSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  joinAt: {
    type: Date,
    required: true,
    default: Date.now
  }

})

module.exports = mongoose.model('dealers', dealerSchema)