const express = require("express");
const { verifyAccessToken } = require("../controllers/TokenController");
const {
  createTask,
  updateTask,
  getAllTask,
  getTaskByID,
  deleteTask,
} = require("../controllers/TaskController");

const router = express.Router();

router
  .route("/")
  .get(verifyAccessToken, getAllTask)
  .post(verifyAccessToken, createTask);

router
  .route("/:id")
  .get(verifyAccessToken, getTaskByID)
  .put(verifyAccessToken, updateTask)
  .delete(verifyAccessToken, deleteTask);

module.exports = router;
