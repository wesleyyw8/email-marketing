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

app.controller('EndController',
['$scope','$http','$routeParams','$location','Config', function($scope,$http,
routeParams,location,Config){
	
}]);
app.controller('FormularioController',
['$scope','$http','$routeParams','$location','Config','toaster','usSpinnerService' ,function($scope,$http,
routeParams,location,Config, toaster,usSpinnerService){
	var emailRegex = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
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
		question: "Autorizo a AGILE a ultilizar informação aqui declarada para o desenvolvimento de campanhas de mercado, convites e eventos, atualizações de base de dados e para futuros contatos comerciais.",
		answers: ["Sim", "Não"],
		finalAnswer: ""
	};
	$scope.saveFormulario = function(){
		if (!checkRequiredFields())
			return;
		var obj = {
			"nome": $scope.nomeCliente,
			"sobrenome": $scope.sobrenomeCliente,	
			"empresa": $scope.empresaCliente,
			"cargo": $scope.cargoCliente,
			"email": $scope.emailCliente,
			"telefone": $scope.telefoneCliente,
			"perguntas": {
				"p1": $scope.question1.finalAnswer,
				"p2": formatQuestion2(),
				"p3": $scope.question3.finalAnswer
			}
		};
		
		angular.element("#loader").show();
		$http.post(Config.base_url+Config.endpoints.questionario, obj).then(function(response){
			console.log('deu certo', response);
			angular.element("#loader").hide();
			location.path("/end");
		}, function(err){
			console.log('deu erro', err);
			angular.element("#loader").hide();
		});
	};
	function checkRequiredFields(){
		if (!emailRegex.test($scope.emailCliente)){
			toasterMessage('O campo email deve conter um email valido');

			return false;
		}
		return true;
	}
	function toasterMessage(msg){
		toaster.pop({type: 'error', "title": msg});
	}
	function formatQuestion2(){
		var resp = [];
		/*console.log($scope.question2);*/
		angular.forEach($scope.question2, function(val){
			if (val.selected)
				resp.push(val.name);
			angular.forEach(val.subQuestionslevel2, function(subItem){
				if (subItem.selected)
					resp.push(subItem.name);
			});
		});
		return resp;
	}
}]);