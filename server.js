<<<<<<< HEAD
//Import all dependencies
=======
// import dependencies
>>>>>>> 728048a1b0914372e3fa211254c1db377391e799
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

<<<<<<< HEAD
//Connect MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error)) //if error return in console
db.once('open', () => console.log('Connected to Database')) //If connexion success console a success statement

//Add json accept in the app
app.use(express.json())

const carsRouter = require('./routes/cars') //create a router for cars
const carsRouterAdmin = require('./routes/carsAdmin') //create a router for cars
const salesRouterAdmin = require('./routes/salesAdmin') //create a router for cars
const dealersRouterAdmin = require('./routes/dealersAdmin') //create a router for cars

app.use('/api/cars', carsRouter) // if the path is '/cars" use his  root 
app.use('/api/admin/cars', carsRouterAdmin) // if the path is '/admin/cars" use his  root 
app.use('/api/admin/sales', salesRouterAdmin) // if the path is '/admin/cars" use his  root 
app.use('/api/admin/dealers', dealersRouterAdmin) // if the path is '/admin/cars" use his  root 
=======
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }) //Connect mongodb
const db = mongoose.connection
db.on('error', (error) => console.log(error)) // On error return it in the console
db.once('open', () => console.log('Connected to Database')) // If connexion sucess, consolelog a sucess statement

app.use(express.json()) // accept json into the app

//Create all router
const carRouter = require('./routes/cars')
const dealerRouter = require('./routes/dealers')
const saleRouter = require('./routes/sales')
const jobRouter = require('./routes/jobs')
//Use router
app.use('/cars',carRouter)
app.use('/dealers',dealerRouter)
app.use('/sales',saleRouter)
app.use('/jobs',jobRouter)
>>>>>>> 728048a1b0914372e3fa211254c1db377391e799

app.listen(5500, () => console.log('Server on')) //Start app