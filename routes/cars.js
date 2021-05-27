const express = require('express')
const router = express.Router()

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

module.exports = router