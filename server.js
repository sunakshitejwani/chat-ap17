
//Node comes with http server.
var http=require('http');
//create server object using the http create server 

var server=http.createServer(function(request,response){
	response.writeHead(200,{"Content-type":"text/html"});
	response.write("<html><body><h1>This is a Test ");
	response.end("And now we are finished!");


});
server.listen(8000);
console.log("chat is running!"); 