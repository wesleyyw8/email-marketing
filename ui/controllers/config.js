var app = angular.module('emailMarketingApp',['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
	$routeProvider.
		when('/formulario', {
			templateUrl: '../views/formulario.html',
			controller: 'FormularioController'
		}).
		otherwise({
			redirectTo: '/formulario'
		});
}]);
