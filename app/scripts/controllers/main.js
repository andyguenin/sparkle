'use strict';

/**
 * @ngdoc function
 * @name sparkleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sparkleApp
 */
angular.module('sparkleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
