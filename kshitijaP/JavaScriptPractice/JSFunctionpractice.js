// prime number program
var prime = (num) => {
    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }

    if (count = 2) {
        console.log(num + " is Prime");
    } else {
        console.log(num + " is Not Prime");
    }
};

prime(7);

// all even number sum 1 to 30
var evenSum = () => {
    let sum = 0;

    for (let i = 1; i <= 30; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }

    console.log(sum);
};

evenSum();

//calculator progarm
var calculator = (a, b) => {
    console.log("Addit =", a + b);
    console.log("Subtr =", a - b);
    console.log("Multi =", a * b);
    console.log("Divi =", a / b);
};
var output= calculator(0.0, 0.5)
//console.log(output);

//all value divisible by 3 and 5 form 1 to 100
var sumDivi = () => {
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            sum = sum + i;
        }
    }

    console.log(sum);
};

sumDivi();


