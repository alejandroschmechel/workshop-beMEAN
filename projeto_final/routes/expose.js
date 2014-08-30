var express = require('express');
var router = express.Router();

router.get('/:dir/:name', function(req, res) {
  var name = req.params.name;
  var dir = req.params.dir;
  res.render(dir + '/' + name);
});

module.exports = router;