const Car = require('../models/car')

// Getting all cars
exports.getAllCars = async (req, res) => {
  try {
    let car
    if(req.user === null) {
      car = await Car.find({},['_id','label','category','resell','speed','image'], {
        sort: {resell: 'asc'}
      })
    } else {
      car = await Car.find({}, [], {
        sort: {resell: 'asc'}
      })
    }
    res.status(200).json(car)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

// Getting one car
exports.getOneCar = (req, res) => {
  res.status(200).json(res.car)
}

// Creating a new car
exports.addCar = async (req, res) => {
  try {
    const car = new Car({
      label: req.body.label,
      category: req.body.category,
      retail: req.body.retail,
      resell: req.body.resell,
      speed: req.body.speed,
      image: req.body.image
    })
    const newCar = await car.save()
    res.status(201).json(newCar)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
}

// Delete One
exports.deleteOne = async(req, res) => {
  try {
    await res.car.remove()
    res.json({message: "Delete car : " + res.car.label})
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

// Edit One
exports.editOne = (req, res) => {

  res.status(404).json({message: "Soon"})

}