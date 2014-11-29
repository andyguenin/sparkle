'use strict';

/**
 * @ngdoc function
 * @name sparkleApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 */
angular.module('sparkleApp')
  .controller('LoginCtrl', ['$scope', '$cookieStore', '$http', '$window', '$rootScope', function ($scope, $cookieStore, $http, $window, $rootScope) {
		$scope.submit = function() {
			$http.get('http://localhost:4567/')
			  .success(function() {
					var s = {};
					s.username = 'aguenin';
					s.name = 'Andrew Guenin';
					s.loggedin = true;
					$cookieStore.put('globals',s);
					$rootScope.globals = s;
					$window.location.href = '#/';
			  });	
			};
		
  }]);
