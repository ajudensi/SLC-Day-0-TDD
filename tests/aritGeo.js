'use strict';

var jasmine = require('jasmine').expect;

var lib = require('../aritGeo/library.js');



describe("Determine the sequence of an array of numbers: ", function() {

    describe("Case that function is defined", function() {

      it("should determine the aritGeo function is defined", function() {
        expect(lib.aritGeo([])).toBeDefined();
      })

    })

    describe("Case that multiple arguments were passed", function() {

      it("should throw an error is multiple arguments are supplied", function() {
        expect(function(){ lib.aritGeo([],[]); }).toThrowError('Only one argument array is required');
      })
      
    })

    describe("Case for an empty array", function() {

      it("should return 0 for an empty array", function() {
        expect(lib.aritGeo([])).toEqual(0);
        expect(typeof lib.aritGeo([])).toEqual('number');
      });

    });

    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        expect(lib.aritGeo([2, 4, 6, 8, 10])).toEqual('Arithmetic');
        expect(typeof lib.aritGeo([2, 4, 6, 8, 10])).toEqual('string');
        expect(lib.aritGeo([2, 4, 6, 8, 10])).not.toBeNull();
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
        expect(lib.aritGeo([5, 11, 17, 23, 29, 35, 41])).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
        expect(lib.aritGeo([15, 10, 5, 0, -5, -10])).toEqual('Arithmetic');
      });

    });

    describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        expect(lib.aritGeo([2, 6, 18, 54, 162])).toEqual('Geometric');
      });

      it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
        expect(lib.aritGeo([0.5, 3.5, 24.5, 171.5])).toEqual('Geometric');
      });

      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
        expect(lib.aritGeo([-128, 64, -32, 16, -8])).toEqual('Geometric');
      });

    });

    describe("Case for neither arithmetic nor geometric sequence", function() {

      it("should return -1 for [1, 2, 3, 5, 8]", function() {
        expect(lib.aritGeo([1, 2, 3, 5, 8])).toEqual(-1);
        expect(lib.aritGeo([1, 2, 3, 5, 8])).toBeLessThan(1);
      });

      it("should return -1 for [1, 3, 6, 10, 15]", function() {
        expect(lib.aritGeo([1, 3, 6, 10, 15])).toEqual(-1);
      });

      it("should return -1 for [1, 8, 27, 64, 125]", function() {
        expect(lib.aritGeo([1, 8, 27, 64, 125])).toEqual(-1);
      });
      
    });
  });