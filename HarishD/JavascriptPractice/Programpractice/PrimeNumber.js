var number = 6;
var isPrime = true;

for (var i = 2; i < number; i++) {

    if (number % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("Prime number");
}
else {
    console.log("Not a prime number");
}


console.log("###########################")

var arr4 = [2, 3, 12, 17, 18, 19, 21, 23, 27, 30];

for (var num of arr4) {
    var prime = true;

    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        console.log("This is prime number:", num);
    }
    else{
        console.log("This is not prime number:", num);
    }
}