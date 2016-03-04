var app = angular.module('emailMarketingApp',['ngRoute','toaster','angularSpinner']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
	$routeProvider.
		when('/formulario', {
			templateUrl: 'views/formulario.html',
			controller: 'FormularioController'
		}).
		when('/end', {
			templateUrl: 'views/end.html',
			controller: 'EndController'
		}).
		when('/unsubscribe', {
			templateUrl: 'views/unsubscribe.html',
			controller: 'UnsubscribeController'
		}).
		otherwise({
			redirectTo: '/formulario'
		});
}]);

app.factory('Config', function() {
	var baseUrl = "http://agilesolutions.com:8080/";
	return {
		base_url: baseUrl,
		endpoints: {
	    	questionario: "questionario/",
	    	unsubscribe: "questionario/unsubscribe/"
		}
	};
});
