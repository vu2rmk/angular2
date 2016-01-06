/// <reference path="../../Scripts/angular.js" />

// Creating angular module sportsStore with the dependency of customFilter filter and setting it to app variable
var app = angular.module('sportsStore', ['customFilter']);

// Creating constants for the sportsStore module
app.constant('productListActiveClass', 'btn-primary');
app.constant('productListPageCount', 3);
app.constant('dataUrl', 'products.json');


