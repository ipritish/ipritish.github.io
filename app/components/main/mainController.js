angular.module('myInfo')
.controller('mainController',['$state','$scope', function($state,$scope) 
{

	var mainController = this;
	
	mainController.fetchResume = function()
	{
		$state.go('resume');
	};

}]);
