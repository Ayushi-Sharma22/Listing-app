angular.module('appRoutes', [])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'main.html',
            controller: 'mainController'
        })
        .state('list', {
            url: '/listings',
            templateUrl: '/partials/listings.html',
            controller: 'listingController'
        })
        .state('error', {
            url: '/404',
            templateUrl: '/partials/404.html'
        });
}]);