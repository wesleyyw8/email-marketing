app.controller('FormularioController',
['$scope','$http','$routeParams','$location', function($scope,$http,
routeParams,location){
	$scope.question1 = {
		question: "Qual é o seu papel no processo de decisão da empresa?",
		answers: ["Eu decido.", "Eu influencio nas questões.", "Eu não me envolvo nas decisões."],
		finalAnswer: ""
	};
	$scope.question2 = 
		[{
			"name": "Demandas de Software Tributário e Fiscal",
			"selected": false,
			"value": "Demandas de Software Tributário e Fiscal",
			"subQuestionslevel2": [
			    { name: "Tax Declaration Framework (SAP TDF)", selected: false },
			    { name: "SAP TAX Intelligence and Management Platform by ALLTAX", selected: false }
			 ]
		}];

	$scope.question3 = {
		question: "Autorizo a AGILE a ultilizar informação aqui declarada para o desenvolvimento de campanhas de mercado, convites e eventos, atualizações de base de dados e para futuros contatos comerciais?",
		answers: ["Sim.", "Não."],
		finalAnswer: ""
	};
	$scope.checkAllNestedCheckboxes = function(index){
		console.log(index);
	}
	$scope.saveFormulario = function(){
		console.log($scope.question1);
	}
}]);