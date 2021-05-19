const express = require('express')
const app = express()
require('./models/dbConfig')
const carRoutes = require('./routes/carController')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.set('useFindAndModify', false)

app.use(bodyParser.json())
app.use(cors({origin: 'https://localhost/3000'}))
app.use('/car', carRoutes)

app.listen(5500, () => console.log('Server started'))