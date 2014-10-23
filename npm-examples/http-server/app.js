var http = require("http");

// req, res
var handleRequests = function(request, response) {
	console.log("Request came in.")
	console.log(request.url);

	// respond to the request
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});

	// Tell the browser that it should
	// close the connection after 
	// recieving the data in "end"
	response.end("Hello, you requested " + request.url);
};

var server = http.createServer(handleRequests);

server.listen(3000); // specify port
console.log("Server is runnning on port 3000");