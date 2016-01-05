/// <reference path="../../Scripts/angular.js" />

/// <reference path="../ngmodules/sportsStoreModule.js" />

// Creating a controller productListCtrl
app.controller('productListCtrl', ['$scope', '$filter', 'productListActiveClass', 'productListPageCount', function ($scope, $filter, productListActiveClass, productListPageCount) {

    // Initializing selectedCategory to null
    var selectedCategory = null;

    // Initializing selectedPage of $scope object
    $scope.selectedPage = 1;

    // Initializing the pageSize property of $scope object with productListPageCount parameter
    $scope.pageSize = productListPageCount;

    // Initializing a selectCategory function with parameter newCategory
    $scope.selectCategory = function (newCategory) {
        //console.log(newCategory);

        // assigning newCategory to newCategory
        selectedCategory = newCategory;

        // Assigning selectedPage to 1
        $scope.selectedPage = 1;
    }

    // Initializing a selectPage function with newPage parameter
    $scope.selectPage = function (newPage) {

        // Assigning newPage parameter to selectedPage
        $scope.selectedPage = newPage;
    }

    // Initializing categoryFilter function with parameter product
    $scope.categoryFilterFn = function (product) {
        //console.log(product);
        //console.log(selectedCategory);
        //console.log(selectedCategory == null || product.category == selectedCategory);

        // return true / false depending on the condition below
        return selectedCategory == null || product.category == selectedCategory;
    }

    // Initiaizing getCategoryClass function with parameter category 
    $scope.getCategoryClass = function (category) {

        // Returns the css class value based on the condition below
        return selectedCategory == category ? productListActiveClass : "";
    }

    // Initializing getPageClass function with parameter
    $scope.getPageClass = function (page) {

        // Returns the css class value based on the condition below
        return $scope.selectedPage == page ? productListActiveClass : "";
    }

}]);