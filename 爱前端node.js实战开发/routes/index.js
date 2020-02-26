var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/ajax', function(req, res, next) {
  res.render('ajax');
});

router.get('/ajax2', function(req, res, next) {
  res.render('ajax2');
});

router.get('/ajax3', function(req, res, next) {
  res.render('ajax3');
});

router.get('/jquery1', function(req, res, next) {
  res.render('jquery1_selector');
});

// router.get('/:number', function(req, res) {
//   res.send('结果页: ' + req.params.number);
// });

// router.get('/student/:xuehao', function(req, res) {
//   if (/^[\d]{6}$/.test(req.params.xuehao)) {
//     res.send('学生频道，学号' + req.params.xuehao);
//   } else {
//     res.send('学号不正确!');
//   }
// });

// router.get('/student/:xuehao'),
//   function(req, res) {
//     if (/^[\d]{6}$/.test(req.params.xuehao)) {
//       res.send('学生频道，学号' + req.params.xuehao);
//     } else {
//       res.send('学号不正确!');
//     }
//   };

module.exports = router;
