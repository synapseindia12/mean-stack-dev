var path = require('path');

module.exports.index = function(req, res){
	res.sendFile(path.resolve() + '/index.html');
}