angular.module('myInfo')
.controller('mainController',['$state','$scope', function($state,$scope) 
{

	var mainController = this;
	
	mainController.fetchBIO = function()
	{
		$state.go('bio');
	};
	
	mainController.fetchResume = function()
	{
		$state.go('resume');
	};

}]);
