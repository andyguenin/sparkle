'use strict';

/**
 * @ngdoc function
 * @name sparkleApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 */
angular.module('sparkleApp')
  .controller('LoginCtrl', ['$scope', '$cookieStore', '$http', '$window', '$rootScope', 'Backend', function ($scope, $cookieStore, $http, $window, $rootScope, b) {
		$scope.submit = function() {
			$http.get(b.host + '/test_user')
			  .success(function(d) {
					var s = {};
					console.log(d)
					s.username = d['username']
					s.name = d['name']
					s.loggedin = true;
					$cookieStore.put('globals',s);
					$rootScope.globals = s;
					$window.location.href = '#/';
			  });	
			};
		
  }]);
