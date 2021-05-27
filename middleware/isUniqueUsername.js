const Dealer = require('../models/dealer')

module.exports = async (req, res, next) => {
  try {
    let username = await Dealer.find({username: req.body.username})
    if(username.length !== 0) {
      return res.status(409).json({message: "Username already exists !"})
    }
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
  next()
}