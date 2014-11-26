'use strict';

/**
 * @ngdoc function
 * @name sparkleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sparkleApp
 */
angular.module('sparkleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
