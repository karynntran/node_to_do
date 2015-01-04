var http = require('http'),
	url = require('url'),
	server = http.createServer();

server.on('request', function(req,res){
	console.log("--incoming request--", req.url);
	var incomingUrl = url.parse(req.url, true);
	console.log(incomingUrl);

	if(incomingUrl.path === '/hello'){
		res.writeHead(200, {'Content-Type':'text/plain'});
		res.end('Hello World');
	} else if(incomingUrl.path === '/goodbye') {
		res.writeHead(200, {'Content-Type':'text/plain'});
		res.end('Goodbye World');		
	} else {
		res.writeHead(404, {'Content-Type':'text/plain'});
		res.end('Resource not found on server');
	}
	// res.writeHead(200, {'Content-Type':'text/plain'});
	// res.end('Hello World');
});

server.listen(9000); //port to listen on