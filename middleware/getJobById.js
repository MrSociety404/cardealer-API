const Job = require('../models/job')

module.exports = async (req, res, next) => {
  let job
  try {
   job = await Job.findById(req.params.id)
   if(job == null) {
     return res.status(404).json({message: 'Cannot find job'})
   }
  } catch (err) {
   return res.status(500).json({message: err.message})
  }
  res.job = job
  next()

}