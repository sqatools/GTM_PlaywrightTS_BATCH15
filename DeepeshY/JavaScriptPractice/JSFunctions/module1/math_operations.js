

export function addition(num1, num2) {
    return num1+num2
}

export function getSquare(num) {
    return num**2
}

export function fact(num) {
    fact = 1
    for(var i=num; i>0; i--) {
        fact *= i
    }
    return fact
}