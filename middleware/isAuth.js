const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {

  try {
    const token = req.headers.authorization.split(" ")[1]
    await jwt.verify(token, process.env.TOKEN_SECRET_KEY)
    req.user = true;
  } catch (err) {
    req.user = null
  }
  next()

}