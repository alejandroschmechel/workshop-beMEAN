var Model = require('./../models/beer');
module.exports = {
	create: function(req, res){
		var dados = req.body

		var model = new Model(dados);

		model.save(function (err, data) {
			if (err){
				console.log('Erro: ', err);
				msg = 'Erro: '+ err;
			}
			else{
				console.log(data);
				msg = data;
			}
			res.json(msg);
		});
	},
	retrieve: function(req, res){
		Model.find(function (err, data) {
			if(err) {
				console.log(err);
			} else {
				console.log(data);
				res.json(data);
			}
		});
	},
	update: function(req, res){
		var query = {name: 'Heineken'};
		var mod = {alcohol: 666};

		Model.update(query, mod, function (err, data) {
			if (err){
				console.log('Erro: ', err);
			}else{
				console.log('Cerveja atualizada com sucesso', data);
				res.end(JSON.stringify(data));
			}
		});
	},
	remove: function(req, res){
		var query = {name: 'Heineken'};
		Model.remove(query, function (err, data) {
			if (err){
				console.log('Erro: ', err);
			}
			else{
				console.log('Cerveja deletada com sucesso', data);
				res.end(JSON.stringify(data));
			}
		});
	},
}
