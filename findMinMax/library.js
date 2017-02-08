'use stict'

module.exports = {

  findMinMax: function(arr) {
      var max = arr[0];
      var min = arr[0];
      var res =[];
      
      for (var i in arr) {
        max = ((max < arr[i]) ? arr[i] :  max);
        min = ((min > arr[i]) ? arr[i] : min);
      }
      
      return (min ===  max) ? [min] : [min, max];
  }
}