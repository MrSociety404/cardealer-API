const Job = require('../models/job')

module.exports = async (req, res, next) => {
  try {
    let phone = await Job.find({phone: req.body.phone})
    if(phone.length !== 0) {
      return res.status(409).json({message: "Phone number already exists !"})
    }
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
  next()
}