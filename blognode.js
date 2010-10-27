// Read blognode config
var config = require('./config').config,
	http = require('http');

// Create Server
http.createServer(function (request, response) {
	// Read a config that defines active blogs and their domains

    response.writeHead(200, {'Content-Type': 'text/html'});

	// Init requested blog as a module
	var app = require('./app/test.com/index.js');
	app.run(request, response);

}).listen(config.port);

console.log('Blognode engine is activated...');
