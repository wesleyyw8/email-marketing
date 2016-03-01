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
			"subQuestionslevel2": [
			    { name: "Tax Declaration Framework (SAP TDF)", selected: false },
			    { name: "SAP TAX Intelligence and Management Platform by ALLTAX", selected: false }
			 ]
		},{
			"name": "SAP S/4 HANA",
			"selected": false,
			"subQuestionslevel2": [
			    { name: "Implementação S/4 HANA", selected: false },
			    { name: "Migração SAP ERP para S/4 HANA", selected: false },
			    { name: "Migração SAP ERP para S/4 Nuvem", selected: false },
			    { name: "S/4 HANA Finance", selected: false },
			    { name: "RDS S/4 HANA", selected: false },
			    { name: "Projetos sob demanda utilizando SAP HANA", selected: false },
			    { name: "Business Intelligence", selected: false },
			    { name: "Orçamento Planejamento", selected: false }
			 ]
		},{
			"name": "Agrobusiness",
			"selected": false,
			"subQuestionslevel2": [
			    { name: "Solução Integral Agro (AgroBiz)", selected: false },
			    { name: "Laboratório de Qualidade Agrícola (AQM)", selected: false },
			    { name: "Portal de Fornecedores Agrícola (ASM)", selected: false },
			    { name: "Balança", selected: false },
			    { name: "Mobilidade para Agronegócio", selected: false },
			    { name: "GIS", selected: false }
			 ]
		},{
			"name": "Outros",
			"selected": false,
			"subQuestionslevel2": [
			    { name: "Internet of Things (IOT)", selected: false },
			    { name: "Mapeamento Integral dos Consumidores (Cunsumer Insight 365)", selected: false },
			    { name: "Projeto Florestal", selected: false },
			    { name: "Alinhamento da estratégia de Negócio com TI", selected: false },
			    { name: "Suporte, melhorias e recursos (AMS)", selected: false }
			 ]
		}];

	$scope.question3 = {
		question: "Autorizo a AGILE a ultilizar informação aqui declarada para o desenvolvimento de campanhas de mercado, convites e eventos, atualizações de base de dados e para futuros contatos comerciais?",
		answers: ["Sim.", "Não."],
		finalAnswer: ""
	};
	$scope.checkAllNestedCheckboxes = function(id){
		//angular.element(""+id)
		console.log(id);
	}
	$scope.saveFormulario = function(){
		console.log($scope.question1);
	}
}]);