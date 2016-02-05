angular.module('resume')
.controller('mainController',['$state', ,function($state) 
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
