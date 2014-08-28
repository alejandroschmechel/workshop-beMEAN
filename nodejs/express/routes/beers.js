var express = require('express');
var router = express.Router();
var Controller = require('./../controllers/beers');

function callback(req, res, err, data){
	if (err){
		msg = 'Erro: '+ err;
	}
	else{
		msg = data;
	}

	res.render('beers/list', { 
	  	title: 'Adega Be MEAN', 
	  	msg: 'Listando Cervejas',
	  	beers: data });
}

function callbackGet(req, res, err, data){
	if (err){
		msg = 'Erro: '+ err;
	}
	else{
		msg = data;
	}

	res.render('beers/get', { 
	  	title: 'Adega Be MEAN', 
	  	msg: 'Listando Cervejas',
	  	beer: data });
}

function callbackEdit(req, res, err, data){
	if (err){
		msg = 'Erro: '+ err;
	}
	else{
		msg = data;
	}

	res.render('beers/edit', { 
	  	title: 'Adega Be MEAN', 
	  	msg: 'Alteração de Cervejas',
	  	beer: data });
}

function callbackRemove(req, res, err, data){
	if (err){
		msg = 'Erro: '+ err;
	}
	else{
		msg = data;
	}

	res.render('beers/remove', { 
	  	title: 'Adega Be MEAN', 
	  	msg: 'Removendo de Cervejas',
	  	beer: data });
}


/* GET home page. */
router.get('/', function(req, res) {
  Controller.retrieve(req,res,callback);
});

router.get('/create', function(req, res) {
  res.render('beers/create', {
  	title: 'Adega Be MEAN', 
	msg: 'Cadastro de Cervejas'
  });
});

router.get('/:id', function(req, res) {
  Controller.getBeer(req,res,callbackGet);
});

router.get('/:id/edit', function(req, res) {
  Controller.getBeer(req,res,callbackEdit);
});

router.get('/:id/remove', function(req, res) {
  Controller.getBeer(req,res,callbackRemove);
});

module.exports = router;
