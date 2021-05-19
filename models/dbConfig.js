const mongoose = require('mongoose')

mongoose.connect(
  "mongodb://45.9.191.251:27017/cardealer",
  {useNewUrlParser: true, useUnifiedTopology: true},
  (err) => {
    if(!err) console.log('MongoDB connected')
    else console.log("Connection error : " + err)
  }
)