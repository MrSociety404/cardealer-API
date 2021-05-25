const express = require('express')
const router = express.Router()
const Sale = require('../models/sale')

// Getting All
router.get('/', async (req, res) => {
  try {
    const sales = await Sale.find()
    res.json(sales)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})

// Geting One
router.get('/:id', getSale , (req, res) => {
  res.json(res.sales)
})

// Creating One
// Updateing One
// Deleting One

//get sale by id
async function getSale (req, res, next) {
  let sales
  try {
    sales = await Sale.findById(req.params.id)
    if(cars == null) {
      return res.status(404).json({message: 'Cannot find sale'})
    }
  } catch (err) {
    return res.status(500).json({message: err.message})
  }

  res.sales = sales
  next()
}
 
module.exports = router