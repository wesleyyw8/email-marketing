app.controller('UnsubscribeController',
['$scope','$http','$routeParams','$location','Config','toaster','$timeout', function($scope,$http,
routeParams,location,Config,toaster, $timeout){
	//drawTriangles('.triangle.footer', 0, 60, 120,150,90,150, "#10172e");
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
	$scope.unscribeClick = function(){
		var obj = {
			email : $scope.email
		};
		$http.post(Config.base_url+Config.endpoints.unsubscribe, obj).then(function(response){
			toaster.pop({type: 'success', "title": "Email descadastrado com sucesso"});
			angular.element(".loader").hide();
			$timeout(function(){
				window.location.href = "http://www.agilesolutions.com"
			},2000);
		}, function(err){
			angular.element(".loader").hide();
			if (err.data.message.indexOf("Duplicate entry") != -1)
				toaster.pop({type: 'error', "title": "Email já foi descadastrado"});
		});
	}
}]);