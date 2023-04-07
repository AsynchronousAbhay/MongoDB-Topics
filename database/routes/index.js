var express = require('express');
var router = express.Router();

const task = require("../model/taskModel");

/* GET home page. */
router.get('/', function(req, res, next) {
  task.create({
    title:'1st title',
    desc:'1st desc...',
  })
  .then((createdTask)=>{
    res.render('index');
  })
  .catch((err) => res.send(err));

});

module.exports = router;
