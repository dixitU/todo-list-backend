const taskService = require("../services/TaskService");

exports.createTask = async (req, res) => {
  try {
    const data = await taskService.createTask(req.body, req.userId);
    res.status(200).json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllTask = async (req, res) => {
  try {
    const data = await taskService.getAllTask(req.userId);
    res.status(200).json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTaskByID = async (req, res) => {
  try {
    const data = await taskService.getTaskByID(req.params.id);
    res.status(200).json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const data = await taskService.updateTask(req.params.id, req.body);
    res.status(200).json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const data = await taskService.deleteTask(req.params.id);
    res.status(200).json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
