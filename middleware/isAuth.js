const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {

  try {
    const token = req.cookies.token
    await jwt.verify(token, process.env.TOKEN_SECRET_KEY)
    req.user = true;
  } catch (err) {
    req.user = null
  }
  next()

}