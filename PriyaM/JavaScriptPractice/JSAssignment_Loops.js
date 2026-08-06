// Beginner Level
// Write a JavaScript program to print numbers from 1 to 10 using a for loop.
var numbers = []
for (var i=1; i<=10; i++) {
    numbers.push(i)
}
console.log(numbers)

// Write a JavaScript program to print numbers from 10 to 1 in reverse order.
var numbers = []
for (var i=10; i>=1; i--) {
    numbers.push(i)
}
console.log(numbers)


// Write a JavaScript program to print all even numbers between 1 and 100.
var numbers =[]
for(var i =1; i<=100; i++) {
    if (i%2 === 0) {
        numbers.push(i)
    }
}
console.log(numbers)

// Write a JavaScript program to print all odd numbers between 1 and 100.
var numbers =[]
for(var i =1; i<=100; i++) {
    if (i%2 != 0) {
        numbers.push(i)
    }
}
console.log(numbers)


// Write a JavaScript program to calculate the sum of numbers from 1 to N.
var n = 20
var sum =0
for (var i = 1; i<=n; i++) {
    sum += i
}
console.log("sum of numbers from 1 to",n,"is :", sum)

// Write a JavaScript program to calculate the product of numbers from 1 to N.
var n = 5
var product = 1
for (var i = 1; i<=n; i++) {
    product *= i
}
console.log("product of numbers from 1 to",n,"is :", product)


// Write a JavaScript program to print the multiplication table of a given number.
var n = 15
var product = 1
for (var i = 1; i<=10; i++) {
    product = n*i
    console.log(n,"*",i,"=", product)
}


// Write a JavaScript program to print the multiplication tables from 1 to 10.

var product = 1
for (var i = 1; i<=10; i++) {
    for(var j=1; j<=10; j++) {
        product = i*j
        console.log(i,"*",j,"=", product)
    }
    console.log("\n")
}


// Write a JavaScript program to count the total number of digits in a given number.
var number = 12345678
n = String(number).length
console.log("the number of digits in a number is :", n)



// Write a JavaScript program to reverse a given number.
var number = 12345678245
var n = String(number).length
var num = String(number)
var rev =""
for (var i=n-1; i>=0; i--) {
    rev = rev + num[i]
}
console.log("reverse of given number is :", rev)


// Intermediate Level
// Write a JavaScript program to check whether a given number is a palindrome.
var number = 1234321
var n = String(number).length
var num = String(number)
var rev =""
for (var i=n-1; i>=0; i--) {
    rev = rev + num[i]
}
    if (num === rev) {
        console.log("Given number is a palindrome")
    } else {
        console.log("Given number is not a palindrome")
    }


// Write a JavaScript program to find the sum of digits of a given number.
var number = 123456
var n = String(number).length
var num = String(number)
var sum = 0
for (var i=0; i<n; i++) {
   sum = sum + Number(num[i])
}
console.log("Sum of digits in", number, ":", sum)


// Write a JavaScript program to find the largest digit in a number.
var number = 19823
var n = String(number).length
var num = String(number)
var largest = 0
for (var i=0; i<=n-1; i++) {
    if (largest <= Number(num[i])) {
        
        largest = Number(num[i])
    } 
}
console.log("Largest digit in given number is :", largest)

// Write a JavaScript program to find the smallest digit in a number.
var number = 9823
var n = String(number).length
var num = String(number)
var smallest = 9
for (var i=0; i<=n-1; i++) {
    if (smallest >= Number(num[i])) {
        
        smallest = Number(num[i])
    } 
}
console.log("Smallest digit in given number is :", smallest)


// Write a JavaScript program to calculate the factorial of a number.


// Write a JavaScript program to check whether a number is a prime number.


// Write a JavaScript program to print all prime numbers between 1 and N.


// Write a JavaScript program to count the total number of prime numbers between 1 and N.


// Write a JavaScript program to find the sum of all prime numbers between 1 and N.


// Write a JavaScript program to print the Fibonacci series up to N terms.





/*
Advanced Loop Programs
Write a JavaScript program to find all Armstrong numbers between 1 and N.
Write a JavaScript program to check whether a given number is an Armstrong number.
Write a JavaScript program to find the Greatest Common Divisor (GCD) of two numbers.
Write a JavaScript program to find the Least Common Multiple (LCM) of two numbers.
Write a JavaScript program to convert a decimal number to binary.
Write a JavaScript program to convert a binary number to decimal.
Write a JavaScript program to calculate the power of a number without using built-in methods.
Write a JavaScript program to print all perfect numbers between 1 and N.
Write a JavaScript program to check whether a given number is a perfect number.
Write a JavaScript program to find the sum of all even numbers between 1 and N.

Nested Loop Programs
Write a JavaScript program to print a multiplication table using nested loops.
Write a JavaScript program to print a number triangle pattern.
Write a JavaScript program to print a character triangle pattern.
Write a JavaScript program to print a checkerboard (# and *) pattern.
Write a JavaScript program to print a hollow rectangle using nested loops.
Write a JavaScript program to print an X pattern using *.
Write a JavaScript program to print a butterfly pattern.
Write a JavaScript program to print a sandglass pattern.
Write a JavaScript program to print a zigzag pattern.
Write a JavaScript program to create a simple number guessing game using loops.
*/


//Pattern programs
//Write a JavaScript program to print a right-angled triangle using *.
for (var i=1; i<=5; i++) {
    var star = ""
    for (var j=1; j<=i; j++) {
        star += "*"
    }
    console.log(star)
}

//Write a JavaScript program to print an inverted right-angled triangle.
for (var i=1; i<=5; i++) {
    var star = ""
    for (var j=5; j>=i; j--) {
        star += "*"
    }
    console.log(star)
}

//Write a JavaScript program to print a pyramid pattern using *.
for (var i=1; i<=5; i++) {
    var star = ""
    for (var j=1; j<=5-i; j++) {
        star += " "
    }
    for (var k=1; k<=i*2-1; k++) {
        star += "*"
    }
    console.log(star)
}

//Write a JavaScript program to print an inverted pyramid pattern.
for (var i=5; i>=1; i--) {
    var star = ""
    for (var j=1; j<=5-i; j++) {
        star += " "
    }
    for (var k=1; k<=2*i-1; k++) {
        star += "*"
    }
    console.log(star)
}


//Write a JavaScript program to print a square pattern using *.
for (var i=1; i<=5; i++) {
    var star = ""
    for (var j=1; j<=5; j++) {
        star += "*"
    }
    console.log(star)
}

//Write a JavaScript program to print a hollow square pattern.
for (var i=1; i<=6; i++) {
    var star = ""
    for (var j=1; j<=6; j++) {
         if (i === 1 || i === 6 || j === 1 || j === 6) {
            star += "*"   // border
        } else {
            star += " "   // interior
        }       
    }
    console.log(star)
}
//Write a JavaScript program to print a diamond pattern.
for (var i=1; i<=5; i++) {
    var star = ""
    for (var j=1; j<=5-i; j++) {
        star += " "
    }
    for (var k=1; k<=i*2-1; k++) {
        star += "*"
    }
    console.log(star)
}
for (var i=4; i>=1; i--) {
    var star = ""
    for (var j=1; j<=5-i; j++) {
        star += " "
    }
    for (var k=1; k<=i*2-1; k++) {
        star += "*"
    }
    console.log(star)
}


//Write a JavaScript program to print a hollow pyramid pattern.
for (var i=1; i<=5; i++) {
    var star = ""
    for (var j=1; j<=5-i; j++) {
      star += " " 
    }
    for (var k=1; k<=i*2-1; k++) {
         if (i === 5 ||k === 1 || k === 2*i-1) {
            star += "*"   // border
        } else {
            star += " "   // interior
        }   
    }
    
    console.log(star)
}

//Write a JavaScript program to print a hallow diamond pattern.
for (var i=1; i<=5; i++) {
    var star = ""
    for (var j=1; j<=5-i; j++) {
        star += " "
    }
    for (var k=1; k<=i*2-1; k++) {
        if(k===1 || k==i*2-1) {
             star += "*"
        } else {
            star += " "
        }
    }
    console.log(star)
}
for (var i=4; i>=1; i--) {
    var star = ""
    for (var j=1; j<=5-i; j++) {
        star += " "
    }
    for (var k=1; k<=i*2-1; k++) {
      if(k===1 || k==i*2-1) {
             star += "*"
        } else {
            star += " "
        }
    }
    console.log(star)
}

// Write a JavaScript program to print Floyd’s Triangle.
var sum = 0
for (var i=1; i<=5; i++) {
    var pattern = ""
    for (var j=1; j<=i; j++) {
        sum = sum + 1
        pattern = pattern + sum + " "
    }
    console.log(pattern)
}

// Write a JavaScript program to print Pascal’s Triangle.

for (var i=0; i<6; i++) {
    var pattern = ""
    for (var j=0; j<6-i; j++) {
        pattern += " "
    }
    var num = 1
    for (var k=0; k<=i; k++) {
        pattern += num + " "
        num = num * (i - k) / (k + 1)
    }
    console.log(pattern)
}
