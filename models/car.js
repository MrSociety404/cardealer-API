const mongoose = require('mongoose')

const carsSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  retail: {
    type: Number,
    required: true
  },
  resell: {
    type: Number,
    required: true
  },
  speed: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("cars", carsSchema)