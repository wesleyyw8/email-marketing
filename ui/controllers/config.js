var app = angular.module('emailMarketingApp',['ngRoute','ngLoadingSpinner']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
	$routeProvider.
		when('/formulario', {
			templateUrl: '../views/formulario.html',
			controller: 'FormularioController'
		}).
		when('/end', {
			templateUrl: '../views/end.html',
			controller: 'EndController'
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
		}
	};
});

var obj = {
 "nome": "wes",
 "sobrenome": "Rebe",
 "empresa": "agile",
 "cargo": "forntend",
 "email": "wesleyyw8@gmai",
 "telefone": "123123",
 "perguntas": {
  "p1": "Eu influencio nas questões.",
  "p2": ["SAP S/4 HANA", "Migração SAP ERP para S/4 Nuvem", "Solução Integral Agro (AgroBiz)", "GIS", "Outros"],
  "p3": "Eu influencio nas questões."
 }
};
$.ajax({url: "http://agilesolutions.com:8080/questionario/",
	type: "POST",
	data: obj,
	success: function(result){
  	alert('deu certo')  ;
	}
});
