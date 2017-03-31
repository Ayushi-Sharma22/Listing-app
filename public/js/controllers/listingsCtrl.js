'use strict';
angular.module('listingsCtrl', [])
    .controller('listingController',function($scope,$http,$timeout,listingService){
        
        $scope.listings = "";
        $scope.reverse = false;
        $scope.curPage = 0;
        $scope.pageSize = 9;
        $http.get('/resources/mock.json')
		    .success(function(data) {
		        $scope.listings = data;
				$scope.numberOfPages = function() {
					return Math.ceil($scope.listings.length / $scope.pageSize);
				};

				
		    })
		    .error(function(err) {
		    	console.log(err);
		    });
		
		    $scope.slider = {
			    minValue: 1000,
			    maxValue: 4000,
			    options: {
			        floor: 1000,
			        ceil: 4000,
			        step: 100
			    }
			};

    
});