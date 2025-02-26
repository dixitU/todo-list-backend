const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { generateToken } = require("./TokenService");

exports.signup = async (name, email, password) => {
  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return {
      message: "User already exists",
    };
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });
  await user.save();
  return {
    message: "User created",
  };
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user)
    return {
      message: "User not found",
    };

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return {
      message: "Invalid credentials",
    };

  const token = await generateToken(user._id, true, true);
  return {
    message: "User verified",
    token: token,
    profile: user,
  };
};
