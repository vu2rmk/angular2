/// <reference path="../../Scripts/angular.js" />

// Creating angular module sportsStore with the dependency of customFilter filter, cart and ngRoute module and setting it to app variable
var app = angular.module('sportsStore', ['customFilter', 'cart', 'ngRoute'])
    // Configuring the route by passing the $routeProvider
    .config(function ($routeProvider) {

        // Providing the routes and setting the template for each route
        $routeProvider.when("/complete", {
            templateUrl: "/angularjs/views/thankYou.html"
        });

        $routeProvider.when("/placeorder", {
            templateUrl: "/angularjs/views/placeOrder.html"
        });

    $routeProvider.when("/checkout", {
        templateUrl: "/angularjs/views/checkoutSummary.html"
    });

    $routeProvider.when("/products", {

        templateUrl: "/angularjs/views/productList.html"
    });

    $routeProvider.otherwise({

        templateUrl: "/angularjs/views/productList.html"
    });
});

// Creating constants for the sportsStore module
app.constant('productListActiveClass', 'btn-primary');
app.constant('productListPageCount', 3);
app.constant('dataUrl', 'products.json');


