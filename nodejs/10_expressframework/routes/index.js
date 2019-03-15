var express = require('express');
var router = express.Router();

/* ALL home page. */
router.all('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
