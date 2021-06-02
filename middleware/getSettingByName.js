const Setting = require('../models/setting')

module.exports = async (req, res, next) => {

  let setting
  try {
    setting = await Setting.findOne({name: req.params.name})
    if(setting === null) {
      return res.status(404).json({message: 'Cannot find setting'})
    }
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
  res.setting = setting
  next()

}