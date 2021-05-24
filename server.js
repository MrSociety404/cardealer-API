//Import all dependencies
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

//Connect MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error)) //if error return in console
db.once('open', () => console.log('Connected to Database')) //If connexion success console a success statement

//Add json accept in the app
app.use(express.json())

const carsRouter = require('./routes/cars') //create a router for cars
app.use('/cars', carsRouter) // if the path is '/cars" use his  root 

app.listen(5500, () => console.log('Server on')) //Start app