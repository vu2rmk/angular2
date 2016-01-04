﻿/// <reference path="../../Scripts/angular.js" />

angular.module('customFilter', []).filter("unique", function () {

    return function (data, propertyName) {
        if (angular.isArray(data) && angular.isString(propertyName)) {
            var results = [];
            var keys = {};
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var val = data[i][propertyName];
                //console.log(val);
                if (angular.isUndefined(keys[val])) {
                    keys[val] = true;
                    results.push(val);
                    //console.log(val);
                }
            }
            //alert(results);
            return results;
        } else {
            //alert(data);
            return data;
        }

    }

})
.filter("range", function ($filter) {
    return function (data, page, size) {
        if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
            var start_index = (page - 1) * size;

            if (data.length < start_index) {
                return [];
            } else {
                return $filter('limitTo')(data.splice(start_index), size);
            }

        } else {
            return data;
        }
    }
})
.filter('pageCount', function () {
    return function (data, size) {
        if (angular.isArray(data) && angular.isNumber(size)) {
            var result = [];
            for (var i = 0; i < Math.ceil(data.length / size) ; i++) {
                result.push(i);
            }

            return result;
        } else {
            return data;
        }
    }
});