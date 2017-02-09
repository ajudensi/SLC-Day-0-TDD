'use strict';
var jasmine = require('jasmine').expect;

var lib = require('../findMinMax/library.js');

describe('Min-Max Numbers in a List: ', function () {

  describe('findMinMax must exist', function() {
    
    it('findMinMax()should be defined', function(){
      expect(lib.findMinMax([1,2,3])).toBeDefined();
    })

  })

  describe('findMinMax must have valid argument', function() {
    
    it('should throw TypeError for invalid argument type', function(){
      expect(function() { lib.findMinMax(1,2,3); } ).toThrowError('Invalid arguments: Only an array is required');
      expect(function() { lib.findMinMax(false); } ).toThrowError(TypeError, 'Invalid arguments: Only an array is required');
      expect(function() { lib.findMinMax('1','2','3'); } ).toThrowError(/Invalid/);
      expect(function() { lib.findMinMax({a:5,b:6,c:7}); } ).toThrowError(TypeError);
    })

    it('should throw TypeError for invalid array values', function(){
      expect(function() { lib.findMinMax(['a','b','c']); } ).toThrowError('Invalid array: Only numbers should be in the array');
      expect(function() { lib.findMinMax(['b','2','c']); } ).toThrowError(TypeError, 'Invalid array: Only numbers should be in the array');
      expect(function() { lib.findMinMax(false,null,'3'); } ).toThrowError(/Invalid/);
      expect(function() { lib.findMinMax(['']); } ).toThrowError(TypeError);
    })

  })

  describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

    it('should return [1,4] for [1, 2, 3 , 4]', function(){
      expect(lib.findMinMax([1,2,3,4])).toEqual([1,4]);
    });

    it('should return [1,4] for [1, 2, 3 , 4]', function(){
      expect(lib.findMinMax([100, 150, 200, 50])).toEqual([50,200]);
    });

    it('should return [4, 6] for [6, 4]', function () {
      expect(lib.findMinMax([6, 4])).toEqual([4, 6]);
    });

    it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
      expect(lib.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
    });

  });

  describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

    it('should return [4] for [4, 4, 4, 4]', function () {
      expect(lib.findMinMax([4, 4, 4, 4])).toEqual([4]);
    });

    it('should not return [5] for [4, 4, 4, 4]', function () {
      expect(lib.findMinMax([4, 4, 4, 4])).not.toBe([5]);
    });

    it("should return [4] for ['4', '4','4','4']", function () {
      expect(lib.findMinMax(['4', '4','4','4'])).toEqual([4]);
    });

  });

});