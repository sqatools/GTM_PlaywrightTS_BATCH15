
export function addition(num1,num2){
    return num1+num2
}

export function getSeq(num){
    return num**2
}

export function fact(numb){
    let result = 1;
    for(let i = 1; i <= numb; i++){
        result *= i;
    }
    return result;
}