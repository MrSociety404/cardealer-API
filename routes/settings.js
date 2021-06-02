const express = require('express')
const router = express.Router()

const checkAuth = require('../middleware/checkAuth')
const getSettingByName = require('../middleware/getSettingByName')

const SettingController = require('../controllers/settingController')

// Getting one sale
router.get('/:name' , checkAuth ,getSettingByName , SettingController.getOneSetting)

// Edit one sale
router.patch('/:name', checkAuth , SettingController.editOneSetting)

module.exports = router