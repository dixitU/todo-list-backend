const express = require("express");
const { signup, login } = require("../controllers/AuthController");

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
// router.route('/verify').post(verifyOTP)

module.exports = router;
