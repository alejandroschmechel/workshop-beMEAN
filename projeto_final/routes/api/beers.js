var express = require('express');
var router = express.Router();
var Controller = require('./../../controllers/beers');

function callback(req, res, err, data){
	if (err){
		msg = 'Erro: '+ err;
	}
	else{
		msg = data;
	}
	res.json(data);
}

router.get('/', function(req, res) {
	Controller.retrieve(req, res, callback);
});

router.get('/total', function(req, res) {
	Controller.total(req, res, callback);
});

router.get('/:id', function(req, res) {
	Controller.getBeer(req, res, callback);
});

router.post('/', function(req, res) {
	Controller.create(req, res, callback);
});

router.put('/:id', function(req, res) {
	Controller.update(req, res, callback);
});

router.delete('/:id', function(req, res) {
	Controller.remove(req, res, callback);
});

module.exports = router;
