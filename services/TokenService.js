const jwt = require('jsonwebtoken')

require('dotenv').config()

exports.generateToken = async (userId, isAccess, isRefresh) => {
  let accessToken = ''
  let refreshToken = ''
  if (isAccess) {
    accessToken = await jwt.sign(
      { userId: userId },
      process.env.ACCESS_SECRET,
      {
        expiresIn: '5s',
      }
    )
  }
  if (isRefresh) {
    refreshToken = await jwt.sign(
      { userId: userId },
      process.env.REFRESH_SECRET,
      { expiresIn: '30s' }
    )
  }
  return { accessToken: accessToken, refreshToken: refreshToken }
}

exports.generateAccessToken = async (refreshToken) => {
  const validation = await jwt.verify(refreshToken, process.env.REFRESH_SECRET)
  let token
  if (validation && validation.userId) {
    token = {
      accessToken: await jwt.sign(
        { userId: validation.userId },
        process.env.ACCESS_SECRET,
        {
          expiresIn: '1d',
        }
      ),
    }
  } else {
    token = {
      message: 'Invalid authentication',
    }
  }
  return token
}

exports.verifyAccessToken = async (accessToken) => {
  const validation = await jwt.verify(accessToken, process.env.ACCESS_SECRET)
  if (validation && validation.userId) {
    return validation.userId
  } else {
    return false
  }
}