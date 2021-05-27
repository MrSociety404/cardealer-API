const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  availability: {
    type: String,
    required: true
  },
  motivation: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }

})

module.exports = mongoose.model('jobs', jobSchema)