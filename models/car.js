const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({

  label: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  retail: {
    type: Number,
    required: true,
  },
  resell: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
    default: 0
  },
  image: {
    type: String,
    required: true,
    default: 'https://i.imgur.com/BG7Nyh6.png'
  }

})

module.exports = mongoose.model('cars', carSchema)