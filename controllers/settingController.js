const Setting = require('../models/setting')

// Getting one setting
exports.getOneSetting = (req, res) => {
  res.status(200).json(res.setting)
}

// Edit one setting
exports.editOneSetting = async (req, res) => {
  try {
    let setting = await Setting.findOneAndUpdate({name: 'jobState'}, {state: req.body.state}, {new: true})
    res.status(200).json({message: "State update !", setting: setting})
  } catch (err) {
    res.status(400).json({message: err.message})
  }
}