/// <reference path="../../Scripts/angular.js" />
/// <reference path="../ngmodules/sportsStoreModule.js" />


// Creating a controller cartSummaryController and passing in cart and scope object
app.controller('cartSummaryController', function ($scope, cart) {

    // Calling the getProducts function of cart object and setting it to cartData of scope object
    $scope.cartData = cart.getProducts();

    // Initializing the total function
    // This function wil calculate the total price of the products that were added to the cart
    $scope.total = function () {

        // Setting the total variable to zero
        var total = 0;

        // Looping through the cart data
        for (var i = 0; i < $scope.cartData.length; i++) {

            // Calculating the total
            total += ($scope.cartData[i].price * $scope.cartData[i].count);

        }

        // Returning the total amount
        return total;
    }

    // Initializing a function remove with pararmeter id
    // This function will remove the product from the cart based on the id passed
    $scope.remove = function (id) {

        // Calling the removeProduct function and passing the id parameter
        cart.removeProduct(id);
    }

});

