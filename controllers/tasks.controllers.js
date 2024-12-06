const tasks = [
  { id: 1, task: "Buy groceries2222", completed: false },
  { id: 2, task: "Clean the house", completed: true },
];

const getTasksController = (_req, res) => {
  res.render("index", { tasks });
};

const getTasksByIdController = (req, res) => {
  const { id } = req.params;

  const task = tasks.find((t) => t.id === parseInt(id, 10));

  if (!task) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  res.status(200).json(task);
};

const addTasksController = (req, res) => {
  const task = req.body.task;

  const newTask = {
    id: tasks.length + 1,
    task: task,
    date: new Date(),
    completed: false,
  };
  tasks.push(newTask);

  res.status(201).json({ message: "Tarea agregada exitosamente", tasks });
};

module.exports = {
  getTasksByIdController,
  getTasksController,
  addTasksController,
};
