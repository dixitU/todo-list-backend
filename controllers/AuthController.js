const authService = require("../services/AuthService");

exports.signup = async (req, res) => {
  try {
    const data = await authService.signup(
      req.body.name,
      req.body.email,
      req.body.password
    );
    res.status(200).json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const data = await authService.login(req.body.email, req.body.password);
    res.status(200).json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
