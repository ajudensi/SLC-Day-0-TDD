'use stict';

module.exports = {

  findMinMax: function(arr) {
    
    if(arguments > 1) return 'Error';
    var max = arr[0];
    var min = arr[0];
    /** Throw TypeError if argument is not an array */
    if(!(arr.constructor === Array)) throw new TypeError('Invalid arguments: Only an array is required');

    for (var index in arr) {
      /** Throw TypeError if an array value is not a number */
      if(!(parseFloat(arr[index]))) throw new TypeError('Invalid array: Only numbers should be in the array');
      /** Checks and assign minimum and maximum values to man, mix respectively
       * in every iteration
      */
      max = ((max < arr[index]) ? arr[index] :  max);
      min = ((min > arr[index]) ? arr[index] : min);

    } 
    /** Return result 
     * if min is equal to max return any single of them
     * else return min and max as integers in an array
    */
    return (min ===  max) ? [parseInt(min)] || [parseInt(max)]: [parseInt(min), parseInt(max)];
  }
}