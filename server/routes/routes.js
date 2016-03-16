/* Variable declaration */
/* Controllers assignment */
var indexController = require('../controllers/index');
var userController = require('../controllers/user');
var bodyparser = require('body-parser'); 

/* Application routes */
module.exports = function(app, dirname){
	app.use(bodyparser.urlencoded({extended: true}));
	app.use(bodyparser.json());
	app.get('/*', indexController.index);
	app.post('/api/newuser', userController.register);
	app.post('/api/loginUser', userController.login);
};