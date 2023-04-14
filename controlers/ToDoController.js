const ToDoModel = require("../models/ToDoModel");

module.exports.getAllToDo = async (req, res) => {
  const todos = await ToDoModel.find();
  res.send(todos);
};

module.exports.addToDo = async (req, res) => {
  const { title, description, isDone } = req.body;
  ToDoModel.create({ title, description, isDone }).then((data) => {
    console.log("Успешно добавлено");
    console.log(data);
    res.send(data);
  });
};

module.exports.getToDobyid = async (req, res) => {
  const { _id } = req.body;
  const todo = await ToDoModel.findById(_id);
  res.send(todo);
};

module.exports.deleteToDobyid = async (req, res) => {
  const { _id } = req.body;
  await ToDoModel.findByIdAndDelete(_id)
    .then(() => {
      res.set(201).send("Удалено успешно");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports.updateToDobyid = async (req, res) => {
  const { _id, title, description, isDone } = req.body;
  const todoUpdate = await ToDoModel.findByIdAndUpdate(_id, {
    title,
    description,
    isDone,
  })
    .then(() => {
      res.set(201).send("Успешно обновлено");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports.dropToDo = async (req, res) => {
  const result = await ToDoModel.deleteMany()
    .then(() => {
      res.set(201).send("Успешно удалено");
    })
    .catch((error) => {
      console.log(error);
    });
};
