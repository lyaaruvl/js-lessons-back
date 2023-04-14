const mongoose = require("mongoose");
const ToDoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  isDone: {
    type: Boolean,
    require: true,
  },
});

module.exports = mongoose.model("ToDo", ToDoSchema);
