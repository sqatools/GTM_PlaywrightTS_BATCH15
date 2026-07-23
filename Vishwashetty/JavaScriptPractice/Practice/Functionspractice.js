
// // function greet() {
// //    console.log("Hello javascript");
// // }

// // greet();
// // greet();

// // function test(n1,n2) {
// //    console.log(n1-n2)
// // }

// // test(10,5);
// // // greet()
// // var x = 10;
// // var y = 20;
// // function addition(x, y) {
// //     console.log(`addition of ${x} and ${y} : ${x+y}`)
// // }


// for(var y=5; y<=20; y+=5) {
//     addition(x, y)
// }

write a arrow function to check given number is prime or not.

Here is an arrow function to check if a given number is prime or not:

const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
};

Here is an arrow function to remove duplicate numbers from a string.

const removeDuplicates = (str) => {
    const numbers = str.split(',').map(Number);
    const uniqueNumbers = [...new Set(numbers)];
    return uniqueNumbers.join(',');
};
