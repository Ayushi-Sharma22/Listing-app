angular.module('headerDirective', [])
    .directive('header', function () {
    return {
        restrict: 'A', 
        replace: true,
        scope: {user: '='}, 
        templateUrl: "../../partials/header.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {

        }]
    }
})
    .directive('headerList', function () {
    return {
        restrict: 'A', 
        replace: true,
        scope: {user: '='}, 
        templateUrl: "../../partials/headerList.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {

        }]
    }
})
    .directive('nav', function () {
    return {
        restrict: 'A', 
        replace: true,
        scope: {user: '='}, 
        templateUrl: "../../partials/nav.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
        	
            $scope.navbuttons = [
                                    {   title: "HOME",
                                        list: [
                                            "Product1", "Product2", "Product3","Product4", "Product5", "Product6"
                                        ],
                                        ref: "home"
                                    },
                                    {   title: "DUMMY1",
                                        list: [
                                            "Product1", "Product2", "Product3","Product4", "Product5", "Product6"
                                        ],
                                        ref: "home"
                                    },
                                    {   title: "DUMMY2",
                                        list: [
                                            "Product1", "Product2", "Product3"
                                        ],
                                        ref: "home"
                                    },
                                    {   title: "DUMMY3",
                                        list: [
                                            "Product1", "Product2", "Product3"
                                        ],
                                        ref: "home"
                                    },
                                    {   title: "DUMMY4",
                                        list: [
                                            "Product1", "Product2", "Product3"
                                        ],
                                        ref: "home"
                                    }
                                ];

        }]
    }
});