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
  Price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("sales", saleSchema)