//Import all dependencies
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

//Connect MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error)) //if error return in console
db.once('open', () => console.log('Connected to Database')) //If connexion success console a success statement

//Add json accept in the app
app.use(express.json())
app.use(cors({origin: 'http://localhost:3000'}))

const carsRouter = require('./routes/cars') //create a router for cars
const carsRouterAdmin = require('./routes/carsAdmin') //create a router for cars
const salesRouterAdmin = require('./routes/salesAdmin') //create a router for cars
const dealersRouterAdmin = require('./routes/dealersAdmin') //create a router for cars

app.use('/api/cars', carsRouter) // if the path is '/cars" use his  root 
app.use('/api/admin/cars', carsRouterAdmin) // if the path is '/admin/cars" use his  root 
app.use('/api/admin/sales', salesRouterAdmin) // if the path is '/admin/cars" use his  root 
app.use('/api/admin/dealers', dealersRouterAdmin) // if the path is '/admin/cars" use his  root 

app.listen(5500, () => console.log('Server on')) //Start app