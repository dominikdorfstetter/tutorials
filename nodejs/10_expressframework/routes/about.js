var express = require('express');
var router = express.Router();

/* ALL about page. */
router.all('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
