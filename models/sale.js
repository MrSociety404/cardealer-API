const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({

  client: {
    type: String,
    required: true
  },
  dealer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'dealers'
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'cars'
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  editAt: {
    type: Date,
    required: false
  }

})

module.exports = mongoose.model('sales', saleSchema)