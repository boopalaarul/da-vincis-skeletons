var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render calls the view engine set()'d by app: in place of Flask's kwargs,
  //here it requires path to template in views/ + {object} of variables/fields
  res.render('index', { title: 'Da Vinci\'s Skeletons' });
});

module.exports = router;
