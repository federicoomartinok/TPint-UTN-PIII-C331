var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const sequelize = require("./data/db");
const Task = require("./models/task.model");

var indexRouter = require("./routes/index");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const defaultTasks = [
  { task: "Aprender C#", completed: true },
  { task: "Aprender Java", completed: true },
  { task: "Aprender SQL", completed: true },
  { task: "Aprender JS", completed: false },
];

sequelize
  .sync({ force: true })
  .then(async () => {
    console.log("Base de datos reiniciada correctamente.");

    await Task.bulkCreate(defaultTasks);
    console.log("Tareas iniciales creadas correctamente.");
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });

module.exports = app;
