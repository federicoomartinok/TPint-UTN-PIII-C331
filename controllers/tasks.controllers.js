const Task = require("../models/task.model"); // Importa el modelo Task

// Obtener todas las tareas
const getTasksController = async (_req, res) => {
  try {
    const tasks = await Task.findAll();
    res.render("index", { tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las tareas" });
  }
};

// Obtener una tarea por ID
const getTasksByIdController = async (req, res) => {
  try {
    const task = await Task.findOne();

    if (!task) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la tarea" });
  }
};

// Agregar una nueva tarea
const addTasksController = async (req, res) => {
  const task = req.body.task;

  try {
    const newTask = await Task.create({
      task: task,
      completed: false,
    });

    res
      .status(201)
      .json({ message: "Tarea agregada exitosamente", task: newTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar la tarea" });
  }
};

module.exports = {
  getTasksByIdController,
  getTasksController,
  addTasksController,
};
