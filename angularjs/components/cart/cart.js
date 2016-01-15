/// <reference path="../../Scripts/angular.js" />

// Creating a module called cart
angular.module('cart', [])
    // Creating a service called cart so that it could be used throughout the application and shared by all the controllers which use this service
.factory('cart', function () {

    // Declaring a cartData array
    var cartData = [];

    // returing set of properties of cart which are functions
    return {

        // Creating a addProduct function which passes the parameter id, name and price
        addProduct: function (id, name, price) {

            // Declaring a variable addedToExistingItem and setting it to false
            var addedToExistingItem = false;

            // Looping throught the cartData for cheching if the id exists in it
            for (var i = 0; i < cartData.length; i++) {

                // Checking if the id already exists in the cartData array
                if (cartData[i].id == id) {

                    // Incrementing the count property of the ith object of the cartData array
                    cartData[i].count++;

                    // Setting the addedToExistingItem to true
                    addedToExistingItem = true;

                    // Breaking out of the for loop
                    break;
                }

            }

            // Checkin if the item is a new item
            if (!addedToExistingItem) {

                // Pushing the new item into the cartData array
                cartData.push({

                    count: 1, id: id, price: price, name: name
                });
            }
        },

        //  Creating a removeProduct function which passes the parameter id
        removeProduct: function (id) {

            // Looping throught the cartData for cheching if the id exists in it
            for (var i = 0; i < cartData.length; i++) {

                // Checking if the id already exists in the cartData array
                if (cartData[i].id == id) {

                    // Removing the item from the cartData array
                    cartData.splice(i, 1);
                    break;
                }
            }
        },

        // Creating a getProducts function
        getProducts: function () {

            // Returng the cartData array
            return cartData;
        }
    }

})
    // Creating a directive  and passing in the cart service object
.directive('cartSummary', function (cart) {

    return {

        // Setting the direcctive as an element
        restrict: 'E',

        // Setting the template url
        templateUrl: "angularjs/components/cart/cartSummary.html",

        // Setting the controller and passing the scope object
        controller: function ($scope) {

            // Calling the getProducts function of the cart object and setting it to cartData
            var cartData = cart.getProducts();

            // Initializing total function of the scope object
            // This function calculates the total amount
            $scope.total = function () {

                // Initializing the total variable
                var total = 0;

                // Looping through the cartData to calculate the total
                for (var i = 0; i < cartData.length; i++) {

                    total += (cartData[i].price * cartData[i].count);
                }

                // Returning the total
                return total;
            }

            // Initializing the itemCount function which the gets the number of products presents in the cart
            $scope.itemCount = function () {

                // Initializing the total variable
                var total = 0;

                // Looping through the cartData to calculate the total
                for (var i = 0; i < cartData.length; i++) {

                    total += cartData[i].count;
                }

                // Returning the total
                return total;
            }
        }

    }
});