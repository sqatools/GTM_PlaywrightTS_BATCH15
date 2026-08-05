export function addition(num1, num2){
    return num1 + num2
}
//console.log("addtion is",addition(3,4))


export function getSquare(num){
return num**2
}

// console.log("square is", getSquare(3))



export function fact(n1){
    fact =1;
    for(var i=n1; i>0; i--){
        fact *=i
    }
    return fact
}
// var result = fact(3)
// console.log(result)