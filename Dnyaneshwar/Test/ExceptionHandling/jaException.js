// exception handling in javascript

// exception handling is a mechanism to handle runtime errors in a program. 
// It allows developers to gracefully handle errors and prevent the program from crashing. 
// In JavaScript, exception handling is done using the try-catch-finally block.

// The try block contains the code that may throw an exception. If an exception occurs, 
// the control is transferred to the catch block, where the error can be handled. 
// The finally block is optional and contains code that will always execute, regardless of whether 
// an exception occurred or not.    


function try_catchExample() {
    try {
        var a=10

        var c=a+b

        console.log("out put of c : ",c)
    }
    catch(error){

        console.log("error message: ",error.message)
        console.log("error name:",error.name)
    }
    

}
try_catchExample()