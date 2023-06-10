 http = require("http");

http.createServer( function(request,response) {

  response.writeHead(200, {'Content-Type':'text/plain'}); 
  
  //send thge response body as "Hello World"

  response.end("Hello World");

}).listen(8081);


//console will print the meassage.

console.log("Server running at http://127.0.0.1.8081/");