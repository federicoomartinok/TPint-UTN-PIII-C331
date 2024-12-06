var express = require("express");
var router = express.Router();
var {
  addTasksController,
  getTasksController,
} = require("../controllers/tasks.controllers");

router.get("/", getTasksController);

router.post("/", addTasksController);

module.exports = router;
