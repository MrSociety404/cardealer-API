const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);

const settingSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  state: {
    type: Boolean,
    required: true
  }

})

module.exports = mongoose.model('settings', settingSchema)