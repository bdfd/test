var express = require('express');
var router = express.Router();

//router address localhost:2001/func_es6/index
//descriptions: ES6 List
//comments:
router.get('/index', function(req, res, next) {
  res.render('functions/es6/index');
});

//router address localhost:2001/func_fundamental/01
//descriptions: Javascript Lecture 1
//comments:
router.get('/index', function(req, res, next) {
  res.render('functions/es6/index');
});

module.exports = router;
