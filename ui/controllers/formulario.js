app.controller('FormularioController',
['$scope','$http','$routeParams','$location', function($scope,$http,
routeParams,location){
	$scope.question1 = {
		question: "Qual é o seu papel no processo de decisão da empresa?",
		answers: ["Eu decido.", "Eu influencio nas questões.", "Eu não me envolvo nas decisões."],
		finalAnswer: ""
	}
	
	$scope.question3 = {
		question: "Autorizo a AGILE a ultilizar informação aqui declarada para o desenvolvimento de campanhas de mercado, convites e eventos, atualizações de base de dados e para futuros contatos comerciais?",
		answers: ["Sim.", "Não."],
		finalAnswer: ""
	}
	$scope.saveFormulario = function(){
		console.log($scope.question1);
	}
}]);