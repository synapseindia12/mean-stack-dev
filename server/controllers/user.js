var mongoose = require('mongoose');

module.exports.register = function(req, res){
	var User = require('../datasets/user');
	mongoose.model('user');
	User = new User(req.body);
	User.save();
	res.jsonp(req.body);
};

module.exports.login = function(req, res){
	var User = require('../datasets/user');
	mongoose.model('user');
	console.log({'email': req.body.email, 'password': req.body.password});
	console.log(User);
	User.find({ email: req.body.email }).exec(function (err, result) {
        if (err){
			console.log('This is error ' + err);
			return res.sendStatus(500);
		}
		else{
			console.log('Get the result ' + result);
			res.json({'email': req.body.email});
			//return res.sendStatus(200);
		}
    });
};
