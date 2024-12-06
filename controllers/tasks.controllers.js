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
    const task = await Task.findByPk(req.params.id);
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

const deleteTaskController = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
    await task.destroy();
    res.status(200).json({ message: "Tarea eliminada exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la tarea" });
  }
}


const updateTaskController = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
    await task.update({    
      completed: req.body.status,
    });
    res.status(200).json({ message: "Tarea actualizada exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la tarea" });
  }
}

module.exports = {
  getTasksByIdController,
  getTasksController,
  addTasksController,
  deleteTaskController,
  updateTaskController,
};
