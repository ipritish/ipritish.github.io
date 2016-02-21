angular.module('myInfo')
.controller('resumeController',['$state','$scope', function($state,$scope) 
{
	$scope.communicationDetails = [{
									"address":
										{
											"line1" :"21/9 Bajanai Koil 3rd Street",
											"line2":"Chennai Tamilnadu 600094"
										},
									"name":"test",
									"contacts":
										{
											"phone":"(+91)9962779926",
											"email" :"pritishjain2009@gmail.com"
										}
								   }];
								
	$scope.employmentDetails = [{
									"jobTitle" : "Software Developer",
									"company":"Pfizer Inc",
									"timeOfEmplyment":"June 2013 - Present"
								}];
	
	$scope.educationDetails = [{
									"city" : "Gandhinagar Gujarat",
									"institute":"IIT Gandhinagar",
									"timeOfEducation":"June 2009 - May 2013"
							   }];
	
	$scope.firstProject = [
							"tea","milk","coffee"
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
