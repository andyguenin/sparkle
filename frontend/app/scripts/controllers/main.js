'use strict';

/**
 * @ngdoc function
 * @name sparkleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sparkleApp
 */
angular.module('sparkleApp')
  .controller('MainCtrl', function ($scope, $http) {
		$http.get('http://localhost:4567/user/aguenin/apps')
		  .success(function(data) {
				$scope.apps = data;
		  });
	  });
