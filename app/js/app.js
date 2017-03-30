(function() {
	'use strict';
    
	angular
		.module('hotelSettings', ['ngResource', 'ngRoute'])
		.config(function($routeProvider) {
			$routeProvider
			.when("/", {
				templateUrl: "templates/management.html",
				controller: "ManagementController"
			})
			.otherwise({redirectTo:"/"});
		});

})();