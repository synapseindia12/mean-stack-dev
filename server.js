var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var app = express();

mongoose.connect("mongodb://localhost:27017/mean");

app.use('/app', express.static(__dirname + '/app'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

require('./server/routes/routes')(app, __dirname);

//var newuserRegistration = require('./server/controllers/user');

app.listen('3000', function(){
	console.log('Server is up and running on port 3000');
});