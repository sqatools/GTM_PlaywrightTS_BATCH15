// import {addition} from '../Module1/Math_operations.js'
// import { getSquare, fact } from '../Module1/Math_operations.js'
import * as abc from '../Module1/Math_operations.js'

// here abc is reference
var additionResult = abc.addition(10,20)
console.log("Addition is",additionResult)


var SquareResult = abc.getSquare(4)
console.log("quare is",SquareResult )

var factResult =abc.fact(3);
console.log("factorial is", factResult)

