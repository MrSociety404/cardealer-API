const Dealer = require('../models/dealer')

module.exports = async (req, res, next) => {
 let dealer
 try {
  dealer = await Dealer.findById(req.params.id)
  if(dealer == null) {
    return res.status(404).json({message: 'Cannot find dealer'})
  }
 } catch (err) {
  return res.status(500).json({message: err.message})
 }
 res.dealer = dealer
 next()
}