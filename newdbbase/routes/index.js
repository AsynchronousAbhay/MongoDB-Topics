var express = require('express');
var router = express.Router();

const task = require("../model/taskModel");

router.get('/', function (req, res, next) {
  task.find()
    .then((tasks) => res.render('index', { tasks }))
    .catch((err) => res.send(err));

});

router.post('/create', function (req, res, next) {
  const { title, desc } = req.body;

  task.create({ title, desc })
    .then(() => res.redirect("/"))
    .catch((err) => res.send(err));
});

module.exports = router;
