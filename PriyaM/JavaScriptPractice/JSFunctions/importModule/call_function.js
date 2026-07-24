// import specific functions
//import {addition, getSquare} from '../module1/math_operations.js'

// import all function
import * as abc from '../module1/math_operations.js'


var result = abc.addition(300, 200)
console.log("result :", result)

var result2 = abc.getSquare(15)
console.log("Square output :", result2) // Square output : 225

var result3 = abc.fact(5)
console.log("Factorial of 5 :", result3)