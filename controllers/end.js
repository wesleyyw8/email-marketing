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