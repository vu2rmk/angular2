/// <reference path="../ngmodules/sportsStoreModule.js" />

// Function for waiting for DOM to load
(function () {

    // Creating a Controller sportsStoreCtrl
    app.controller('sportsStoreCtrl', function ($scope,$http,dataUrl) {

        // Initializing data object of $scope object
        $scope.data = {};

        // Making an Ajax call by passing the url as dataUrl
        $http.get(dataUrl)
        // On successful ajax call
        .success(function (data) {

            // Storing the data to the products property of data object
            $scope.data.products = data;
        })
        // On failure of ajax call
        .error(function (error) {
            
            // Storing the errror data into the error property
            $scope.data.error = error;
        });

        //$scope.data = {
        //    products: [{ name: "Product #1", description: "A product", category: "Category #1", price: 100 },
        //        { name: "Product #2", description: "A product", category: "Category #1", price: 110 },
        //        { name: "Product #3", description: "A product", category: "Category #2", price: 210 },
        //        { name: "Product #4", description: "A product", category: "Category #3", price: 202 }]

        //};

    });
})();
