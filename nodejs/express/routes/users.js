var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  var user = {name: "Alejandro"}
  res.send(user);
});

module.exports = router;
