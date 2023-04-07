var express = require('express');
var router = express.Router();

const Task = require("../model/taskmodel");

/* GET home page. */
router.get('/', function (req, res, next) {
  Task.create({
    title: "task 01",
    desc: "description 01",
    age: "34",
  })
    .then((createdTask) => {
      res.render('index');
    })
    .catch((err) => res.send(err));
});

module.exports = router;
