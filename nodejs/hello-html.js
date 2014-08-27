var http = require("http");
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function(request, response) {
	response.writeHead(200,	{"Content-Type": "text/html; charset=utf-8"});
	response.end(index);
}).listen(3000);

console.log('Server running at http://localhost:3000/');