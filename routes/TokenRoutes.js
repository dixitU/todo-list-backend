const express = require("express");
const { generateAccessToken } = require('../controllers/TokenController')

const router = express.Router();

router.route('/').post(generateAccessToken)

module.exports = router;
