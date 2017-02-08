'use strict';
var jasmine = require('jasmine').expect;

var lib = require('../fizzBuzz/library.js');

describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(lib.fizzBuzz(3)).toEqual('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(lib.fizzBuzz(5)).toEqual('Buzz');
  });

  it("should return `fizzBuzz` for 15", function() {
    expect(lib.fizzBuzz(15)).toEqual('FizzBuzz');
  });

  it("should return `fizzBuzz` for 45", function() {
    expect(lib.fizzBuzz(45)).toEqual('FizzBuzz');
  });

  it("should return `fizzBuzz` for 90", function() {
    expect(lib.fizzBuzz(90)).toEqual('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(lib.fizzBuzz(63)).toEqual('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(lib.fizzBuzz(7)).toEqual(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(lib.fizzBuzz(101)).toEqual(101);
  });

})