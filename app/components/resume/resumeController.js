angular.module('myInfo')
.service('appMenuService',[function() {

    this.getMApps = function(cb) {
			var items = [1,2,3];
			cb();
            return items;
        }
    }


])
.controller('resumeController',['$state','$scope','appMenuService', function($state,$scope,appMenuService) 
{
	var items;
	function getApps() 
	{
			items = appMenuService.getMApps(function() {
	            console.log("It works");
		});
    }
	
	getApps();
	console.log(items);
	$scope.communicationDetails =  [{
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
									"jobTitle" : "test",
									"company":"test",
									"timeOfEmplyment":"June 2013 - Present"
								}];
	
	$scope.educationDetails = [{
									"city" : "test1",
									"institute":"test1",
									"timeOfEducation":"test1"
							   }];
							   
	$scope.job = [
					{	
						"title":"test1",
						"description":[
										"tea",
										"milk",
										"coffee"
									 ]
					},
					{
						"title":"test2",
						"description":[
										"tea",
										"milk",
										"coffee"
									 ]
					},
					{
						"title":"test3",
						"description":[
										"tea",
										"milk",
										"coffee"
									 ]
					},
					{
						"title":"test4",
						"description":[
										"tea",
										"milk",
										"coffee"
									 ]
					}
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
