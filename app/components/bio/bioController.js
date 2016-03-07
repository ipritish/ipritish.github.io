angular.module('myInfo')
.controller('bioController',['$state','$scope', function($state,$scope) 
{
	$scope.personalDetails = [{"key":"test","personalDetail" : "test2"},
							  {"key" : "test","personalDetail" : "test2"},
							  {"key" : "test","personalDetail" : "test2"},
							  {"key" : "test","personalDetail" : "test2"},
							  {"key" : "test","personalDetail" : "test2"},
							  {"key" : "test","personalDetail" : "test2"}];
					
	$scope.familyDetails = [{"key":"test1","familyDetail" : "test1"},
							{"key" : "test2","familyDetail" : "test2"}];
							
	$scope.communicationDetails = [{"key":"test1","communicationDetail" : "test1"},
							{"key" : "test2","communicationDetail" : "test2"}];
}]);
