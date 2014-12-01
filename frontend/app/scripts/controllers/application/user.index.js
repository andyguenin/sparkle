angular.module('sparkleApp')
.controller('ShowUserApplication', ['$scope', '$http', 'Backend', '$rootScope', function($scope, $http, b, $rootScope) {
	$scope.backend = b.host;
	$http.get(b.host + '/apps/' + $rootScope.globals.username)
		.success(function(data) {
			$scope.apps = data;
			
		});
}]);