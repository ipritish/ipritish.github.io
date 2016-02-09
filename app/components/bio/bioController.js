angular.module('myInfo')
.controller('bioController',['$state','$scope', function($state,$scope) 
{
	$scope.details = [{"key":"test","detail" : "test"},
					{"key" : "test2","detail" : "test2"}];
}]);
