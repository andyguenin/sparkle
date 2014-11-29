'use strict';

/**
 * @ngdoc function
 * @name sparkleApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 */
angular.module('sparkleApp')
  .controller('LogoutCtrl', ['$cookieStore', '$http', '$window', '$rootScope', function ($cookieStore, $http, $window, $rootScope) {
			$http.get('http://localhost:4567/logout')
			  .success(function() {
					console.log('removing globals');
					$cookieStore.remove('globals');
					$rootScope.globals = {};
					$rootScope.globals.loggedin = false;
					$window.location.href = '#/';
			  });	
		
		
  }]);
