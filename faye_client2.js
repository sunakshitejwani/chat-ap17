/*var Faye = require('faye');

var client1= new Faye.Client('http://localhost:8001/faye');
client1.connect();

var subscription=client1.subscribe('/messages',function(message){

	console.log("Got a message ",message.text);

});*/
var Faye   = require('faye');

var client = new Faye.Client('http://localhost:8001/faye');
client.connect();
client.subscribe('/messages', function(message) {
  console.log('Got a message: ' + message.text);
});
