var faye = require('faye');

var client1= new faye.Client('http://localhost:8001/faye');
client1.connect();

var subscription=client1.subscribe('/messages',function(message){

	console.log("Got a message",message.text);

});
 