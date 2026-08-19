
//String premitive data type

export function addition(number1 , number2){
    return number1+number2;
}

export function Subtract (a , b){

    return a-b;

}

export function primenumber(numbers){
    var prime = true;
    for(var i=2; i<numbers; i++){
        if(numbers%i==0)
            prime= false
            break;

    } 
    if(prime==true){
        console.log("prime no")
    }
    else
        console.log("not prime no")

}

export function factorial(digit){
    var fact= 1;
    for(var i=digit; i>0; i--)
        fact=fact*i;
    return fact
}

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Deepak")); // "kpaeeD"