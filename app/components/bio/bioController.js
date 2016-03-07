angular.module('myInfo')
.controller('bioController',['$state','$scope', function($state,$scope) 
{
	$scope.personalDetails = [{"key":"test12","personalDetail" : "test1"},
							  {"key" : "test2","personalDetail" : "test2"},
							  {"key" : "test3","personalDetail" : "test3"},
							  {"key" : "test4","personalDetail" : "test4"},
							  {"key" : "test5","personalDetail" : "test5"},
							  {"key" : "test6","personalDetail" : "test6"}];
					
	$scope.familyDetails = [{"key":"test1","familyDetail" : "test1"},
							{"key" : "test2","familyDetail" : "test2"}];
							
	$scope.communicationDetails = [{"key":"test1","communicationDetail" : "test1"},
							{"key" : "test2","communicationDetail" : "test2"}];
}]);
