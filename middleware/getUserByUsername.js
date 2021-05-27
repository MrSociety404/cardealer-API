const Dealer = require('../models/dealer')

module.exports = async (req, res, next) => {

  let dealer
  try {
    dealer = await Dealer.findOne({username: req.body.username})
    if(dealer === null) {
      return res.status(400).json({message: 'Auth failed'})
    }
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
  res.dealer = dealer
  next()

}