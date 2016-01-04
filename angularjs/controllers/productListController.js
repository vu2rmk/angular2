/// <reference path="../../Scripts/angular.js" />

/// <reference path="../ngmodules/sportsStoreModule.js" />

app.controller('productListCtrl', ['$scope', '$filter', 'productListActiveClass', 'productListPageCount', function ($scope, $filter, productListActiveClass, productListPageCount) {
    var selectedCategory = null;

    $scope.selectedPage = 1;
    $scope.pageSize = productListPageCount;

    $scope.selectCategory = function (newCategory) {
        //console.log(newCategory);
        selectedCategory = newCategory;
        $scope.selectedPage = 1;
    }

    $scope.selectPage = function (newPage) {
        $scope.selectedPage = newPage;
    }

    $scope.categoryFilterFn = function (product) {
        //console.log(product);
        //console.log(selectedCategory);
        //console.log(selectedCategory == null || product.category == selectedCategory);
        return selectedCategory == null || product.category == selectedCategory;
    }

    $scope.getCategoryClass = function (category) {
        return selectedCategory == category ? productListActiveClass : "";
    }

    $scope.getPageClass = function (page) {
        return $scope.selectedPage == page ? productListActiveClass : "";
    }

}]);