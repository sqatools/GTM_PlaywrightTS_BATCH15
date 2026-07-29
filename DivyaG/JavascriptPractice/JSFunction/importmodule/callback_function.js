//import a specific function
import {addition,getSquare} from '../module1/mathoperation.js'
import {factorial} from '..//module1/mathoperation.js'

var sum = addition(5,6)
console.log("Sum of two numbers:",sum)

var square = getSquare(5)
console.log("Square of a number:",square)

var result = factorial(4)
console.log("Factorial of a number:",result) 


//import all functions from a module

import * as abc from '../module1/mathoperation.js'
var sum = abc.addition(5,6)
console.log("Sum of two numbers:",sum)

var square = abc.getSquare(5)
console.log("Square of a number:",square)

var result = abc.factorial(4)
console.log("Factorial of a number:",result) 

