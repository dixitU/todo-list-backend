const Task = require("../models/Task");

exports.createTask = async (task, userId) => {
  const { title, description } = task;
  const taskData = new Task({ title, description, userId: userId });
  await taskData.save();
  return taskData;
};

exports.getAllTask = async (userId) => {
  return await Task.find({ userId: userId });
};

exports.getTaskByID = async (taskId) => {
  return await Task.findById(taskId);
};

exports.updateTask = async (taskId, task) => {
  return await Task.findByIdAndUpdate(taskId, task, { new: true });
};

exports.deleteTask = async (taskId) => {
  await Task.findByIdAndDelete(taskId);
  return { message: 'Task deleted' }
};
