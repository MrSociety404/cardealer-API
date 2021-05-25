const express = require('express')
const router = express.Router()
const Dealer = require('../models/dealer')

// Getting All
router.get('/', async(req, res) => {
  try {
    const dealers = await Dealer.find()
    res.json(dealers)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})

// Getting One
router.get('/:id', getDealer, (req, res) => {
  res.json(res.dealer)
})


// Creating One
router.post('/', async(req, res) => {
  const dealer = new Dealer({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    image: req.body.image
  })
  try {
    const newDealer = await dealer.save()
    res.status(201).json(newDealer)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
})

// Updating One
// Deleting One

// Geting dealer by id
async function getDealer (req, res, next) {
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

module.exports = router