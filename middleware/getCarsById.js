const Car = require('../models/car')

module.exports = async (req, res, next) => {
 let car
 try {
  car = await Car.findById(req.params.id)
  if(car == null) {
    return res.status(404).json({message: 'Cannot find car'})
  }
 } catch (err) {
  return res.status(500).json({message: err.message})
 }
 res.car = car
 next()
}