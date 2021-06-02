// import dependencies
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser');


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }) //Connect mongodb
const db = mongoose.connection
db.on('error', (error) => console.log(error)) // On error return it in the console
db.once('open', () => console.log('Connected to Database')) // If connexion sucess, consolelog a sucess statement

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
app.use(cookieParser());
app.use(express.json()) // accept json into the app

//Create all router
const carRouter = require('./routes/cars')
const dealerRouter = require('./routes/dealers')
const saleRouter = require('./routes/sales')
const jobRouter = require('./routes/jobs')
const settingRouter = require('./routes/settings')
//Use router
app.use('/api/cars',carRouter)
app.use('/api/dealers',dealerRouter)
app.use('/api/sales',saleRouter)
app.use('/api/jobs',jobRouter)
app.use('/api/settings',settingRouter)

app.listen(5500, () => console.log('Server on')) //Start app