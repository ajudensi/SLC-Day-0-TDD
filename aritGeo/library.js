'use strict'

module.exports = {

    isArithmeticProgression: function (arr) {
        var serialDifference = arr[1] - arr[0]; //finding the difference between the second and first values
        var isArithmetic = true;
        for (var index = 0; index < arr.length - 1; index++) {
             /**If the difference between consecutive values are not equal to 
             * serialDifference, then its is not an Arithmetic progression
             * isArithmetic = false
            */
            if ((arr[index + 1] - arr[index]) !== serialDifference) {
                isArithmetic = false;
            }
        }
        return isArithmetic;
    },

    isGeometricProgression: function (arr) {
        var serialDifference = arr[1] / arr[0]; //finding the difference between the second and first values
        var isGeometric = true;
        for (var index = 0; index < arr.length - 1; index++) {
            /**If the difference between consecutive values are not equal to 
             * serialDifference, then its is not a geometric progression
             * isGeometric = false
            */
            if ((arr[index + 1] / arr[index]) !== serialDifference) {
                isGeometric = false;
            }
        }
        return isGeometric;
    },

    aritGeo: function (arr) {
        if (arr.constructor === Array && !(arr[0])) {
            return 0;
        }
        if (arguments.length > 1) {
            return -1
        }

        if (this.isArithmeticProgression(arr)) {
            return 'Arithmetic';
        } else if (this.isGeometricProgression(arr)) {
            return "Geometric";
        } else {
            return -1;
        }
    }
}