var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', function(err){
	console.log('Erro de conexao.', err)
});

db.on('open', function () {
	console.log('Conexão aberta.')
});

var Schema = mongoose.Schema;

var BeerSchema = new Schema({
	name: { type: String, default: '', required: true },
	description: { type: String, default: '' },
	alcohol: { type: Number, min: 0},
	price: { type: Number, min: 0},
	category: { type: String, default: ''},
	created: { type: Date, default: Date.now }
});

var Beer = mongoose.model('Beer', BeerSchema);

var query = {name: 'Heineken'};
var mod = {alcohol: 666};

Beer.update(query, mod, function (err, data) {
	if (err){
		console.log('Erro: ', err);
	}else{
		console.log('Cerveja atualizada com sucesso', data);
	}
});