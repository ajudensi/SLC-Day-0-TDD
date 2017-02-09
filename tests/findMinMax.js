//'use strict';
const jasmine = require('jasmine').expect;

const lib = require('../findMinMax/library.js');

describe('Min-Max Numbers in a List: ', () => {

  describe('findMinMax must exist', () => {

    it('findMinMax()should be defined', () => {
      expect(lib.findMinMax([1, 2, 3])).toBeDefined();
    });

  });

  describe('findMinMax must have valid argument', () => {

    it('should throw TypeError for invalid argument type', () => {
      expect(() => {
        lib.findMinMax(1, 2, 3);
      }).toThrowError('Invalid arguments: Only an array is required');
      expect(() => {
        lib.findMinMax(false);
      }).toThrowError(TypeError, 'Invalid arguments: Only an array is required');
      expect(() => {
        lib.findMinMax('1', '2', '3');
      }).toThrowError(/Invalid/);
      expect(() => {
        lib.findMinMax({ a: 5, b: 6, c: 7 });
      }).toThrowError(TypeError);
    });

    it('should throw TypeError for invalid array values', () => {
      expect(() => {
        lib.findMinMax(['a', 'b', 'c']);
      }).toThrowError('Invalid array: Only numbers should be in the array');
      expect(() => {
        lib.findMinMax(['b', '2', 'c']);
      }).toThrowError(TypeError, 'Invalid array: Only numbers should be in the array');
      expect(() => {
        lib.findMinMax(false, null, '3');
      }).toThrowError(/Invalid/);
      expect(() => {
        lib.findMinMax(['']);
      }).toThrowError(TypeError);
    });

  });

  describe('Return the min and max number in the list in a new list follows `[min, max]`', () => {

    it('should return [1,4] for [1, 2, 3 , 4]', () => {
      expect(lib.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
    });

    it('should return [1,4] for [1, 2, 3 , 4]', () => {
      expect(lib.findMinMax([100, 150, 200, 50])).toEqual([50, 200]);
    });

    it('should return [4, 6] for [6, 4]', () => {
      expect(lib.findMinMax([6, 4])).toEqual([4, 6]);
    });

    it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', () => {
      expect(lib.findMinMax([
        4,
        66,
        6,
        44,
        7,
        78,
        8,
        68,
        2,
      ])).toEqual([2, 78]);
    });

  });

  describe('Return the number in the list in a new list follows `[min]` when the number is t' +
      'he min and max number in that list',
  () => {

    it('should return [4] for [4, 4, 4, 4]', () => {
      expect(lib.findMinMax([4, 4, 4, 4])).toEqual([4]);
    });

    it('should not return [5] for [4, 4, 4, 4]', () => {
      expect(lib.findMinMax([4, 4, 4, 4]))
        .not
        .toBe([5]);
    });

    it("should return [4] for ['4', '4','4','4']", () => {
      expect(lib.findMinMax(['4', '4', '4', '4'])).toEqual([4]);
    });

  });

});
