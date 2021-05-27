const Sale = require('../models/sale')

module.exports = async (req, res, next) => {
  let sale
  try {
   sale = await Sale.findById(req.params.id)
   .populate({path: 'dealer',select: 'firstname lastname'})
   .populate({ path: 'car', select: 'label retail image'})
   if(sale == null) {
     return res.status(404).json({message: 'Cannot find sale'})
   }
  } catch (err) {
   return res.status(500).json({message: err.message})
  }
  res.sale = sale
  next()

}