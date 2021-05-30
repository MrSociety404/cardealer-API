const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    
  try {
    const token = req.headers['X-token']
    const decoded = await jwt.verify(token, process.env.TOKEN_SECRET_KEY)
    res.user = decoded;
    next()
  } catch (err) {
    return res.status(401).json({message: 'Auth failed'})
  }

}