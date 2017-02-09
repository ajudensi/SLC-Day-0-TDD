'use strict';
var jasmine = require('jasmine').expect;

var lib = require('../fizzBuzz/library.js');

describe("Fizz Buzz tests ", function() {

  it("should determine the fizzBuzz function is defined", function() {
    expect(lib.fizzBuzz(0)).toBeDefined();
  });

  it("should throw an error if argument is not a number", function(){
    expect(function(){lib.fizzBuzz({});}).toThrowError('Only a numbe is required');
    expect(function(){lib.fizzBuzz('abc');}).toThrowError('Only a numbe is required');
    expect(function(){lib.fizzBuzz([]);}).toThrowError('Only a numbe is required');
  })

  it("should return `Fizz` for number divisible by 3", function() {
    expect(lib.fizzBuzz(3)).toEqual('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(lib.fizzBuzz(5)).toEqual('Buzz');
  });

  it("should return `fizzBuzz` for 15", function() {
    expect(lib.fizzBuzz(15)).toEqual('FizzBuzz');
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

  it("should return typoof string  for 5", function() {
    expect(typeof lib.fizzBuzz(5)).toEqual('string');
  });

  it("should return typoof string  for 3", function() {
    expect(typeof lib.fizzBuzz(3)).toEqual('string');
  });

  it("should return typoof number  for 3", function() {
    expect(typeof lib.fizzBuzz(8)).toEqual('number');
  });

})