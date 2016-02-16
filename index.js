var express 		= require('express');
var factory 		= require('./js/factory');
var app 			= express();


var carFactory 		= factory( 'car ');

app.get('/', function (req, res) {
  res.send( carFactory.echo() );
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});