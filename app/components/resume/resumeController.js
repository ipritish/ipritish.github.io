angular.module('myInfo')
.controller('resumeController',['$state','$scope', function($state,$scope) 
{
	$scope.communicationDetails = [{
									"address":
										{
											"line1" :"test",
											"line2":"test"
										},
									"name":"test",
									"contacts":
										{
											"phone":"test",
											"email" :"test"
										}
								   }];
								
	$scope.employmentDetails = [{
									"jobTitle" : "Software Developer",
									"company":"test",
									"timeOfEmplyment":"June 2013 - Present"
								}];
	
	$scope.educationDetails = [{
									"city" : "test",
									"institute":"test",
									"timeOfEducation":"test"
							   }];
	
	$scope.firstProject = [
							"tea",
							"milk",
							"coffee"
						  ];
						  
	$scope.secondProject = [
							"tea",
							"milk",
							"coffee"
						   ];
						   
	$scope.thirdProject = [
							"tea",
							"milk",
							"coffee"
						  ];
						  
	$scope.fourthProject = [
							"tea",
							"milk",
							"coffee"
						   ];						  
	
	$scope.undergradeCourse = [
								"tea",
								"milk",
								"coffee"
						      ];	
						   
	$scope.techExperience = [
								"tea",
								"milk",
								"coffee"
							];
	
	$scope.additionalDetails = [
								  "tea",
								  "milk",
								  "coffee"
							   ];
							   
	$scope.techincalDetails = [
								  "tea",
								  "milk",
								  "coffee"
							  ];
							

}]);
