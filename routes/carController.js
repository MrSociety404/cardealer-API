const express = require('express')
const router = express.Router()
const ObjectID = require('mongoose').Types.ObjectId

const { CarModel } = require('../models/carModel')

router.get('/', async (req, res) => {
  const cars = await CarModel.find().exec()
  res.send(cars.map(car => {
      delete car.retail
      console.log(car)
      return car
    }))
})

//Get all cars
// router.get('/', (req, res) => {
//   await CarModel.find((err, docs) => {
//     if(!err) res.send(docs)
//     else console.log("Error to get data : " + err)
//   })
// })

// //set new car
// router.post('/', (req, res) => {
//   const newRecord = new CarModel({
//     name: req.body.name,
//     category: req.body.category,
//     retail: req.body.retail,
//     resell: req.body.resell,
//     speed: req.body.speed,
//     image: req.body.image,
//   })
//   newRecord.save((err, docs) => {
//     if(!err) res.send(docs);
//     else console.log('Error creating new data : ' + err)
//   })
// })

// //update car
// router.put('/:id',(req, res) => {
//   if (!ObjectID.isValid(req.params.id))
//     return res.status(400).send("ID unknow : " + req.params.id)

//   const updateRecord = {
//     name: req.body.name,
//     category: req.body.category,
//     retail: req.body.retail,
//     resell: req.body.resell,
//     speed: req.body.speed,
//     image: req.body.image,
//   }

//   CarModel.findByIdAndUpdate(
//     req.params.id,
//     { $set: updateRecord },
//     { new : true},
//     (err, docs) => {
//       if(!err) res.send(docs)
//       else console.log('Update error : ' + err)
//     }
//   )
// })

// //delete
// router.delete('/:id',(req, res) => {
//   if (!ObjectID.isValid(req.params.id))
//     return res.status(400).send("ID unknow : " + req.params.id)

//   CarModel.findByIdAndRemove(
//     req.params.id,
//     (err, docs) => {
//       if(!err) res.send(docs)
//       else console.log("Delete error : " + err)
//     }
//   )  
// })


module.exports = router