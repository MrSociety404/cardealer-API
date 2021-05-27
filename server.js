// import dependencies
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = requi('cors')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }) //Connect mongodb
const db = mongoose.connection
db.on('error', (error) => console.log(error)) // On error return it in the console
db.once('open', () => console.log('Connected to Database')) // If connexion sucess, consolelog a sucess statement

app.use(express.json()) // accept json into the app
app.use(cors({origin: "https://www.cardealer.mrsociety404.com/"}))

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

app.listen(5500, () => console.log('Server on')) //Start app