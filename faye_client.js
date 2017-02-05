/*var Faye = require('faye');

var client1= new Faye.Client('http://localhost:8001/faye');
var pub  = client1.publish('/messages',{ text: "Hello World!"});
pub.then(function(){
	alert("Message received by the server!");
},function(error){
	alert("There was a problem: "+error.message);
})
pub.callback(process.exit);*/

var Faye   = require('faye');

var client = new Faye.Client('http://localhost:8001/faye');

var pub = client.publish('/messages', {
  text: 'Hello world'
});

pub.callback(process.exit);
