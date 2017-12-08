var app = angular.module('RealestateApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/homeadd.html',
        controller: 'AddController as vm'
    }).when('/rent', {
        templateUrl: '/views/rent.html',
        controller: 'RentController as vm'
    }).when('/sale',{
        templateUrl: '/views/sale.html',
        controller: 'SaleController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});
