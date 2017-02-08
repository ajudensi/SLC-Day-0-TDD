'use strict'

module.exports = {

	fizzBuzz: function (arg) {
		  if (arg % 3 === 0 && arg % 5 === 0) {
		    return "FizzBuzz";
		  } else if (arg % 3 === 0) {
		    return "Fizz";
		  } else if (arg % 5 === 0) {
		    return "Buzz";
		  } else {
		    return arg;
		  }
	}
}