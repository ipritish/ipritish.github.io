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

}]);
