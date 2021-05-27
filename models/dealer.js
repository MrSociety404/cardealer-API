const mongoose = require('mongoose')

const dealerSchema = new mongoose.Schema({

<<<<<<< HEAD
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
=======
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
>>>>>>> 728048a1b0914372e3fa211254c1db377391e799
    type: String,
    required: true
  },
  joinAt: {
    type: Date,
    required: true,
    default: Date.now
<<<<<<< HEAD
=======
  },
  image: {
    type: String,
    required: true,
    default: 'https://i.imgur.com/BG7Nyh6.png'
>>>>>>> 728048a1b0914372e3fa211254c1db377391e799
  }

})

module.exports = mongoose.model('dealers', dealerSchema)