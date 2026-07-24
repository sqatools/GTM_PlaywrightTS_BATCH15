// import specific functio
/*import {addition, getSquare} from '../module1/math_Operation.js'

 var result =addition(300,240)
 console.log("addition of :", result)

 var result2= getSquare(4)
  console.log("addition of :", result2)   */

  // import all functiom

  import * as abc from '../module1/math_Operation.js'

  
 var result =abc.addition(300,240)
 console.log("addition of :", result)

 var result2= abc.getSquare(4)
  console.log("addition of :", result2) 

var result3= abc.fact(8)
  console.log("factorial of :", result3) 


