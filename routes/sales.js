const express = require('express')
const router = express.Router()

const checkAuth = require('../middleware/checkAuth')
const getSaleById = require('../middleware/getSaleById')

const SaleController = require('../controllers/saleController')

// Getting all sales
router.get('/', checkAuth , SaleController.getAllSales)

// Getting one sale
router.get('/:id', checkAuth , getSaleById , SaleController.getOneSale)

// Creating one sale
router.post('/', checkAuth , SaleController.addOneSale)

// Delete one sale
router.delete('/:id', checkAuth , getSaleById ,  SaleController.delteOneSale)

// Edit one sale
router.patch('/:id', checkAuth , getSaleById , SaleController.editOneSale)

module.exports = router