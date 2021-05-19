const mongoose = require('mongoose');

const CarModel = mongoose.model(
  "cardealer",
  {
    name: {
      type: String,
      require: true
    },
    category: {
      type: String,
      require: true,
    },
    retail: {
      type: Number,
      require: true
    },
    resell: {
      type: Number,
      require: true
    },
    speed: {
      type: Number
    }, 
    image: {
      type: String
    }
  },
  "car"
)

module.exports = { CarModel }