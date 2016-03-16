(function(){
	angular.module('mean', ['ui.router']).config(function($stateProvider, $locationProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/404');
		$stateProvider
			.state('home', {
				url: '/'
			})
			.state('signup',{
				url: '/signup',
				templateUrl: '/app/signup/signup.html',
				controller: 'signupCtrl'
			})
			.state('header', {
				url: "*",
				templateUrl: '/app/header/header.html',
				controller: 'loginCtrl'
			})
			.state('404', {
				url: "/404",
				templateUrl: "/app/404/404.html"
			});	
		//
		$locationProvider.html5Mode({enabled: true, requireBase: false, rewrtiteLinks: true});
	})
	.controller('signupCtrl', function($scope, $http){
		$scope.newuserRegistration = function(){
			$http.post('/api/newuser', $scope.newUser);
		};
	})
	.controller('loginCtrl', function($scope, $http){
		$scope.userLogin = function(){
			$http.post('/api/loginUser', $scope.loginUser).success(function(response){
				console.log(response);
			}).error(function(err){
				console.log(err);
			});
		}
	});
})();