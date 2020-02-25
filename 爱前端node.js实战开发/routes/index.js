var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/student/:xuehao', function(req, res) {
  if (/^[\d]{6}$/.test(req.params.xuehao)) {
    res.send('学生频道，学号' + req.params.xuehao);
  } else {
    res.send('学号不正确!');
  }
});

// router.get('/student/:xuehao'),
//   function(req, res) {
//     if (/^[\d]{6}$/.test(req.params.xuehao)) {
//       res.send('学生频道，学号' + req.params.xuehao);
//     } else {
//       res.send('学号不正确!');
//     }
//   };

module.exports = router;
