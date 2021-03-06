angular.module('myInfo', ['ui.router']);
angular.module('myInfo')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider) 
{
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider.state('resume', {
        url: '/resume',
        templateUrl: 'app/components/resume/resume.html'
    });
	$stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/components/main/main.html'
    });
	/* Add New States Above */
    $urlRouterProvider.otherwise('home');

    $locationProvider.html5Mode(true);

}]);
