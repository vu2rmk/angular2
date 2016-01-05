/// <reference path="../../Scripts/angular.js" />

// Creating an angular module customFilter
// Creating a filter to customFilter module named unique
angular.module('customFilter', []).filter("unique", function () {

    // Returning a function by passing the data and propertyName as parameters
    return function (data, propertyName) {

        // Checking data is array and proppertyName is string
        if (angular.isArray(data) && angular.isString(propertyName)) {

            // Declaring results array
            var results = [];

            // Declaring empty keys objects
            var keys = {};
            //console.log(data);

            // Looping statement
            for (var i = 0; i < data.length; i++) {

                // Initializing val with the propertyName property of the ith data
                var val = data[i][propertyName];
                //console.log(val);

                // Checking whether the keys of the val property is undefined
                if (angular.isUndefined(keys[val])) {

                    // Setting the keys object of the val property to true
                    keys[val] = true;

                    // Pushing the val value to results array
                    results.push(val);
                    //console.log(val);
                }
            }
            //alert(results);

            // Returning the results array
            return results;
        } else {
            //alert(data);

            // Returing the data object
            return data;
        }

    }

})
//  Creating a filter to customFilter module named range
.filter("range", function ($filter) {

    // Returning function with parameter data, page and size as parameters
    return function (data, page, size) {

        // checking the data types of the parameters
        if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {

            // Declaring and setting the start_index
            var start_index = (page - 1) * size;

            // checking whether the length of the data is less than the start_index
            if (data.length < start_index) {

                // Return an empty array
                return [];

                // If the check fails
            } else {

                // Return data using the $filter using limitTo parameter
                return $filter('limitTo')(data.splice(start_index), size);
            }
            // If the check fails
        } else {

            // Retrung the data object
            return data;
        }
    }
})

// Creating a filter to customFilter module named pageCount
.filter('pageCount', function () {

    // Return the function with the parameter data and size
    return function (data, size) {

        // Checking the data type of the parameters passed
        if (angular.isArray(data) && angular.isNumber(size)) {

            // Declaring empty result array
            var result = [];

            for (var i = 0; i < Math.ceil(data.length / size) ; i++) {

                // Pushing the i value to the result array
                result.push(i);
            }

            // Returns result array
            return result;
        } else {

            // Return data object
            return data;
        }
    }
});