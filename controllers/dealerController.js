require('dotenv').config()
const Dealer = require('../models/dealer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Getting all dealer
exports.getAllDealer = async (req, res) => {
  try {
    const dealer = await Dealer.find()
    res.status(200).json(dealer)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

// Getting one dealer
exports.getOneDealer = (req, res) => {
  res.status(200).json(res.dealer)
}

// Creating one dealer
exports.addDealer = async (req, res) => {
  try {
    const dealer = new Dealer({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 10),
      image: req.body.image,
      status: req.body.status,
    })
    const newDealer = await dealer.save()
    res.status(201).json(newDealer)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
}

// Login one dealer
exports.login = async (req, res) => {
  try {
    if(await bcrypt.compare(req.body.password, res.dealer.password)) {
      const token = jwt.sign({
        id: res.dealer._id,
        username: res.dealer.username
      },
      process.env.TOKEN_SECRET_KEY,
      {
        expiresIn: "2h"
      })
      res.cookie('token',token, {httpOnly: true}) // secure: true for https
      res.status(200).json({message: "Auth sucess"})
    } else {
      res.status(400).json({message: "Auth failed"})
    }
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

// Delete one dealer
exports.deleteOneDealer = async (req, res) => {
  try {
    await res.dealer.remove()
    res.json({message: "Delete dealer : " + res.dealer.username})
  } catch (err) {
    res.status(500).json({message: err.message})
  }  
}

// Edit one dealer
exports.editDealer = (req, res) => {
 
  res.status(404).json({message: "Soon"})
  
}