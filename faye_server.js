var http = require('http'),
	express = require('express'),
	Faye = require('faye');

var app=express(),
	server=http.createServer(app),
 bayeux = new Faye.NodeAdapter({mount:'/faye',timeout:5 });
 bayeux.attach(server);
 server.listen(8001,function(){
 	console.log("Started");
 });
//app.listen(8001);
