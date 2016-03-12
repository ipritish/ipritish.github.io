angular.module('myInfo')
.controller('bioController',['$state','$scope', function($state,$scope) 
{
	$scope.personalDetails = [{"key":"Name","personalDetail" : "Pritish Jain"},
							  {"key" : "Date Of Birth","personalDetail" : "12th May 1991"},
							  {"key" : "Place of Birth","personalDetail" : "Tonk"},
							  {"key" : "Height","personalDetail" : "5'2\""},
							  {"key" : "Occupation","personalDetail" : "Software Developer at Pfizer"},
							  {"key" : "Qualification","personalDetail" : "B. Tech. in Electrical (IIT Gandhinagar)"},
							  {"key" : "Gotra","personalDetail" : "Sogani (Self), Bohra (Nanihal)"},
							  {"key" : "Hobbies","personalDetail" : "Reading Books, Watching Animes"},
							  {"key":"Residence","personalDetail" : "Chennai"},
							  {"key" : "Phone No.","personalDetail" : "(+91) 9962779926"}];
					
	$scope.familyDetails = [{"key":"Papa","familyDetail" : "Padam Kumar Jain"},
							{"key" : "Occupation","familyDetail" : "Service at Jaipur (Insurance Company)"},
							{"key" : "Phone No.","familyDetail" : "(+91) 9252417579"},
							{"key":"Mummy","familyDetail" : "Preeti Jain"},
							{"key" : "Occupation","familyDetail" : "Home Maker"},
							{"key" : "Phone No.","familyDetail" : "(+91) 9252188788"},
							{"key":"Bhai","familyDetail" : "Pulkit Jain"},
							{"key" : "Occupation","familyDetail" : "Pursuing CA"},
							{"key":"Dada","familyDetail" : "Chothmal Jain"},
							{"key" : "Occupation","familyDetail" : "Retired as Accountant"},
							{"key":"Nana","familyDetail" : "Padam Chand Jain"},
							{"key" : "Occupation","familyDetail" : "Retired Government Office Superintendent"},
							{"key":"Tauji","familyDetail" : "Gyan Chand Jain"},
							{"key" : "Occupation","familyDetail" : "CA CS"},
							{"key" : "Phone No.","familyDetail" : "(+91) 9829053546"},
							{"key":"Tauji","familyDetail" : "Chetan Kumar Jain"},
							{"key" : "Occupation","familyDetail" : "Business at Tonk"},
							{"key" : "Phone No.","familyDetail" : "(+91) 9667373244"},
							{"key":"Chacha","familyDetail" : "Tara Chand Jain"},
							{"key" : "Occupation","familyDetail" : "Business at Tonk"},
							{"key" : "Phone No.","familyDetail" : "(+91) 9252616785"},
							{"key":"Mama","familyDetail" : "Devendra Jain"},
							{"key" : "Occupation","familyDetail" : "CA"},
							{"key" : "Phone No.","familyDetail" : "(+91) 9712154455"}];
							
	$scope.communicationDetails = [{"key":"Home Address","communicationDetail" : "F1, Plot no. 38, Vishwaishwaraiya Nagar, Gopalpura, Jaipur"}];
	
}]);
