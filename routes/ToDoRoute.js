const { Router } = require("express");
const {
  getAllToDo,
  addToDo,
  getToDobyid,
  deleteToDobyid,
  updateToDobyid,
  dropToDo,
} = require("../controlers/ToDoController");
const router = Router();

router.get("/", getAllToDo);

router.post("/add", addToDo);

router.post("/todo", getToDobyid);

router.post("/delete", deleteToDobyid);

router.post("/update", updateToDobyid);

router.delete("/drop", dropToDo);

module.exports = router;
