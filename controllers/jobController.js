const Job = require('../models/job')

// Getting all
exports.getAllJobs = async (req, res) => {
  try {
    const job = await Job.find()
    res.status(200).json(job)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

// Getting one 
exports.getOneJob = (req, res) => {
  res.status(200).json(res.job)
}

// Creating one
exports.AddOneJob = async (req, res) => {
  try {
    const job = new Job({
      name: req.body.name,
      phone: req.body.phone,
      experience: req.body.experience,
      availability: req.body.availability,
      motivation: req.body.motivation,
      comment: req.body.comment,
    })
    const newJob = await job.save()
    res.status(201).json(newJob)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
}

// Delete one
exports.deleteOneJob = async (req, res) => {
  try {
    await res.job.remove()
    res.json({message: "Delete Job : " + res.job._id})
  } catch (err) {
    res.status(500).json({message: err.message})
  }  
}