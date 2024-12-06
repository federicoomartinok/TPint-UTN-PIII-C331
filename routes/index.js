var express = require("express");
var router = express.Router();
var {
  getTasksController,
  getTasksByIdController,
  addTasksController,
  deleteTaskController,
  updateTaskController,
} = require("../controllers/tasks.controllers");

router.get("/", getTasksController);
router.get("/:id", getTasksByIdController);
router.post("/", addTasksController);
router.delete("/:id", deleteTaskController);
router.put("/:id", updateTaskController);

module.exports = router;
