'use strict';

/**
 * @ngdoc overview
 * @name sparkleApp
 * @description
 * # sparkleApp
 *
 * Main module of the application.
 */
angular
  .module('sparkleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {


	   	  $httpProvider.defaults.withCredentials = true;
	      $httpProvider.defaults.useXDomain = true;

	      //Remove the header used to identify ajax call  that would prevent CORS from working
	      delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
      .when('/', {
        templateUrl: 'views/static/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/static/about.html',
        controller: 'AboutCtrl'
      })
			.when('/login', {
				templateUrl: 'views/user/login.html',
				controller: 'LoginCtrl'
			})
			.when('/logout', {
				templateUrl: 'views/user/logout.html',
				controller: 'LogoutCtrl'
			})
			.when('/app/new', {
				templateUrl: 'views/application/create.html',
				controller: 'CreateApplication'
			})
			.when('/app/:username/:app/edit', {
				templateUrl: 'views/application/edit.html',
				controller: 'EditApplication'
			})
			.when('/app/:username', {
				templateUrl: 'views/application/index.html',
				controller: 'ShowUserApplication'
			})
      .otherwise({
        redirectTo: '/'
      });
  })
	.factory('Backend', function() {
		return {
			host: 'http://localhost:4567'
		};
	})
.run(['$rootScope', '$location', '$cookies', '$cookieStore', '$http',
    function ($rootScope, $location, $cookies, $cookieStore, $http) {
        // keep user logged in after page refresh
   			$http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
        $rootScope.globals = $cookieStore.get('globals') || {};
  /*      if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
  */
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.loggedin) {
                $location.path('/login');
            }
        });
    }]);
