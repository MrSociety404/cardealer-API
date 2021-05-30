const express = require('express')
const router = express.Router()

const checkAuth = require('../middleware/checkAuth')
const getDealerById = require('../middleware/getDealerById')
const getUserByUsername = require('../middleware/getUserByUsername')
const isUniqueUsername = require('../middleware/isUniqueUsername')

const DealerControler = require('../controllers/dealerController')


router.get('/me', checkAuth, (req, res) => {
  res.status(200).json({message: "Ok !"})
})

// Getting all dealer
router.get('/', checkAuth, DealerControler.getAllDealer)

// Getting one dealer
router.get('/:id', checkAuth, getDealerById , DealerControler.getOneDealer)

// Creating one dealer
router.post('/', checkAuth , isUniqueUsername ,DealerControler.addDealer)

// Login
router.post('/login', getUserByUsername , DealerControler.login)

// Delete one dealer
router.delete('/:id', checkAuth, getDealerById , DealerControler.deleteOneDealer)

// Edit one dealer
router.patch('/:id', checkAuth, getDealerById , DealerControler.editDealer)

module.exports = router