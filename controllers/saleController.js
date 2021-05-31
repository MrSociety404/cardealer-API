const Sale = require('../models/sale')

exports.getAllSales = async (req, res) => {
  try {
    const sale = await Sale.find({},[],{
      sort: {date: 'asc'}
    })
    .populate({path: 'dealer',select: 'firstname lastname'})
    .populate({ path: 'car', select: 'label retail image'})
    res.status(200).json(sale)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

exports.getOneSale = (req, res) => {
  res.status(200).json(res.sale)
}

exports.addOneSale = async (req, res) => {
  try {
    const sale = new Sale({
      client: req.body.client,
      dealer: req.body.dealer,
      car: req.body.car,
      price: req.body.price      
    })
    const newSale = await sale.save()
    res.status(201).json(newSale)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
}

exports.delteOneSale = async (req, res) => {
  try {
    await res.sale.remove()
    res.json({message: "Delete sale : " + res.sale._id})
  } catch (err) {
    res.status(500).json({message: err.message})
  }  
}

exports.editOneSale = async (req, res) => {
  res.status(404).json({message: "Soon"})
}