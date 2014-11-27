'use strict';

/**
 * @ngdoc function
 * @name sparkleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sparkleApp
 */
angular.module('sparkleApp')
  .controller('AboutCtrl', function ($scope, $http) {
	$http.get('http://localhost:4567/user/aguenin/apps')
	  .success(function(data) {
	     $scope.apps = data;
	  });
  });
