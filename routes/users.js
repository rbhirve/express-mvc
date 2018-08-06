var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.body);
  res.send('respond with a resource');
});

module.exports = router;
