const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({
  client: {
    type: String,
    required: true
  },
  car: {
    type: String,
    required: true
  },
  dealer: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model("sales", saleSchema)