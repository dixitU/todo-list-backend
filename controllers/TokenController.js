const tokenService = require('../services/TokenService')

exports.generateAccessToken = async (req, res) => {
  try {
    const token = await tokenService.generateAccessToken(req.body.refreshToken)
    res.status(200).json({ data: token, status: 'success' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.verifyAccessToken = async (req, res, next) => {
  try {
    const token = await tokenService.verifyAccessToken(
      req.headers['authorization'].slice(7)
    )
    if (token) {
      req.userId = token;
      next()
    } else {
      res
        .status(403)
        .json({ error: 'Unauthorized user tried to access server.' })
    }
  } catch (err) {
    res.status(403).json({ error: 'Unauthorized user tried to access server.' })
  }
}
