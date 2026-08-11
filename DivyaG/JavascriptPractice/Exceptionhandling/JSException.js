//Exception HAndling in Java script
//It is used to manage any run time error without stopping the entire program

/* 
try{
code
} catch(error){
 code
}
*/

// try-catch
function try_catch_exception(){
    try{
        var a=10
        var c=a+b
        console.log("C output:",c)
    }catch(error){
        console.log("Error message:",error.message)
        console.log("name:",error.name)
    }
    console.log("Task completed")
}
try_catch_exception()

//try-catch-finally
// Finally block will always execute a code even it has exception or not
function trycatchFinally(a,b){
    try{
        var c=a+b
        console.log("C:Output",c)
       var d=a/'hello'
        console.log("d output:",d)
        //console.log("e value:",e) // ReferenceError
        // console.log(a.toUppercase())//TypeError
        var arr = new Array(-10)
        console.log(arr)  //Invalid array length,RangeError

}catch(error){
    console.log("error messgae:",error.message)
    console.log("error name:",error.name)
    //console.log("complete message:",error.stack)
}finally{
    var n=5
    var fact=1
    for(var i=n ; i>0 ; i--){
        fact=fact*i
       }
        console.log("factorial of a number:",fact)
}
}
trycatchFinally(5,6)
// throw custom exception with error message
function getArraySum(arr){
    try{
        var sum=0
        for(var num of arr){
            console.log(num)
            sum+=num
            if(sum>=20){
                throw new Error("Value is not more than 20")
            }
            else{
                continue
            }
        }
        }catch(error){
        console.log("error message:",error.message)
        console.log("error name:", error.name)
    }
}
getArraySum([4,5,6,7,8])
/* 
4
5
6
7
error message: Value is not more than 20
error name: Error */
// Nested Exception
// when we declare one exception block in another exception block
function nestedExceptionHAndling(){
    try{
        var a=10
        var b=20
        console.log("output:",a+b)
        var c='hello'*d
        console.log(c)
        try{
            console.log("We are in inner code")

        }catch(error){
            console.log("inner exception:",error.message)
            console.log("inner exception name:",error.name)
        }

    }catch(error){
        console.log("outer error message:",error.message)
        console.log("outer error name:",error.name)
    }
}
nestedExceptionHAndling()
/* /* output: 30
outer error message: d is not defined
outer error name: ReferenceError 
 output: 30 */

function nestedExceptionHAndling(){
    try{
        var a=10
        var b=20
        var d= 5
        console.log("output:",a+b)
        var c=5*d
        console.log(c)
        try{
            console.log("We are in inner code")
            var x=100
            var y=200
           console.log(x!=y)
           console.log(x!=Z)
            

        }catch(error){
            console.log("inner exception:",error.message)
            console.log("inner exception name:",error.name)
        }

    }catch(error){
        console.log("outer error message:",error.message)
        console.log("outer error name:",error.name)
    }
}
nestedExceptionHAndling()
/* output: 30
25
We are in inner code
true
inner exception: Z is not defined
inner exception name: ReferenceError */


