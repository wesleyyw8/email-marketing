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
	drawTriangles('.triangle.header', 250, 260, 270,0,40,0, "#3ea9de");
	drawTriangles('.triangle.footer', 250, 270, 260,150,150,100, "#10172e");
	function drawTriangles(className,x1, x2, x3,y1,y2,y3, color){
		var canvas = angular.element(className+' canvas')[0];
		if (canvas.getContext){
		  var context = canvas.getContext('2d');
		  context.beginPath();   
		  context.moveTo(x1, y1); 
		  context.lineTo(x2, y2);
		  context.lineTo(x3, y3); 
		  context.closePath();   
		  context.fillStyle = color;
		  context.strokeStyle = color;
		  context.stroke();   
		  context.fill();   
		}
	}
}]);
app.controller('FormularioController',
['$scope','$http','$routeParams','$location','Config','toaster','usSpinnerService' ,function($scope,$http,
routeParams,location,Config, toaster,usSpinnerService){
	var emailRegex = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
	createQuestions();
	$scope.nomeCliente = "";
	$scope.sobrenomeCliente = "";	
	$scope.empresaCliente = "";
	$scope.cargoCliente = "";
	$scope.emailCliente = "";
	$scope.telefoneCliente = "";

	drawTriangles('.triangle.header', 250, 260, 270,0,40,0, "#3ea9de");
	drawTriangles('.triangle.footer', 250, 270, 260,150,150,100, "#10172e");
	function drawTriangles(className,x1, x2, x3,y1,y2,y3, color){
		var canvas = angular.element(className+' canvas')[0];
		if (canvas.getContext){
		  var context = canvas.getContext('2d');
		  context.beginPath();   
		  context.moveTo(x1, y1); 
		  context.lineTo(x2, y2);
		  context.lineTo(x3, y3); 
		  context.closePath();   
		  context.fillStyle = color;
		  context.strokeStyle = color;
		  context.stroke();   
		  context.fill();   
		}
	}

	function checkRequiredFields(){
		if ($scope.nomeCliente == ""){
			toasterMessage('O campo nome é obrigatório');
			return false;
		}

		if ($scope.sobrenomeCliente == ""){
			toasterMessage('O campo sobrenome é obrigatório');
			return false;
		}

		if ($scope.empresaCliente == ""){
			toasterMessage('O campo empresa é obrigatório');
			return false;
		}

		if ($scope.cargoCliente == ""){
			toasterMessage('O campo cargo é obrigatório');
			return false;
		}

		if (!emailRegex.test($scope.emailCliente)){
			toasterMessage('O campo email deve conter um email válido');
			return false;
		}
		if ($scope.telefoneCliente == ""){
			toasterMessage('O campo telefone é obrigatório');
			return false;
		}
		if ($scope.question1.finalAnswer == ""){
			toasterMessage('Responda a questão 1');
			return false;
		}
		if (formatQuestion2().length == 0){
			toasterMessage('Selecione pelo menos um item na questão 2');
			return false;
		}
		if ($scope.question3.finalAnswer == ""){
			toasterMessage('Responda a questão 3');
			return false;
		}

		return true;
	}
	function createQuestions(){
		$scope.question1 = {
			question: "Qual é o seu papel no processo de decisão da sua empresa?",
			answers: ["Eu decido", "Eu influencio nas decisões", "Eu não me envolvo nas decisões"],
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
				    { name: "Migração SAP ERP para Nuvem", selected: false },
				    { name: "S/4 HANA Finance", selected: false },
				    { name: "RDS S/4 HANA", selected: false },
				    { name: "Projetos sob demanda utilizando SAP HANA", selected: false },
				    { name: "Business Intelligence", selected: false },
				    { name: "Orçamento e Planejamento", selected: false }
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
				    { name: "Internet of Things (IoT)", selected: false },
				    { name: "Mapeamento Integral dos Consumidores (Cunsumer Insight 365)", selected: false },
				    { name: "Projeto Florestal", selected: false },
				    { name: "Alinhamento da estratégia de Negócio com TI", selected: false },
				    { name: "Suporte, melhorias e recursos (AMS)", selected: false }
				 ]
			}];

		$scope.question3 = {
			question: "Autorizo a AGILE a utilizar a informação aqui declarada para o desenvolvimento de campanhas de mercado, convites a eventos, atualizações de base de dados e para futuros contatos comerciais.",
			answers: ["Sim", "Não"],
			finalAnswer: ""
		};
	}
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
			angular.element("#loader").hide();
			if (err.data.message.indexOf("Duplicate entry") != -1)
				toasterMessage("Email já cadastrado");
		});
	};
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