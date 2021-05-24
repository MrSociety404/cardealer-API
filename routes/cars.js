const express = require('express')
const router = express.Router()
const Cars = require('../models/cars')

// Getting All
router.get('/', async (req, res) => {
  try {
    const cars = await Cars.find({},['_id','label','category','resell','speed','image'])
    res.json(cars)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})

// Geting One
router.get('/:id', getCars , (req, res) => {
  res.json(res.cars)
})

// Creating One
// Updateing One
// Deleting One

//get cars by id
async function getCars (req, res, next) {
  let cars
  try {
    cars = await Cars.findById(req.params.id)
    if(cars == null) {
      return res.status(404).json({message: 'Cannot find car'})
    }
  } catch (err) {
    return res.status(500).json({message: err.message})
  }

  res.cars = cars
  next()
}
 
module.exports = router