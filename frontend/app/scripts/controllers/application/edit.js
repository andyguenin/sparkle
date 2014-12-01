angular.module('sparkleApp')
.controller('EditApplication', ['$routeParams', '$scope', '$http', 'Backend', function($routeParams, $scope, $http, b) {
	username = $routeParams.username;
	app = $routeParams.app;
	
	$http.get(b.host + '/myapps/' + app)
		.success(function(data) {
			$scope.application = data;
			$scope.api_endpoint = b.host + '/upload';
		});
}]);