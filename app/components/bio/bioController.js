angular.module('myInfo')
.controller('bioController',['$state','$scope', function($state,$scope) 
{
	$scope.personalDetails = [{"key":"Name","personalDetail" : "Pritish Jain"},
							  {"key" : "Date Of Birth","personalDetail" : "12th May 1991"},
							  {"key" : "Place of Birth","personalDetail" : "Tonk"},
							  {"key" : "Height","personalDetail" : "5'2\""},
							  {"key" : "Occupation","personalDetail" : "Software Developer at Pfizer"},
							  {"key" : "Qualification","personalDetail" : "B. Tech. in Electrical"},
							  {"key" : "Gotra","personalDetail" : "Sogani (Self), Bohra (Nanihal)"}];
					
	$scope.familyDetails = [{"key":"Father","familyDetail" : "Padam Kumar Jain"},
							{"key" : "Occupation","familyDetail" : "Manager at United India Insurance Company"},
							{"key" : "Phone No.","familyDetail" : "(+91) 9252417579"},
							{"key":"Mother","familyDetail" : "Preeti Jain"},
							{"key" : "Occupation","familyDetail" : "Housewife"},
							{"key" : "Phone No.","familyDetail" : "(+91) 9252188788"},
							{"key":"Brother","familyDetail" : "Pulkit Jain"},
							{"key" : "Occupation","familyDetail" : "Preparing for CA Final"},
							{"key":"Nana","familyDetail" : "Padam Chand Jain"},
							{"key" : "Occupation","familyDetail" : "Retired ...(will update)"},
							{"key" : "Phone No.","familyDetail" : "(+91) 9928157893"},
							{"key":"Mama","familyDetail" : "Devendra Jain"},
							{"key" : "Occupation","familyDetail" : "Atishay Consultancy"},
							{"key" : "Phone No.","familyDetail" : "(+91) 9712154455"}];
							
	$scope.communicationDetails = [{"key":"Residence","communicationDetail" : "F1, Plot no. 38, Vishwaishwaraiya Nagar, Gopalpura, Jaipur"},
							{"key" : "Phone No.","communicationDetail" : "(+91)9962779926"}];
}]);
