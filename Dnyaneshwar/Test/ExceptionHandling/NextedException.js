function NestedException()
{

    try {

        var a=10
        var b=20
        console.log("outer try block",a*'hello')
        try{

            var x=100
            var y=200
            console.log("inner try",x!==za)

            console.log("we are in inner block code")

        }
        catch(error){
console.log("inner exception message:",error.message)
console.log("inner exception name:",error.name)
        }

    }

    catch(error){

console.log("outer exception message  :",error.message)
console.log("outer exception name:",error.name)
        
    }

}

NestedException()