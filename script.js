var app = angular.module('GetPage', ['ionic', 'app.controllers', $httpProvider]);

//setup for allowing for CORS  
app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = 'Content-Type: application/json';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);
    
//exposing expose variables and functionality to expressions and directives in Template
app.controller('GetPageController', function ($scope, $http) { 
    var myHeaders = {'Access-Control-Allow-Origin' : '*',
				   'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
				   'Content-Type': 'application/json',
				   'Accept': 'application/json',
				   'Access-Control-Max-Age': '86400',    // cache for 1 day
			      };

	$scope.inputURL = "http://teststore.swtr.us/";
	$scope.show = function() {
		// var returnPromise = $http.get("http://teststore.swtr.us/");
		var returnPromise = $http.get(headers:myHeaders, url:$scope.inputURL);
		returnPromise.then(
		    //success
		    function(data, status, headers, config) {
			   console.log("Server responded: Success in getting: ", $scope.inputURL);	
			   $scope.expression = data;
			   },
			//error   
		    function(data, status, headers, config) {
               log($scope.inputURL);	 	
			   console.log("Server responded: Error in getting: ", $scope.inputURL);
			   },
			//progress   
			function(data, status, headers, config) {
			   console.log("Server responded: Progress in getting: ", $scope.inputURL);	
			   });
		log($scope.inputURL);	   
		console.log("I created an Asynch call and am exiting the Show() function");	
		};
	});


function log(str){
  var log = document.getElementById("log")
  if (log){ 
	 // let's be safe...
     log.innerHTML += str + "<br/>";
     }
};
