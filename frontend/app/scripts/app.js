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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
			.when('/login', {
				templateUrl: 'views/login.html',
				controller: 'LoginCtrl'
			})
			.when('/logout', {
				templateUrl: 'views/logout.html',
				controller: 'LogoutCtrl'
			})
			.when('/create', {
				templateUrl: 'views/create.html',
				controller: 'CreateCtrl'
			})
      .otherwise({
        redirectTo: '/'
      });
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
