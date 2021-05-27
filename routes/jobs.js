const express = require('express')
const router = express.Router()

const checkAuth = require('../middleware/checkAuth')
const getJobById = require('../middleware/getJobById')
const isUniquePhone = require('../middleware/isUniquePhone')

const JobControler = require('../controllers/jobController')

// Getting all
router.get('/', checkAuth ,JobControler.getAllJobs)

// Getting one 
router.get('/:id', checkAuth, getJobById ,JobControler.getOneJob)

// Creating one
router.post('/', isUniquePhone ,JobControler.AddOneJob)

// Delete one
router.delete('/:id', checkAuth, getJobById ,JobControler.deleteOneJob)

module.exports = router