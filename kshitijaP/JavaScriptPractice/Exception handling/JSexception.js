// Exception handling - It helps manage runtime errors without stopping the entire program.

/*
try {
    // code
} catch (error) {
    // code
}
*/

function try_catch_exception() {
    try {
        var a = 10;
        var c = a + b;   // 'b' is not defined
        console.log("c output: " + c);
    } catch (error) {
        console.log("Error Message: " + error.message);
        console.log("Error Name: " + error.name);
    }
}

// Function call
try_catch_exception();

//console.log
//try_catch_finally
function try_catch_finally(a,b) {
    try {
        var c=a+b
        console.log("c output: " + c);
        var d=a/'Hello'
        console.log("d output: " + d);
    } catch (error) {
        console.log("Error Message: " + error.message);
        console.log("Error Name: " + error.name);
    } finally {
        var n=5
        var fact=1
        for(var i=n; i>=10; i++)
            fact=fact*i
        //console.log("Finally block executed.");
    }
}
try_catch_finally(10,20)

//throw custom exception with error message
function throw_custom_exception() {
    try {
        throw new Error("This is a custom error message.");
    } catch (error) {
        console.log("Custom Error Message: " + error.message);
        console.log("Custom Error Name: " + error.name);
    }
}

// Function call
//throw_custom_exception();
function Getarray(arrayvalue){
try{
    for (var num of arrayvalue){
        sum+= num
        if(sum>20){
throw new Error("value cannot be more than 20")
        }
        else{
            continue
        }
    }
    
}
catch(error){
    console.log("Error Message: " + error.message);
    console.log("Error Name: " + error.name);
}
}
Getarray([10,20,30])