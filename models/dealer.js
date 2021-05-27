const mongoose = require('mongoose')

const dealerSchema = new mongoose.Schema({

  firstname: {
    type: String,
    required: true
  },
  lastname: {
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
  joinAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  image: {
    type: String,
    required: true,
    default: 'https://i.imgur.com/BG7Nyh6.png'
  }

})

module.exports = mongoose.model('dealers', dealerSchema)