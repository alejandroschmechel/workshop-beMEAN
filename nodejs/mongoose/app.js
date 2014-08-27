var http = require("http");
var _beer = require("./controllers/beers");

http.createServer(function(req, res) {
	res.writeHead(200,	{"Content-Type": "application/json; charset=utf-8"});
	
	var msg = '';
	var url = req.url;
	console.log(url);

	switch(url){
		case '/create':
			_beer.create(req, res)
			break;
		case '/retrieve':
			_beer.retrieve(req, res)
			break;
		case '/update':
			_beer.update(req, res)
			break;
		case '/delete':
			_beer.remove(req, res)
			break;
		default:
			data = {error: "Rota não encontrada"};
			res.end(JSON.stringify(data));
			break;
	}
}).listen(3000);

console.log('Server running at http://localhost:3000/');