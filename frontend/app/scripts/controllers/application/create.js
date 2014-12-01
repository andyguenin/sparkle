angular.module('sparkleApp')
  .controller('CreateApplication', ['$scope', '$location', '$rootScope', 'Backend', '$http', '$window', 
		function ($scope, $location, $rootScope, b, $http, $window) {
		port = $location.port() == 80 ? "" : ":" + $location.port();
		$scope.base_user_url = $location.protocol() + "://" + $location.host() + port + "#/app/" + $rootScope.globals.username + "/";
		
		$scope.submit = function() {
			$('#create-application :input').prop('disabled', true);
			data = {
				'title': $scope.title,
				'url' : $scope.url,
				'description' : $scope.description};
			$http.post(b.host + '/app/create', data)
				.success(function(d2) {
					if(d2['status'] == 'success'){
						$window.location.href = '#/app/' + $rootScope.globals.username + '/' + data.url + '/edit';
					}
					else {
						$('#create-application :input').prop('disabled', false);	
					}	
				})
				

		}

  }]);
