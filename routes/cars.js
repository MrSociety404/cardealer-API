const express = require('express')
const router = express.Router()
<<<<<<< HEAD
const Car = require('../models/car')

// Getting All
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find({},['_id','label','category','resell','speed','image'], {
      sort: {
        resell: "asc"
      }
    })
    res.json(cars)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})

// Geting One
router.get('/:id', getCar , (req, res) => {
  res.json(res.cars)
})

// Creating One
// Updateing One
// Deleting One

//get cars by id
async function getCar (req, res, next) {
  let cars
  try {
    cars = await Car.findById(req.params.id)
    if(cars == null) {
      return res.status(404).json({message: 'Cannot find car'})
    }
  } catch (err) {
    return res.status(500).json({message: err.message})
  }

  res.cars = cars
  next()
}
 
=======

const checkAuth = require('../middleware/checkAuth')
const isAuth = require('../middleware/isAuth')
const getCarsById = require('../middleware/getCarsById')

const CarControler = require('../controllers/carController')

// Getting All
router.get('/', isAuth , CarControler.getAllCars)

// Getting One
router.get('/:id', isAuth , getCarsById , CarControler.getOneCar)

// Creating One 
router.post('/', checkAuth ,CarControler.addCar)

// Delete One
router.delete('/:id', checkAuth, getCarsById , CarControler.deleteOne)

// Edit One
router.patch('/:id', checkAuth, getCarsById , CarControler.editOne)

>>>>>>> 728048a1b0914372e3fa211254c1db377391e799
module.exports = router