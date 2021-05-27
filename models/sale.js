const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({
<<<<<<< HEAD
=======

>>>>>>> 728048a1b0914372e3fa211254c1db377391e799
  client: {
    type: String,
    required: true
  },
<<<<<<< HEAD
  car: {
    type: String,
    required: true
  },
  dealer: {
    type: String,
    required: true
=======
  dealer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'dealers'
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'cars'
>>>>>>> 728048a1b0914372e3fa211254c1db377391e799
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
<<<<<<< HEAD
  }
})

module.exports = mongoose.model("sales", saleSchema)
=======
  },
  editAt: {
    type: Date,
    required: false
  }

})

module.exports = mongoose.model('sales', saleSchema)
>>>>>>> 728048a1b0914372e3fa211254c1db377391e799
