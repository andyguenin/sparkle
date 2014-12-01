'use strict';

/**
 * @ngdoc function
 * @name sparkleApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 */
angular.module('sparkleApp')
  .controller('LogoutCtrl', ['$cookieStore', '$http', '$window', '$rootScope', 'Backend', function ($cookieStore, $http, $window, $rootScope, b) {
			$http.get(b.host + '/logout')
			  .success(function() {
					$cookieStore.remove('globals');
					$rootScope.globals = {};
					$rootScope.globals.loggedin = false;
					$window.location.href = '#/';
			  });	
		
		
  }]);
